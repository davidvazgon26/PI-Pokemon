import Pokemons from '../pokemons/pokemons.jsx'
import SearchBar from '../searchbar/searchbar.jsx'
import OrderABC from '../order/orderABC.jsx'
import OrderForce from '../order/orderForce.jsx'
import NavBar from '../navbar/navBar.jsx'


export default function Principal(){
    return (<div>
            <NavBar/>
                <SearchBar/>
                    <OrderABC/>
                        <OrderForce/>
                            <Pokemons/>
    </div>
    )
}
