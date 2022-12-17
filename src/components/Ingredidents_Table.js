import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAuth } from '../store/login-context';

function Ingredidents_Table() {
  const [page, setPage] = useState(1);
  const { token } = useAuth();

  const fetchIngredidents = async ({ queryKey }) => {
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/ingredient`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    return data;
  };

  const { data, status, isPreviousData } = useQuery(
    ['ingredidents', page],
    fetchIngredidents,
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

  return (
    <div className='app-content content '>
      <div className='content-overlay' />
      <div className='header-navbar-shadow' />

      <div className='content-wrapper container-xxl p-0'>
        <div className='content-header row'>
          <div className='content-header-left col-md-9 col-12 mb-2'>
            <div className='row breadcrumbs-top'>
              <div className='col-12'></div>
            </div>
          </div>
        </div>

        <div className='row' id='table-hover-row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body '>
                <h1 className='float-start mb-0 text-primary'>المكونات</h1>
              </div>
              <hr class='my-0' />
              <div className='table-responsive'>
                <table
                  className='table table-hover'
                  style={{
                    textAlign: 'center',
                    borderCollapse: 'separate',
                    borderSpacing: '0 15px',
                  }}
                >
                  <thead>
                    <tr>
                      <th> # </th>
                      <th>اسم المكوّن</th>
                      <th>السعرات</th>
                      <th>الكمية</th>
                      <th>البروتين</th>
                      <th>الكربوهيدرات</th>
                      <th>الدهون</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td> 1 </td>
                      <td>
                        <span className='fw-bold'>بيض</span>
                      </td>
                      <td>78</td>
                      <td>100</td>
                      <td>5 ج</td>
                      <td>0.6 ج</td>
                      <td>5.3 ج</td>
                      <td>
                        <Link
                          to='/Edit_Ingredident'
                          type='button'
                          className='btn btn-primary btn-sm'
                        >
                          تعديل
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td> 2 </td>
                      <td>
                        <span className='fw-bold'>بيض</span>
                      </td>
                      <td>78</td>
                      <td>100</td>
                      <td>5 ج</td>
                      <td>0.6 ج</td>
                      <td>5.3 ج</td>
                      <td>
                        <Link
                          to='/Edit_Ingredident'
                          type='button'
                          className='btn btn-primary btn-sm'
                        >
                          تعديل
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td> 3 </td>
                      <td>
                        <span className='fw-bold'>بيض</span>
                      </td>
                      <td>78</td>
                      <td>100</td>
                      <td>5 ج</td>
                      <td>0.6 ج</td>
                      <td>5.3 ج</td>
                      <td>
                        <Link
                          to='/Edit_Ingredident'
                          type='button'
                          className='btn btn-primary btn-sm'
                        >
                          تعديل
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td> 4 </td>
                      <td>
                        <span className='fw-bold'>بيض</span>
                      </td>
                      <td>78</td>
                      <td>100</td>
                      <td>5 ج</td>
                      <td>0.6 ج</td>
                      <td>5.3 ج</td>
                      <td>
                        <Link
                          to='/Edit_Ingredident'
                          type='button'
                          className='btn btn-primary btn-sm'
                        >
                          تعديل
                        </Link>
                      </td>
                    </tr> */}
                    {data.data.map((ingredident, index) => (
                      <tr key={ingredident?._id}>
                        <td> {index + 1} </td>
                        <td>
                          <span className='fw-bold'>
                            {ingredident?.ingredientName}
                          </span>
                        </td>
                        <td>{ingredident?.nutrition?.calories}</td>
                        <td>
                          {ingredident?.quantity}
                          {ingredident?.unitOfMeasure}
                        </td>
                        <td>{ingredident?.nutrition?.protein}g</td>
                        <td>{ingredident?.nutrition?.carbohydrates}g</td>
                        <td>{ingredident?.nutrition?.fat}g</td>

                        <td>
                          <Link
                            to={`/ingredident/${ingredident._id}`}
                            type='button'
                            className='btn btn-primary btn-sm'
                          >
                            تعديل
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ingredidents_Table;
