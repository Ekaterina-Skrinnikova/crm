import React from 'react'
import Header from '../components/Header'

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <>
            <Header>Dashboard</Header>
            <main>
                <h2>Dashboard page</h2>
            </main>
        </>
    )
}
