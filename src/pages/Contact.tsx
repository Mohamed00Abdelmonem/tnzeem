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
      </div>
    </div>
  );
}

export default Contact;