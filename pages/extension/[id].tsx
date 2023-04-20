import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from "react";

import { Extension } from 'interfaces'
import { extensionData } from 'data/extensions'

import { Card, Col, Grid, Tab, TabList } from "@tremor/react";

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

const extension = ({ ext, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="An error occurred!">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    const [selectedView, setSelectedView] = useState("overview");
    return (
        <Layout title={`${ext ? ext.name : 'Extension details'} | FOSSBilling extensions`}>
            <ExtensionHeader ext={ext} />

            <TabList value={selectedView} defaultValue="overview" onValueChange={(value) => setSelectedView(value)} className="mt-6">
                <Tab value="overview" text="Overview" />
                <Tab value="release-history" text="Release history" />
            </TabList>

            <Grid numColsLg={6} className="gap-6 mt-6">
                {/* Main section */}
                <Col numColSpanLg={4}>
                    <Card className="h-full">
                        {selectedView === "overview" ? (
                            <Overview ext={ext} />
                        ) : (
                            <ReleasesTable ext={ext} />
                        )}
                    </Card>
                </Col>

                {/* KPI sidebar */}
                <Col numColSpanLg={2}>
                    <div className="space-y-6">
                        <DetailsCard ext={ext} />
                        <ReleasesCard ext={ext} state={setSelectedView} />
                    </div>
                </Col>
            </Grid>
        </Layout>
    );
}

export default extension

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
        // By returning { props: ext }, the StaticPropsDetail component
        // will receive `ext` as a prop at build time
        return { props: { ext } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}