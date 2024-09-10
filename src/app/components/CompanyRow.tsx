import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import StatusLable, { Status } from './StatusLabel'

export interface CompanyRowProps {
    id: number
    category: string
    company: string
    status: Status
    promotion: boolean
    country: string
    joinedDate: string
}

const labelByStatus = {
    [Status.Active]: 'Active',
    [Status.NotActive]: 'Not Active',
    [Status.Pending]: 'Pending',
    [Status.Suspended]: 'Suspended',
}

export default function CompanyRow({
    id,
    category,
    company,
    status,
    promotion,
    country,
    joinedDate,
}: CompanyRowProps) {
    return (
        <tr>
            <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
                {category}
            </td>
            <td>{company}</td>
            <td>
                <StatusLable status={status}>
                    {labelByStatus[status]}
                </StatusLable>
            </td>
            <td>
                <div>
                    <Image
                        width={16}
                        height={16}
                        src={`/icons/${promotion ? 'check' : 'x-mark'}.svg`}
                        alt="icon promotion "
                    />
                    <span
                        className={clsx(
                            'text-sm font-medium',
                            promotion ? 'text-green-700' : 'text-red-700'
                        )}
                    >
                        {promotion ? 'Yes' : 'No'}
                    </span>
                </div>
            </td>
            <td>{country}</td>
            <td>{new Date(joinedDate).toLocaleDateString('uk-UA')}</td>
        </tr>
    )
}
