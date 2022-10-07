import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Purschases from './pages/Purschases'
import { productsThunk } from './store/slices/products.slice'
import 'bootswatch/dist/litera/bootstrap.min.css';

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
        <Container className='mt-2' >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail />} />

            <Route element={<ProtectedRoutes />}>
              <Route path='/purschases' element={<Purschases />} />
            </Route>
          </Routes>
        </Container>
        <footer>
          <Footer />
        </footer>
      </div>

    </HashRouter>
  )
}

export default App
