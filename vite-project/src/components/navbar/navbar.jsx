import { ButtonNav } from './buttons-nav'
import './navbar.css'
export const Navbar = () =>{
    return <nav>
        <h1>El Sabbath</h1>
        <ul>
            <li>
                <ButtonNav>
                    <p>Inicio</p> 
                </ButtonNav>
            </li>
            <li>
                <ButtonNav>Tatuajes</ButtonNav>
            </li>
            <li>
                <ButtonNav>Piercings</ButtonNav>
            </li>
            <li>
                <ButtonNav>Indumentaría</ButtonNav>
            </li>
            <li>
                <ButtonNav>Entradas</ButtonNav>
            </li>
            <li>
                <ButtonNav>Contacto</ButtonNav>
            </li>
        </ul>
    </nav>
}