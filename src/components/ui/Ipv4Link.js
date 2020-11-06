import {IconId} from './Icons';
import ExternalLink from "./ExternalLink";

const Ipv4Link = (props) => {
    return <ExternalLink
        href={`https://www.infobyip.com/ip-${props.value}.html`}
        className='font-mono border-b border-transparent text-sm inline-flex items-center gap-1 hover:opacity-75'
        title={`View information about IP ${props.value}`}>
        <IconId/>
        {props.value}
    </ExternalLink>
}

export default Ipv4Link
