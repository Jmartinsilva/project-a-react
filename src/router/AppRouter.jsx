import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

import { UserProvider } from "../auth/context"
import { App } from "../journal/App"







export const AppRouter = () => {
  return (
    <UserProvider>

      
      <Routes>

          {/* Login y Registro */}
          <Route path="/auth/*" element={ <AuthRoutes /> } />

          {/* App */}
          <Route path="/*" element={ <App /> } />

      </Routes>
      
    </UserProvider>
  )
}