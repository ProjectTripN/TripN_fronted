import {MessageList, Message, Avatar, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import MessageInput from "@chatscope/chat-ui-kit-react/dist/cjs/MessageInput";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const TextForm = ({messages = [], onSend}) => {

    const date = new Date();
    
    return(
        <form style={{
            height: "500px",
            width: "450px"}}>
            <MessageList>
                    <Message model={{
                        message: "안녕하세요.\nTripn 입니다.\n무엇을 도와드릴까요?",
                        sentTime: "just now",
                        sender: "TripN"
                        }}>
                        <Message.Footer sender="TripN" sentTime={date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()} />
                        <Avatar src={require("../images/img.png").default} name="TripN" />
                    </Message>

                {messages.map( message =>
                    <Message key={message._id} model={message}>
                        <Message.Footer sender="" sentTime={date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()} />
                        <Avatar src={require("../images/img.png").default} name="TripN" />
                        {/* <Message.Footer sender="" sentTime="just now"/> */}
                    </Message>
                )}
                <TypingIndicator content="TripN is typing" />
            </MessageList>
            <MessageInput placeholder="Type message here"
            //   attachButton={false}
            onSend={onSend}/>
        </form>
    );
}
export default TextForm