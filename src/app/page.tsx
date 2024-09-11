import AddCompanyButton from './components/AddCompanyButton'
import MagicButton from './components/MagicButton'
import StatCard, { StatCardProps } from './components/StatCard/index'

export default function Home() {
    return (
        <main>
            <h1>Home Page</h1>
            <AddCompanyButton />
            <MagicButton />
        </main>
    )
}
