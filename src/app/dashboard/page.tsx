import React from 'react'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <>
            <Header>Dashboard</Header>
            <main>
                <h2>Dashboard page</h2>
                <SearchInput placeholder="Search..." />
            </main>
        </>
    )
}
