import { Flex, Title, Text, Icon } from "@tremor/react";
import { Extension, getLatestRelease } from "interfaces";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
    ext: Extension
}

function ArrowLeftIcon() {
    return (
        <FontAwesomeIcon icon={faArrowLeft} className="p-0.5 fa-fw" />
    )
};

export function ExtensionHeader({ ext }: Props) {
    var latest = getLatestRelease(ext);

    return (
        <Flex justifyContent="start" className="space-x-4">
            <Link href="/">
                <Icon
                    icon={ArrowLeftIcon}
                    variant="light"
                    className="hover:bg-blue-200"
                />
            </Link>
            <img src={ext.icon_url} className="w-12 h-12" />
            <div>
                <Flex justifyContent="start" alignItems="baseline" flexDirection="col" className="md:flex-row md:space-x-2">
                    <Title>{ext.name}</Title>
                    <Text>{ext.org}/{ext.id} • v{latest.tag}</Text>
                </Flex>
                <Text>{ext.description}</Text>
            </div>
        </Flex>
    );
}
