import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    let response = null;

    if (message.includes('hello')) {
      response = actions.handleHello();
    } else {
      response = actions.handleResponse();
    }

    return response;
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;