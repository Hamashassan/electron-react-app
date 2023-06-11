import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (window && window.require) {
  const { ipcRenderer } = window.require('electron');

  ipcRenderer.on('open-add-team', () => {
    import('./AddTeam').then((module) => {
      const AddTeam = module.default;

      ReactDOM.render(
        <Provider store={store}>
          <AddTeam />
        </Provider>,
        document.getElementById('root')
      );
    });
  });

  ipcRenderer.on('open-add-participant', (event, teams) => {
    import('./AddParticipant').then((module) => {
      const AddParticipant = module.default;

      ReactDOM.render(
        <Provider store={store}>
          <AddParticipant teams={teams} />
        </Provider>,
        document.getElementById('root')
      );
    });
  });
}
