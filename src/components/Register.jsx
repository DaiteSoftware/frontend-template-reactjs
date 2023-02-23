import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { registerValidationSchema } from '../schemas'
import { createUser } from '../api/apidev'
import useAuth from '../hooks/useAuth'


function Register() {

  const {setAuth} = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(registerValidationSchema)});

  const submit = async (formData) => {
    const response = await createUser(formData)
    setAuth(response)
    navigate(from, {replace: true})
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
            <input {...register('firstname')} placeholder='First Name...'/>
            <p>{errors.firstname?.message}</p>

            <input {...register('lastname')} placeholder='Last Name...'/>
            <p>{errors.lastname?.message}</p>

            <input {...register('email')} placeholder='Email...' type='email'/>
            <p>{errors.email?.message}</p>

            <input {...register('password')} placeholder='Password...' type='password'/>
            <p>{errors.password?.message}</p>

            <input {...register('verify_password')} placeholder='Confirm Password...' type='password'/>
            <p>{errors.verify_password?.message}</p>

            <input {...register('default_company')} placeholder='Company Name...'/>
            <p>{errors.default_company?.message}</p>

            <button type='submit'>Submit</button>
        </form>
        <p>If you already have an account please click <a href='/login'>here</a> to login</p>
    </div>
  )
}

export default Register