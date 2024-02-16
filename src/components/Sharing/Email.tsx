import { EmailIcon, EmailShareButton } from "react-share"

export const Email:React.FC<{}>=()=>{
    return<>
    <EmailShareButton
    url="https://www.npmjs.com/package/react-share"
    about="something"
    >
        <EmailIcon size={32} round={true}/>
    </EmailShareButton>
    </>
}