import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username too Short!")
    .max(50, "Username very Long!")
    .required("Username Required "),

  email: Yup.string().email("Invalid email").required("Email Required"),

  password: Yup.string()
    .min(2, "Password too Short!")
    .max(10, "Very long Password!")
    .required("Password Required "),
});
