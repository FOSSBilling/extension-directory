import { GetStaticProps } from 'next'

import { extensionData } from 'data/extensions';
import { Extension } from 'interfaces';
import { ExtensionCard } from '@/components/ExtensionCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import Layout from '@/components/Layout';

export default function Index({ extensions }: { extensions: Extension[] }) {
    return (
        <Layout title="FOSSBilling Extensions">
            <div className="flex items-baseline justify-between mb-6">
                <h1 className="text-3xl font-bold tracking-tight">FOSSBilling Extension Directory</h1>
                <Badge variant="secondary">beta</Badge>
            </div>
            <p className="text-muted-foreground mb-6">
                Welcome to the FOSSBilling Extension Directory.
            </p>
            <p className="text-muted-foreground mb-8">
                Please note that only extensions that can be auto-installed from within FOSSBilling are included in the directory at this time. For a list of other working extensions i.e., Registration modules please{' '}
                <a href="https://fossbilling.org/docs/extensions" target="_blank" rel="noopener noreferrer">
                    <Button variant="link" size="sm">see here</Button>
                </a>
                {' '}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {extensions.map((ext) => (
                    <ExtensionCard ext={ext} key={ext.name} />
                ))}
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const extensions: Extension[] = extensionData;
    return { props: { extensions } }
}