import { Route, Routes } from "react-router-dom"

import Dashboard from "./layout/dashboard"
import Index from './pages/Index.tsx'
import Clients from './pages/Clients.tsx'
import Addclient from './pages/Add-client.tsx'
import Adduser from './pages/Add-user.tsx'
import Users from './pages/Users.tsx'
import Login from './pages/Login.tsx'
import NoPage from './pages/NoPage.tsx'
import Shifts from "./pages/Shifts.tsx"
import Profile from "./pages/Profile.tsx"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Index />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/add-client" element={<Addclient />} />
          <Route path="/add-user" element={<Adduser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/shifts" element={<Shifts />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}
