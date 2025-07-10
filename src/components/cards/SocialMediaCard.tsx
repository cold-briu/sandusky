import { Twitter, MessageCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function SocialMediaCard() {
    return (
        <Card>
            <div className="flex items-center justify-center gap-3">
                <Badge icon={Twitter}>
                    <span className="text-sm text-gray-300">@sandusky_eth</span>
                </Badge>
                <Badge icon={MessageCircle}>
                    <span className="text-sm text-gray-300">@sandusky_eth</span>
                </Badge>
            </div>
        </Card>
    )
} 