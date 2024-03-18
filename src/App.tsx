import { Link, Outlet } from 'react-router-dom'
import './App.css'

/* Outlet é a posição onde será renderizado o elemento (sub-conteúdo) das rotas aninhadas */
function App() {

  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
