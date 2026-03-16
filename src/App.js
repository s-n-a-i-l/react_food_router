// import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/main/Home';
import About from './pages/main/About';
import Contacts from './pages/main/Contacts';
import NotFound from './pages/main/NotFound';

function App() {

  const text =
  {
    title:'Welcome to the MealDB',
    description:'Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.We offer a free recipe API for anyone wanting to use it, with additional premium features if required.'
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >

          <Route index element={<Home />}/>
          <Route path='about' element={<About text={text}/>}/>
          <Route path='contacts' element={<Contacts />}/>
          <Route path='*' element={<NotFound/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
