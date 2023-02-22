import * as yup from 'yup'

export  const registerValidationSchema = yup.object({
  firstname: yup.string()
  .min(3, "First Name must be at least 3 characters")
  .max(12, "Last Name must be at most 12 characters")
  .required("First name is required"),

  lastname: yup.string()
  .min(3, "Last Name must be at least 3 characters")
  .max(16, "Last Name must be at most 16 characters")
  .required("Last name is required"),

  email: yup.string()
  .email("Enter a valid email")
  .required("Email is required"),

  password: yup.string()
  .min(8, "Password must be at least 8 characters")
  .max(16, "Password must be at most 16 characters")
  .required("Password is required"),

  verify_password: yup.string()
  .oneOf([yup.ref("password"), null], "Passwords must match")
  .required("This field is required"),

  default_company: yup.string()
  .min(3, "First Name must be at least 8 characters")
  .max(12, "Last Name must be at most 16 characters")
  .required("Company Name is required")
})

