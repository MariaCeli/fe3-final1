import { Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ThemeContext from '../Components/utils/Context'



const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  const context = useContext(ThemeContext);
  const theme = context.theme
  return (
    <div className="card" style={{background: "grey"}} >

      <Link key={id} to={`details/${id}`} style={{background: theme.background, color: theme.font}} >
      <img src="./images/doctor.jpg" alt='DR-logo' />
      <p class="bold-text">{name}</p>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton" style={{background: theme.background, color: theme.font}}>⭐</button>
    </div>
  );
};

export default Card;
