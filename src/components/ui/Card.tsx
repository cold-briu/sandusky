import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl'
}

const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl'
}

export function Card({ children, className = '', maxWidth = 'md' }: CardProps) {
    return (
        <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 ${maxWidthClasses[maxWidth]} mx-auto mt-6 ${className}`}>
            {children}
        </div>
    )
} 