import type { APIRoute } from 'astro';
import { getExtensionById, getExtensionLatestRelease } from '@/lib/extensions';
import { makeBadge } from 'badge-maker';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const id = params.id;
  const typeParam = params.type;

  if (!id || Array.isArray(id)) {
    return new Response(
      JSON.stringify({ error: { message: 'Invalid extension id' } }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  if (!typeParam || Array.isArray(typeParam)) {
    return new Response(
      JSON.stringify({ error: { message: 'Invalid badge type' } }),
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

  const latest = getExtensionLatestRelease(extension);

  if (!latest) {
    return new Response(
      JSON.stringify({ error: { message: 'No releases found' } }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const types = [
    {
      name: 'version',
      label: 'Latest version',
      message: 'v' + latest.tag,
    },
    {
      name: 'min_fossbilling_version',
      label: 'Minimum FOSSBilling version',
      message: 'v' + latest.min_fossbilling_version,
    },
    {
      name: 'license',
      label: 'License',
      message: extension.license.name,
    },
  ];

  try {
    const type = types.find((t) => t.name === typeParam.toLowerCase());

    let format = {
      label: 'Unknown type',
      message: typeParam,
      color: 'red',
    };

    if (type) {
      format.label = type.label;
      format.message = type.message;
      format.color = 'blue';
    }

    const svg = makeBadge(format);

    return new Response(svg, {
      status: 200,
      headers: { 'Content-Type': 'image/svg+xml' },
    });
  } catch {
    return new Response(
      JSON.stringify({
        error: { message: 'An error occurred while generating the badge.' },
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};
