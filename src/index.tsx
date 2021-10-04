import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

import { GlobalStyle } from './global';
import Routes from './routes';


createServer({

  models: {
    listBoxs: Model,
  },

  seeds(server) {
    server.db.loadData({
      listBoxs: [
        {
          id: 0,
          title: 'Backlog',
          color: '#333',
          tasks: [
            {
              id: 0,
              title: 'Documentar padrões mobile',
              collumn: '0',
            },
            {
              id: 1,
              title: 'Ajustar fluxos de compra',
              collumn: '0',
            },
            {
              id: 2,
              title: 'UX Review',
              collumn: '0',
            },
            {
              id: 3,
              title: 'Sprint planning',
              collumn: '0',
            },
          ]
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/listBox', () => {
      return this.schema.all('listBoxs')
    })

    this.post('/listBox', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('listBoxs', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);