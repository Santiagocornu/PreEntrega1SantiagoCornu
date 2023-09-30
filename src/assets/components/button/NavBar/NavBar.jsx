import React from 'react'

import CardWidget from '../CardWidget/CardWidget';

import './NavBar.css';

function NavBar() {
  return (
    <header>
        <h1>limon</h1>

        <nav>
        <ul>
            <li><button>Remeras</button></li>
            <li><button>Gorras</button></li>
            <li><button>Tazas</button></li>

        </ul>

        </nav>
        <CardWidget/>
    </header>
  )
}

export default NavBar