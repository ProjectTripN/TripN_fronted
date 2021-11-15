import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {Message, MessageList, Avatar,  TypingIndicator} from "@chatscope/chat-ui-kit-react";

const VoiceForm = ({ messages = []}) => {
    return(
        <div 
            style={{
                height: "800px",
                width: "500px",
                position: "static"}}>

            <MessageList>
                        {messages.map( message =>
                            <Message key={message._id} model={message}>
                                <Avatar src={require("../images/img.png").default} name="TripN" />
                                <Message.Footer sentTime="just now"/>
                            </Message>
                        )}
                        <TypingIndicator content="TripN is typing" />
            </MessageList>
        </div>
    );
}
export default VoiceForm