import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

export interface SidebarItemProps {
    current?: boolean
    pathname: string
    src: string
    alt: string
    children: React.ReactNode
}

export default function SidebarItem({
    current,
    pathname,
    src,
    alt,
    children,
}: SidebarItemProps) {
    return (
        <li className="flex items-center gap-3.5 text-zinc-50">
            <Link
                className={clsx(
                    'flex items-center h-9 w-full gap-3.5',
                    current &&
                        'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm'
                )}
                href={pathname}
            >
                <Image width={18} height={18} src={src} alt={alt} />
                <span>{children}</span>
            </Link>
        </li>
    )
}
