/* eslint-disable react/prop-types */
import Card from "../Card/Card";

const Cards = ({ allCharacters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  sm:px-32 ">
      {allCharacters?.characters?.map((character, index) => {
        return (
          <Card
            key={index}
            id={character?.id}
            name={character?.name}
            species={character?.species}
            gender={character?.gender}
            origin={character?.origin}
            image={character?.image}
            location={character?.location}
            created={character?.created}
          />
        );
      })}
    </div>
  );
};

export default Cards;
