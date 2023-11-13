import { Route, Routes } from "react-router-dom"
import PersistentDrawerLeft from "../components/drawer"
import { PaginaIcial } from "../pages/pageInicial"
import { Portal } from "../sections/portal"
import { Teste_1Exercicio } from "../pages/capacidadeFisicas/testeExercicio/teste_1Exercicio"
import { Teste_2Exercicio } from "../pages/capacidadeFisicas/testeExercicio/teste_2Exercicio"

export const RoutesPages = () => {
    return (
        <Routes>
            <Route path='/' element={<PaginaIcial />} />
            <Route path='/portal' element={<Portal />} />
            <Route path='/ferramentas' element={<PersistentDrawerLeft />} />
            
          
            <Route path='/ferramentas/capacidade-fisica/avaliar%gordura' element={<Teste_1Exercicio />} /> 
            <Route path='/ferramentas/capacidade-fisica/avaliar%imc' element={<Teste_2Exercicio />} />
          
          </Routes>
    )
}