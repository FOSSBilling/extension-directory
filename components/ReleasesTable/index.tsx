import React from 'react'
import { Extension, sortReleasesDescending } from "interfaces";

import { parseISO, format } from 'date-fns'
import { enUS } from 'date-fns/locale'

import { Download, List } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function DownloadIcon({ className }: { className?: string }) {
    return <Download className={cn("w-4 h-4", className)} />;
};

function ListIcon({ className }: { className?: string }) {
    return <List className={cn("w-4 h-4", className)} />;
};

type Props = {
    ext: Extension
}

export function ReleasesTable({ ext }: Props) {
    var releases = sortReleasesDescending(ext.releases);

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Releases</h2>
                <Badge variant="secondary">{releases.length}</Badge>
            </div>

            <Table className="mt-6">
                <TableHeader>
                    <TableRow>
                        <TableHead>Tag</TableHead>
                        <TableHead>Release date</TableHead>
                        <TableHead>Links</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {releases.map((release) => (
                        <TableRow key={release.tag}>
                            <TableCell className="font-mono">v{release.tag}</TableCell>
                            <TableCell><time dateTime={release.date}>{format(parseISO(release.date), 'd LLLL yyyy', { locale: enUS })}</time></TableCell>
                            <TableCell>
                                <div className="flex items-center space-x-2">
                                    <a href={release.download_url} target="_blank" rel="noopener noreferrer" title="Download the release">
                                        <DownloadIcon className="text-muted-foreground hover:text-foreground transition-colors" />
                                    </a>
                                    {release.changelog_url ? (
                                        <a href={release.changelog_url} target="_blank" rel="noopener noreferrer" title="View the changelog for the release">
                                            <ListIcon className="text-muted-foreground hover:text-foreground transition-colors" />
                                        </a>
                                    ) : null}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}