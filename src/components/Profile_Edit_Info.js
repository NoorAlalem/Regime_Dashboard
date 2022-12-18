import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useQuery } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../store/login-context';

function Profile_Edit_Info({ user }) {
  const [value, setValuex] = useState();

  function handleChange(event) {
    setValuex(event.target.value);
  }
  const { token } = useAuth();
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().notRequired().nullable(),
    phone: yup.string().required('Phone is required'),
    address: yup.string().notRequired().nullable(),
    height: yup.string().required('Height is required'),
    weight: yup.string().required('Weight is required'),
    age: yup.string().required('Age is required'),
    gender: yup.string().required('Gender is required'),
    goal: yup.string().required('Goal is required'),
    exercise: yup.string().required('Exercise is required'),
    isIll: yup.boolean().notRequired().nullable(),
    illness: yup.string().notRequired().nullable(),
    isDizzy: yup.boolean().notRequired().nullable(),
    isMdication: yup.boolean().notRequired().nullable(),
    medications: yup.string().notRequired().nullable(),
    isSmoker: yup.boolean().notRequired().nullable(),
    sleep: yup.string().notRequired().nullable(),
    work: yup.string().notRequired().nullable(),
    bestWeight: yup.string().notRequired().nullable(),
    water: yup.string().notRequired().nullable(),
    eatingDisorder: yup.array().notRequired().nullable(),
    isFood: yup.boolean().notRequired().nullable(),
    foods: yup.string().notRequired().nullable(),
    isCall: yup.boolean().notRequired().nullable(),
    isDairy: yup.boolean().notRequired().nullable(),
    isGluten: yup.boolean().notRequired().nullable(),
    isPeanut: yup.boolean().notRequired().nullable(),
    isSesame: yup.boolean().notRequired().nullable(),
    isSoy: yup.boolean().notRequired().nullable(),
    isTreeNut: yup.boolean().notRequired().nullable(),
    isEgg: yup.boolean().notRequired().nullable(),
    isGrain: yup.boolean().notRequired().nullable(),
    isSeafood: yup.boolean().notRequired().nullable(),
    isSulfite: yup.boolean().notRequired().nullable(),
    isShellfish: yup.boolean().notRequired().nullable(),
    isWheat: yup.boolean().notRequired().nullable(),
    foodSys: yup.string().notRequired().nullable(),
    mealNums: yup.string().notRequired().nullable(),
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

  useEffect(() => {
    setValue('name', user?.name);
    setValue('email', user?.email);
    setValue('phone', user?.phone);
    setValue('address', user?.address);
    setValue('height', user?.height);
    setValue('weight', user?.weight);
    setValue('age', user?.age);
    setValue('gender', user?.gender);
    setValue('goal', user?.goal);
    setValue('exercise', user?.exercise);
    setValue('isIll', user?.isIll);
    setValue('illness', user?.illness);
    setValue('isDizzy', user?.isDizzy);
    setValue('isMdication', user?.isMdication);
    setValue('medications', user?.medications);
    setValue('isSmoker', user?.isSmoker);
    setValue('sleep', user?.sleep);
    setValue('work', user?.work);
    setValue('bestWeight', user?.bestWeight);
    setValue('water', user?.water);
    setValue('eatingDisorder', user?.eatingDisorder);
    setValue('isFood', user?.isFood);
    setValue('foods', user?.foods);
    setValue('isCall', user?.isCall);
    setValue('isDairy', user?.isDairy);
    setValue('isGluten', user?.isGluten);
    setValue('isPeanut', user?.isPeanut);
    setValue('isSesame', user?.isSesame);
    setValue('isSoy', user?.isSoy);
    setValue('isTreeNut', user?.isTreeNut);
    setValue('isEgg', user?.isEgg);
    setValue('isGrain', user?.isGrain);
    setValue('isSeafood', user?.isSeafood);
    setValue('isSulfite', user?.isSulfite);
    setValue('isShellfish', user?.isShellfish);
    setValue('isWheat', user?.isWheat);
    setValue('foodSys', user?.foodSys);
    setValue('mealNums', user?.mealNums);
  }, [user]);

  const options = [
    { value: 'A', label: 'الملل' },
    { value: 'B', label: 'التعب' },
    { value: 'C', label: 'الغضب' },
    { value: 'D', label: 'السعادة' },
    { value: 'E', label: 'الإكتئاب' },
    { value: 'F', label: 'القلق' },
    { value: 'G', label: 'الضغط النفسي' },
    { value: 'H', label: 'التوتر' },
  ];

  return (
    <div className='modal-dialog modal-lg modal-dialog-centered modal-edit-user'>
      <div className='modal-content'>
        <div className='modal-header bg-transparent'>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='modal'
            aria-label='Close'
          />
        </div>
        <div className='modal-body pb-5 px-sm-5 pt-50'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'> تعديل بيانات المشترك </h1>
            <p> سيتم تعديل بيانات المشترك بناءً على رغبته</p>
          </div>
          <form
            id='editUserForm'
            className='row gy-1 pt-75'
            onsubmit='return false'
          >
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserFirstName'>
                {' '}
                الإسم:
              </label>
              <input
                type='text'
                name='name'
                id='modalEditUserFirstName'
                className='form-control'
                {...register('name')}
              />
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLastName'>
                {' '}
                البريد الإلكتروني
              </label>
              <input
                type='text'
                name='email'
                id='modalEditUserLastName'
                className='form-control'
                {...register('email')}
              />
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserFirstName'>
                {' '}
                رقم الهاتف:
              </label>
              <input
                type='text'
                name='phone'
                id='modalEditUserFirstName'
                className='form-control'
                {...register('phone')}
              />
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLastName'>
                {' '}
                العمر:
              </label>
              <input
                type='text'
                name='age'
                id='modalEditUserLastName'
                className='form-control'
                placeholder='35'
                {...register('age')}
              />
            </div>
            {/* <div className="col-12">
      <label className="form-label" htmlFor="modalEditUserName">Username</label>
      <input type="text" id="modalEditUserName" name="modalEditUserName" className="form-control" defaultValue="gertrude.dev" placeholder="john.doe.007" />
    </div> */}
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserEmail'>
                الطول
              </label>
              <input
                type='text'
                name='height'
                id='modalEditUserEmail'
                className='form-control'
                defaultValue='59'
                {...register('height')}
              />
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserEmail'>
                الوزن
              </label>
              <input
                type='text'
                name='weight'
                id='modalEditUserEmail'
                className='form-control'
                defaultValue='56'
                {...register('weight')}
              />
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                الجنس
              </label>
              <select
                name='gender'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('gender')}
              >
                <option value={'female'}>انثى</option>
                <option value={'male'}>ذكر</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserStatus'>
                الهدف
              </label>
              <select
                name='goal'
                id='modalEditUserStatus'
                className='form-select'
                aria-label='Default select example'
                {...register('goal')}
              >
                <option value={'زيادة الوزن'}>زيادة الوزن</option>
                <option value={'فقدان الوزن'}>فقدان الوزن</option>
                <option value={'المحافظة على الوزن'}>المحافظة على الوزن</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                الرياضة
              </label>
              <select
                name='exercise'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('exercise')}
              >
                <option value='قليل / لا تمارس الرياضة'>
                  قليل / لا تمارس الرياضة
                </option>
                <option value='تتمرن 1-2 / أسبوع'>تتمرن 1-2 اسبوعيًا</option>
                <option value='تتمرن 2-3 / أسبوع'>تتمرن 2-3 اسبوعيًا</option>
                <option value='تتمرن 3-5 / أسبوع'>تتمرن 3-5 اسبوعيًا</option>
                <option value='تتمرن 6-7 / أسبوع'>تتمرن 6-7 اسبوعيًا</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                امراض:
              </label>
              <select
                name='isIll'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('isIll')}
              >
                <option value={undefined}>لا اعلم</option>
                <option value='false'>لا</option>
                <option value='true'>نعم</option>

                {value === 'yes' ? (
                  <div className='col-12 col-md-6'>
                    <label className='form-label' htmlFor='modalEditTaxID'>
                      اسم المرض:
                    </label>
                    <input
                      type='text'
                      name='illness'
                      id='modalEditTaxID'
                      className='form-control modal-edit-tax-id'
                      placeholder='السكر...'
                      {...register('illness')}
                    />
                  </div>
                ) : null}
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                فقد التوازن:
              </label>
              <select
                name='isDizzy'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('isDizzy')}
              >
                <option value={false}>لا</option>
                <option value={true}>نعم</option>
                <option value={undefined}>لا اعلم</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                {' '}
                تناول الأدوية:
              </label>
              <select
                name='isMdication'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('isMdication')}
              >
                <option value={false}>لا</option>
                <option value={true}>نعم</option>
                <option value={undefined}>لا اعلم</option>
                {/* ADD INPUT IF YES */}
                {value === 'yes' ? (
                  <div className='col-12 col-md-6'>
                    <label className='form-label' htmlFor='medications'>
                      اسم المرض:
                    </label>
                    <input
                      type='text'
                      name='medications'
                      id='medications'
                      className='form-control modal-edit-tax-id'
                      placeholder='السكر...'
                      {...register('medications')}
                    />
                  </div>
                ) : null}
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                مدخن:
              </label>
              <select
                name='isSmoker'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('isSmoker')}
              >
                <option value={false}>لا</option>
                <option value={true}>نعم</option>
                <option value={undefined}>لا اعلم</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                ساعات النوم:
              </label>
              <select
                name='sleep'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('sleep')}
              >
                <option value='أقل من 4 ساعات'>أقل من 4 ساعات</option>
                <option value='ما بين 4 و 6 ساعات'>ما بين 4 و 6 ساعات</option>
                <option value='ما بين 6 و 12 ساعة'>ما بين 6 و 12 ساعة</option>
                <option value='أكثر من 12 ساعات'>أكثر من 12 ساعات</option>
                <option value={undefined}>لا اعلم</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                حركة العمل:
              </label>
              <select
                name='work'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('work')}
              >
                <option value='لا'>لا</option>
                <option value='نعم، حركة كثيرة'>نعم، حركة كثيرة</option>
                <option value='نعم، حركة قليلة'>نعم، حركة قليلة</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                افضل وزن :
              </label>
              <select
                name='bestWeight'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('bestWeight')}
              >
                <option value='منذ سنة'>منذ سنة</option>
                <option value='منذ سنتين'>منذ سنتين</option>
                <option value='منذ ثلاث سنوات أو أكثر'>
                  منذ ثلاث سنوات أو أكثر
                </option>
                <option value={undefined}>لا اعلم</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                شراب الماء:
              </label>
              <select
                name='water'
                id='modalEditUserLanguage'
                className='select2 form-select'
                {...register('water')}
              >
                <option value='لتر أو أقل'>لتر أو أقل</option>
                <option value='2 لتر أو أكثر '>2 لتر أو أكثر</option>
                <option value='3 لتر أو أكثر'>3 لتر أو أكثر</option>
              </select>
            </div>
            <div className='col-12 col-md-6'>
              <label className='form-label'>سبب الأكل:</label>

              <Select
                options={options}
                name=''
                className='select2'
                isMulti
                // defaultValue={eatingDisorder}
              />
            </div>
            <div className='col-12'>
              <label className='form-label' htmlFor='modalEditUserLanguage'>
                أفضل أكلة مع ذكر اسمها:
              </label>
              <select
                name='water'
                id='modalEditUserLanguage'
                className='select2 form-select mb-1'
              >
                <option value=''> الحلو</option>
                <option value=''> الحار</option>
              </select>
              <input
                type='text'
                name=''
                id='modalEditUserName'
                className='form-control'
                defaultValue='المكرونة'
                placeholder='الرجاء كتابة أفضل أكلة لديك...'
              />
            </div>

            <div className='col-12 text-center mt-2 pt-50'>
              <button type='submit' className='btn btn-primary me-1'>
                تأكيد
              </button>
              <button
                type='reset'
                className='btn btn-outline-secondary'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile_Edit_Info;
