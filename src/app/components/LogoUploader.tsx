'use client'

import React from 'react'
import Image from 'next/image'

export interface LogoUploaderProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string
}

export function LogoUploader({
    label,
    placeholder,
    id,
    ...rest
}: LogoUploaderProps) {
    return (
        <div className="flex gap-10 mb-4">
            {label && <p className="text-base color-grey-900">{label}</p>}
            <label
                htmlFor={id}
                className="flex flex-col justify-center items-center "
            >
                <Image
                    className="mb-1"
                    width={48}
                    height={48}
                    src="/icons/upload.svg"
                    alt="upload"
                />

                {placeholder && (
                    <p className="text-sm color-gray-500">{placeholder}</p>
                )}
                <input
                    className="hidden"
                    {...rest}
                    type="file"
                    accept="image/*"
                    id={id}
                />
            </label>
        </div>
    )
}
