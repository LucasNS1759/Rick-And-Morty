import React from "react";
import { connect } from "react-redux";

export const Favorites = (props) => {
  const myFavorires = props.myFavorites;
  

  return (
    <div>
      {myFavorires.map((favorite) => (
        <div key={props.id}>
          <h3>{props.name}</h3>
          <img src={favorite.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
