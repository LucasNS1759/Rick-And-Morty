export const validate = (createUser) => {
  let errors = {};
  
  console.log(createUser);
  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  if (!regexEmail.test(createUser.userName)) {
    errors.username = `Debe ser un correo electrónico valido ⚠️` ;
  }
  if (regexEmail.test(createUser.userName)) {
    errors.username = "datos correctos ✔️";
  }

  if (!regexPassword.test(createUser.password)) {
    errors.password =
      "su contraseña debe tener minimo de 8 caracteres 1 numero y una mayuscula ⚠️";
  }
  
  if (regexPassword.test(createUser.password)) {
    errors.password = "datos correctos ✔️";
  }
  return errors;
};
