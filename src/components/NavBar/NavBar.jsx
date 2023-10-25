import React from 'react'

import CardWidget from '../CardWidget/CardWidget';

import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <Link to='/'>
        <h1>limon</h1>
        </Link>

        <nav>
        <ul>
            <NavLink to='categoria/1'>
            <li><button>frutas</button></li>
            </NavLink>
            <NavLink to='categoria/2'>
            <li><button>remeras</button></li>
            </NavLink>
            <NavLink to='categoria/3'>
            <li><button>camperas</button></li>
            </NavLink>
            <NavLink to='categoria/4'>
            <li><button>pantalones</button></li>
            </NavLink>
            

        </ul>

        </nav>
        <CardWidget/>
    </header>
  )
}

export default NavBar