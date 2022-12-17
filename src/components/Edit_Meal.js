import React, { useState, useEffect, useReducer } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

function Edit_Meal() {
  const [formFields, setFormFields] = useState([{ name: '', quantity: '' }]);

  const handleChange = (event, index) => {
    // console.log(index, event.target.name)

    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  const schema = yup.object().shape({
    name: yup.string().required('Meal Name is required'),
    preparationTime: yup.string().required('preparationTime is required'),
    servings: yup.string().required('servings is required'),
    cost: yup.number().required('cost is required'),
    cheap: yup.boolean().required('cheap is required'),
    mealType: yup.string().required('meal type is required'),
    secondMealType: yup.string().required('second meal type is required'),
    instructions: yup.string().required('instructions is required'),
    calories: yup.number().required(),
    protein: yup.number().required(),
    fat: yup.number().required(),
    carbohydrates: yup.number().required(),
    dairy: yup.boolean().required(),
    peanut: yup.boolean().required(),
    soy: yup.boolean().required(),
    egg: yup.boolean().required(),
    seafood: yup.boolean().required(),
    sulfite: yup.boolean().required(),
    gluten: yup.boolean().required(),
    sesame: yup.boolean().required(),
    treeNut: yup.boolean().required(),
    grain: yup.boolean().required(),
    shellfish: yup.boolean().required(),
    wheat: yup.boolean().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const { mealId } = useParams();
  const fetchMeal = async ({ queryKey }) => {
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/meal/${mealId}`
    );
    const data = await response.json();
    console.log(data.data);
    return data.data;
  };

  const { data, status, isPreviousData } = useQuery('meal', fetchMeal, {
    keepPreviousData: true,
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  if (status === 'success') {
    setValue('name', data?.name);
    setValue('preparationTime', data?.preparationTime);
    setValue('servings', data?.servings);
    setValue('cost', data?.cost);
    setValue('cheap', data?.cheap);
    setValue('mealType', data?.mealType[0]);
    setValue('secondMealType', data?.mealType[1] || '');
    setValue('instructions', data?.instructions);
    setValue('calories', data?.nutrition?.calories);
    setValue('protein', data?.nutrition?.protein);
    setValue('fat', data?.nutrition?.fat);
    setValue('carbohydrates', data?.nutrition?.carbohydrates);
    setValue('dairy', data?.dairy);
    setValue('peanut', data?.peanut);
    setValue('soy', data?.soy);
    setValue('egg', data?.egg);
    setValue('seafood', data?.seafood);
    setValue('sulfite', data?.sulfite);
    setValue('gluten', data?.gluten);
    setValue('sesame', data?.sesame);
    setValue('treeNut', data?.treeNut);
    setValue('grain', data?.grain);
    setValue('shellfish', data?.shellfish);
    setValue('wheat', data?.wheat);
  }

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    updateMeal(data);
    // handelSubmitx(data);
  };

  const updateMeal = async (input) => {
    console.log(input, 'input');
    const name = input?.name;
    const preparationTime = input?.preparationTime;
    const servings = input?.servings;
    const cost = input?.cost;
    const cheap = input?.cheap;
    const mealType = input?.mealType;
    const secondMealType = input?.secondMealType;
    const instructions = input?.instructions;
    // const calories = input?.calories;
    // const protein = input?.protein;
    // const fat = input?.fat;
    // const carbohydrates = input?.carbohydrates;
    // const nutrition = {
    //   calories: calories,
    //   protein: protein,
    //   fat: fat,
    //   carbohydrates: carbohydrates,
    // };
    const data = {
      name,
      preparationTime,
      servings,
      cost,
      cheap,
      mealType:
        secondMealType?.length > 0 ? [mealType, secondMealType] : [mealType],
      instructions,
      // nutrition,
    };
    console.log(data, mealId);
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/meal/${mealId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (result.success === true) {
      toast.success('تم تعديل الوجبة بنجاح');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      toast.error('حدث خطأ أثناء تعديل الوجبة');
    }
  };

  const addFields = (e) => {
    e.preventDefault();

    let object = {
      name: '',
      quantity: '',
    };
    setFormFields([...formFields, object]);
  };

  const removeFields = (index, e) => {
    // console.log(index);
    let data = [...formFields];
    data.splice(index, 1);

    setFormFields(data);
  };

  const sensitive = [
    { value: 'dairy', label: 'ألبان' },
    { value: 'peanut', label: 'الفول السوداني' },
    { value: 'soy', label: 'الصويا' },
    { value: 'egg', label: 'بيض' },
    { value: 'seafood', label: 'مأكولات بحرية' },
    { value: 'sulfite', label: 'كبريتيت' },
    { value: 'gluten', label: 'الغولتين' },
    { value: 'sesame', label: 'سمسم' },
    { value: 'treeNut', label: 'المكسرات' },
    { value: 'grain', label: 'الحبوب' },
    { value: 'shellfish', label: 'المحار' },
    { value: 'wheat', label: 'قمح' },
  ];

  const diet = [
    { value: 'A', label: 'Gluten Free' },
    { value: 'B', label: 'Ketogenic' },
    { value: 'C', label: 'Vegetarian' },
    { value: 'D', label: 'Lacto Vegetarian' },
    { value: 'E', label: 'Ovo Vegetarian' },
    { value: 'F', label: 'Vegan' },
    { value: 'G', label: 'Pescetarian' },
    { value: 'H', label: 'paleo' },
    { value: 'H', label: 'primal' },
    { value: 'H', label: 'الحبوب' },
    { value: 'H', label: 'Low FODMAP' },
    { value: 'H', label: 'Whole30' },
  ];

  const Ingredient = [
    { value: 'A', label: 'صدور دجاج' },
    { value: 'B', label: 'شوفان' },
    { value: 'C', label: 'حليب' },
    { value: 'D', label: 'موز' },
    { value: 'E', label: 'حليب قليل الدسم' },
    { value: 'F', label: 'زبدة الفول السدواني' },
    { value: 'G', label: 'عسل طبيعي' },
    { value: 'H', label: 'ملفوف الأحمر' },
    { value: 'H', label: 'صدر دجاج' },
    { value: 'H', label: 'بطاطس' },
    { value: 'H', label: 'كرومب زهرة' },
    { value: 'H', label: 'ملح' },
  ];

  return (
    <>
      <Nav />
      <Sidebar />
      <div className='app-content content '>
        <div className='content-overlay' />
        <div className='header-navbar-shadow' />
        <Toaster />

        <div className='content-wrapper container-xxl p-0'>
          <div className='content-header row'>
            <div className='content-header-left col-md-9 col-12 mb-2'>
              <div className='row breadcrumbs-top'>
                <div className='col-12'>
                  <h1 className='float-start mb-0 text-primary'>تعديل وجبة</h1>
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
                    <div className='row g-1 mb-md-4 mb-1'>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b> اسم الوجبة </b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('name')}
                        />
                      </div>
                    </div>
                    <div className='row g-1 mb-md-4'>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b> وقت التحضير بالدقائق</b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('preparationTime')}
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b> عدد الحصص</b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('servings')}
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label'>
                          {' '}
                          <b>تكلفة الوجبة</b>{' '}
                        </label>

                        <input
                          type='text'
                          className='form-control ms-50'
                          {...register('cost')}
                        />
                      </div>
                      <div className='col-md-3 mb-1'>
                        <label className='form-label'>
                          <b> الثمن</b>
                        </label>
                        <select
                          className='form-select text-capitalize mb-md-0 mb-2xx '
                          {...register('cheap')}
                        >
                          <option value={true} className='text-capitalize'>
                            مكلف
                          </option>
                          <option value={false} className='text-capitalize'>
                            رخيص
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className='row g-1 mb-md-4'>
                      <h2 className='text-primary'>الحساسية</h2>

                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='dairy'
                            name='dairy'
                            {...register('dairy')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='dairy'>
                            ألبان
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='peanut'
                            name='peanut'
                            {...register('peanut')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='peanut'>
                            الفول السوداني
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='soy'
                            name='soy'
                            {...register('soy')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='soy'>
                            الصويا
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='egg'
                            name='egg'
                            {...register('egg')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='egg'>
                            بيض
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='seafood'
                            name='seafood'
                            {...register('seafood')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='seafood'>
                            مأكولات بحرية
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='sulfite'
                            name='sulfite'
                            {...register('sulfite')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='sulfite'>
                            كبريتيت
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='gluten'
                            name='gluten'
                            {...register('gluten')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='gluten'>
                            الغولتين
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='sesame'
                            name='sesame'
                            {...register('sesame')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='sesame'>
                            سمسم
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='treeNut'
                            name='treeNut'
                            {...register('treeNut')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='treeNut'>
                            المكسرات
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='grain'
                            name='grain'
                            {...register('grain')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='grain'>
                            الحبوب
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='shellfish'
                            name='shellfish'
                            {...register('shellfish')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='shellfish'>
                            المحار
                          </label>
                        </div>
                      </div>
                      <div className='col-md-1 user_status'>
                        <div class='form-check'>
                          <input
                            id='wheat'
                            name='wheat'
                            {...register('wheat')}
                            type='checkbox'
                            class='form-check-input'
                          />
                          <label class='form-check-label' for='wheat'>
                            قمح
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='row g-1 mb-md-4'>
                      <div className='col-md-3 user_status'>
                        <label className='form-label'>
                          {' '}
                          <b> الحمية </b>
                        </label>

                        <Select options={diet} name='' isMulti />
                      </div>
                    </div>
                    <div className='row g-1 mb-md-4'>
                      <div className='col-md-3 user_status'>
                        <label className='form-label'>
                          <b> نوع الوجبة </b>
                        </label>
                        <select
                          className='form-select text-capitalize mb-md-0 mb-2xx'
                          {...register('mealType')}
                        >
                          <option value='' className='text-capitalize'>
                            لا شيء
                          </option>
                          <option value='Breakfast' className='text-capitalize'>
                            فطور
                          </option>
                          <option value='Lunch' className='text-capitalize'>
                            غداء
                          </option>
                          <option value='Snack' className='text-capitalize'>
                            سناك
                          </option>
                          <option value='Dinner' className='text-capitalize'>
                            عشاء
                          </option>
                        </select>
                      </div>

                      <div className='col-md-3 mb-1'>
                        <label className='form-label'>
                          <b> نوع الوجبة 2</b>
                        </label>
                        <select
                          className='form-select text-capitalize mb-md-0 mb-2xx'
                          {...register('secondMealType')}
                        >
                          <option value='' className='text-capitalize'>
                            لا شيء
                          </option>
                          <option value='Breakfast' className='text-capitalize'>
                            فطور
                          </option>
                          <option value='Lunch' className='text-capitalize'>
                            غداء
                          </option>
                          <option value='Snack' className='text-capitalize'>
                            سناك
                          </option>
                          <option value='Dinner' className='text-capitalize'>
                            عشاء
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className='row g-1 mb-md-4 mb-1'>
                      <div className='col-12'>
                        <label className='form-label fw-bold'>
                          {' '}
                          <b> تعليمات</b>{' '}
                        </label>
                        <textarea
                          className='form-control'
                          rows={8}
                          id='note'
                          {...register('instructions')}
                        />
                      </div>
                    </div>
                    {/* HERE  */}
                    <div className='row g-1 mb-md-4'>
                      <form onSubmit={submit} className='invoice-repeater'>
                        {formFields.map((form, index) => {
                          return (
                            <div key={index}>
                              <div data-repeater-list='invoice'>
                                <div data-repeater-item>
                                  <div className='row d-flex align-items-end mb-4'>
                                    <div className='col-md-3 mb-1'>
                                      <label className='form-label'>
                                        {' '}
                                        <b> اسم المكوّن</b>
                                      </label>

                                      <Select
                                        onChange={(event) =>
                                          handleChange(event, index)
                                        }
                                        value={form.name}
                                        options={Ingredient}
                                        name='name'
                                      />
                                    </div>

                                    <div className='col-md-2 mb-1'>
                                      <label className='form-label'>
                                        {' '}
                                        <b> وحدة القياس</b>
                                      </label>

                                      <input
                                        readOnly
                                        className='form-control ms-50'
                                      />
                                    </div>
                                    <div className='col-md-3 mb-1'>
                                      <label className='form-label'>
                                        {' '}
                                        <b> كمية المكونات </b>
                                      </label>

                                      <input
                                        onChange={(event) =>
                                          handleChange(event, index)
                                        }
                                        value={form.quantity}
                                        name='quantity'
                                        type='text'
                                        className='form-control ms-50'
                                        defaultValue={0}
                                      />
                                    </div>

                                    <div className='col-md-3 mt-1 mb-1'>
                                      <button
                                        onClick={() => removeFields(index)}
                                        className='btn btn-outline-danger'
                                      >
                                        حذف
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        <div className='row'>
                          <div className='col-md-3'>
                            <button
                              onClick={addFields}
                              className='btn btn-primary waves-effect waves-float waves-light'
                            >
                              اضافة مكوّن
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className='row justify-content-center'>
                      <div className='col-md-3 mt-1'>
                        <button
                          type='submit'
                          className='btn btn-success'
                          style={{ width: '115px' }}
                        >
                          تأكيـد
                        </button>
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

export default Edit_Meal;
