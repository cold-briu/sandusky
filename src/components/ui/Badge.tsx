import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface BadgeProps {
    icon?: LucideIcon
    children: ReactNode
    className?: string
    href?: string
    onClick?: () => void
}

export function Badge({ icon: Icon, children, className = '', href, onClick }: BadgeProps) {
    const baseClasses = 'bg-white/10 rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-white/20 transition-colors'
    const classes = `${baseClasses} ${className}`

    if (href) {
        return (
            <a href={href} className={classes}>
                {Icon && <Icon className="w-4 h-4 text-purple-400" />}
                {children}
            </a>
        )
    }

    if (onClick) {
        return (
            <button onClick={onClick} className={classes}>
                {Icon && <Icon className="w-4 h-4 text-purple-400" />}
                {children}
            </button>
        )
    }

    return (
        <div className={classes}>
            {Icon && <Icon className="w-4 h-4 text-purple-400" />}
            {children}
        </div>
    )
} 