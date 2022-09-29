import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purschases from './pages/Purschases'

function App() {

  const isLoading = useSelector( state => state.isLoading)

  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        { isLoading && <Loader/>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/purschases' element={<Purschases />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
