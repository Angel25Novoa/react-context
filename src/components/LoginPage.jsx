import { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useForm } from 'react-hook-form';

export const LoginPage = () => {

  console.log(import.meta.env.VITE_SOME_KEY)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, setUser } = useContext( UserContext );

  const url = import.meta.env.VITE_LOGIN_URL
  const url2 = import.meta.env.VITE_LOGIN_URL_WITH_TOKEN

  const onSubmit = (data) => {
    axios.post(url, data)
      .then(res => {
        return( axios.get(url2, {headers:{
          Authorization: `Bearer ${res.data.token}`
        }}))
        .then(res => {
          setUser(res.data);
        })
      })
  }
  
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
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