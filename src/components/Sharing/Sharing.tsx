import { WhatsappIcon, WhatsappShareButton } from "react-share"

export const Sharing:React.FC<{}>=()=>{
    return<>
    <WhatsappShareButton
     url="https://www.npmjs.com/package/react-share"
     about="something"
    >
        <WhatsappIcon size={32} round={true}/>
    </WhatsappShareButton>
        </>
}