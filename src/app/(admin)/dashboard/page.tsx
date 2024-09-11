import React from 'react'
import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'
import Toolbar from '../../components/Toolbar'
import AddCompanyButton from '../../components/AddCompanyButton'
import MagicButton from '@/app/components/MagicButton'

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <>
            <Header>Dashboard</Header>
            <main>
                <Toolbar action={<AddCompanyButton />}>
                    <SearchInput placeholder="Search..." />
                </Toolbar>
                <MagicButton />
            </main>
        </>
    )
}
