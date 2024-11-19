import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import PagRestaurante from './page/PagRestaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<PagRestaurante />} />
  </Routes>
)

export default Rotas
