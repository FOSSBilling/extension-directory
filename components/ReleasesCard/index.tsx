import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

import { ArrowRight, Download } from "lucide-react";
import { Extension, getLatestRelease, sortReleasesDescending } from "interfaces";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
    ext?: Extension,
    onSelectedViewChange?: (view: string) => void
}

function DownloadIcon({ className }: { className?: string }) {
    return <Download className={cn("w-4 h-4", className)} />;
};

function ArrowIcon({ className }: { className?: string }) {
    return <ArrowRight className={cn("w-4 h-4", className)} />;
};

export function ReleasesCard({ ext, onSelectedViewChange }: Props) {
    if (!ext) {
        return (
            <Card>
                <CardContent className="pt-6">
                    <CardTitle className="text-lg">Latest Release</CardTitle>
                </CardContent>
            </Card>
        );
    }

    const latest = getLatestRelease(ext);
    const latestThree = sortReleasesDescending(ext.releases).slice(0, 3);

    function setState() {
        onSelectedViewChange?.("release-history");
    }

    if (!latest) {
        return (
            <Card>
                <CardContent className="pt-6">
                    <CardTitle className="text-lg">Latest Release</CardTitle>
                    <p className="text-muted-foreground mt-2">No releases available</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Latest Release</CardTitle>
                    <a href={latest.download_url} target="_blank" rel="noopener noreferrer">
                        <Badge className="hover:bg-primary/80 cursor-pointer gap-1" variant="default">
                            <DownloadIcon /> v{latest.tag}
                        </Badge>
                    </a>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                    <time dateTime={latest.date}>{formatDistanceToNow(new Date(latest.date), { locale: enUS, addSuffix: true })}</time>
                </p>

                <ul className="mt-4 space-y-2 border-t pt-4">
                    {latestThree.map((release) => (
                        <li key={release.tag} className="flex justify-between text-sm">
                            <span>v{release.tag}</span>
                            <span className="text-muted-foreground">
                                <time dateTime={release.date}>{formatDistanceToNow(new Date(release.date), { locale: enUS, addSuffix: true })}</time>
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" onClick={setState}>
                        View More <ArrowIcon />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}