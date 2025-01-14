import useFetch from "hooks/useFetch";
import DashboardWidget from "./Widget";

const GreenYes = () => <span style={{ color: 'green' }}>Yes</span>;
const RedNo = () => <span style={{ color: 'red' }}>No</span>;

const ApiHealthWidget = () => {
    const [apiHealth] = useFetch('/system/health');

    return <DashboardWidget title="API health">
        {apiHealth && <>
            <dl>
                <dt>Response</dt>
                <dd style={{ color: 'green' }}>Ok</dd>

                <dt>Attachments directory is writeable</dt>
                <dd>{apiHealth.attachmentsDirectory.writeable ? <GreenYes /> : <RedNo />}</dd>

                <dt>Logs directory is writeable</dt>
                <dd>{apiHealth.logsDirectory.writeable ? <GreenYes /> : <RedNo />}</dd>
            </dl>
        </>}
    </DashboardWidget>
}

export default ApiHealthWidget;
