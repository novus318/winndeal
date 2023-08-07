import React, { useState } from 'react'
import { motion } from 'framer-motion';
import MessageParser from '../bot/MessageParser.js';
import ActionProvider from '../bot/ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../bot/BotAvatar';
import { MDBIcon } from 'mdb-react-ui-kit';
function ChatBot() {
  const [bot, setbot] = useState(false)
  const botName = 'WinnDeal';
  const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customComponents: {
   header: () => <div className='bot-head'>Support <div className='float-end' onClick={()=>{setbot(false)}}><MDBIcon fas icon="times" /></div></div>,
   botAvatar: (props) => <BotAvatar {...props} />
 },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#fd0',
    },
    chatButton: {
      backgroundColor: '#333333',
    },
  },
};


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='Bot'>
     {bot&&(
       <motion.div initial={{ x: '100%' }} animate={{ x: '0' }} exit={{ x: '100%' }}>
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
       </motion.div>)}
      {bot ? (''):(<motion.div className='mt-1' whileTap={{ scale: 0.9 }} onClick={()=>{setbot(true)}}><MDBIcon className='bot-icon' size='2x' fas icon="headset" /></motion.div>)}
    </motion.div>
  )
}

export default ChatBot
