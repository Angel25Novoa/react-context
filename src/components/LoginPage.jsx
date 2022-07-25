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

  const url = 'http://localhost:3001/api/v1/auth/login';

  const onSubmit = (data) => {
    console.log(data);
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        setUser(res.data);
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