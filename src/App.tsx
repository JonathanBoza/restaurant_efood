import { BrowserRouter } from 'react-router-dom'
import { EstiloGlobal } from './stylos'
import Rotas from './router'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
        <Cart />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
