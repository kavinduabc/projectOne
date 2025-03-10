import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/homePage';
import AdminPage from './pages/admin/adminPage';


const App = () => {
  return (
    <BrowserRouter>
    <Routes path="/*">
    <Route path='/admin/*' element={<AdminPage/>}/>
    <Route path='/*' element={<HomePage/>}/>
    </Routes>  
      </BrowserRouter>
  )
}

export default App
