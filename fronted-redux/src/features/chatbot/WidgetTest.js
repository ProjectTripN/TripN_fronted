import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, ConversationHeader, MessageInput, MessageList, Message, TypingIndicator, Avatar, VoiceCallButton, VideoCallButton, InfoButton, SendButton } 
from "@chatscope/chat-ui-kit-react";
import { useState, useEffect } from "react";
// import styled from 'styled-components'
// import { TextForm } from ".";
import { nanoid } from "nanoid";
// import MessageFooter from "@chatscope/chat-ui-kit-react/dist/cjs/Message";


export function  WidgetTest ({license = "", greeting = "", remoteName = ""}) {
    const date = new Date();
    const voice = () => {
        document.getElementById('text').style.display='none'
        document.getElementById('voice').style.display='inline'
        document.getElementById('video').style.display='none'
    }

    const video = () => {
        document.getElementById('text').style.display='none'
        document.getElementById('voice').style.display='none'
        document.getElementById('video').style.display='inline'
    }

    const [messages, setMessages] = useState([]);
    const [ step, setStep ] = useState(1);

    // useEffect( () => {
    //     if ( greeting && messages.length === 0 ) {
    //         setMessages(messages.concat({
    //             _id: nanoid(),
    //             message: greeting,
    //             sender: "remote",
    //             direction: "incoming",
    //         }));
    //     }
    // },[greeting, messages]);
    
    const handleSend = (message) => {
        const newMessages = [
            {
                _id: nanoid(),
                message,
                sentTime: Date(),
                sender: "me",
                direction: "outgoing",
            },
            {
                _id: nanoid(),
                message: ` "${message}" 라고 하신거 맞나요?`,
                sentTime: Date(),
                sender: "remote",
                direction: "incoming",
            }
        ];
        setMessages(messages.concat(newMessages));
    };

    useEffect(()=>{

    },[])

    return (
        <div style={{height: "800px", width: "500px", position: "initial"}}>
            <MainContainer>
                <ChatContainer>
                    <ConversationHeader>
                    {/* <ConversationHeader.Back /> */}
                    <Avatar src={require("./images/img.png").default} name="TripN" />
                    <ConversationHeader.Content userName="TripN" info="Active 1 mins ago" />                                   
                    <ConversationHeader.Actions>                                                                             
                        <SendButton title="Back to Text"/>
                        <VoiceCallButton title="Start voice call" onClick={async()=>await voice()}/>
                        <VideoCallButton title="Start video call" onClick={async() => await video()}/>
                        <InfoButton title="Show info" onClick={e => window.location.href ="/users/q&a"}/>
                    </ConversationHeader.Actions>
                    </ConversationHeader>
                    <MessageList id= 'text' style={{display:""}}>
                            <Message model={{
                                message: "안녕하세요.\nTripn 입니다.\n무엇을 도와드릴까요?",
                                sentTime: "just now",
                                sender: "TripN"
                                }}>
                                <Message.Footer sender="TripN" sentTime={date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()} />
                                <Avatar src={require("./images/img.png").default} name="TripN" />
                            </Message>

                            {messages.map( message =>
                                <Message key={message._id} model={message}>
                                    <Message.Footer sender="" sentTime="just now" />
                                    <Avatar src={require("./images/img.png").default} name="TripN" />
                                
                                </Message>
                            )}
                            <TypingIndicator content="TripN is typing" />
                        </MessageList>
                        {/* <img style={{display:"", width:"30px", height:"30px", borderRadius:"50%, 10px", borderWidth:"1px", borderColor:"#ffcc00", }} id= 'voice' src ={require('./images/60811.png').default} alr="button"/>
                        <img style={{display:"", minWidth:"85%", minHeight:"85%", }} id= 'video' src={require('./images/vid.gif').default}/>     */}
                    <MessageInput placeholder="Type message here"
                                onSend={handleSend}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
};
export default WidgetTest 

// const Icon = styled.img`
//     width : 30px;
//     height : 30px;
//     border-radius:50%;
//     border-width : 1px;
//     border-color : #ffcc00;
//     border-radius:10px;
// `

// const Img = styled.img`
//     // position:fixed;
//     // right:0;
//     bottom:0;
//     min-width:85%;
//     min-height:85%;
//     // height : 450px;
//     // width : 380px;
//     margin-left: 5px;
// `