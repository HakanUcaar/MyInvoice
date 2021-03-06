import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./Redux/ReduxStore";
import { Route ,Switch, HashRouter,Redirect } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';


window.store = store;

ReactDOM.render(
  <Provider store={store}> 
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path = "*" component={App}/>
          <Redirect to="/" />
        </Switch>
      </HashRouter>   
    </SnackbarProvider>        
  </Provider>
  , document.getElementById('root')
);


serviceWorker.unregister();
