{/* WIP Open Graph images */}
import { ImageResponse } from '@vercel/og'
import { extensionData } from 'data/extensions'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  const extension = extensionData.find((extension) => extension.id.toLowerCase() === id.toLowerCase());

  if (!extension) {
    return new ImageResponse(<>{id}</>, {
      width: 1200,
      height: 630,
    })
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
        }}
        tw="bg-gray-50 h-screen w-screen"
      >
        <div tw="bg-gray-50 flex mx-10">
          <div tw="flex flex-col md:flex-row w-full py-12 md:items-center justify-between p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
              <span>{extension.org}/{extension.name}</span>
              <span tw="text-indigo-600">{extension.description}</span>
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1024,
      height: 512,
    }
  )
}