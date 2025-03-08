import React from 'react';

function Destinations() {
  const destinations = [
    { id: 1, name: 'اندونيسيا', image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=400&h=300&fit=crop' },
    { id: 2, name: 'أذربيجان', image: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=400&h=300&fit=crop' },
    { id: 3, name: 'جورجيا', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop' },
    { id: 4, name: 'تايلند', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=300&fit=crop' },
    { id: 5, name: 'تركيا', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop' },
    { id: 6, name: 'البوسنة', image: 'https://images.unsplash.com/photo-1555990538-17392d5e5de4?w=400&h=300&fit=crop' },
    { id: 7, name: 'دبي', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop' },
    { id: 8, name: 'المالديف', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop' },
    { id: 9, name: 'موريشيوس', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&h=300&fit=crop' },
    { id: 10, name: 'ماليزيا', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop' },
    { id: 11, name: 'سريلانكا', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop' },
    { id: 12, name: 'النمسا', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&h=300&fit=crop' },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">الوجهات السياحية</h1>
      <div className="row">
        {destinations.map(destination => (
          <div key={destination.id} className="col-md-4 mb-4">
            <div className="card">
              <img 
                src={destination.image} 
                className="card-img-top" 
                alt={destination.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{destination.name}</h5>
                <button className="btn btn-outline-danger">عرض التفاصيل</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;