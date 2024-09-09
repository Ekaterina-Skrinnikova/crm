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
                    <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full sm:max-w-2xl">
                        {children}
                    </div>
                </TransitionChild>
            </Transition>
        </>
    )
}
