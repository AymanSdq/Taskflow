import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoutes from './services/ProtectedRoutes.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Statistics from './pages/Statistics.tsx'
import HomePage from './pages/HomePage.tsx'
import Profileedit from './pages/Profileedit.tsx'


export default function Page() {

  

  return (
    <>
        
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/dashboard" element={<ProtectedRoutes> <Dashboard /> </ProtectedRoutes>}>
              <Route index element={<Statistics />} />  {/* Default page when visiting /dashboard */}
              <Route path="profileedit" element={<Profileedit/>} />
            </Route>
              

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </>
  )
}
