import { GetStaticProps, GetStaticPaths } from 'next'

import { Extension } from '../../interfaces'
import { extensionData } from '../../data/data'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

type Props = {
  item?: Extension
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="An error occurred!">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={`${item ? item.name : 'Module detail' } | FOSSBilling extensions`}>
      <main>
        <div className="flex bg-neutral-100 w-full flex-1 flex-col items-center justify-center px-20">
          <div className="grid grid-cols-6 gap-10 my-6">
            <div><img src={item.icon_url} alt={`Icon for the ${item.name} extension`} className="h-32" /></div>
            <div className="col-span-5">
              <h1 className="text-4xl text-zinc-900 font-bold mb-2">{item.name}</h1>
              <p className="text-zinc-800 mb-4"><Link href="/publisher/" className="font-bold hover:underline">{item.author.name}</Link> (<a href={item.author.URL} className="text-blue-600 hover:text-blue-700 hover:underline" target="_blank">fossbilling.org</a>) | {item.version} | {item.license}</p>
              <p className="text-zinc-800 mb-4">{item.description}</p>

              {/* Download button */}
              <a href={item.download_url} target="_blank" type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                <FontAwesomeIcon icon={ faDownload } className="w-5 h-5 mr-2 -ml-1" />
                Download
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on the extension data
  const paths = extensionData.map((ext) => ({
    params: { id: ext.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = extensionData.find((data) => data.id === String(id))
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}