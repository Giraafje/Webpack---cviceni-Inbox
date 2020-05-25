import './index.html';
import './style.css';
import Handlebars from 'handlebars';

const message = {
  sender: 'Milan Kouhoutek',
  subject: 'Nabídka spolupráce',
  date: 'po 13. března',
  time: '8:45',
};

const messageTemplate = Handlebars.compile(
  document.querySelector('#message-item-template').innerHTML
);

const renderMessage = (message) => {
  const messageElm = document.createElement('div');
  messageElm.innerHTML = messageTemplate(message);
  return messageElm.children[0]
}

const messagesListElm = document.querySelector('.message-list');
const elm = renderMessage(message);
messagesListElm.appendChild(elm);