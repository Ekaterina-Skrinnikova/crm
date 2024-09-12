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
            <main className="grid grid-cols-12 gap-5 py-10 pl-10 pr-7">
                <div className="col-span-12">{stats}</div>
                {/* <div>{sales}</div>
                <div>{categories}</div>
                <div>{countries}</div>
                <div>{promotions}</div> */}
            </main>
        </div>
    )
}
