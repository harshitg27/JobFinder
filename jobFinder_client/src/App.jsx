import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import './App.css'
import { Provider } from 'react-redux'

function App() {

  return (
    
    <div>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/job/:id' element={<JobPage />} />
        <Route path='/addjob' element={<AddJobPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
