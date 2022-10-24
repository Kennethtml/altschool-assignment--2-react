
import './App.css';
import { Routes,Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <div className='app'>

    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} >
          <Route path ={'/about/mission'} element={<h2>mission</h2>}/>
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<Error/>}/>

        {/* <Route path="/Products" element={<Products />} /> */}
      </Route>
    </Routes>
    </div>
  );
}

export default App;
