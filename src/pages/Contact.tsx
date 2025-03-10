import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">تواصل معنا</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-4">معلومات الاتصال</h5>
              <div className="d-flex align-items-center mb-3">
                <Phone className="me-2" />
                <span>920-0332-39</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Mail className="me-2" />
                <span>info@altanzeem.com</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin className="me-2" />
                <span>طريق عرفات، الدار البيضاء، الرياض 14517</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-4">ارسل لنا رسالة</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">الجوال *</label>
                  <div className="input-group">
                    <select className="form-select" style={{ maxWidth: '120px' }}>
                      <option value="+20">Egypt +20</option>
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

export default Contact;