import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';


createServer({

  models: {
    listBoxs: Model,
  },

  seeds(server) {
    server.db.loadData({
      listBoxs: [
        {
          id: 0,
          title: 'Freelancer de website',
          color: '#333',
          tasks: [
            {
              id: 0,
              title: 'Titulo',
              collumn: '#444',
            },
            {
              id: 1,
              title: 'Chord',
              collumn: '#444',
            }
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
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);