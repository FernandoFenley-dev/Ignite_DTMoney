import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer } from 'miragejs';

createServer({
  routes() {

    // nome da rota principal que será direcinada para o MirageJS
    this.namespace = 'api';

    // criando um método get para a rota 'transactions'
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        }
      ];
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
