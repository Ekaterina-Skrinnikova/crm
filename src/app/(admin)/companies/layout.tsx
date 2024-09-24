import React from 'react'

export interface LayoutProps {
    children: React.ReactNode
    toolbar: React.ReactNode
    header: React.ReactNode
    modal: React.ReactNode
}
export default function Layout({
    toolbar,
    modal,
    header,
    children,
}: LayoutProps) {
    return (
        <>
            {header}
            {modal}
            <main>
                {toolbar}
                {children}
            </main>
        </>
    )
}
