const { Character } = require("../Database/DB_connection.js");
const { User } = require("../Database/DB_connection.js");


const characterUpdateController = async (
  name,
  status,
  gender,
  origin,
  species,
  location,
  image,
  id,
  nickName,
  created
) => {
console.log(image);
    
   console.log(Buffer.from(image, 'base64').toString('base64') === image);
      
    
    
    
    

  await Character.update(
    { name, status, gender, origin, species, location, image,created },
    { where: { id } }
  );

  let charMod = await Character.findByPk(id);
  console.log(charMod.__proto__);
//   console.log(charMod);
  let user = await User.findOne({ where: { nickName } });
//   console.log(user);
  await charMod.setUsers(user);

  const characterMod = await Character.findByPk(charMod.id, {
    include: [{ model: User }],
  });
  
//   console.log(characterMod);
  return characterMod;
};

module.exports = characterUpdateController;
