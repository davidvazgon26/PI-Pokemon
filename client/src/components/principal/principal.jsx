import Pokemons from '../pokemons/pokemons.jsx'
import SearchBar from '../searchbar/searchbar.jsx'
import OrderABC from '../order/orderABC.jsx'
import OrderForce from '../order/orderForce.jsx'
import NavBar from '../navbar/navBar.jsx'
import Filtrar from '../filtrados/index.jsx'
import FiltroAPINoAPi from '../filtrados/filtroApiNoApi.jsx'
import Paginado from '../paginado/paginado.jsx'
import Reset from '../reset/reset.jsx'


export default function Principal(){
    return (<div>
            <NavBar/>
                <SearchBar/>
                    <OrderABC/>
                        <OrderForce/>
                            <Filtrar/>
                                <FiltroAPINoAPi/>
                                    <Reset/>
                                    <Paginado/>
                                <Pokemons/>
    </div>
    )
}
