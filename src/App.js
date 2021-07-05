import './App.css';
import  store  from './store/index';
import { Provider } from 'react-redux';
import Home from './screens/home';


function App() {
  return (
   <Provider store={store}>
     <Home/>
   </Provider>
  );
}

export default App;
