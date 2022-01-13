import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MySelect, MyCheckbox, MyTextInput } from '../components';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>FormikAbstraction</h1>

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

            <MyTextInput label="First Name" name="firstName" placeholder="Didiel" />
            <MyTextInput label="Last Name" name="lastName" placeholder="Figueroa" />
            <MyTextInput label="Email Address" name="email" placeholder="Figueroa" />
            
            <MySelect name='jobType' label="Job Type" as="select">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label={"Terms and conditions"} name={"terms"} />

            <label>
              <Field name='terms' type="checkbox" />
              Terms and conditions
            </label>

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
