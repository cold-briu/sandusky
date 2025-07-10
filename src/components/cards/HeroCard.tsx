import { Card } from '../ui/Card'

export function HeroCard() {
    return (
        <Card maxWidth="4xl" className="mt-0">
            <div className="flex items-center gap-4 md:gap-8">
                {/* Left Side - Emoji */}
                <div className="text-6xl md:text-9xl flex-shrink-0">
                    🐱
                </div>

                {/* Right Side - Title and Caption */}
                <div className="text-left">
                    <h1 className="text-2xl md:text-6xl font-bold text-white mb-2 md:mb-4">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            sandusky.eth
                        </span>
                    </h1>
                    <p className="text-sm md:text-xl text-gray-300">
                        The coolest internet cat in the digital realm. Prowling the web with style and grace,
                        one blockchain at a time. Meow! 🐾
                    </p>
                </div>
            </div>
        </Card>
    )
} 