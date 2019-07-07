import React            from 'react';
import { withRouter }   from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PageContainer    from './pages';

import './App.css';

function App() {
  return (
    <div className="app">
        <MuiThemeProvider>
            <PageContainer key={'p_' + window.location.pathname} />
        </MuiThemeProvider>
    </div>
  );
}

export default withRouter(App);