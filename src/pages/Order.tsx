// src/pages/Order.tsx
import React from 'react';

function Order() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-body p-4">
          <h5 className="card-title text-center mb-4 fs-4 fw-bold">ارسل لنا طلب</h5>
          <form>
            {/* Phone Input */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-bold">الجوال *</label>
              <div className="input-group">
                <select className="form-select" style={{ maxWidth: '120px' }}>
                  <option value="+00966"> +966</option>
                  <option value="+20"> +20</option>
                  {/* Add more country codes here */}
                </select>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="010 01234567"
                />
              </div>
            </div>

            {/* City Input */}
            <div className="mb-3">
              <label htmlFor="city" className="form-label fw-bold">المدينة *</label>
              <select className="form-select" id="city">
                <option value="">اختيار المدينة</option>
                <option value="Riyadh">الرياض</option>
                <option value="Makkah">مكه</option>
                {/* Add more cities here */}
              </select>
            </div>

            {/* Country Input */}
            <div className="mb-3">
              <label htmlFor="country" className="form-label fw-bold">الدولة *</label>
              <select className="form-select" id="country">
                <option value="">اختيار الدولة</option>
                <option value="Saudi Arabia">السعودية</option>
                <option value="Egypt">مصر</option>
                {/* Add more countries here */}
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-danger w-100 fw-bold">
              ارسال الطلب
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Order;