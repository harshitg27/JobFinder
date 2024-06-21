import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import AuthPage from './pages/AuthPage'
import AddJobPage from './pages/AddJobPage'
import './App.css'

function App() {

  return (
    <div>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/addjob' element={<AddJobPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
