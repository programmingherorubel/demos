import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import store from '../src/Redux/store'
import Cart from './Page/Cart';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/cart' element={<Cart></Cart>}></Route>
              </Routes>
            </BrowserRouter>  
        </Provider>
    </div>
  );
}

export default App;
