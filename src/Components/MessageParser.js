class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercaseMessage = message.toLowerCase();
  
       if (lowercaseMessage) {
        this.actionProvider.saveName(lowercaseMessage);
      }
      else {
        this.actionProvider.defaultResponse();
      }
    }
  }
  
  export default MessageParser;
  