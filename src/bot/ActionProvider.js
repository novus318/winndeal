import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleResponse = () => {
    const whatsappNumber = '+971563017029';
    const botMessage = createChatBotMessage('I am sorry, all are busy right now. Contact us on WhatsApp.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    }, 2000);
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello
            ,handleResponse
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;