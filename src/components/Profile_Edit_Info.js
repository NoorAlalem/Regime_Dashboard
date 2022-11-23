import React, {useState} from 'react'
import Select from "react-select";

function Profile_Edit_Info() {

    const [value, setValue] = useState();

    function handleChange(event) {
        setValue(event.target.value);
      }

      const options = [
        { value: "A", label: "الملل" },
        { value: "B", label: "التعب" },
        { value: "C", label: "الغضب" },
        { value: "D", label: "السعادة" },
        { value: "E", label: "الإكتئاب" },
        { value: "F", label: "القلق" },
        { value: "G", label: "الضغط النفسي" },
        { value: "H", label: "التوتر" },
      ];

  return (

    <div className="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
    <div className="modal-content">
      <div className="modal-header bg-transparent">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body pb-5 px-sm-5 pt-50">
        <div className="text-center mb-2">
          <h1 className="mb-1"> تعديل بيانات المشترك </h1>
          <p> سيتم تعديل بيانات المشترك بناءً على رغبته</p>
        </div>
        <form
          id="editUserForm"
          className="row gy-1 pt-75"
          onsubmit="return false"
        >
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserFirstName"
            >
              {" "}
              الإسم:
            </label>
            <input
              type="text"
              name="name"
              id="modalEditUserFirstName"
              className="form-control"
              placeholder="الإسم واللقب معًا.."
              defaultValue="نور العالم"
            />
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLastName"
            >
              {" "}
              البريد الإلكتروني
            </label>
            <input
              type="text"
              name="email"
              id="modalEditUserLastName"
              className="form-control"
              placeholder="noor@gmail.com"
              defaultValue="noor.alalem98@gmail.com"
              data-msg="الرجاء كتابة بريدك الإلكتروني"
            />
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserFirstName"
            >
              {" "}
              رقم الهاتف:
            </label>
            <input
              type="text"
              name="phone"
              id="modalEditUserFirstName"
              className="form-control"
              placeholder="0921222122"
              defaultValue="0911111111"
            />
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLastName"
            >
              {" "}
              العمر:
            </label>
            <input
              type="text"
              name="age"
              id="modalEditUserLastName"
              className="form-control"
              placeholder="35"
              defaultValue="24"
            />
          </div>
          {/* <div className="col-12">
      <label className="form-label" htmlFor="modalEditUserName">Username</label>
      <input type="text" id="modalEditUserName" name="modalEditUserName" className="form-control" defaultValue="gertrude.dev" placeholder="john.doe.007" />
    </div> */}
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserEmail"
            >
              الطول
            </label>
            <input
              type="text"
              name="height"
              id="modalEditUserEmail"
              className="form-control"
              defaultValue="59"
              placeholder="170"
            />
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserEmail"
            >
              العرض
            </label>
            <input
              type="text"
              name="weight"
              id="modalEditUserEmail"
              className="form-control"
              defaultValue="56"
              placeholder="85"
            />
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              الجنس
            </label>
            <select
              name="gender"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value={1}>انثى</option>
              <option value={2}>ذكر</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserStatus"
            >
              الهدف
            </label>
            <select
              name="goal"
              id="modalEditUserStatus"
              className="form-select"
              aria-label="Default select example"
            >
              <option value={1}>زيادة الوزن</option>
              <option value={2}>فقدان وزن</option>
              <option value={3}>المحافظة على الوزن</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              الرياضة
            </label>
            <select
              name="exercise"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value="no">قليل / لا تمارس الرياضة</option>
              <option value="">نتمرن 1-2 اسبوعيًا</option>
              <option value="">نتمرن 2-3 اسبوعيًا</option>
              <option value="">نتمرن 3-5 اسبوعيًا</option>
              <option value="">نتمرن 6-7 اسبوعيًا</option>
              <option value="">رياضي محترف</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              امراض:
            </label>
            <select
              name="value"
              onChange={handleChange}
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value="no">لا</option>
              <option value="yes">نعم</option>
              {value === "yes" ? (
                <div className="col-12 col-md-6">
                  <label
                    className="form-label"
                    htmlFor="modalEditTaxID"
                  >
                    اسم المرض:
                  </label>
                  <input
                    type="text"
                    name="illness"
                    id="modalEditTaxID"
                    className="form-control modal-edit-tax-id"
                    placeholder="السكر..."
                  />
                </div>
              ) : null}
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              فقد التوازن:
            </label>
            <select
              name="isDizzy"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value="no">لا</option>
              <option value="yes">نعم</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              {" "}
              تناول الأدوية:
            </label>
            <select
              name="isMdication"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value="no">لا</option>
              <option value="yes">نعم</option>
              {/* ADD INPUT IF YES */}
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              مدخن:
            </label>
            <select
              name="isSmoker"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value="no">لا</option>
              <option value="yes">نعم</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              ساعات النوم:
            </label>
            <select
              name="sleep"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value=""> اقل من 4 ساعات</option>
              <option value=""> ما بين 4 و 6 ساعات</option>
              <option value=""> ما بين 6 و 12 ساعة </option>
              <option value=""> اكثر من 12 ساعات </option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              حركة العمل:
            </label>
            <select
              name="work"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value="no">لا</option>
              <option value=""> نعم، حركة كثيرة</option>
              <option value=""> نعم، حركة قليلة</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              افضل وزن :
            </label>
            <select
              name="bestWeight"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value="">منذ سنة</option>
              <option value=""> منذ سنتين </option>
              <option value=""> منذ ثلاث سنوات أو أكثر </option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              شراب الماء:
            </label>
            <select
              name="water"
              id="modalEditUserLanguage"
              className="select2 form-select"
            >
              <option value="">لتر أو أقل </option>
              <option value=""> 2 لتر أو أكثر </option>
              <option value=""> 3 لتر أو أكثر </option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">سبب الأكل:</label>

            <Select
              options={options}
              name=""
              className="select2"
              isMulti
            />
          </div>
          <div className="col-12">
            <label
              className="form-label"
              htmlFor="modalEditUserLanguage"
            >
              أفضل أكلة مع ذكر اسمها:
            </label>
            <select
              name="water"
              id="modalEditUserLanguage"
              className="select2 form-select mb-1"
            >
              <option value=""> الحلو</option>
              <option value=""> الحار</option>
            </select>
            <input
              type="text"
              name=""
              id="modalEditUserName"
              className="form-control"
              defaultValue="المكرونة"
              placeholder="الرجاء كتابة أفضل أكلة لديك..."
            />
          </div>
       

          <div className="col-12 text-center mt-2 pt-50">
            <button type="submit" className="btn btn-primary me-1">
              تأكيد
            </button>
            <button
              type="reset"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  )
}

export default Profile_Edit_Info