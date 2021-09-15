import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'name must be 2 characters long'),
    email: yup
        .string()
        .email('must be a valid email')
        .required('email is required'),
    password: yup
        .string()
        .required('password is required')
        .min(6, 'password must be at least 6 characters long'),
    terms: yup.boolean()
})

export default formSchema;