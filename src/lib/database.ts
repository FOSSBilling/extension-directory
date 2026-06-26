// Queries the shared D1 database (extensions_data) directly.
// If the D1 schema changes, update fossbilling/api AND this file.
import { type Extension, type Author, type Release, type Repository, sortReleasesDescending } from '@/types';

const SELECT_EXTENSIONS = `
  SELECT e.id, e.type, e.author_id,
         a.type AS author_type, a.name AS author_name, a.url AS author_url,
         e.name, e.description, e.releases, e.website, e.license,
         e.icon_url, e.readme, e.source, e.version, e.download_url
  FROM extensions e
  LEFT JOIN authors a ON e.author_id = a.id
`;

export async function getAllExtensions(db: D1Database): Promise<Extension[]> {
  const result = await db.prepare(SELECT_EXTENSIONS).all<Record<string, unknown>>();
  return (result.results ?? []).map(parseExtensionRow);
}

export async function getExtensionById(db: D1Database, id: string): Promise<Extension | null> {
  const row = await db
    .prepare(`${SELECT_EXTENSIONS} WHERE LOWER(e.id) = LOWER(?)`)
    .bind(id)
    .first<Record<string, unknown>>();
  return row ? parseExtensionRow(row) : null;
}

function parseJSON<T>(value: unknown, fallback: T): T {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }
  return value !== undefined && value !== null ? (value as T) : fallback;
}

function parseExtensionRow(row: Record<string, unknown>): Extension {
  const releases = parseJSON<Release[]>(row.releases, []);
  return {
    id: row.id as string,
    type: row.type as Extension['type'],
    name: row.name as string,
    description: row.description as string,
    author: {
      type: (row.author_type as 'organization' | 'user') ?? 'user',
      name: (row.author_name as string) ?? '',
      id: (row.author_id as Lowercase<string>) ?? ('' as Lowercase<string>),
      URL: typeof row.author_url === 'string' ? row.author_url : undefined,
    } as Author,
    releases: sortReleasesDescending(releases),
    website: row.website as string,
    license: parseJSON(row.license, { name: '' }),
    icon_url: typeof row.icon_url === 'string' ? row.icon_url : undefined,
    readme: row.readme as string,
    source: parseJSON<Repository>(row.source, { type: 'custom', repo: '' }),
    version: row.version as string,
    download_url: row.download_url as string,
  };
}
