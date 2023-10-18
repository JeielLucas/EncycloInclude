import { Route, Routes } from "react-router-dom"
import PersistentDrawerLeft from "../components/drawer"
import { PaginaIcial } from "../pages/pageInicial"

export const RoutesPages = () => {
    return (
        <Routes>
            <Route path='/' element={<PaginaIcial />} />
            <Route path='/home' element={<PersistentDrawerLeft />} />
        </Routes>
    )
}