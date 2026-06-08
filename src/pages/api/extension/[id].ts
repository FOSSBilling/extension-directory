import type { APIRoute } from 'astro';
import { extensionData } from '../../../data/extensions';
import { sortReleasesDescending } from '../../../types';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const id = params.id;

  if (!id || Array.isArray(id)) {
    return new Response(
      JSON.stringify({ error: { message: 'Invalid extension id' } }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const extension = extensionData.find(
    (p) => p.id.toString().toLowerCase() === id.toString().toLowerCase(),
  );

  if (!extension) {
    return new Response(
      JSON.stringify({
        error: { message: `Cannot find extension by id: ${id}` },
      }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } else {
    const sortedReleases = sortReleasesDescending(extension.releases);
    return new Response(
      JSON.stringify({ result: { ...extension, releases: sortedReleases } }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};
