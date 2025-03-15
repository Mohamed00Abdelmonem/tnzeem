import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const destinations = [
    { id: 1, name: 'اندونيسيا', image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=400&h=300&fit=crop', category: 'شرق آسيا' },
    { id: 2, name: 'أذربيجان', image: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=400&h=300&fit=crop', category: 'أوروبا' },
    { id: 3, name: 'جورجيا', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop', category: 'أوروبا' },
    { id: 4, name: 'تايلند', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=300&fit=crop', category: 'شرق آسيا' },
    { id: 5, name: 'تركيا', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop', category: 'أوروبا' },
    { id: 6, name: 'لبنان', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop', category: 'الأكثر طلباً' },
    { id: 7, name: 'دبي', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop', category: 'الأكثر طلباً' },
    { id: 8, name: 'المالديف', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop', category: 'شرق آسيا' },
    { id: 9, name: 'موريشيوس', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&h=300&fit=crop', category: 'الأكثر طلباً' },
  ];

  const services = [
    { id: 1, title: 'حجز تذاكر الطيران', description: 'نوفر خدمة حجز تذاكر الطيران بأفضل الأسعار' },
    { id: 2, title: 'حجز الفنادق', description: 'نقدم خدمة حجز الفنادق في جميع أنحاء العالم' },
    { id: 3, title: 'تنظيم الرحلات', description: 'نقوم بتنظيم رحلات سياحية متكاملة' },
    { id: 4, title: 'حجزات طيران', description: 'نوفر خدمة حجز تذاكر الطيران بأفضل الأسعار' },
    { id: 5, title: 'خدمة اصدار تأشيرات', description: 'نساعدك في إصدار التأشيرات بسهولة' },
    { id: 6, title: 'رخص قيادة دولية', description: 'نقدم خدمة إصدار رخص القيادة الدولية' },
  ];

  const [filter, setFilter] = useState('all'); // State to manage the active filter

  // Filter destinations based on the selected category
  const filteredDestinations = destinations.filter((destination) => {
    if (filter === 'all') return true;
    return destination.category === filter;
  });

  return (
    <>
      <div className="position-relative">
        
        {/* Video Section */}
        <video
          className="w-100"
          style={{ height: '600px', objectFit: 'cover' }}
          autoPlay
          muted
          loop
        >
          <source src="https://www.pexels.com/download/video/3135808/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* <img
          className="w-100"
          style={{ height: '600px', objectFit: 'cover' }}
          src="src/public/mm.gif"
          alt="Animated GIF"
        /> */}




        {/* Overlay Text */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold mb-4">التنظيم</h1>
          <h2 className="display-6 mb-4">للسفر والسياحة</h2>
          <p className="lead mb-4">
            نقدم العديد من المزايا والخدمات التي تجعل السفر أكثر راحة وسهولة للعملاء
          </p>
          <Link to="/contact" className="btn btn-danger btn-lg">
            طلب الخدمة
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 display-4 fw-bold text-danger">خدماتنا</h2>
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow border-0 overflow-hidden hover-scale">
                  <div className="card-body text-center p-4">
                    <h5 className="card-title fw-bold text-dark">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 display-4 fw-bold text-danger">الوجهات السياحية</h2>

          {/* Filter Buttons */}
          <div className="text-center mb-4">
            <button
              className={`btn mx-2 ${filter === 'all' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setFilter('all')}
            >
              الكل
            </button>
            <button
              className={`btn mx-2 ${filter === 'أوروبا' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setFilter('أوروبا')}
            >
              أوروبا
            </button>
            <button
              className={`btn mx-2 ${filter === 'شرق آسيا' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setFilter('شرق آسيا')}
            >
              شرق آسيا
            </button>
            <button
              className={`btn mx-2 ${filter === 'الأكثر طلباً' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setFilter('الأكثر طلباً')}
            >
              الأكثر طلباً
            </button>
          </div>

          {/* Destinations Grid */}
          <div className="row">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm border-0 overflow-hidden hover-scale">
                  <img
                    src={destination.image}
                    className="card-img-top"
                    alt={destination.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center p-4">
                    <h5 className="card-title fw-bold text-dark">{destination.name}</h5>
                    <div className="text-center">
                      <Link
                        to={`/destinations/${destination.id}`}
                        className="btn btn-danger px-4 py-2 rounded-pill"
                      >
                        اكتشف المزيد
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop"
                className="img-fluid rounded"
                alt="Travel Planning"
              />
            </div>
            <div className="col-md-6 text-center text-md-end">
              <h2 className="mb-4">دعنا نساعدك في تخطيط رحلتك القادمة</h2>
              <p className="mb-4">نحن نقدم خدمات متكاملة لتخطيط رحلتك بأفضل الأسعار وأعلى مستوى من الخدمة</p>
              <button className="btn btn-danger btn-lg">تواصل معنا</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;