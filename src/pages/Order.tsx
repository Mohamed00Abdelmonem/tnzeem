import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Order() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">طلب الخدمة</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">ارسل لنا طلب</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">الجوال *</label>
                  <div className="input-group">
                    <select className="form-select" style={{ maxWidth: '120px' }}>
                      <option value="+20">Egypt +20</option>
                      <option value="+966">Saudi Arabia +966</option>
                      {/* Add more country codes here */}
                    </select>
                    <input type="text" className="form-control" id="phone" placeholder="010 01234567" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">المدينة *</label>
                  <select className="form-select" id="city">
                    <option value="">اختيار المدينة</option>
                    <option value="Cairo">القاهرة</option>
                    <option value="Alexandria">الإسكندرية</option>
                    <option value="Riyadh">الرياض</option>
                    {/* Add more cities here */}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">الدولة *</label>
                  <select className="form-select" id="country">
                    <option value="">اختيار الدولة</option>
                    <option value="Egypt">مصر</option>
                    <option value="Saudi Arabia">السعودية</option>
                    {/* Add more countries here */}
                  </select>
                </div>
                <button type="submit" className="btn btn-danger w-100">ارسال الطلب</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;