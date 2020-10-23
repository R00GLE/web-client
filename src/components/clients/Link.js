
export const ClientLink = ({clientId, children}) => {
    return <a href={`/clients/${clientId}`}>{children}</a>
}
