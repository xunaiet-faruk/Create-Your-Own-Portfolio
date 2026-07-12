import './App.css'
import Footer from './Shared/Footer'
import Navbar from './Shared/Navbar'
import AppRoutes from './Routes/Routes.jsx'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  
  // hide global Footer on portfolio pages (they render their own themed footer)
  const hideGlobalFooter = location.pathname.startsWith('/portfolio') || 
                          location.pathname === '/portfolio-builder' ||
                          location.pathname.startsWith('/Mydashboard')  // 👈 Mydashboard এর জন্য যোগ করুন
  
  const hideGlobalNavbar = location.pathname.startsWith('/portfolio') || 
                          location.pathname === '/portfolio-builder' ||
                          location.pathname.startsWith('/Mydashboard')  // 👈 Mydashboard এর জন্য যোগ করুন

  return (
    <>
       {!hideGlobalNavbar && <Navbar />}
      <AppRoutes />
      {!hideGlobalFooter && <Footer />}
    </>
  )
}

export default App