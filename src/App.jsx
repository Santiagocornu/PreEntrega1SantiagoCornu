
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter,Routes,Route,  } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CarritoProvider } from './context/CarritoContext'
import Checkout from './components/Checkout/Checkout'



function App() {

  return (
    <>
   

   <BrowserRouter>
   <CarritoProvider>
   <NavBar/>
   <Routes>

    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categoria/:idCat' element={<ItemListContainer/>}/>
    <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>} />
    <Route path='/checkout' element={<Checkout/>} />
    
   </Routes>
   </CarritoProvider>
   </BrowserRouter>

   
   </>
  )
}

export default App
