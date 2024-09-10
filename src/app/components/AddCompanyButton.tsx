'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Button from './Button'

const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
    ssr: false,
})

export default function AddCompanyButton() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Add company</Button>
            {/* <CompanyFormModal
                onSubmit={console.log}
                isOpen
                onClose={() => setIsOpen(false)}
            /> */}
        </div>
    )
}
