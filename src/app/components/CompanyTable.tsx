import React from 'react'

export interface CompanyTableProps {
    children?: React.ReactNode
}

const headers = [
    'Category',
    'Company',
    'Status',
    'Promotion',
    'Country',
    'Date joined',
]

export default function CompanyTable({ children }: CompanyTableProps) {
    return (
        <div className="px-10 py-8 bg-gray-100">
            <table className="table-auto w-full border-separate border-spacing-y-2">
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th
                                className="pb-5 text-sm font-light text-gray-900"
                                key={i}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    )
}
