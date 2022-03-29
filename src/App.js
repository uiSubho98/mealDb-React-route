
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import FoodDetail from './components/FoodDetail/FoodDetail';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/meals' element={<Meals></Meals>}></Route>
        <Route path='/' element={<Meals></Meals>}></Route>
        <Route path='/meal/:foodId' element={<FoodDetail></FoodDetail>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
