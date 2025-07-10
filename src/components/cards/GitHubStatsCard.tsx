import { Github, Star, GitBranch, GitCommit } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function GitHubStatsCard() {
    return (
        <Card maxWidth="2xl">
            <div className="flex items-center justify-center gap-2 md:gap-3">
                <Badge icon={Github} className="px-2 md:px-3">
                    <span className="text-xs md:text-sm text-white font-medium">sandusky</span>
                </Badge>
                <Badge icon={Star} className="px-2 md:px-3">
                    <span className="text-xs md:text-sm text-white font-medium">1337</span>
                </Badge>
                <Badge icon={GitBranch} className="px-2 md:px-3">
                    <span className="text-xs md:text-sm text-white font-medium">42</span>
                </Badge>
                <Badge icon={GitCommit} className="px-2 md:px-3">
                    <span className="text-xs md:text-sm text-white font-medium">999</span>
                </Badge>
            </div>
        </Card>
    )
} 