import React from 'react'

import { connect } from 'react-redux'


export const Favorites = (props) => {
console.log(props);
  return (
    <div><h1>no me anda esto vaya dios a saber porque despues lo arreglo <br/> aprovecho para avisar que me falta arreglar que no se puedan agregar personajes repetidos :(</h1></div>
  )
}

export function mapStateToProps(state) {
    return {
      myFavorites: state.myFavorites,
      
    };
  }

export default connect(mapStateToProps,null)(Favorites)