import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, BookText as TikTok, Snail as Snapchat } from 'lucide-react';
import OrderForm from '../components/OrderForm';


function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 shadow-sm" dir="rtl">
  {/* Top Bar */}
  <div className="bg-dark-red text-white py-2">
    <div className="container">
      <div className="row align-items-center">
        {/* Social Media Icons */}
        <div className="col-md-6 col-lg-8 d-flex justify-content-start justify-content-md-center gap-3 mb-3 mb-md-0">
          <a href="#" className="text-white text-decoration-none">
            <Snapchat size={20} />
          </a>
          <a href="#" className="text-white text-decoration-none">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white text-decoration-none">
            <TikTok size={20} />
          </a>
          <a href="#" className="text-white text-decoration-none">
            <Mail size={20} />
          </a>
          <a href="#" className="text-white text-decoration-none">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-white text-decoration-none">
            <Facebook size={20} />
          </a>
        </div>

        <div className="col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center gap-3">
          <div className="d-flex align-items-center">
            <Phone size={20} className="ms-1" />
            <span>920-0332-39</span>
          </div>

          {/* Address */}
          <div className="d-flex align-items-center">
            <MapPin size={20} className="ms-1" />
            <span className="text-truncate" style={{ maxWidth: '200px' }}>
              طريق عرفات، الدار البيضاء، الرياض 14517، المملكة العربية السعودية
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://tnzeem.com/wp-content/uploads/2025/02/cropped-Grey-01-300x119-1.webp"
            alt="Logo"
            height="50"
            className="d-inline-block align-top"
          />
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse" id="navbarNav"> {/* يجب أن يتطابق مع data-bs-target */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            الرئيسية
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/magazine">
            مجلة سياحية
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            تواصل معنا
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            من نحن
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/destinations">
            الوجهات السياحية
          </Link>
        </li>
      </ul>
      <Link to="/order" className="btn btn-danger px-4 py-2">
        طلب الخدمة
      </Link>

    </div>
  </div>
</nav>

      {/* Main Content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>









<footer className="bg-dark text-white py-4 mt-auto">
  <div className="container">
    <div className="row align-items-center">
      {/* Service Request Form */}
      <div className="col-lg-6 col-md-12 col-sm-4 text-center">
        <div 
          style={{ 
            maxWidth: '600px',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)', 
          }}
        >
          <OrderForm /> {/* Use the OrderForm component here */}
        </div>
      </div>

      {/* Quick Links */}
      <div className="col-lg-3 col-md-6 col-sm-4 text-center">        <h6 className="mb-2">روابط سريعة</h6>
        <ul className="list-unstyled">
          <li><Link to="/" className="text-white">الرئيسية</Link></li>
          <li><Link to="/about" className="text-white">من نحن</Link></li>
          <li><Link to="/contact" className="text-white">تواصل معنا</Link></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="col-lg-3 col-md-6 col-sm-4 text-center">
                <h6 className="mb-2">تابعنا</h6>
        <div className="d-flex justify-content-center gap-2">
          <a href="#" className="text-white"><Facebook size={20} /></a>
          <a href="#" className="text-white"><Instagram size={20} /></a>
          <a href="#" className="text-white"><Youtube size={20} /></a>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="row mt-3">
      <div className="col-12 text-center">
        <p className="mb-0 small">&copy; {new Date().getFullYear()} Altanzeem. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}


export default Layout;