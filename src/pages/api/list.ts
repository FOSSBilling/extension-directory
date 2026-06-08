import type { APIRoute } from 'astro';
import { extensionData } from '../../data/extensions';
import { sortReleasesDescending } from '../../types';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    if (!Array.isArray(extensionData)) {
      throw new Error('Cannot find extension data');
    }

    const typeParam = url.searchParams.get('type');
    let filtered = extensionData;

    if (typeParam) {
      filtered = extensionData.filter((p) => p.type === typeParam);
    }

    filtered.forEach((extension) => {
      extension.releases = sortReleasesDescending(extension.releases);
    });

    return new Response(JSON.stringify({ result: filtered }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: { message: err.message } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
