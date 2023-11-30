import { Formik, Form, Field } from "formik";
import { Button, Label } from "reactstrap";
import axiosInstance from "../../../../axiosInstance";
import { useNavigate } from "react-router-dom";
import { BookSchema } from "../../../services/bookValidation";
import { useEffect, useState } from "react";

function AddBook({editBook}) {

    const navigate = useNavigate();

    const [form, setform] = useState({
      title: "",
      author: "",
      genre: "",
      price: "",
      availability: "False",
    });

    useEffect(() => {
      if (editBook) {
        setform((prev) => ({ ...prev, ...editBook }));
      }
    }, [editBook]);

    const forSubmit = async (values, { resetForm }) => {
      try {
        if (editBook) {
           await axiosInstance.put(`/book/${editBook?.bookId}`, values);
         } else {
           await axiosInstance.post("/books", values);
         }
        navigate("/admin/book-dashboard");
        // Reset the form after successful submission
        resetForm();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div style={{ width: "80%" }}>
      <Formik
        initialValues={ form }
        onSubmit={forSubmit}
        validationSchema={BookSchema}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%" }}>
            <div>
              <Label
                for="exampleAbc"
                style={{
                  marginTop: "80px",
                  fontSize: "30px",
                }}
              >
                <b>Add Books</b>
              </Label>
            </div>
            <div className="form-group" style={{ width: "80%" }}>
              <label htmlFor="exampleInputEmail1">Title Name</label>

              <Field
                className="form-control m-2"
                name="title"
                placeholder="Enter book title"
                type="text"
              />
              {errors.title && touched.title ? (
                <div className="text-danger blockquote-footer mt-2">
                  {errors.title}
                </div>
              ) : null}
            </div>

            <div className="form-group" style={{ width: "80%" }}>
              <label htmlFor="exampleInputEmail1">Genre</label>

              <Field
                className="form-control m-2"
                name="genre"
                placeholder="Enter genre of the book"
                type="text"
              />
            </div>

            <div className="form-group" style={{ width: "80%" }}>
              <label htmlFor="exampleInputEmail1">Author</label>

              <Field
                className="form-control m-2"
                name="author"
                placeholder="Enter author name"
                type="text"
              />
              {errors.author && touched.author ? (
                <div className="text-danger blockquote-footer mt-2">
                  {errors.author}
                </div>
              ) : null}
            </div>

            <div className="form-group" style={{ width: "80%" }}>
              <label htmlFor="exampleInputEmail1">Price</label>

              <Field
                className="form-control m-2"
                name="price"
                placeholder="Enter author name"
                type="text"
              />
              {errors.price && touched.price ? (
                <div className="text-danger blockquote-footer mt-2">
                  {errors.price}
                </div>
              ) : null}
            </div>

            <div>
              <Label htmlFor="exampleInputEmail1">Availability</Label>

              <Field
                className="form-control m-2"
                name="availability"
                as="select"
              >
                <option>True</option>
                <option>False</option>
              </Field>
            </div>
            <br></br>
            <div>
              <Button color="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddBook;
