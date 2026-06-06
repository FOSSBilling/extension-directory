import { Extension, getLatestRelease } from "interfaces";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
    ext: Extension
}

export function ExtensionHeader({ ext }: Props) {
    const latest = getLatestRelease(ext);

    return (
        <div className="flex items-start space-x-4">
            <Link href="/">
                <Button variant="ghost" size="icon" className={cn("h-10 w-10", "hover:bg-primary/10")}>
                    <ArrowLeft className="w-4 h-4" />
                </Button>
            </Link>
            <img src={ext.icon_url} className="w-12 h-12 rounded-lg" alt="" />
            <div className="flex-1">
                <div className="flex items-baseline flex-wrap gap-2">
                    <h1 className="text-2xl font-semibold">{ext.name}</h1>
                    <span className="text-muted-foreground">{ext.id} • v{latest?.tag ?? "unknown"}</span>
                </div>
                <p className="text-muted-foreground mt-1">{ext.description}</p>
            </div>
        </div>
    );
}