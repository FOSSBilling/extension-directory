import { Card, Icon, Text, Flex, Title } from "@tremor/react";

import { Extension, getLatestRelease } from "interfaces";
import Link from "next/link";

type Props = {
    ext: Extension
}

export function ExtensionCard({ ext }: Props) {
    var latest = getLatestRelease(ext);

    function extensionIcon() {
        return (
            <img src={ext.icon_url} className="w-10 h-10" />
        );
    }

    return (
        <Link href={`/extension/${ext.id}`}>
            <Card className="hover:bg-gray-100">
                <Flex justifyContent="start" alignItems="center" className="space-x-4">
                    <Icon
                        variant="light"
                        icon={extensionIcon}
                        size="md"
                        color="blue"
                    />
                    <div>
                        <Flex justifyContent="start" alignItems="baseline" flexDirection="col" className="md:flex-row md:space-x-2">
                            <Title>{ext.name}</Title>
                            <Text>{ext.org}/{ext.id} • v{latest.tag}</Text>
                        </Flex>
                        <Text>{ext.description}</Text>
                    </div>
                </Flex>
            </Card>
        </Link>
    );
}
