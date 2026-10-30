import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import UserProvider from './context/UserContext';
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    < UserProvider>
      <Provider store={store}>

        <App />
      </Provider>

    </UserProvider>

  </BrowserRouter >
);