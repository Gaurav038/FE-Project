import React, { useEffect } from 'react'
import Chatbot from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from "./Config";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


 
function Page2() {

  const navigate = useNavigate()
 
  const data = useSelector((state) => state.input.done);

  useEffect(() => {
    if(data){
      navigate('/rslt')
    }

  },[data])

  return (
    <div>
      <header className="App-header">
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  )
}

export default Page2