'use client'

import { Transition, TransitionChild } from '@headlessui/react'
import React from 'react'

export interface ModalProps {
    isOpen: boolean
    children?: React.ReactNode
    onClose: () => void
}

export default function Modal({ isOpen, children, onClose }: ModalProps) {
    return (
        <>
            <Transition show={isOpen}>
                <TransitionChild>
                    <div
                        className="fixed inset-0 bg-black/30 transition duration-300 data-[closed]:opacity-0"
                        onClick={onClose}
                    />
                </TransitionChild>

                <TransitionChild>
                    <div className="fixed inset-y-0 left-0 w-64 bg-white transition duration-300 data-[closed]:-translate-x-full">
                        {children}
                    </div>
                </TransitionChild>
            </Transition>
        </>
    )
}
