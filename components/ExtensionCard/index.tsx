import { Extension, getLatestRelease } from "interfaces";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
            <Card className={cn("hover:bg-muted/50 transition-colors", "h-full")}>
                <CardContent className="flex items-start space-x-4 p-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        {extensionIcon()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-baseline space-x-2">
                            <h3 className="text-xl font-semibold leading-none tracking-tight">{ext.name}</h3>
                            <span className="text-sm text-muted-foreground">{ext.id} • v{latest.tag}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 truncate">{ext.description}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}