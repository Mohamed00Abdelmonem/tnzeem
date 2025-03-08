import React from 'react';

function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">من نحن</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>شركة التنظيم للسفر والسياحة</h2>
          <p>نحن شركة رائدة في مجال السياحة والسفر، نقدم خدمات متكاملة لعملائنا منذ سنوات عديدة.</p>
          <p>نسعى دائماً لتقديم أفضل الخدمات وأكثرها تميزاً لضمان تجربة سفر لا تُنسى لعملائنا.</p>
        </div>
        <div className="col-md-6">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" 
            className="img-fluid rounded"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;