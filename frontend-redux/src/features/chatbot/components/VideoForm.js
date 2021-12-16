import {Message, MessageList, Avatar,  TypingIndicator} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const VideoForm = ({ messages = []}) => {
    return(

        <MessageList>
                    {messages.map( message =>
                        <Message key={message._id} model={message}>
                            <Avatar src={require("../images/img.png").default} name="TripN" />
                            <Message.Footer sentTime="just now"/>
                        </Message>
                    )}
                    <TypingIndicator content="TripN is typing" />
        </MessageList>
    );
}
export default VideoForm