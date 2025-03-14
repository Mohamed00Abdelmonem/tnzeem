import React, { useState } from 'react';

function TravelMagazine() {
  const [visibleArticles, setVisibleArticles] = useState(3); // عدد المقالات المرئية
  const [expandedArticleId, setExpandedArticleId] = useState(null); // تتبع المقالة الموسعة

  const articles = [
    {
      id: 1,
      title: 'أفضل الوجهات السياحية في 2024',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt: 'اكتشف أجمل الوجهات السياحية التي يمكنك زيارتها هذا العام.',
      details:
        'في عام 2024، ستصبح وجهات مثل جزر المالديف، نيوزيلندا، وجورجيا من بين الأماكن الأكثر شعبية للزيارة. هذه الوجهات تقدم مزيجًا من الجمال الطبيعي والثقافة الغنية.',
    },
    {
      id: 2,
      title: 'نصائح للسفر بميزانية محدودة',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?w=600&h=400&fit=crop',
      excerpt: 'تعرف على أفضل الطرق للسفر بتكلفة مناسبة.',
      details:
        'للحفاظ على ميزانيتك أثناء السفر، حاول اختيار مواسم غير مزدحمة، واستخدام وسائل النقل العامة، والبحث عن أماكن إقامة بأسعار معقولة مثل الشقق أو الفنادق المحلية.',
    },
    {
      id: 3,
      title: 'أفضل المطاعم العالمية',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      excerpt: 'دليلك الشامل لأشهر المطاعم حول العالم.',
      details:
        'من مطعم "Noma" في كوبنهاغن إلى "Osteria Francescana" في إيطاليا، يقدم هذا الدليل قائمة بأفضل المطاعم التي تقدم تجارب طعام فريدة من نوعها.',
    },
    {
      id: 4,
      title: 'أفضل 10 فنادق في جورجيا',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt:
        'إذا كنت تخطط لزيارة جورجيا، فإن اختيار الفندق المناسب هو خطوة أساسية لضمان إقامة مريحة وممتعة.',
      details:
        'تشمل القائمة فنادق مثل "Rooms Hotel Tbilisi" و"Stamba Hotel" التي تقدم خدمات فاخرة وأجواء مليئة بالتراث الثقافي.',
    },
    {
      id: 5,
      title: 'الاماكن السياحية في تبليسي عاصمة جورجيا',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt:
        'يرغب الكثير من الأشخاص في التعرف علي افضل الاماكن السياحية في تبليسي، حيث تمتزج فيها المعالم التاريخية العريقة مع الحداثة.',
      details:
        'تشمل الأماكن الشهيرة في تبليسي قصر الحب، وجسر السلام، وكنيسة متاتسميندا، بالإضافة إلى الأسواق التقليدية.',
    },
    {
      id: 6,
      title: 'لماذا جورجيا الواجهة المفضلة للجميع؟',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt:
        'يبحث الكثير عن افضل المناطق السياحية في جورجيا حيث أنها تعد من الوجهات السياحية الأكثر شهرة في العالم.',
      details:
        'جورجيا تتميز بطبيعتها الخلابة، الطعام اللذيذ، وكرم الضيافة. كما أن أسعار الإقامة والسفر فيها معقولة جدًا مقارنةً بالدول الأخرى.',
    },
    {
      id: 7,
      title: 'جبال القوقاز في جورجيا',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt:
        'تعد جبال القوقاز في جورجيا من أبرز الوجهات السياحية والطبيعية التي تجذب المغامرين وعشاق الطبيعة.',
      details:
        'جبال القوقاز تقدم فرصًا رائعة للتسلق، المشي لمسافات طويلة، والاستمتاع بالمناظر الطبيعية الساحرة.',
    },
    {
      id: 8,
      title: 'السياحة في جورجيا | دليلك الشامل',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt:
        'تعد جورجيا من أكثر الدول سحرًا في العالم، حيث تمتزج الطبيعة الخلابة مع التاريخ العريق والثقافة الغنية.',
      details:
        'دليل شامل يغطي كل ما تحتاج لمعرفته عن جورجيا، من الفنادق والمطاعم إلى الأنشطة السياحية والمعالم التاريخية.',
    },
    {
      id: 9,
      title: 'وجهات سياحية رخيصة للاستمتاع برحلات مميزة',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt:
        'تعد وجهات سياحية رخيصة الخيار الأمثل للمسافرين الباحثين عن تجربة سياحية مميزة بأسعار معقولة.',
      details:
        'تشمل هذه الوجهات دول مثل جورجيا، ألبانيا، وتايلاند، حيث يمكنك الاستمتاع بالطبيعة والثقافة دون إنفاق الكثير.',
    },
    {
      id: 10,
      title: 'أفضل النصائح للسفر بأمان',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop',
      excerpt:
        'تعرف على أهم النصائح للسفر بأمان واستمتع برحلتك دون قلق.',
      details:
        'تأكد من الحصول على تأمين صحي، وأخذ نسخة من جواز السفر، وتجنب حمل مبالغ كبيرة من المال أثناء التنقل.',
    },
  ];

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + 3);
  };

  const toggleDetails = (id) => {
    setExpandedArticleId(expandedArticleId === id ? null : id); // توسيع أو طي التفاصيل
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">مجلة سياحية</h1>
      <div className="row">
        {articles.slice(0, visibleArticles).map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {expandedArticleId === article.id ? article.details : article.excerpt}
                </p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => toggleDetails(article.id)}
                >
                  {expandedArticleId === article.id ? 'اخفاء التفاصيل' : 'اقرأ المزيد'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleArticles < articles.length && (
        <div className="text-center mt-4">
          <button className="btn btn-danger" onClick={loadMoreArticles}>
            عرض المزيد
          </button>
        </div>
      )}
    </div>
  );
}

export default TravelMagazine;