import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/Kanban" component={App} />
        </BrowserRouter>
    )
}

export default Routes;