import React from 'react'
import Image from 'next/image'

export interface SidebarItemProps {
    pathname: string
    src: string
    alt: string
    children: React.ReactNode
}

export default function SidebarItem({
    pathname,
    src,
    alt,
    children,
}: SidebarItemProps) {
    return (
        <li className="flex items-center gap-3.5 text-zinc-50">
            <a className="flex items-center gap-3.5" href={pathname}>
                <Image width={18} height={18} src={src} alt={alt} />
                <span>{children}</span>
            </a>
        </li>
    )
}
