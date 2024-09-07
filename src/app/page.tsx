import StatusLable, { Status } from './components/StatusLabel'

export default function Home() {
    return (
        <main>
            <h1>Home Page</h1>
            <StatusLable status={Status.Active}>Active</StatusLable>
            <StatusLable status={Status.NotActive}>Not active</StatusLable>
            <StatusLable status={Status.Pending}>Pending</StatusLable>
            <StatusLable status={Status.Suspended}>Suspended</StatusLable>
        </main>
    )
}
