import InputField from './components/InputField'
import { LogoUploader } from './components/LogoUploader'
import StatusLable, { Status } from './components/StatusLabel'

export default function Home() {
    return (
        <main>
            <h1>Home Page</h1>
            <StatusLable status={Status.Active}>Active</StatusLable>
            <StatusLable status={Status.NotActive}>Not active</StatusLable>
            <StatusLable status={Status.Pending}>Pending</StatusLable>
            <StatusLable status={Status.Suspended}>Suspended</StatusLable>

            <LogoUploader label="Logo" placeholder="Upload photo" id="15" />
            <LogoUploader label="Image" placeholder="Upload photo" id="17" />

            {/* <InputField label="Status" id="13" /> */}
        </main>
    )
}
