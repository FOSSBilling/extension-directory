import { Card, List, ListItem, Flex, Title, Badge, Metric, Button } from "@tremor/react";

import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Extension, getLatestRelease, sortReleasesDescending } from "interfaces";

type Props = {
    ext: Extension,
    onSelectedViewChange: (view: string) => void
}

function DownloadIcon() {
    return (
        <FontAwesomeIcon icon={faDownload} className="p-0.5 fa-fw" />
    )
};

function ArrowIcon() {
    return (
        <FontAwesomeIcon icon={faArrowRight} className="p-0.5 fa-fw" />
    )
};

export function ReleasesCard({ ext, onSelectedViewChange }: Props) {
    var latest = getLatestRelease(ext);
    var latestThree = sortReleasesDescending(ext.releases).slice(0, 3);

    function setState() {
        onSelectedViewChange("release-history");
    }

    return (
        <Card>
            <Flex>
                <Title>Latest release</Title>
                <a href={latest.download_url} target="_blank"><Badge icon={DownloadIcon} className="hover:bg-blue-200 hover:cursor-pointer">v{latest.tag}</Badge></a>
            </Flex>
            <Metric className="mt-1"><time dateTime={latest.date}>{formatDistanceToNow(new Date(latest.date), { locale: enUS, addSuffix: true })}</time></Metric>

            <List className="mt-2">
                {latestThree.map((release) => (
                    <ListItem key={release.tag}>
                        <span>v{release.tag}</span>
                        <span><time dateTime={release.date}>{formatDistanceToNow(new Date(release.date), { locale: enUS, addSuffix: true })}</time></span>
                    </ListItem>
                ))}
            </List>
            <Flex className="mt-2 pt-4 border-t">
                <Button size="xs" variant="light" icon={ArrowIcon} iconPosition="right" onClick={setState}>
                    View more
                </Button>
            </Flex>
        </Card>
    );
}
