// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

function CarouselSection() {
  return (
    <div className="container">
      <div className="mt-4">
        <div>
          <Swiper
            className="mySwiper"
            spaceBetween={50}
            slidesPerView={3}
            autoplay={4000}
            speed={800}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="Container mb-3 mt-3">
                <div className="container slideimg text-white p-3">
                  <h5>Lorem Ipsum</h5>
                  <p className="text-justify pl-2 pr-2">
                    Get started with Bootstrap, the world’s most popular
                    framework for building responsive, mobile-first sites
                  </p>
                  <Link to="" className="text-white">
                    Know More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Container mb-3 mt-3">
                <div className="container slideimg text-white p-3">
                  <h5>Lorem Ipsum</h5>
                  <p className="text-justify pl-2 pr-2">
                    Get started with Bootstrap, the world’s most popular
                    framework for building responsive, mobile-first sites
                  </p>
                  <Link to="" className="text-white">
                    Know More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Container mb-3 mt-3">
                <div className="container slideimg text-white p-3">
                  <h5>Lorem Ipsum</h5>
                  <p className="text-justify pl-2 pr-2">
                    Get started with Bootstrap, the world’s most popular
                    framework for building responsive, mobile-first sites
                  </p>

                  <Link to="" className="text-white">
                    Know More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Container mb-3 mt-3">
                <div className="container slideimg p-3 text-white">
                  <h5>Lorem Ipsum</h5>
                  <p className="text-justify pl-2 pr-2">
                    Get started with Bootstrap, the world’s most popular
                    framework for building responsive, mobile-first sites
                  </p>
                  <Link to="" className="text-white">
                    Know More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Container mb-3 mt-3">
                <div className="container slideimg p-3 text-white">
                  <h5>Lorem Ipsum</h5>
                  <p className="text-justify pl-2 pr-2">
                    Get started with Bootstrap, the world’s most popular
                    framework for building responsive, mobile-first sites
                  </p>
                  <Link to="" className="text-white">
                    Know More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Container mb-3 mt-3">
                <div className="container slideimg p-3 text-white">
                  <h5>Lorem Ipsum</h5>
                  <p className="text-justify pl-2 pr-2">
                    Get started with Bootstrap, the world’s most popular
                    framework for building responsive, mobile-first sites
                  </p>
                  <Link to="" className="text-white">
                    Know More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Container mb-3 mt-3">
                <div className="container slideimg p-3 text-white">
                  <h5>Lorem Ipsum</h5>
                  <p className="text-justify pl-2 pr-2">
                    Get started with Bootstrap, the world’s most popular
                    framework for building responsive, mobile-first sites
                  </p>
                  <Link to="" className="text-white">
                    Know More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CarouselSection;
