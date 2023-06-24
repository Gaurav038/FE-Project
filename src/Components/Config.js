import React from "react";
import { createChatBotMessage} from "react-chatbot-kit";
import "./Options.css";


const Config = {
  botName: "Bot",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system`, {
      widget: "options",
    }),
  ],
  
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => {
        const handleOptionClick = (option) => {
          // Handle the selected option here
          props.actionProvider.askName()
        };

        return (
          <div className="options-container">
            <button className="option-button" onClick={() => handleOptionClick('Option 1')}>Got it</button>
          </div>
        );
      }          
    },
    {
        widgetName: 'ageWidget',
        widgetFunc: (props) => {
          const handleAgeSelection = (age) => {
            props.actionProvider.saveAge(age);
          };
  
          return (
            <div>
              <select id="age" onChange={(e) => handleAgeSelection(e.target.value)}>
                <option value="">-- Select Age --</option>
                {Array.from({ length: 40 - 18 + 1 }, (_, index) => index + 18).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          );
        },
      },
   ],
 
};

export default Config;
