'use client'

import React from 'react'
import SidebarItem from './SidebarItem'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
    const router = useRouter()
    const pathname = usePathname()

    const handleExitClick = () => {
        router.push('/')
    }

    return (
        <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
            <div className="flex flex-col h-full pt-8 pl-6 pr-1 pb-6 overflow-y-auto bg-gray-900">
                <Image
                    className="pb-8 mb-11 mx-auto"
                    width={122}
                    height={24}
                    src={'/icons/logo.svg'}
                    alt="logo"
                />
                <ul className="flex flex-col gap-7">
                    <SidebarItem
                        current={pathname === '/dashboard'}
                        pathname="/dashboard"
                        src="/icons/squares-2x2.svg"
                        alt="icon dashboard"
                    >
                        Dashboard
                    </SidebarItem>
                    <SidebarItem
                        current={pathname === '/companies'}
                        pathname="/companies"
                        src="/icons/briefcase.svg"
                        alt="icon companies"
                    >
                        Companies
                    </SidebarItem>
                </ul>
                <button
                    className="flex items-center gap-2 mx-auto mt-auto text-zinc-50"
                    onClick={handleExitClick}
                >
                    <Image
                        width={18}
                        height={18}
                        src="/icons/arrow-left-on-rectangle.svg"
                        alt="icon exit"
                    />
                    <span>Exit</span>
                </button>
            </div>
        </aside>
    )
}
