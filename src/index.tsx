import "react-app-polyfill/ie11";
import 'core-js/stable';
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from "react-redux";
import {getCurrentSkinName, setGlobalSKin} from "./utils/skin";
import {ConnectedRouter} from 'connected-react-router'
import {history} from "./redux/router/history";


setGlobalSKin(getCurrentSkinName())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)