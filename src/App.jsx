import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purschases from './pages/Purschases'
import { productsThunk } from './store/slices/products.slice'

function App() {

  const isLoading = useSelector(state => state.isLoading)
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(productsThunk())
  }, [])

  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        {isLoading && <Loader />}
        <Container className='mt-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/purschases' element={<Purschases />} />
          </Routes>
        </Container>
      </div>
    </HashRouter>
  )
}

export default App
