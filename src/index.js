import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTabs from './components/MainTabs';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <MainTabs />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, 
	document.getElementById('app'));
