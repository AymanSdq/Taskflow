import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoutes from './services/ProtectedRoutes.tsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    {/* DEvo tool */}
    <ReactQueryDevtools initialIsOpen={false} />
    {/* Theme handlers */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* Routes */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoutes> <App /> </ProtectedRoutes>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  </QueryClientProvider>
)
