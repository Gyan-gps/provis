import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Feed from './components/Feed';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
    </div>
  );
}

export default App;
