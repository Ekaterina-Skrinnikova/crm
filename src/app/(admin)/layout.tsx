export interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <p> Saidbar</p>
            <div>{children}</div>
        </>
    )
}
