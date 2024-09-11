import React from 'react'

export interface LayoutProps {
    children: React.ReactNode
    stats: React.ReactNode
    sales: React.ReactNode
    categories: React.ReactNode
    countries: React.ReactNode
    promotions: React.ReactNode
}

export default function Layout({
    children,
    stats,
    sales,
    categories,
    countries,
    promotions,
}: LayoutProps) {
    return (
        <div>
            {children}
            <main>
                <div>{stats}</div>
                <div>{sales}</div>
                <div>{categories}</div>
                <div>{countries}</div>
                <div>{promotions}</div>
            </main>
        </div>
    )
}
