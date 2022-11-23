import Link from 'next/link'
import Layout from '../components/Layout'

const BlankPage = () => (
  <Layout title="Blank.">
    <h1>Testing.</h1>
    <p>Hey</p>
    <p>
      <Link href="/">
        Go home
      </Link>
    </p>
  </Layout>
)

export default BlankPage
