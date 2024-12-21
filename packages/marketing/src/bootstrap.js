import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to staarat up the app
const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

// If we are in dev and in isolaation, call mount inmediaaately
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if(devRoot) {
    mount(devRoot);
  }
}


// Export function when running through container
export { mount }