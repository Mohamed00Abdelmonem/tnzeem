import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const destinations = [
  {
    id: 1,
    name: 'اندونيسيا',
    image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=400&h=300&fit=crop',
    description: 'وصف اندونيسيا',
  },
  {
    id: 2,
    name: 'أذربيجان',
    image: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=400&h=300&fit=crop',
    description: 'وصف أذربيجان',
  },
  {
    id: 3,
    name: 'جورجيا',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop',
    description:
      'إذا كنت تبحث عن وجهة سياحية تجمع بين الجمال الطبيعي والتاريخ العريق، فإن جورجيا هي الخيار الأمثل! تتميز البلاد بمناظرها الخلابة، حيث تمتد جبال القوقاز المغطاة بالثلوج، والوديان الخضراء، والأنهار المتدفقة، مما يجعلها وجهة مثالية لعشاق الطبيعة والمغامرات.',
    packages: [
      {
        name: 'VIP العرض',
        price: 2700,
        details:
          'استمتع بتجربة رحلة VIP في جورجيا مع عروض شركة التنظيم للسفر والسياحة، حيث نقدم لك برنامجًا سياحيًا فاخراً يشمل الإقامة في أفضل الفنادق، جولات خاصة بسيارات فاخرة، وخدمات مميزة تلبي جميع احتياجاتك.',
        programs: {
          5: [
            { day: 1, title: 'اليوم الأول: الوصول إلى تبليسي', description: 'الاستقبال في المطار والانتقال إلى الفندق.' },
            { day: 2, title: 'اليوم الثاني: جولة في تبليسي', description: 'زيارة قلعة ناريكالا وجسر السلام.' },
            { day: 3, title: 'اليوم الثالث: كازبيجي', description: 'استكشاف جبال القوقاز.' },
            { day: 4, title: 'اليوم الرابع: باتومي', description: 'الاستمتاع بشواطئ البحر الأسود.' },
            { day: 5, title: 'اليوم الخامس: العودة', description: 'وقت حر للتسوق والعودة.' },
          ],
          6: [
            { day: 1, title: 'اليوم الأول: الوصول إلى تبليسي', description: 'الاستقبال في المطار والانتقال إلى الفندق.' },
            { day: 2, title: 'اليوم الثاني: جولة في تبليسي', description: 'زيارة قلعة ناريكالا وجسر السلام.' },
            { day: 3, title: 'اليوم الثالث: كازبيجي', description: 'استكشاف جبال القوقاز.' },
            { day: 4, title: 'اليوم الرابع: باتومي', description: 'الاستمتاع بشواطئ البحر الأسود.' },
            { day: 5, title: 'اليوم الخامس: مغامرات في باتومي', description: 'زيارة الحديقة النباتية.' },
            { day: 6, title: 'اليوم السادس: العودة', description: 'وقت حر للتسوق والعودة.' },
          ],
          10: [
            { day: 1, title: 'اليوم الأول: الوصول إلى تبليسي', description: 'الاستقبال في المطار والانتقال إلى الفندق.' },
            { day: 2, title: 'اليوم الثاني: جولة في تبليسي', description: 'زيارة قلعة ناريكالا وجسر السلام.' },
            { day: 3, title: 'اليوم الثالث: كازبيجي', description: 'استكشاف جبال القوقاز.' },
            { day: 4, title: 'اليوم الرابع: باتومي', description: 'الاستمتاع بشواطئ البحر الأسود.' },
            { day: 5, title: 'اليوم الخامس: مغامرات في باتومي', description: 'زيارة الحديقة النباتية.' },
            { day: 6, title: 'اليوم السادس: استكشاف كوتايسي', description: 'زيارة الكهوف التاريخية.' },
            { day: 7, title: 'اليوم السابع: جولة في بورجومي', description: 'استكشاف المنتزه الوطني.' },
            { day: 8, title: 'اليوم الثامن: مزارع الشاي', description: 'زيارة مزارع الشاي في باتومي.' },
            { day: 9, title: 'اليوم التاسع: العودة إلى تبليسي', description: 'وقت حر للتسوق.' },
            { day: 10, title: 'اليوم العاشر: المغادرة', description: 'التوجه إلى المطار للمغادرة.' },
          ],
        },
      },
    ],
    history:
      'يُعتبر الشعب الجورجي، الذي يُطلقون على أنفسهم اسم الكارتفيليين، نتاج اندماج بين السكان الأصليين والمهاجرين القادمين إلى منطقة القوقاز من الأناضول في العصور القديمة.',
  },
];

function PackageDetail() {
  const { destinationId, packageName } = useParams();
  const [selectedDays, setSelectedDays] = useState(5); // Default to 5 days
  const [searchParams, setSearchParams] = useSearchParams();

  // Find the destination and package details
  const destination = destinations.find((dest) => dest.id === parseInt(destinationId));
  const packageDetail = destination?.packages?.find((pkg) => pkg.name === packageName);

  if (!packageDetail) {
    return <div className="container py-5 text-center">العرض غير موجود</div>;
  }

  // Get the program for the selected number of days
  const program = packageDetail.programs[selectedDays] || [];

  // Handle day selection change
  const handleDayChange = (days) => {
    setSelectedDays(days);
    setSearchParams({ days });
  };


  
  return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="text-center w-100">
        <h1 className="mb-5">{packageDetail.name}</h1>
      </div>

      <div className="card shadow border-0 w-100" style={{ maxWidth: '800px' }}>
        <div className="card-body p-4">
          <h3 className="card-title fw-bold text-dark">{packageDetail.name}</h3>
          <p className="card-text text-muted">السعر: {packageDetail.price} دولار</p>
          <p className="card-text text-muted">الوجهة: {destination.name}</p>
          <p className="card-text mt-3">{packageDetail.details}</p>

          {/* Day Selection Buttons */}
          <div className="mt-4">
            <h5 className="fw-bold text-center mb-3">اختر عدد الأيام:</h5>
            <div className="btn-group d-flex justify-content-center w-100" role="group">
              <button
                className={`custom-day-btn ${selectedDays === 5 ? 'active' : ''}`}
                onClick={() => handleDayChange(5)}
              >
                5 أيام
              </button>
              <button
                className={`custom-day-btn ${selectedDays === 6 ? 'active' : ''}`}
                onClick={() => handleDayChange(6)}
              >
                6 أيام
              </button>
              <button
                className={`custom-day-btn ${selectedDays === 10 ? 'active' : ''}`}
                onClick={() => handleDayChange(10)}
              >
                10 أيام
              </button>
            </div>
          </div>
        </div>
      </div>





      {/* Daily Program Section */}
      <div className="mt-5">
        <h3 className="text-center mb-4">برنامج الرحلة اليومي ({selectedDays} أيام)</h3>
        <div className="row">
          {program.map((dayPkg, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow border-0 overflow-hidden hover-scale">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold text-dark">{dayPkg.title}</h5>
                  <p className="card-text text-muted">{dayPkg.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;