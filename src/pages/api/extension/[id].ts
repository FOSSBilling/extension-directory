import type { APIRoute } from 'astro';
import {
  getExtensionById,
  getExtensionWithSortedReleases,
} from '@/lib/extensions';

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

  const extension = getExtensionById(id);

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
  }

  const result = getExtensionWithSortedReleases(extension);

  return new Response(JSON.stringify({ result }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
