import {plusSlides}from './WikipediaAPI';
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }


    handleDefault = (name) => {
        const message = this.createChatBotMessage("How can I help?"+name, {
          withAvatar: true,
        });
        plusSlides(5);
        this.addMessageToBotState(message)
      };
      //
      addMessageToBotState = (messages) => {
        if (Array.isArray(messages)) {
          this.setState((state) => ({
            ...state,
            messages: [...state.messages, ...messages],
          }));
        } else {
          this.setState((state) => ({
            ...state,
            messages: [...state.messages, messages],
          }));
        }
      };
  }
  
  export default ActionProvider;