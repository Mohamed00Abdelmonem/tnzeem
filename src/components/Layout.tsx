import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, BookText as TikTok, Snail as Snapchat } from 'lucide-react';

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

        {/* Contact Information */}
        <div className="col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center gap-3">
          {/* Phone Number */}
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
    

    {/* Toggle Button for Mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav" // يجب أن يتطابق مع id العنصر القابل للطي
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
      <Link to="/contact" className="btn btn-danger px-4 py-2">
        طلب الخدمة
      </Link>

    </div>
  </div>
</nav>

      {/* Main Content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-5 mt-auto">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-3">تواصل معنا</h5>
              <p className="mb-1">920-0332-39</p>
              <p className="mb-0">info@altanzeem.com</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-3">روابط سريعة</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-white text-decoration-none">
                    الرئيسية
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-white text-decoration-none">
                    من نحن
                  </Link>
                </li>
                <li className="mb-0">
                  <Link to="/contact" className="text-white text-decoration-none">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="col-md-4">
              <h5 className="mb-3">تابعنا على</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-white">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p className="mb-0">&copy; {new Date().getFullYear()} Altanzeem. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default Layout;