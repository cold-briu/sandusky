import { Wallet, Hash, Activity, Award } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function Web3DataCard() {
    return (
        <Card maxWidth="2xl">
            {/* ENS and Address Single Component */}
            <div className="bg-white/10 rounded-lg px-4 py-3 flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-white font-medium">sandusky.eth</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-white font-mono">0x1234...5678</span>
                </div>
            </div>

            {/* Indicators Row */}
            <div className="flex items-center justify-center gap-3">
                <Badge icon={Activity}>
                    <span className="text-sm text-white font-medium">1,337</span>
                    <span className="text-xs text-gray-400">txns</span>
                </Badge>
                <Badge icon={Award}>
                    <span className="text-sm text-white font-medium">42</span>
                    <span className="text-xs text-gray-400">POAPs</span>
                </Badge>
            </div>
        </Card>
    )
} 