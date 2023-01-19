// eslint-disable-next-line no-unused-vars
import {ADD_CHARACTER,DELETE_CHARACTER} from "../redux/types"


export const addCharacter=(character)=>{
 return{type: ADD_CHARACTER,payload:character }
}

export const deleteCharacter = (id)=>{
return{type:DELETE_CHARACTER, payload:id}
}