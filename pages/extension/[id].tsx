import { GetStaticProps, GetStaticPaths } from 'next'

import type { Extension } from 'interfaces'
import { extensionData } from 'data/extensions'

import { Card, Col, Grid, Tab, TabList, TabGroup, TabPanels, TabPanel } from "@tremor/react";

import { DetailsCard } from "components/DetailsCard";
import { ReleasesCard } from "components/ReleasesCard";
import { Overview } from "components/Overview";
import { ExtensionHeader } from 'components/ExtensionHeader';
import { ReleasesTable } from 'components/ReleasesTable';
import Layout from 'components/Layout';

type Props = {
    ext?: Extension
    errors?: string
}

const Extension = ({ ext, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="An error occurred!">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    const handleSelectedViewChange = (view: string) => {
        // Currently a no-op; kept to satisfy ReleasesCard's expected callback prop
    };
    return (
        <Layout title={`${ext ? ext.name : 'Extension details'} | FOSSBilling extensions`}>
            <ExtensionHeader ext={ext} />

            <TabGroup>
                <TabList className="mt-6">
                    <Tab>Overview</Tab>
                    <Tab>Release history</Tab>
                </TabList>

                <Grid numItemsLg={6} className="gap-6 mt-6">
                    {/* Main section */}
                    <Col numColSpanLg={4}>
                        <Card className="h-full">
                            <TabPanels>
                                <TabPanel>
                                    <Overview ext={ext} />
                                </TabPanel>
                                <TabPanel>
                                    <ReleasesTable ext={ext} />
                                </TabPanel>
                            </TabPanels>
                        </Card>
                    </Col>

                    {/* KPI sidebar */}
                    <Col numColSpanLg={2}>
                        <div className="space-y-6">
                            <DetailsCard ext={ext} />
                            <ReleasesCard ext={ext} onSelectedViewChange={handleSelectedViewChange} />
                        </div>
                    </Col>
                </Grid>
            </TabGroup>
        </Layout>
    );
}

export default Extension

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