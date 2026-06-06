import { GetStaticProps, GetStaticPaths } from 'next'

import type { Extension } from 'interfaces'
import { extensionData } from 'data/extensions'

import { DetailsCard } from 'components/DetailsCard';
import { ReleasesCard } from 'components/ReleasesCard';
import { Overview } from 'components/Overview';
import { ExtensionHeader } from 'components/ExtensionHeader';
import { ReleasesTable } from 'components/ReleasesTable';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Layout from 'components/Layout';

type Props = {
    ext?: Extension
    errors?: string
}

const ExtensionPage = ({ ext, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="An error occurred!">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    if (!ext) {
        return (
            <Layout title="Extension details | FOSSBilling extensions">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> Extension data is unavailable.
                </p>
            </Layout>
        )
    }

    return (
        <Layout title={`${ext.name} | FOSSBilling extensions`}>
            <ExtensionHeader ext={ext} />

            <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="release-history">Release history</TabsTrigger>
                </TabsList>

                <div className="grid gap-6 lg:grid-cols-6 mt-6">
                    {/* Main section */}
                    <div className="lg:col-span-4">
                        <Card className="h-full">
                            <CardContent className="h-full p-0">
                                <TabsContent value="overview" className="p-6">
                                    <Overview ext={ext} />
                                </TabsContent>
                                <TabsContent value="release-history" className="p-6">
                                    <ReleasesTable ext={ext} />
                                </TabsContent>
                            </CardContent>
                        </Card>
                    </div>

                    {/* KPI sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        <DetailsCard ext={ext} />
                        <ReleasesCard ext={ext} />
                    </div>
                </div>
            </Tabs>
        </Layout>
    );
}

export default ExtensionPage

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
        const ext = extensionData.find((data) => data.id === String(id))
        if (!ext) {
            return { notFound: true }
        }
        // By returning { props: ext }, the StaticPropsDetail component
        // will receive `ext` as a prop at build time
        return { props: { ext } }
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        return { props: { errors: errorMessage } }
    }
}