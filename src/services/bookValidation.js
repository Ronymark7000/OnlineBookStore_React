import * as Yup from "yup";

export const BookSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title too Short!")
    .max(30, "Invalid Title Name!")
    .required("Title Required "),

    author: Yup.string()
    .min(2, "Author Name too Short!")
    .max(35, "Invalid Author Name!")
    .required("Author Name Required "),

    price: Yup.string()
    .required("Please enter the price of the book"),

 
});



    