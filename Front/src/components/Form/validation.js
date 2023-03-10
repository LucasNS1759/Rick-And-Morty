export const validate = (userData) => {
  let errors = {};
  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  if (!regexEmail.test(userData.username)) {
    errors.username = `Debe ser un correo electrónico valido ⚠️` ;
  }
  if (regexEmail.test(userData.username)) {
    errors.username = "datos correctos ✔️";
  }

  if (!regexPassword.test(userData.password)) {
    errors.password =
      "su contraseña debe tener entre 8 y 16 caracteres 1 numero una mayuscula y un simbolo ⚠️";
  }
  
  if (regexPassword.test(userData.password)) {
    errors.password = "datos correctos ✔️";
  }
  return errors;
};
