import { useState, useEffect } from "react";
import { Widget } from "./Widget_X";
import { nanoid } from "nanoid";
import { TextForm } from ".";

export const WidgetContainer = ({license = "", greeting = ""}) => {

    const [messages, setMessages] = useState([]);

    useEffect( () => {
        if ( greeting && messages.length === 0 ) {
            setMessages(messages.concat({
                _id: nanoid(),
                message: greeting,
                sender: "remote",
                direction: "incoming",
            }));
        }
    },[greeting, messages]);
    
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
    
    // return <Widget onSend={handleSend}  messages={messages} />, <TextForm onSend={handleSend} messages={messages}/>
    
};