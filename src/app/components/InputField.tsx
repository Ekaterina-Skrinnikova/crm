'use client'

import React from 'react'
import { Field } from 'formik'

export interface InputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
    return (
        <div className="flex flex-col">
            {label && (
                <label className="mb-2 text-base color-gray-900" htmlFor={id}>
                    {label}
                </label>
            )}
            <Field
                className="p-3 h-11 test-sm rounded border border-gray-300 shadow-current"
                {...rest}
                id={id}
            />
        </div>
    )
}
