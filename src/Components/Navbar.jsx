import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from './utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const context = useContext(ThemeContext);
  const theme = context.theme

  return (
    <div style={{background: theme.background, color: theme.font}}>
    <nav>
   
      <Link to="/" style={{color: theme.font}}>Inicio</Link>
      <Link to="/contacto"style={{color: theme.font}}>Contacto</Link>
      <Link to="/favs"style={{color: theme.font}}>Favoritos</Link>
      

      <button
       onClick={context.handleChangeTheme}
       > {theme.background === 'black' ? 'Light' : 'Dark'} Mode
       </button>
    </nav>
    </div>
  )
}

export default Navbar