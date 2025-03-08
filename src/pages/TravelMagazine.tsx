import React from 'react';

function TravelMagazine() {
  const articles = [
    {
      id: 1,
      title: 'أفضل الوجهات السياحية في 2024',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt: 'اكتشف أجمل الوجهات السياحية التي يمكنك زيارتها هذا العام'
    },
    {
      id: 2,
      title: 'نصائح للسفر بميزانية محدودة',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?w=600&h=400&fit=crop',
      excerpt: 'تعرف على أفضل الطرق للسفر بتكلفة مناسبة'
    },
    {
      id: 3,
      title: 'أفضل المطاعم العالمية',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      excerpt: 'دليلك الشامل لأشهر المطاعم حول العالم'
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">مجلة سياحية</h1>
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.excerpt}</p>
                <button className="btn btn-outline-danger">اقرأ المزيد</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelMagazine;