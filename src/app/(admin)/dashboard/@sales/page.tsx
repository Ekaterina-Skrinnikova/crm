import DashboardCard from '@/app/components/DashboardCard'
import SummaryTable from '@/app/components/SummaryTable'
import SummaryTableCell from '@/app/components/SummaryTableCell'
import SummaryTableHeader from '@/app/components/SummaryTableHeader'
import { getSummarySales } from '@/lib/api'

export interface PageProps {}

export default async function Page({}: PageProps) {
    const data = await getSummarySales()

    return (
        <DashboardCard lable="Sales details">
            <SummaryTable
                headers={
                    <>
                        <SummaryTableHeader>Company</SummaryTableHeader>
                        <SummaryTableHeader align="center">
                            Sold
                        </SummaryTableHeader>
                        <SummaryTableHeader align="center">
                            Income
                        </SummaryTableHeader>
                    </>
                }
            >
                {data.map(({ companyId, companyTitle, sold, income }) => (
                    <tr key={companyId}>
                        <SummaryTableCell>{companyTitle}</SummaryTableCell>
                        <SummaryTableCell align="center">
                            {sold}
                        </SummaryTableCell>
                        <SummaryTableCell align="center">
                            {income}
                        </SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    )
}
