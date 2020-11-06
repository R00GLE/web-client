import {IconX} from "../Icons";
import BtnLink from "./BtnLink";

const CancelButton = ({onClick, children}) => <BtnLink onClick={onClick} type="cancel" className="flex">
    <IconX/>
    {children || "Cancel"}
</BtnLink>

export default CancelButton
