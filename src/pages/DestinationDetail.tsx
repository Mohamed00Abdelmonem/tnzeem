import React from 'react';
import { useParams } from 'react-router-dom';

const destinations = [
  { 
    id: 1, 
    name: 'اندونيسيا', 
    image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=400&h=300&fit=crop', 
    description: 'وصف اندونيسيا' 
  },
  { 
    id: 2, 
    name: 'أذربيجان', 
    image: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=400&h=300&fit=crop', 
    description: 'وصف أذربيجان' 
  },
  { 
    id: 3, 
    name: 'جورجيا', 
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop', 
    description: 'إذا كنت تبحث عن وجهة سياحية تجمع بين الجمال الطبيعي والتاريخ العريق، فإن جورجيا هي الخيار الأمثل! تتميز البلاد بمناظرها الخلابة، حيث تمتد جبال القوقاز المغطاة بالثلوج، والوديان الخضراء، والأنهار المتدفقة، مما يجعلها وجهة مثالية لعشاق الطبيعة والمغامرات. بالإضافة إلى ذلك، تمتلك جورجيا إرثًا ثقافيًا غنيًا ينعكس في معالمها التاريخية الفريدة، مثل الكنائس القديمة، والقلاع الأثرية، والشوارع العتيقة التي تحكي قصص الماضي بأسلوب ساحر. ولا تكتمل الرحلة دون الاستمتاع بالتجربة الجورجية الأصيلة، حيث تمتزج المأكولات الشهية، والعروض الفلكلورية، والضيافة الجورجية الدافئة التي تجعل كل زائر يشعر وكأنه في بيته.',
    packages: [
      { name: 'عرض الـ VIP', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'يُعتبر الشعب الجورجي، الذي يُطلقون على أنفسهم اسم الكارتفيليين، نتاج اندماج بين السكان الأصليين والمهاجرين القادمين إلى منطقة القوقاز من الأناضول في العصور القديمة. وتشير بعض الروايات اليهودية القديمة إلى أن أصول الجورجيين تعود إلى الإيبيريين، وكانوا يُعرفون أيضًا باسم “توبل توبال”. ويؤكد كل من المؤرخ الفرنسي جاك دو فيتري والرحالة الإنجليزي سير جون ماندفيل أن تسمية الجورجيين بهذا الاسم ترتبط بالقديس جورج.'
  },
  // Add other destinations here...
];

function DestinationDetail() {
  const { id } = useParams(); // Get the destination ID from the URL
  const destination = destinations.find(dest => dest.id === parseInt(id)); // Find the destination

  if (!destination) {
    return <div className="container py-5 text-center">الوجهة غير موجودة</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">{destination.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <p>{destination.description}</p>

          {/* Display packages if available */}
          {destination.packages && (
            <div className="mt-4">
              <h3>العروض السياحية</h3>
              <ul className="list-group">
                {destination.packages.map((pkg, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{pkg.name}</strong>: {pkg.trips} رحلات - تبدأ من {pkg.price} دولار
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display history if available */}
          {destination.history && (
            <div className="mt-4">
              <h3>معلومات تاريخية</h3>
              <p>{destination.history}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;