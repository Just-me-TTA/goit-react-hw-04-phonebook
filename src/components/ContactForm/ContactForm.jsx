import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone-lite';
import {
  Button,
  ErrorMessageStyled,
  FieldsWrapper,
  FormStyled,
  Input,
  Label,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required('A name is required'),
  number: yup
    .string()
    .phone(
      'UK',
      'Phone number is invalid. Please follow example: +38-093-333-33-33'
    )
    .required('A phone number is required'),
});

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormStyled>
        <FieldsWrapper>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input type="tel" name="number" />
          </Label>
          <Button type="submit" aria-label="add contact">
            Add contact
          </Button>
        </FieldsWrapper>

        <ErrorMessageStyled name="name" component="div" />
        <ErrorMessageStyled name="number" component="div" />
      </FormStyled>
    </Formik>
  );
};
