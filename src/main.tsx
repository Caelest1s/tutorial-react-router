import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import App from './App.tsx'
import Expenses from './routes/Expenses/index.tsx'
import Invoice from './routes/Invoices/Invoice/index.tsx'
import Invoices from './routes/Invoices/index.tsx'
import NotFound from './routes/NotFound/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
