import type { APIRoute } from 'astro';
import {
  getAllExtensionsWithSortedReleases,
  getExtensionsByType,
} from '@/lib/extensions';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const typeParam = url.searchParams.get('type');

    if (typeParam) {
      const extensions = getExtensionsByType(
        typeParam as import('../../types').Extension['type'],
      );
      const filtered = extensions.map((ext) => ({
        ...ext,
        releases: ext.releases
          .slice()
          .sort((a, b) => b.tag.localeCompare(a.tag)),
      }));
      return new Response(JSON.stringify({ result: filtered }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = getAllExtensionsWithSortedReleases();

    return new Response(JSON.stringify({ result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: { message } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
