import './App.css'
import Articles from './Pages/Article/Articles'
import Homepage from './Pages/Homepage/Homepage'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Homepage />}/>
      <Route path='article' element={<Articles />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
