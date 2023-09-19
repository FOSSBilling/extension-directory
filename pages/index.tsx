import { GetStaticProps } from 'next'
import { Badge, Button, Card, Flex, Grid, Text, Title } from "@tremor/react";

import { extensionData } from 'data/extensions';
import { Extension } from 'interfaces';
import { ExtensionCard } from "components/ExtensionCard";

import Layout from "components/Layout";

export default function Index({ extensions }: { extensions: Extension[] }) {
    return (
        <Layout title="FOSSBilling extensions">
            <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
                <Title>FOSSBilling Extension Directory</Title>
                <Badge className="ml-2">beta</Badge>
            </Flex>
            <Text>Welcome to the FOSSBilling Extension Directory. Handy with React and want to contribute? <a href="https://github.com/FOSSBilling/extension-directory" target="_blank"><Button variant="light">Check out the source code on GitHub</Button></a>.</Text>

            <Grid numItemsLg={3} className="mt-6 gap-6">
                {extensions.map((ext) => (
                    <ExtensionCard ext={ext} key={ext.name} />
                ))}
                {/* Complete the grid to 18 cards */}
                {
                    [...Array(18 - extensions.length)].map((v, i) =>
                        <Card key={i}>
                            {/* Placeholder to set height */}
                            <div className="h-14" />
                        </Card>
                    )
                }
            </Grid>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const extensions: Extension[] = extensionData
    return { props: { extensions } }
}