import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Select from "react-select";

function Edit_Meal() {


const [formFields, setFormFields] = useState([

  {name: '', quantity: ''}
])

const handleChange = (event, index) => {
  // console.log(index, event.target.name)

  let data= [...formFields];
  data[index][event.target.name] = event.target.value;
  setFormFields(data);

}

const submit = (e) => {
  e.preventDefault();
  console.log(formFields)
}

const addFields = (e) =>{
  e.preventDefault();
  
  let object = {
    name:'', 
    quantity: ''
  }
  setFormFields([...formFields, object]);
}

const removeFields = (index,e) => {
  // console.log(index);
  let data=[...formFields];
  data.splice(index, 1);

  setFormFields(data);

}

  const sensitive = [
    { value: "A", label: "ألبان" },
    { value: "B", label: "الفول السوداني" },
    { value: "C", label: "الصويا" },
    { value: "D", label: "بيض" },
    { value: "E", label: "مأكولات بحرية" },
    { value: "F", label: "كبريتيت" },
    { value: "G", label: "الغولتين" },
    { value: "H", label: "سمسم" },
    { value: "H", label: "المكسرات" },
    { value: "H", label: "الحبوب" },
    { value: "H", label: "المحار" },
    { value: "H", label: "قمح" },
  ];

  const diet = [
    { value: "A", label: "Gluten Free" },
    { value: "B", label: "Ketogenic" },
    { value: "C", label: "Vegetarian" },
    { value: "D", label: "Lacto Vegetarian" },
    { value: "E", label: "Ovo Vegetarian" },
    { value: "F", label: "Vegan" },
    { value: "G", label: "Pescetarian" },
    { value: "H", label: "paleo" },
    { value: "H", label: "primal" },
    { value: "H", label: "الحبوب" },
    { value: "H", label: "Low FODMAP" },
    { value: "H", label: "Whole30" },
  ];

  const Ingredient = [
    { value: "A", label: "صدور دجاج" },
    { value: "B", label: "شوفان" },
    { value: "C", label: "حليب" },
    { value: "D", label: "موز" },
    { value: "E", label: "حليب قليل الدسم" },
    { value: "F", label: "زبدة الفول السدواني" },
    { value: "G", label: "عسل طبيعي" },
    { value: "H", label: "ملفوف الأحمر" },
    { value: "H", label: "صدر دجاج" },
    { value: "H", label: "بطاطس" },
    { value: "H", label: "كرومب زهرة" },
    { value: "H", label: "ملح" },
  ];

  
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />

        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h1 className="float-start mb-0 text-primary">تعديل وجبة</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="row" id="table-hover-row">
            <div className="col-12">
              <div className="card">
                <div className="card-body mt-2">
                  <form className="dt_adv_search" method="POST">
                    <div className="row g-1 mb-md-4 mb-1">
                      <div className="col-md-3">
                        <label className="form-label">
                          {" "}
                          <b> اسم الوجبة </b>{" "}
                        </label>

                        <input
                          type="text"
                          className="form-control ms-50"
                          placeholder="سلطة..."
                        />
                      </div>
                    </div>
                    <div className="row g-1 mb-md-4">
                      <div className="col-md-3">
                        <label className="form-label">
                          {" "}
                          <b> وقت التحضير بالدقائق</b>{" "}
                        </label>

                        <input
                          type="text"
                          className="form-control ms-50"
                          placeholder="5دقائق"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          {" "}
                          <b> عدد الحصص</b>{" "}
                        </label>

                        <input
                          type="text"
                          className="form-control ms-50"
                          placeholder="2"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          {" "}
                          <b>تكلفة الوجبة</b>{" "}
                        </label>

                        <input
                          type="text"
                          className="form-control ms-50"
                          placeholder="15د"
                        />
                      </div>
                      <div className="col-md-3 mb-1">
                        <label className="form-label">
                          <b> الثمن</b>
                        </label>
                        <select className="form-select text-capitalize mb-md-0 mb-2xx">
                          <option value="x" className="text-capitalize">
                            مكلف
                          </option>
                          <option value="x" className="text-capitalize">
                            رخيص
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="row g-1 mb-md-4">
                      <div className="col-md-3 user_status">
                        <label className="form-label">
                          {" "}
                          <b> الحساسية</b>
                        </label>

                        <Select options={sensitive} name="" isMulti />
                      </div>

                      <div className="col-md-3 user_status">
                        <label className="form-label">
                          {" "}
                          <b> الحمية </b>
                        </label>

                        <Select options={diet} name="" isMulti />
                      </div>
                      <div className="col-md-3 user_status">
                        <label className="form-label">
                          <b> نوع الوجبة </b>
                        </label>
                        <select className="form-select text-capitalize mb-md-0 mb-2xx">
                          <option value="All" className="text-capitalize">
                            الكل
                          </option>
                          <option value="x" className="text-capitalize">
                            فطور
                          </option>
                          <option value="x" className="text-capitalize">
                            غداء
                          </option>
                          <option value="x" className="text-capitalize">
                            سناك
                          </option>
                          <option value="x" className="text-capitalize">
                            عشاء
                          </option>
                        </select>
                      </div>

                      <div className="col-md-3 mb-1">
                        <label className="form-label">
                          <b> نوع الوجبة 2</b>
                        </label>
                        <select className="form-select text-capitalize mb-md-0 mb-2xx">
                          <option value="All" className="text-capitalize">
                            الكل
                          </option>
                          <option value="x" className="text-capitalize">
                            فطور
                          </option>
                          <option value="x" className="text-capitalize">
                            غداء
                          </option>
                          <option value="x" className="text-capitalize">
                            سناك
                          </option>
                          <option value="x" className="text-capitalize">
                            عشاء
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row g-1 mb-md-4 mb-1">
                      <div className="col-12">
                        <label className="form-label fw-bold">
                          {" "}
                          <b> تعليمات</b>{" "}
                        </label>
                        <textarea
                          className="form-control"
                          rows={2}
                          id="note"
                          defaultValue={""}
                          placeholder="تعليمات تخص هذه الوجبة..."
                        />
                      </div>
                    </div>
                    {/* HERE  */}
                    <div className="row g-1 mb-md-4">
                    <form onSubmit={submit} className="invoice-repeater">
                      {formFields.map((form, index) => {
                        return (
                          <div key={index}>
                        <div data-repeater-list="invoice">
                          <div data-repeater-item>
                            <div className="row d-flex align-items-end mb-4">
                              <div className="col-md-3 mb-1">
                                <label className="form-label">
                                  {" "}
                                  <b> اسم المكوّن</b>
                                </label>

                                <Select onChange={event => handleChange(event, index)} value={form.name} options={Ingredient} name="name" />
                              </div>

                              <div className="col-md-2 mb-1">
                                <label className="form-label">
                                  {" "}
                                  <b> وحدة القياس</b>
                                </label>

                                <input
                                  readOnly
                                  className="form-control ms-50"
                                />
                              </div>
                              <div className="col-md-3 mb-1">
                                <label className="form-label">
                                  {" "}
                                  <b> كمية المكونات </b>
                                </label>

                                <input
                                  onChange={event => handleChange(event, index)}
                                  value={form.quantity}
                                  name='quantity'
                                  type="text"
                                  className="form-control ms-50"
                                  defaultValue={0}
                                />
                              </div>

                              <div className="col-md-3 mt-1 mb-1">
                                <button
                                  onClick={() => removeFields(index)}
                                  className="btn btn-outline-danger"
                                >
                                  حذف
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                       

                     
                      
                            </div>
                      
                        )
                      })}
                       <div className="row">
                          <div className="col-md-3">
                            <button onClick={addFields} className="btn btn-primary waves-effect waves-float waves-light">
                              اضافة مكوّن
                            </button>
                          </div>
                        </div>
                    </form>
                    </div>
                    <div
                          className="row justify-content-center"
                        >
                          <div className="col-md-3 mt-1">
                            <button onClick={submit}  className="btn btn-success" style={{width:'115px'}}>
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
