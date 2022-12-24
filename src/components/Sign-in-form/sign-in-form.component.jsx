import { useState } from "react";

import FormInput from "../Form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button.component";

import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../utils/firebase/firebase.utils";

import { SignInContainer, Buttons, Title } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await logInWithEmailAndPassword(email, password);
    resetFormFields();
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <Buttons>
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
