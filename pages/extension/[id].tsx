import { GetStaticProps, GetStaticPaths } from 'next'

import { Extension } from '../../interfaces'
import { extensionData } from '../../utils/data'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'

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
    <Layout
      title={`${
        item ? item.name : 'Module detail'
      } | FOSSBilling extensions`}
    >
      {item && <ListDetail item={item} />}
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