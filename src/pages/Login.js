import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../store/login-context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  let navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data, e) => {
    e.preventDefault();
    await login(data.email, data.password).then((res) => {
      if (res) {
        toast.success('مرحبا بك');
        navigate('/FollowUp');
      } else {
        toast.error('خطأ في البريد الالكتروني او الرقم السري');
      }
    });
    console.log(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div className='Auth-form-container '>
      <Toaster />

      <form className='Auth-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>تسجيل الدخول</h3>
          <div className='form-group mt-3'>
            <label>البريد الالكتروني </label>
            <input
              type='email'
              className='form-control mt-1'
              placeholder='البريد الالكتروني'
              {...register('email')}
            />
          </div>
          <div className='form-group mt-3'>
            <label>الرقم السري</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='الرقم السري'
              {...register('password')}
            />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-primary'>
              تسجيل الدخول
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
