import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, ConversationHeader, MessageInput, MessageList, Message, TypingIndicator, Avatar, VoiceCallButton, VideoCallButton, InfoButton, SendButton } 
from "@chatscope/chat-ui-kit-react";
import { useState, useEffect } from "react";
import styled from 'styled-components'
import { nanoid } from "nanoid";
// import MessageFooter from "@chatscope/chat-ui-kit-react/dist/cjs/Message";


export function Widget ({license = "", greeting = "", remoteName = ""}) {
    const date = new Date();
    const text = () => {
        document.getElementById('뭐시기').style.display='none'
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

    const type = () => {
        if(step == 1) {
            return(
            <>
                <MessageList>
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
            </>
            )
        }
        if (step == 2) {
            return(
                <>
                    <Icon src ={require('./images/60811.png').default} alr="button"/>
                </>
            )
        }if (step == 3) {
            return(
                <>
                    <Img src={require('./images/vid.gif').default}/>
                </>
            )
        }else {
            setStep(1)
        }
    }

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
                        <SendButton title="Back to Text" onClick={async() => await setStep(step == 1 ? 1 : null)}/>
                        <VoiceCallButton title="Start voice call" onClick={async() => await setStep(step == "2")}/>
                        <VideoCallButton title="Start video call" onClick={async() => await setStep(step == "3")}/>
                        <InfoButton title="Show info" onClick={e => window.location.href ="/users/q&a"}/>
                    </ConversationHeader.Actions>
                    </ConversationHeader>
                    {/* <TextForm/> */}
                    <div style={{height: "500px", width: "450px", position: "initial"}}>
                        {true ? <MessageList>
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
                </MessageList> : (step == 2 ? <Icon src ={require('./images/60811.png').default} alr="button"/> : <Img src={require('./iamges/vid.gif').default}/>)}
                    </div>
                    {/* <MessageList>
                            <Message model={{
                                message: "안녕하세요.\nTripn 입니다.\n무엇을 도와드릴까요?",
                                sentTime: "just now",
                                sender: "TripN"
                                }}>
                                <Message.Footer sender="TripN" sentTime={date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()} />
                                <Avatar src={require("./iamges/img.png").default} name="TripN" />
                            </Message>

                        {messages.map( message =>
                            <Message key={message._id} model={message}>
                                <Message.Footer sender="" sentTime="just now" />
                                <Avatar src={require("./iamges/img.png").default} name="TripN" />
                            
                            </Message>
                        )}
                        <TypingIndicator content="TripN is typing" />
                    </MessageList> */}
                    <MessageInput placeholder="Type message here"
                                onSend={handleSend}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
};
export default Widget 

const Icon = styled.img`
    width : 30px;
    height : 30px;
    border-radius:50%;
    border-width : 1px;
    border-color : #ffcc00;
    border-radius:10px;
`

const Img = styled.img`
    // position:fixed;
    // right:0;
    bottom:0;
    min-width:85%;
    min-height:85%;
    // height : 450px;
    // width : 380px;
    margin-left: 5px;
`