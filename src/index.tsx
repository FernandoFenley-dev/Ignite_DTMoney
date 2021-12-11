import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
  //criando um banco de dados fake para o MirageJS
  models: {
    // 'transaction' é o nome da 'tabela' do BD
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      // aqui o nome da tabela deve ser no plural
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        }
      ],
    })
  },
  
  routes() {
    // nome da rota principal que será direcinada para o MirageJS
    this.namespace = 'api';

    // criando um método get para a rota 'transactions'
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      //primeiro parâmetro do create() é o nome da tabela do Mirage
      return schema.create('transaction', data);
    });
  }
  
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
