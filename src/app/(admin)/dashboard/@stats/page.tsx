import StatCard, { StatCardType } from '@/app/components/StatCard'
import { getSummaryStats } from '@/lib/api'

export interface PageProps {}

const lableByStat = {
    promotions: 'Total promotions',
    categories: 'Total categories',
    newCompanies: 'New companies',
    activeCompanies: 'Total active companies',
}

export default async function Page({}: PageProps) {
    const data = await getSummaryStats()
    return (
        <ul className="grid grid-cols-12 gap-5">
            {(Object.keys(lableByStat) as (keyof typeof data)[]).map((key) => (
                <li key={key} className="col-span-3">
                    <StatCard
                        type={StatCardType.Gradient}
                        lable={lableByStat[key]}
                        counter={data[key]}
                    />
                </li>
            ))}
        </ul>
    )
}
