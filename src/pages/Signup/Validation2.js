const Validation2 = (values) => {
  let errors = {};
  if (!values.firstname) {
    errors.firstname = "*FirstName is required";
  } else if (values.firstname.length < 2) {
    errors.firstname = "*Firstname is more then 2";
  }

  if (!values.lastname) {
    errors.lastname = "*LastName is required";
  } else if (values.lastname.length < 3) {
    errors.lastname = "*LastName is more then 3 ";
  }

  if (!values.email) {
    errors.email = "*Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "*Email is required";
  }

  if (!values.password) {
    errors.password = "*password is required";
  } else if (values.password.length < 8) {
    errors.password = "*password is more then 8";
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = "confirmpassword is required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "*password is not match";
  }
  return errors;
};
export default Validation2;
