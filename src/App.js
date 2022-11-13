import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Guard from './components/Guard';

function App() {
  return (
    <div >
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />

            <Route element={<Guard />}>
              <Route path='/home' element={<Home />} />
              {
                /*   
                <Route path='/shop' element={<Shop />} />
                <Route path='/detail/:id' element={<CustomerDetail />} />   
                */
              }
            </Route>



          </Routes>
        </BrowserRouter>
      </>
    </div >
  );
}

export default App;
