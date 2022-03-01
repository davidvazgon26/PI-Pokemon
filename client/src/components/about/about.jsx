import NavBar from '../navbar/navBar.jsx'
import Footer from '../footer/footer.jsx'

import s from './about.module.css'

export default function About(){
    return(<div className={s.externo}>
            <NavBar/>
            <h2 className={s.titulo}>Sobre el Proyecto</h2>
            <br/>
            <section>
            <p className={s.parrafo}>
                Proyecto individual para la certificación como desarrollador Web Full Stack en <a href="https://www.soyhenry.com/" target="_blank" rel="noopener noreferrer">Henry</a> de David Vazquez.

                Se utilizaron la<a href="https://pokeapi.co/"  target="_blank" rel="noopener noreferrer"> API de Pokemon</a>, <a href="https://www.postgresql.org/"  target="_blank" rel="noopener noreferrer">PostgreSQL</a> y <a href="https://sequelize.org/"  target="_blank" rel="noopener noreferrer">Sequelize</a> para la base de datos, así como <a href="https://expressjs.com/es/"  target="_blank" rel="noopener noreferrer">Express</a>, <a href="https://developer.mozilla.org/es/docs/Web/JavaScript"  target="_blank" rel="noopener noreferrer">Javascript</a> y <a href="https://nodejs.org/es/"  target="_blank" rel="noopener noreferrer">Node</a> para el backend. 
                <br/><br/>
                En el Frontend se utilizaron <a href="https://es.reactjs.org/"  target="_blank" rel="noopener noreferrer">React</a> para la creación de componentes, <a href="https://reactrouter.com/"  target="_blank" rel="noopener noreferrer">React Router</a> para la creación y administración de rutas, <a href="https://redux.js.org/"  target="_blank" rel="noopener noreferrer">Redux</a> para manejar estados dentro de la aplicación  y <a href="https://developer.mozilla.org/es/docs/Web/JavaScript"  target="_blank" rel="noopener noreferrer">Javascript</a> como lenguaje de desarrollo entre otras tecnologías como <a href="https://developer.mozilla.org/es/docs/Web/HTML"  target="_blank" rel="noopener noreferrer">HTML</a> para el maquetado, <a href="https://developer.mozilla.org/es/docs/Web/CSS"  target="_blank" rel="noopener noreferrer">CSS</a> para los estilos y <a href="https://webpack.js.org/"  target="_blank" rel="noopener noreferrer">Webpack</a> para la administración de los modulos y poder entre otras tareas utilizar su configuración para el manejo de estilos locales por medio de  la adición de <a href="https://es.wikipedia.org/wiki/Funci%C3%B3n_hash"  target="_blank" rel="noopener noreferrer">Hash</a> a los módulos de CSS para obtener los archivos finales como el <a href="https://webpack.js.org/concepts/#root"  target="_blank" rel="noopener noreferrer">Bundler</a> el cual sirve entre otros archivos para hacer el Deploy de la aplicación a producción por nombrar alguno.
                <br/><br/>
            </p>
            </section>
            <br/>
            <section>
            <p className={s.parrafo}>
               
                También se utilizaron algunas otras herramientas para la organización del proyecto como<a href="https://miro.com/app/board/uXjVON6ng6Q=/" target="_blank" rel="noopener noreferrer">Miro</a> para los mapas mentales y de seguimiento a tareas pendientes, integración de imágenes, contenido y documentación así como <a href="https://www.figma.com/file/g6Qi0UX7nmYFgWgrESuAap/App-Pokemon?node-id=0%3A1" target="_blank" rel="noopener noreferrer">Figma</a> para algunos maquetados y definición de colores a utilizar.
            </p>
            </section>
            <br/>
            <section>
            <p className={s.parrafo}>
               
                Se pretende liberar o hacer el Deploy de la aplicación en la plataforma de Heroku, pero esa tarea por el momento está pendiente.
            </p>
            </section>
        <Footer />
        </div>
    )
}