import React, { useEffect, useState } from 'react'
import { Row, Col, Tabs } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import sliderApi from "../../core/api/static/slider";
import { CURRENT_ENV } from "../../core/api/configs/env";
import mockData from '../../core/mockData/mock'

const { TabPane } = Tabs;

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = () => {
  const [slider, setSlider] = useState([]);
  const [banner, setBanner] = useState([]);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    (async () => {
      const listSlider = await sliderApi.getList();
      setSlider(listSlider);

    })()
    setBanner(mockData.data.banner)
    setCate(mockData.data.category)
    return () => {
      setSlider([]);
    };
  }, [setSlider, setBanner, setCate])

  console.log("slider: ", slider)
  console.log("banner: ", banner)

  return (
    <div className="home-container">
      <section className="home-carousel">
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ "delay": 3500, "disableOnInteraction": false }}
          pagination={{ "clickable": true }} navigation={true} className="mySwiper">
          {/* {
            slider.items?.map(item => (
              <SwiperSlide key={item.id}><div><img src={imgSlider + item.img} />{item.title}</div></SwiperSlide>
            ))} */}
          {
            banner?.map(item => (
              <SwiperSlide key={item.id}><div className="swiper-slide-img" style={{ backgroundImage: `url(${item.image})` }}>{item.title}</div></SwiperSlide>
            ))
          }
        </Swiper>
      </section>
      <section className="home-card-category">
        <Row justify="space-between">
          {cate?.map(item => (
            <Col><img className="row-card-category-img" src={item.image} /></Col>
          ))}
        </Row>
      </section>
      <section className="home-slider">
        <h1>Sản phẩm mới nhất</h1>
        <Tabs defaultActiveKey="1" centered>
          {cate?.map(item => (
            <TabPane tab={item.title} key={item.id}>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {
                  item.children?.map(item2 => (
                    <SwiperSlide key={item2.id}><div>{item2.title}</div></SwiperSlide>
                  ))}
              </Swiper>
            </TabPane>
          ))}
        </Tabs>

      </section>
    </div>
  );
};

export default Home;