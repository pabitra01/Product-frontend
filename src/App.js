import logo from './logo.svg';
import './App.css';
import Card from './component/home/Card';
import Navbar from './component/navbar/Navbar';
import Router from './router/Router';
import { configureReducer } from './redux';
import { Provider } from 'react-redux';
const store = configureReducer();
function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
