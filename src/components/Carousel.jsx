import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
    const [images, setImages] = useState([]);

  // Cargar las imágenes desde el JSON
    useEffect(() => {
        fetch("/data/spaces-img.json")
        .then((response) => response.json())
        .then((data) => {
            // Limitar a 6 imágenes
            const limitedImages = data.slice(0, 6);
            setImages(limitedImages);
        })
        .catch((error) => console.error("Error loading images:", error));
    }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={`Space ${item.id}`}
              className="w-full h-96 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
