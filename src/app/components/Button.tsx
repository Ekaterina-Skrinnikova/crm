'use client'

import clsx from 'clsx'
import React from 'react'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
}

export default function Button({ disabled, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                'px-5 py-2.5 rounded bg-gray-900 text-base text-center text-neutral-50',
                !disabled && 'hover:bg-gray-700 active:bg-gray-800',
                disabled && 'text-neutral-100'
            )}
        ></button>
    )
}
