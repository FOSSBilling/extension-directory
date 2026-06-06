import { Extension, Repository, getLatestRelease, repositoryURL } from "interfaces";
import { CheckCircle, GitBranch, GitFork, GitPullRequest, Scale, User } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
    ext: Extension
}

type DetailsItem = {
    name: string;
    icon: React.ReactNode;
    color: string;
    text: string;
    link?: string;
};

function repositoryIcon(repository: Repository): React.ReactNode {
    switch (repository.type) {
      case 'github':
        return <GitBranch className="w-4 h-4" />
      case 'gitlab':
        return <GitFork className="w-4 h-4" />
      case 'custom':
        return <GitPullRequest className="w-4 h-4" />
    }
  }

const colorClasses: Record<string, string> = {
    amber: "bg-amber-100 text-amber-700",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    fuchsia: "bg-fuchsia-100 text-fuchsia-700",
};

export function DetailsCard({ ext }: Props) {
    var latest = getLatestRelease(ext);
    
    const details: DetailsItem[] = [
        {
            name: "Publisher",
            icon: <User className="w-4 h-4" />,
            color: "amber",
            text: ext.author.id,
            link: ext.website,
        },
        {
            name: "Compatible with",
            icon: <CheckCircle className="w-4 h-4" />,
            color: "green",
            text: `FOSSBilling v${latest.min_fossbilling_version} and later`,
        },
        {
            name: "License",
            icon: <Scale className="w-4 h-4" />,
            color: "blue",
            text: ext.license.name,
            link: ext.license.URL,
        },
        {
            name: "Source code",
            icon: repositoryIcon(ext.source),
            color: "fuchsia",
            text: ext.source.repo,
            link: repositoryURL(ext.source),
        },
    ];

    return (
        <Card>
            <CardContent className="pt-6">
                <CardTitle className="text-lg">Extension details</CardTitle>
                <ul className="mt-4 space-y-4">
                    {details.map((detail) => (
                        <li key={detail.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center space-x-3">
                                <span className={cn("p-2 rounded-lg", colorClasses[detail.color])}>
                                    {detail.icon}
                                </span>
                                <div>
                                    <p className="font-medium text-sm">{detail.name}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                {detail.link ? (
                                    <a href={detail.link} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="sm">{detail.text}</Button>
                                    </a>
                                ) : (
                                    <Badge variant="secondary" className={cn("text-xs", colorClasses[detail.color])}>
                                        {detail.text}
                                    </Badge>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}