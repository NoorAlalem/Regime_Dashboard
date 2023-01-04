import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../store/login-context';

function Edit_Ingredident() {
  const { token } = useAuth();
  const schema = yup.object().shape({
    ingredientName: yup.string().required('Ingredient Name is required'),
    quantity: yup.number().required('Quantity is required'),
    calories: yup.number().required(),
    protein: yup.number().required(),
    fat: yup.number().required(),
    carbohydrates: yup.number().required(),
    unitOfMeasure: yup.string().required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const { ingredidentId } = useParams();
  const fetchIngredident = async ({ queryKey }) => {
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/ingredient/${ingredidentId}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    const data = await response.json();
    console.log(data.data);
    return data.data;
  };

  const { data, status, isPreviousData } = useQuery(
    'ingredident',
    fetchIngredident,
    {
      keepPreviousData: true,
    }
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  if (status === 'success') {
    setValue('ingredientName', data?.ingredientName);
    setValue('unitOfMeasure', data?.unitOfMeasure);
    setValue('quantity', data?.quantity);
    setValue('calories', data?.nutrition?.calories);
    setValue('protein', data?.nutrition?.protein);
    setValue('fat', data?.nutrition?.fat);
    setValue('carbohydrates', data?.nutrition?.carbohydrates);
  }
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    updateIngredident(data);
    // handelSubmitx(data);
  };

  const updateIngredident = async (input) => {
    console.log(input, 'input');
    const ingredientName = input?.ingredientName;
    const unitOfMeasure = input?.unitOfMeasure;
    const calories = input?.calories;
    const protein = input?.protein;
    const fat = input?.fat;
    const carbohydrates = input?.carbohydrates;
    const nutrition = {
      calories: calories,
      protein: protein,
      fat: fat,
      carbohydrates: carbohydrates,
    };
    const data = {
      ingredientName,
      unitOfMeasure,
      nutrition,
    };
    console.log(data, ingredidentId);
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/ingredient/${ingredidentId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (result.success === true) {
      toast.success('تم تعديل المكوّن بنجاح');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      toast.error('حدث خطأ أثناء تعديل المكوّن');
    }
  };

  return (
    <>
      <Nav />
      <Sidebar />
      <div className='app-content content '>
        <Toaster />

        <div className='content-overlay' />
        <div className='header-navbar-shadow' />

        <div className='content-wrapper container-xxl p-0'>
          <div className='content-header row'>
            <div className='content-header-left col-md-9 col-12 mb-2'>
              <div className='row breadcrumbs-top'>
                <div className='col-12'>
                  <h1 className='float-start mb-0 text-primary'>تعديل مكوّن</h1>
                </div>
              </div>
            </div>
          </div>

          <div className='row' id='table-hover-row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-body mt-2'>
                  <form
                    className='dt_adv_search'
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className='row g-1 mb-md-4'>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b> اسم المكوّن </b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('ingredientName')}
                        />
                      </div>
                    </div>
                    <div className='row g-1 mb-md-4'>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b>الكمية </b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('quantity')}
                          disabled
                          placeholder='100'
                        />
                      </div>
                      <div className='col-md-3 user_status'>
                        <label className='form-label'>
                          <b> وحدة القياس </b>
                        </label>
                        <select
                          className='form-select text-capitalize mb-md-0 mb-2xx'
                          {...register('unitOfMeasure')}
                        >
                          <option className='text-capitalize' selected>
                            {data.unitOfMeasure}
                          </option>
                          <option className='text-capitalize'>
                            {data.unitOfMeasure === 'g' ? 'ml' : 'g'}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className='row g-1 mb-md-4'>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b> السعرات </b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('calories')}
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b> بروتين </b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('protein')}
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b> كربوهيدرات </b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('carbohydrates')}
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b> دهون</b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('fat')}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12'>
                        <center className='mt-1'>
                          <button
                            type='submit'
                            className='btn btn-success'
                            style={{ width: '100px' }}
                          >
                            تأكيـد
                          </button>
                        </center>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Edit_Ingredident;
