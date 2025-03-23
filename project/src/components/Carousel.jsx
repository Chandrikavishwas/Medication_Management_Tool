import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Carousel = () => {
  const slides = [
    {
      title: "Medication Dashboard",
      description: "Keep track of all your medications in one place",
      image: "https://placehold.co/600x400/646cff/ffffff?text=Dashboard"
    },
    {
      title: "Smart Reminders",
      description: "Never miss a dose with intelligent notifications",
      image: "https://placehold.co/600x400/535bf2/ffffff?text=Reminders"
    },
    {
      title: "Analytics",
      description: "Track your medication adherence over time",
      image: "https://placehold.co/600x400/646cff/ffffff?text=Analytics"
    },
    {
      title: "Prescription Management",
      description: "Easily manage and renew your prescriptions",
      image: "https://placehold.co/600x400/535bf2/ffffff?text=Prescriptions"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience Our Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a tour through our intuitive interface and powerful features
          </p>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-[300px] sm:w-[400px] md:w-[600px]">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;