import { Formik, Form, Field } from "formik";
import { Button, Label } from "reactstrap";
import axiosInstance from "../../../axiosInstance";
import { useNavigate } from "react-router-dom";
import { UserSchema } from "../../services/userValidation";
import { useEffect, useState } from "react";

function AddUser({editUser}) {
    const navigate = useNavigate();


    const [form, setform] = useState({
      username: "",
      password: "",
      email: "",
      role: "user",
    });
  
    useEffect(() => {
      if (editUser) {
        setform((prev) => ({ ...prev, ...editUser }));
      }
    }, [editUser]);

     const forSubmit = async (values, { resetForm }) => {
       try {
         if (editUser) {
           await axiosInstance.put(`/admin/user/${editUser?.userId}`, values);
         } else {
           await axiosInstance.post(`/admin/users`, values);
         }
         navigate("/admin/user-dashboard");
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
        validationSchema={UserSchema}
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
                <b>User</b>
              </Label>
            </div>
            <div className="form-group" style={{ width: "80%" }}>
              <label htmlFor="exampleInputEmail1">User Name</label>

              {/* <Label for="exampleUsername">Usename</Label> */}
              <Field
                //   id="exampleUsername"
                className="form-control m-2"
                name="username"
                placeholder="Enter Username"
                type="text"
              />
              {errors.username && touched.username ? (
                <div className="text-danger blockquote-footer mt-2">
                  {errors.username}
                </div>
              ) : null}
            </div>
            <div className="form-group" style={{ width: "80%" }}>
              <label htmlFor="exampleInputEmail1">Password</label>

              <Field
                className="form-control m-2"
                name="password"
                placeholder="Enter Password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className="text-danger blockquote-footer mt-2">
                  {errors.password}
                </div>
              ) : null}
            </div>

            <div className="form-group" style={{ width: "80%" }}>
              <label htmlFor="exampleInputEmail1">E-mail</label>

              <Field
                className="form-control m-2"
                name="email"
                placeholder="Enter E-mail"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="text-danger blockquote-footer mt-2">
                  {errors.email}
                </div>
              ) : null}
            </div>
            <div>
              <Label htmlFor="exampleInputEmail1">Role</Label>

              <Field className="form-control m-2" name="role" as="select">
                <option>user</option>
                <option>admin</option>
              </Field>
            </div>

            <div>
              <Button color="primary m-2" type="submit">
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddUser;
