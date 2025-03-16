import { useParams, Link } from 'react-router-dom';
const destinations = [
  {
    id: 1,
    name: 'اندونيسيا',
    image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=400&h=300&fit=crop',
    description: 'اصنع أجمل الذكريات في إندونيسيا مع التنظيم للسفر والسياحة! استمتع برحلة ساحرة لمدة 10 أيام (9 ليالٍ) بين سحر جاكرتا، جزيرة بالي، وجبال بونشاك، حيث الطبيعة الخلابة والأجواء المميزة. انضم إلينا في تجربة لا تُنسى تجمع بين المغامرة والاسترخاء!',
    packages: [
      { name: ' العرض الكامل ', trips: 6, price: 2700 },
      
    ],
    history: 'إندونيسيا هي دولة جزرية تقع في جنوب شرق آسيا، وتتكون من أكثر من 17,000 جزيرة. تشتهر بثقافتها المتنوعة، وشواطئها الرائعة، وغاباتها المطيرة. تعد بالي واحدة من أشهر الوجهات السياحية في العالم.'
  },
  {
    id: 2,
    name: 'أذربيجان',
    image: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=400&h=300&fit=crop',
    description: 'أذربيجان هي بلد يجمع بين الشرق والغرب، حيث تلتقي الثقافة الإسلامية بالتأثيرات الأوروبية. استمتع بزيارة باكو العاصمة الحديثة، واستكشف القرى القديمة والطبيعة الخلابة.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'أذربيجان هي واحدة من أقدم الدول في العالم، حيث يعود تاريخها إلى آلاف السنين. كانت جزءًا من طريق الحرير التاريخي، مما جعلها مركزًا تجاريًا وثقافيًا مهمًا.'
  },
  {
    id: 3,
    name: 'جورجيا',
    image: 'https://images.pexels.com/photos/2759804/pexels-photo-2759804.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'إذا كنت تبحث عن وجهة سياحية تجمع بين الجمال الطبيعي والتاريخ العريق، فإن جورجيا هي الخيار الأمثل! تتميز البلاد بمناظرها الخلابة، حيث تمتد جبال القوقاز المغطاة بالثلوج، والوديان الخضراء، والأنهار المتدفقة، مما يجعلها وجهة مثالية لعشاق الطبيعة والمغامرات.',
    packages: [
      { name: 'العروض المقدمه', price: 2300 },

    ],
    history: 'يُعتبر الشعب الجورجي، الذي يُطلقون على أنفسهم اسم الكارتفيليين، نتاج اندماج بين السكان الأصليين والمهاجرين القادمين إلى منطقة القوقاز من الأناضول في العصور القديمة.'
  },
  {
    id: 4,
    name: 'البوسنة',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
    description: 'البوسنة والهرسك هي دولة تقع في قلب البلقان، وتشتهر بجمالها الطبيعي وتاريخها الغني. استمتع بزيارة سراييفو العاصمة، وجسر موستار الشهير، والمناظر الجبلية الخلابة.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'البوسنة والهرسك هي دولة ذات تاريخ غني يعود إلى العصور الوسطى، حيث كانت جزءًا من الإمبراطورية العثمانية لقرون عديدة.'
  },
  {
    id: 5,
    name: 'تركيا',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
    description: 'تركيا هي جسر بين الشرق والغرب، حيث تجمع بين الثقافة الغنية والتاريخ العريق والمناظر الطبيعية المتنوعة. من أسواق إسطنبول النابضة بالحياة إلى الشواطئ الذهبية في أنطاليا، ومن المناظر الجبلية في كابادوكيا إلى الآثار القديمة في أفسس، تركيا تقدم تجربة سياحية لا تُنسى.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'تركيا هي موطن لحضارات عديدة تعود إلى آلاف السنين، بما في ذلك الحضارة البيزنطية والعثمانية.'
  },
  {
    id: 6,
    name: 'تايلاند',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=300&fit=crop',
    description: 'تايلاند هي وجهة سياحية شهيرة تشتهر بشواطئها الاستوائية، ومعابدها البوذية، وثقافتها الغنية. يمكنك الاستمتاع بزيارة بانكوك العاصمة النابضة بالحياة، أو الاسترخاء على شواطئ بوكيت، أو استكشاف الغابات الشمالية في تشيانغ ماي.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'تايلاند، المعروفة سابقًا باسم سيام، هي دولة ذات تاريخ غني يعود إلى آلاف السنين.'
  },
  {
    id: 7,
    name: 'موريشيوس',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop',
    description: 'موريشيوس هي جزيرة استوائية في المحيط الهندي، تشتهر بشواطئها الرملية البيضاء، والمياه الفيروزية، والمنتجعات الفاخرة. استمتع بالغوص، والاسترخاء، واستكشاف الطبيعة الخلابة.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'موريشيوس هي دولة جزيرة ذات تاريخ غني يعود إلى الاستعمار الهولندي والفرنسي والبريطاني.'
  },
  {
    id: 8,
    name: 'المالديف',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
    description: 'المالديف هي وجهة أحلام لعشاق الشواطئ والمنتجعات الفاخرة. استمتع بالإقامة في فيلات فوق الماء، والغوص في الشعاب المرجانية، والاسترخاء تحت أشعة الشمس الدافئة.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'المالديف هي دولة جزرية في المحيط الهندي، تشتهر بجزرها المرجانية وشواطئها الرملية البيضاء.'
  },
  {
    id: 9,
    name: 'دبي',
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=400&h=300&fit=crop',
    description: 'دبي هي مدينة المستقبل، حيث تجمع بين الحداثة والفخامة. استمتع بزيارة برج خليفة، ودبي مول، والصحراء الذهبية.',
    packages: [
      { name: ' العرض الكامل', trips: 6, price: 2700 },

    ],
    history: 'دبي هي واحدة من الإمارات السبع التي تشكل دولة الإمارات العربية المتحدة، وتشتهر باقتصادها القوي وتطورها السريع.'
  },
  {
    id: 10,
    name: 'ألبانيا',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=300&fit=crop',
    description: 'ألبانيا هي دولة تقع في جنوب شرق أوروبا، وتشتهر بشواطئها الجميلة، وجبالها الخلابة، وتاريخها الغني. استمتع بزيارة تيرانا العاصمة، وشواطئ كساميل، والقلاع القديمة.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'ألبانيا هي دولة ذات تاريخ غني يعود إلى العصور القديمة، حيث كانت جزءًا من الإمبراطورية الرومانية والبيزنطية.'
  },
  {
    id: 11,
    name: 'رحلات أوروبا',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
    description: 'استمتع برحلة مميزة عبر أوروبا، حيث تجمع بين الثقافة والتاريخ والجمال الطبيعي. زيارات إلى باريس، روما، برشلونة، وغيرها من المدن الأوروبية الشهيرة.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'أوروبا هي قارة غنية بالتاريخ والثقافة، حيث كانت مهد الحضارة الغربية.'
  },
  {
    id: 12,
    name: 'ماليزيا',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop',
    description: 'ماليزيا هي دولة تقدم مزيجًا رائعًا من الثقافات الماليزية والصينية والهندية. تشتهر بمدنها الحديثة مثل كوالالمبور، بالإضافة إلى غاباتها المطيرة وشواطئها البكر.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'ماليزيا هي دولة ذات تاريخ غني يعود إلى آلاف السنين، حيث كانت مركزًا تجاريًا مهمًا في جنوب شرق آسيا.'
  },
  {
    id: 13,
    name: 'صلالة',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
    description: 'صلالة هي مدينة ساحلية في سلطنة عمان، تشتهر بمناخها المعتدل، وشواطئها الجميلة، وطبيعتها الخلابة. استمتع بزيارة الخريف في صلالة، والاسترخاء على الشواطئ الذهبية.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'صلالة هي واحدة من أهم المدن السياحية في سلطنة عمان، وتشتهر بمناخها الفريد وجمالها الطبيعي.'
  },
  {
    id: 14,
    name: 'سريلانكا',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=300&fit=crop',
    description: 'سريلانكا هي جزيرة استوائية في المحيط الهندي، تشتهر بشواطئها الرملية، والغابات المطيرة، والآثار البوذية القديمة. استمتع بزيارة كولومبو، وشواطئ ميريسا، ومدينة كاندي التاريخية.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'سريلانكا هي دولة ذات تاريخ غني يعود إلى آلاف السنين، حيث كانت مركزًا للديانة البوذية.'
  },
  {
    id: 15,
    name: 'روسيا',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
    description: 'روسيا هي أكبر دولة في العالم، وتشتهر بثقافتها الغنية، وتاريخها العريق، والمناظر الطبيعية المتنوعة. استمتع بزيارة موسكو، وسانت بطرسبرغ، وجبال القوقاز.',
    packages: [
      { name: 'VIP العرض', trips: 6, price: 2700 },
      { name: 'العرض الاقتصادي', trips: 11, price: 1950 },
      { name: 'عرض شهر العسل', trips: 9, price: 2350 }
    ],
    history: 'روسيا هي دولة ذات تاريخ غني يعود إلى الإمبراطورية الروسية والاتحاد السوفيتي.'
  }
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
        <div className="col-md-4">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <p>{destination.description}</p>

          {/* Display packages if available */}
          {destination.packages && (
            <div className="mt-4">
              <h3>العروض السياحية</h3>
              <div className="row">
                {destination.packages.map((pkg, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <Link 
                      to={`/destinations/${destination.id}/package/${pkg.name}`} 
                      className="text-decoration-none"
                    >
                      <div className="card h-100 shadow border-0 overflow-hidden hover-scale">
                        <div className="card-body text-center p-4">
                          <h5 className="card-title fw-bold text-dark">{pkg.name}</h5>
                          <p className="card-text text-muted">
                            اسعار  تبدأ من {pkg.price} ريال
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
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



