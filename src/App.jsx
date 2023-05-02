import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes';
import PokedexId from './pages/PokedexId';

function App() {


  return (
    <div className='app'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokedexId />} />
        </Route>
      </Routes>



    </div>
  )
}

export default App
