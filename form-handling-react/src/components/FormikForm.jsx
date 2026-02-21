import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password required"),
  });

  function handleSubmit(values) {
    console.log(values);
    alert("Formik form submitted!");
  }

  return (
    <div>
      <h2>Register (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>

          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" />

          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" />

          <button type="submit">Register</button>

        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
