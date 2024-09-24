import Image from 'next/image'
import clsx from 'clsx'
import DashboardCard from '@/app/components/DashboardCard'
import { getSummaryCountries } from '@/lib/api'

export interface PageProps {}

export default async function Page({}: PageProps) {
    const data = await getSummaryCountries()

    return (
        <DashboardCard lable="Countries of companies">
            <div className="flex items-end pb-5 px-5 gap-2">
                <ul>
                    {data.map(({ countryId, countryTitle, count }) => (
                        <li
                            key={countryId}
                            className={clsx(
                                'text-sm text-gray-900 font-medium',
                                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200'
                            )}
                        >{`${countryTitle} - ${count}`}</li>
                    ))}
                </ul>
                <Image
                    width={395}
                    height={260}
                    src="/images/world.svg"
                    alt="map of world"
                />
            </div>
        </DashboardCard>
    )
}
