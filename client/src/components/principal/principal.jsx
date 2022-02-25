import Pokemons from '../pokemons/pokemons.jsx'
import SearchBar from '../searchbar/searchbar.jsx'
import OrderABC from '../order/orderABC.jsx'
import OrderForce from '../order/orderForce.jsx'
import NavBar from '../navbar/navBar.jsx'
import Filtrar from '../filtrados/index.jsx'
import FiltroAPINoAPi from '../filtrados/filtroApiNoApi.jsx'
import Paginado from '../paginado/paginado.jsx'
import Reset from '../reset/reset.jsx'

import s from './principal.module.css'

export default function Principal(){
    return (<div>
            <NavBar/>
            <details >
                <summary>Desplegar filtros</summary>
                    <div className={s.details}>
                        <OrderABC/>
                        <OrderForce/>
                        <Filtrar/>
                        <FiltroAPINoAPi/>
                        <SearchBar/>
                        <Reset/>
                    </div>
            </details>
                    <div className={s.btnes}>
                         <Paginado/>
                    </div>
                                <Pokemons/>
    </div>
    )
}
