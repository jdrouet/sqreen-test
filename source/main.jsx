import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import 'flexboxgrid'; // eslint-disable-line import/extensions

import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import Root from './container/root';
import './main.css';

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  paletter: {
    accent1Color: deepOrange500,
  },
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Root />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('content'),
);
