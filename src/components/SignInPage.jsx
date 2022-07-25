
import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';

const SignInPage = () => {
  const url = 'http://localhost:3001/api/v1/register';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post(url, data)
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <p>Name is required.</p>}
        <label htmlFor="">Lastname</label>
        <input {...register('lastname', { required: true })} />
        {errors.lastname && <p>Last name is required.</p>}
        <label htmlFor="">Username</label>
        <input {...register('username')} />
        <label htmlFor="">Email</label>
        <input {...register('email', { required: true })} />
        {errors.email && <p>Email is required.</p>}
        <label htmlFor="">Password</label>
        <input {...register('password', { required: true })} />
        {errors.password && <p>Password is required.</p>}
        <input type="submit" />
      </form>
    </>
  )
}

export default SignInPage