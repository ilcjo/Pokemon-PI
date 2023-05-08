import './App.css';
import { Routes, Route }  from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Details from './components/Details';
import NavBar from './components/navBar/NavBar';
//import Login from './components/Login'
import Footer from './components/navBar/Footer'

const  App = () => {
    return (
      <div className="App">
       <h1> Pokemons </h1>
       <NavBar></NavBar>
      <Routes>
        {/* <Route path='/' element={<Login/>} ></Route> */}
        <Route path= '/home' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>} ></Route>
        <Route path='/details/:id' element={<Details key={Math.random()} />}></Route>
      </Routes>
      <Footer/>
      </div>
    );
  }

export default App;
