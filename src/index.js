import  reactDOM from "react-dom";
import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

const x = () => {
    return (
      <div>
        A
      </div>
    )
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={App} exact/>
        <Route path={'/codigo'} component={x} exact/>
      </Switch>
    </BrowserRouter>
  )
}

reactDOM.render(<AppRouter />, document.getElementById('root'));