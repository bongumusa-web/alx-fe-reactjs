import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {

  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  const onSubmit = (values) => {
    console.log(values);
    alert("Formik form submitted");
  };

  return (
    <div>

      <h2>Formik Registration</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >

        <Form>

          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" />

          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" />

          <button type="submit">Submit</button>

        </Form>

      </Formik>

    </div>
  );
}

export default FormikForm;
