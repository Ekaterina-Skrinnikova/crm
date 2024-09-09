import Image from 'next/image'

export interface SearchInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    onSearchClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function SearchInput({
    onSearchClick,
    ...rest
}: SearchInputProps) {
    return (
        <div className="relative w-96">
            <input
                className="flex-1 p-3 w-full h-11 rounded border border-gray-300 bg-gray-50"
                {...rest}
                type="text"
            />
            <button
                className="absolute top-3 right-3"
                type="button"
                onClick={onSearchClick}
            >
                <Image
                    width={20}
                    height={20}
                    src="/icons/magnifying-glass.svg"
                    alt="icon search"
                />
            </button>
        </div>
    )
}
