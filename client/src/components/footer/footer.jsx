import s from './footer.module.css'
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


export default function Footer(){
    return(<div className={s.fondo}>
        
        <div className={s.icon}>
            <a className={s.links} href='https://github.com/davidvazgon26' target="_blank" rel="noopener noreferrer"><FaGithub className={s.iconos}/></a>
            <a className={s.links} href='https://www.linkedin.com/in/davidvazgon/' target="_blank" rel="noopener noreferrer"><FaLinkedin className={s.iconos}/></a>
            <a className={s.links} href='https://twitter.com/davidvazgon'  target="_blank" rel="noopener noreferrer"><FaTwitterSquare className={s.iconos}/></a>
        </div>

        <div className={s.by}>
            <p>By DAVG</p>  
        </div>
       
    </div>)
}