import React from 'react'

export interface DashboardCardProps {
    children: React.ReactNode
    lable: React.ReactNode
}

export default function DashboardCard({ children, lable }: DashboardCardProps) {
    return (
        <div className="rounded bg-gray-100 w-full h-full ">
            <p className="p-5 text-xl text-gray-900 font-medium">{lable}</p>
            <div>{children}</div>
        </div>
    )
}
