import React from 'react'
import Header from '@/app/components/Header'
import Toolbar from '@/app/components/Toolbar'
import SearchInput from '@/app/components/SearchInput'
import AddCompanyButton from '@/app/components/AddCompanyButton'

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <>
            <Header>Costco Wholesale</Header>
            <main>
                <Toolbar action={<AddCompanyButton />}>
                    <SearchInput placeholder="Search..." />
                </Toolbar>
            </main>
        </>
    )
}
