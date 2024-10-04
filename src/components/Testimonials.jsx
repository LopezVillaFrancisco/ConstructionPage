import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    text: "Thanks to this company, I found the home of my dreams. The service was exceptional.",
    author: "Juan Pérez",
    imageUrl: "https://via.placeholder.com/100?text=Juan+Pérez"
  },
  {
    id: 2,
    text: "The team was very professional and helped me find a property in record time.",
    author: "María López",
    imageUrl: "https://via.placeholder.com/100?text=María+López"
  },
  {
    id: 3,
    text: "Excellent experience from start to finish. I would recommend them to anyone looking for a new home.",
    author: "Carlos García",
    imageUrl: "https://via.placeholder.com/100?text=Carlos+García"
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation
        className="mySwiper"
        style={{ height: '400px' }}
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id} className="flex justify-center items-center p-6 border rounded-lg shadow-lg text-center h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-gray-600 italic text-lg mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-md mb-2">- {testimonial.author}</p>
              <img src={testimonial.imageUrl} alt={testimonial.author} className="rounded-full w-20 h-20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #D97706; /* yellow-600 */
        }

        .swiper-pagination-bullet {
          background-color: #B45309; 
        }

        .swiper-pagination-bullet-active {
          background-color: #D97706; 
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
