import React from "react";
import Card from "../Components/Card";
import { useContext } from 'react'
import ThemeContext from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const context = useContext(ThemeContext);
  const theme = context.theme

  return (
    <div style={{background: theme.background, color: theme.font}}>
      <h1>Favoritos</h1>
      <div className="card-grid">
      </div>
    </div>
  );
};

export default Favs;
