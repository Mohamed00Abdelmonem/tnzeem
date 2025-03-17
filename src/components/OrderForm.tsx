import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function OrderForm() {
  // Phone number validation regex (Saudi Arabia format: +966XXXXXXXXX)
  const phoneRegExp = /^(\+966)?[0-9]{9,12}$/;

  // Formik setup
  const formik = useFormik({
    initialValues: {
      phone: "", // Changed from Phone to phone
      city: "",
      destination_country: "",
    },
    validationSchema: Yup.object({
      // phone: Yup.string()
      //   .matches(phoneRegExp, "رقم الجوال غير صالح، يجب أن يكون بصيغة +966XXXXXXXXX")
      //   .required("رقم الجوال مطلوب"),
      city: Yup.string().required("المدينة مطلوبة"),
      destination_country: Yup.string().required("الدولة مطلوبة"),
    }),
   
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("Submitting Values:", values);
    
      try {
        const payload = {
          phone: values.phone, // Changed from Phone to phone
          city: values.city,
          destination_country: values.destination_country,
        };
        const response = await axios.post(`https://api/tnzeem.net/crm/create-customer-wordpress/`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.status === 200 || response.status === 201) {
          alert("تم إرسال الطلب بنجاح! ✅");
          resetForm(); // Clear form after success
        } else {
          throw new Error("حدث خطأ أثناء إرسال البيانات.");
        }
      } catch (error) {
        console.error("API Error:", error.response);
        alert(`خطأ: ${error.response?.data?.phone?.[0] || "فشل إرسال الطلب. حاول مرة أخرى."}`);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">طلب الخدمة</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">ارسل لنا طلب</h5>
              <form onSubmit={formik.handleSubmit}>
                {/* Phone Input */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">الجوال *</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder=" 535 52353 966+"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                      dir="rtl"
                      style={{ textAlign: "right" }}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="invalid-feedback">{formik.errors.phone}</div>
                    )}
                  </div>
                </div>

                {/* City Input */}
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">المدينة *</label>
                  <select
                    className={`form-select ${formik.touched.city && formik.errors.city ? "is-invalid" : ""}`}
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-required="true"
                  >
                    <option value="">اختيار المدينة</option>
                    <option value="جده">جده</option>
                    <option value="المدينه">المدينه</option>
                    <option value="الرياض">الرياض</option>
                  </select>
                  {formik.touched.city && formik.errors.city && (
                    <div className="invalid-feedback">{formik.errors.city}</div>
                  )}
                </div>

                {/* Country Input */}
                <div className="mb-3">
                  <label htmlFor="destination_country" className="form-label">الدولة *</label>
                  <select
                    className={`form-select ${formik.touched.destination_country && formik.errors.destination_country ? "is-invalid" : ""}`}
                    id="destination_country"
                    name="destination_country"
                    value={formik.values.destination_country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-required="true"
                  >
                    <option value="">اختيار الدولة</option>
                    <option value="السعودية ">السعودية</option>
                    <option value="جورجيا">جورجيا</option>
                    <option value="أذربيجان">أذربيجان</option>
                    <option value="أندونيسيا">أندونيسيا</option>
                    <option value="البوسنة">البوسنة</option>
                    <option value="تركيا">تركيا</option>
                    <option value="تايلاند">تايلاند</option>
                    <option value="موريشيوس">موريشيوس</option>
                    <option value="المالديف">المالديف</option>
                    <option value="دبي">دبي</option>
                    <option value="البانيا">البانيا</option>
                    <option value="Europe">رحلات اوروبا</option>
                    <option value="ماليزيا">ماليزيا</option>
                    <option value="صلالة">صلالة</option>
                    <option value="سريلانكا ">سريلانكا</option>
                    <option value="روسيا">روسيا</option>
                  </select>
                  {formik.touched.destination_country && formik.errors.destination_country && (
                    <div className="invalid-feedback">{formik.errors.destination_country}</div>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-danger w-100">ارسال الطلب</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;