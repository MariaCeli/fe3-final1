import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import ThemeContext from '../Components/utils/Context'


const Contact = () => {
  const context = useContext(ThemeContext);
  const theme = context.theme

  return (
    <div style={{background: theme.background, color: theme.font}}>
      <h1>Contacto</h1>
      <p>Estimado, envíenos su pregunta y nos pondremos en contacto con usted a la brevedad</p>
      <Form/>
    </div>
  )
}

export default Contact