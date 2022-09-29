import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purschases from './pages/Purschases'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <h1>hello world</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='/purschases' element={<Purschases/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
