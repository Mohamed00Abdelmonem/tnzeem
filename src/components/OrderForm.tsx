// OrderForm.js
import React, { useState } from 'react';

function OrderForm() {
  // State for form inputs
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!phone || !city || !country) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    // Log form data (you can replace this with an API call)
    console.log({ phone, city, country });

    // Reset form after submission
    setPhone('');
    setCity('');
    setCountry('');
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">طلب الخدمة</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">ارسل لنا طلب</h5>
              <form onSubmit={handleSubmit}>
                {/* Phone Input */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">الجوال *</label>
                  <div className="input-group">
                    <select className="form-select" style={{ maxWidth: '120px' }} aria-label="Country Code">
                      {/* <option value="+20">Egypt +20</option> */}
                      <option value="+966">Saudi </option>
                      {/* Add more country codes here */}
                    </select>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder=" 535 52353 966+"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* City Input */}
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">المدينة *</label>
                  <select
                    className="form-select"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    aria-required="true"
                  >
                    <option value="">اختيار المدينة</option>
                    <option value="Cairo">جده</option>
                    <option value="Alexandria">المدينه</option>
                    <option value="Riyadh">الرياض</option>
                    {/* Add more cities here */}
                  </select>
                </div>

                {/* Country Input */}
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">الدولة *</label>
                  <select
                    className="form-select"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    aria-required="true"
                  >
                    <option value="">اختيار الدولة</option>
                    <option value="Saudi Arabia">السعودية</option>
                    <option value="Georgia">جورجيا</option>
                    <option value="Azerbaijan">أذربيجان</option>
                    <option value="Indonesia">أندونيسيا</option>
                    <option value="Bosnia">البوسنة</option>
                    <option value="Turkey">تركيا</option>
                    <option value="Thailand">تايلاند</option>
                    <option value="Mauritius">موريشيوس</option>
                    <option value="Maldives">المالديف</option>
                    <option value="Dubai">دبي</option>
                    <option value="Albania">البانيا</option>
                    <option value="Europe">رحلات اوروبا</option>
                    <option value="Malaysia">ماليزيا</option>
                    <option value="Salalah">صلالة</option>
                    <option value="Sri Lanka">سريلانكا</option>
                    <option value="Russia">روسيا</option>
                    {/* Add more countries here */}
                  </select>
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