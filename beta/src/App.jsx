// src/App.jsx
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import AppRoutes from './routes/Routes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
