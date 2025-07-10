import { Calendar, FileText, Archive } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function LinksMenuCard() {
    return (
        <Card>
            <div className="flex items-center justify-center gap-3">
                <Badge icon={Calendar} href="#">
                    <span className="text-sm text-gray-300">Upcoming Events</span>
                </Badge>
                <Badge icon={FileText} href="#">
                    <span className="text-sm text-gray-300">Content Archive</span>
                </Badge>
                <Badge icon={Archive} href="#">
                    <span className="text-sm text-gray-300">Events Archive</span>
                </Badge>
            </div>
        </Card>
    )
} 