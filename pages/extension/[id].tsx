import { GetStaticProps, GetStaticPaths } from 'next'

import type { Extension } from 'interfaces'
import { extensionData } from 'data/extensions'

import { DetailsCard } from '@/components/DetailsCard';
import { ReleasesCard } from '@/components/ReleasesCard';
import { Overview } from '@/components/Overview';
import { ExtensionHeader } from '@/components/ExtensionHeader';
import { ReleasesTable } from '@/components/ReleasesTable';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

type Props = {
    ext?: Extension
    errors?: string
}

const ExtensionPage = ({ ext, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="An error occurred!">
                <p className="text-red-500">
                    <span className="font-medium">Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    if (!ext) {
        return (
            <Layout title="Extension details | FOSSBilling extensions">
                <p className="text-red-500">
                    <span className="font-medium">Error:</span> Extension data is unavailable.
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
                    <TabsTrigger value="release-history">Release History</TabsTrigger>
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
    const paths = extensionData.map((ext) => ({
        params: { id: ext.id.toString() },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const ext = extensionData.find((data) => data.id === String(id))
        if (!ext) {
            return { notFound: true }
        }
        return { props: { ext } }
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        return { props: { errors: errorMessage } }
    }
}