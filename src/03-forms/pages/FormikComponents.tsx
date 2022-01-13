import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikComponents = () => {
  return (
    <div>
      <h1>FormikComponents</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caráteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caráteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean()
            .oneOf([true], 'Debe aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf([ 'it-jr' ], 'Esta opción no es permitida')
            .required()
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name='firstName' type="text" />
            <ErrorMessage name='firstName' component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name='lastName' type="text" />
            <ErrorMessage name='lastName' component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name='email' type="text" />
            <ErrorMessage name='email' component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name='jobType' as="select">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name='terms' type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component="span" />

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
