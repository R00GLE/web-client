import { Textarea } from '@chakra-ui/react';
import PrimaryButton from 'components/ui/buttons/Primary';
import ExternalLink from 'components/ui/ExternalLink';
import Configuration from 'Configuration';
import { ServerIssuesUrl } from 'ServerUrls';
import Auth from 'services/auth';
import './Form.css';

const SupportForm = () => {

    const user = Auth.getLoggedInUser();

    const systemInfo = `User
----
ID: ${user.id}
Name: ${user.full_name}
Role: ${user.role}

Client
------
URL: ${document.location.protocol + "//" + document.location.host}
User agent: ${navigator.userAgent}
Version: ${process.env.REACT_APP_VERSION}
Build: ${process.env.REACT_APP_GIT_COMMIT_HASH}

Server
------
API URL: ${Configuration.getDefaultApiUrl()}
Notifications API (host:port): ${Configuration.getNotificationsServiceHostPort()}
Agent API (host:port)): ${Configuration.getAgentServiceHostPort()}

`;

    const onCopyToClipboardClick = ev => {
        ev.preventDefault();

        document.getElementById('systemInfoControl').select();
        document.execCommand('copy');

        ev.target.innerText = 'Copied!';

        const target = ev.target;

        setInterval(() => {
            target.innerText = 'Copy to clipboard';
        }, 2000);
    }

    return <div className="SupportForm">
        <h2>Support</h2>

        <p>If there is something wrong with the app you can report it <ExternalLink href={ServerIssuesUrl}>here</ExternalLink>. Include the information below in the ticket
            if possible as this could accelerate its resolution.</p>

        <Textarea id="systemInfoControl" value={systemInfo} readOnly />
        <PrimaryButton onClick={onCopyToClipboardClick}>Copy to clipboard</PrimaryButton>
    </div >
}

export default SupportForm;
