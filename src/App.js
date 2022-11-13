import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Guard from './components/Guard';
import AddMusic from './components/music/AddMusic';
import GetMusicList from './components/music/GetMusicList';
import GetOneSong from './components/music/GetOneSong';

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
            <Route path='/addmusic' element={<AddMusic />} />
            <Route path='/getmusiclist' element={<GetMusicList />} />
            <Route path="/getonesong/:id" element={<GetOneSong />} />
          </Routes>
        </BrowserRouter>
      </>
    </div >
  );
}

export default App;
