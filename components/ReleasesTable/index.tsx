import React from 'react'
import { Extension, sortReleasesDescending } from "interfaces";

import { parseISO, format } from 'date-fns'
import { enUS } from 'date-fns/locale'

import { Title, Flex, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Icon, } from "@tremor/react";
import { faDownload, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DownloadIcon() {
    return (
        <FontAwesomeIcon icon={faDownload} className="p-0.5 fa-fw" />
    )
};

function ListIcon() {
    return (
        <FontAwesomeIcon icon={faList} className="p-0.5 fa-fw" />
    )
};

type Props = {
    ext: Extension
}

export function ReleasesTable({ ext }: Props) {
    var releases = sortReleasesDescending(ext.releases);

    return (
        <div>
            <Flex justifyContent="start" className="space-x-2">
                <Title>Releases</Title>
                <Badge color="gray">{releases.length}</Badge>
            </Flex>

            <Table className="mt-6">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Tag</TableHeaderCell>
                        <TableHeaderCell>Release date</TableHeaderCell>
                        <TableHeaderCell>Links</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {releases.map((release) => (
                        <TableRow key={release.tag}>
                            <TableCell>v{release.tag}</TableCell>
                            <TableCell><time dateTime={release.date}>{format(parseISO(release.date), 'd LLLL yyyy', { locale: enUS })}</time></TableCell>
                            <TableCell>
                                <a href={release.download_url} target="_blank">
                                    <Icon
                                        icon={DownloadIcon}
                                        variant="solid"
                                        tooltip="Download the release"
                                        className="mr-2"
                                    />
                                </a>
                                {release.changelog_url ? (
                                    <a href={release.changelog_url} target="_blank">
                                        <Icon
                                            icon={ListIcon}
                                            variant="shadow"
                                            tooltip="View the changelog for the release"
                                        />
                                    </a>
                                ) : null}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
