import React from 'react'
import Image from 'next/image'

export interface HeaderProps {
    children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
    return (
        <header className="flex items-center gap-5 px-10 py-6 border-b border-gray-3">
            <h1 className="flex-1 text-3xl font-semibold">{children}</h1>
            <div className="w-px self-stretch bg-gray-300" />
            <div className="flex gap-3">
                <div>
                    <Image
                        width={44}
                        height={44}
                        src="/images/image.png"
                        alt="avatar"
                    />
                </div>
                <div>
                    <p className="text-base font-semibold color-gray-900">
                        Adam Smith
                    </p>
                    <p className="text-base color-gray-900">
                        adamsmith@gmail.com
                    </p>
                </div>
            </div>
        </header>
    )
}
