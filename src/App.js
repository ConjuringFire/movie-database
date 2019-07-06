import React            from 'react';
import { withRouter }   from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page_Container   from './pages';

import './App.css';

function App() {
  return (
    <div className="app">
        <MuiThemeProvider>
            <Page_Container key={'p_' + window.location.pathname} />
        </MuiThemeProvider>
    </div>
  );
}

export default withRouter(App);