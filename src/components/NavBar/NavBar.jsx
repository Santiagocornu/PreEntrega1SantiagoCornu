import React from 'react'

import CardWidget from '../CardWidget/CardWidget';

import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className='container'>
      <Link to='/'>
        <img src='https://i.pinimg.com/564x/ac/dc/fe/acdcfe54adc164b8c17046fdc711ffbe.jpg'></img>
        </Link>

        <nav>
        
            <NavLink to='categoria/1'>
            <button>frutas</button>
            </NavLink>
            <NavLink to='categoria/2'>
            <button>remeras</button>
            </NavLink>
            <NavLink to='categoria/3'>
            <button>camperas</button>
            </NavLink>
            <NavLink to='categoria/4'>
            <button>pantalones</button>
            </NavLink>
            

        

        </nav>
        <CardWidget/>
    </header>
  )
}
export default NavBar