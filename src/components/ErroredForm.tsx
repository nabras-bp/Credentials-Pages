import { Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { FormEventHandler } from "react";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const ErroredForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
  }); 
  // console.log('form values', formik.values)

  return (
    <>
      <FormControl
        as={"form"}
        onSubmit={formik.handleSubmit as FormEventHandler}
      >
        <FormLabel>Enter Your name </FormLabel>
        <Input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <FormLabel>Enter your email</FormLabel>
        <Input
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <FormLabel>Enter Password</FormLabel>
        <Input
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button type="submit">Submit</Button>
      </FormControl>
    </>
  );
};

export default ErroredForm;

// const handleSubmitForm: any = (e: React.FormEvent<any>) => {
//     e.preventDefault();
//     console.log(e);
//   };
