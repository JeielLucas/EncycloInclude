import { Route, Routes } from "react-router-dom"
import PersistentDrawerLeft from "../components/drawer"
import { PaginaIcial } from "../pages/pageInicial"
import { Portal } from "../sections/portal"


export const RoutesPages = () => {
    return (
        <Routes>
            <Route path='/' element={<PaginaIcial />} />
            <Route path='/portal' element={<Portal />} />
            <Route path='/home' element={<PersistentDrawerLeft />} />
        </Routes>
    )
}