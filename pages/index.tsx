import { GetStaticProps } from 'next'
import { Extension } from '../interfaces'
import { extensionData } from '../data/data'
import ExtensionCard from '../components/ExtensionCard'

import Layout from '../components/Layout'
import Logo from '../components/Logo'

type Props = {
  items: Extension[]
}

const IndexPage = ({ items }: Props) => (
  <Layout>
    <main className="flex w-full min-h-screen flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-5xl text-white font-bold">
        <a className="text-blue-600" href="https://fossbilling.org">
          <Logo height={64} width={300} className="inline" />
        </a>
        {" "} Extensions
      </h1>

      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        {items.map((item) => (
          <ExtensionCard data={item} key={item.id} />
        ))}
      </div>
    </main>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Extension[] = extensionData
  return { props: { items } }
}

export default IndexPage
