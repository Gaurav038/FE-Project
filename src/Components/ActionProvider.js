import store from '../store';
import {createClientMessage  } from "react-chatbot-kit";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;

    }
    
    askName() {

      const message1 = createClientMessage('Got it');
      this.setChatbotMessage(message1);

      const message = this.createChatBotMessage('Enter your Name');
      this.setChatbotMessage(message);
    }
  
    saveName(name) {
      store.dispatch({
        type: 'addName',
        payload: name});

      this.askAge(); // Ask for age

    }

    askAge() {
      this.createChatBotMessage('Enter your Age')
      const message = this.createChatBotMessage("Enter your Age", {
        widget: 'ageWidget',
      });
      this.setChatbotMessage(message);
    }
  
    saveAge(age) {

      const message1 = createClientMessage(age);
      this.setChatbotMessage(message1);
      
      store.dispatch({
        type: 'addAge',
        payload: age});

      const finalMessage = this.createChatBotMessage(`Thank you. In 5 seconds, the bot will exit`);
      this.setChatbotMessage(finalMessage);
      this.countdown(5);
    }
  
    countdown(value) {
      
      
      if (value === 0) {
          const page3Message = this.createChatBotMessage('Redirecting to Page 3...');
          this.setChatbotMessage(page3Message);
          store.dispatch({
            type: 'addStatus',
            payload: true
          });

      } else {
        const countdownMessage = this.createChatBotMessage(value.toString());
        if (this.countdownMessageId) {
          // Update the existing countdown message
          this.updateChatbotMessage(this.countdownMessageId, countdownMessage);
        } else {
          // Create a new countdown message
          this.countdownMessageId = this.setChatbotMessage(countdownMessage);
        }  
        setTimeout(() => {
          this.countdown(value - 1);
        }, 1000);
      }
    }
    defaultResponse() {
      const message = this.createChatBotMessage("I'm sorry, I didn't understand that.");
      this.setChatbotMessage(message);
    }
  
    setChatbotMessage(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  