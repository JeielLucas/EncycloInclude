import { Route, Routes } from "react-router-dom"
import PersistentDrawerLeft from "../components/drawer"

export const RoutesPages = () => {
    return (
        <Routes>
            <Route path='/' element={<PersistentDrawerLeft />} />
            <Route path='/home' element={<p>ds</p>} />
        </Routes>
    )
}