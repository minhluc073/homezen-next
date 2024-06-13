'use client'
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 0,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	speed: 2000,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
}

import Link from "next/link"
import AdvancedFilter from "../elements/AdvancedFilter"

export default function Slider2() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>

			<section className="flat-slider home-2">
				<div className="container relative">
					<div className="row">
						<div className="col-xl-10">
							<div className="slider-content">
								<div className="heading">
									<h2 className="title wow fadeIn js-letters" data-wow-delay=".2s" data-wow-duration="2000ms">Find A Home That Fits Perfectly</h2>
									<p className="subtitle body-1 wow fadeIn" data-wow-delay=".8s" data-wow-duration="2000ms">We are a real estate agency that will help you find
										the best residence you dream of.</p>
								</div>
								<div className="flat-tab flat-tab-form">
									<ul className="nav-tab-form style-2" role="tablist">
										<li className="nav-tab-item" onClick={() => handleTab(1)}>
											<a className={isTab == 1 ? "nav-link-item active" : "nav-link-item"} data-bs-toggle="tab">For
												Rent</a>
										</li>
										<li className="nav-tab-item" onClick={() => handleTab(2)}>
											<a className={isTab == 2 ? "nav-link-item active" : "nav-link-item"} data-bs-toggle="tab">For Sale</a>
										</li>
									</ul>
									<div className="tab-content">
										<div className="tab-pane fade active show" role="tabpanel">
											<div className="form-sl">
												<form method="post">
													<AdvancedFilter sidecls="style-2 shadow-st no-left-round" />
												</form>
												{/* End Job  Search Form*/}
											</div>
										</div>
									</div>
								</div>
								<div className="wrap-search-link">
									<p className="body-1">What are you looking for:</p>
									<Link href="#" className="current body-1">Apartment,</Link>
									<Link href="#" className="body-1">Villa,</Link>
									<Link href="#" className="body-1">Studio,</Link>
									<Link href="#" className="body-1">House</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="img-banner-left">
					<img src="/images/slider/graplic-slider-2.png" alt="img" />
				</div>
				<div className="img-banner-right">
					<div className="swiper slider-sw-home2">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide>
								<div className="slider-home2 img-animation wow">
									<img src="/images/slider/slider-2.jpg" alt="images" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="slider-home2">
									<img src="/images/slider/slider-2-1.jpg" alt="images" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="slider-home2">
									<img src="/images/slider/slider-2-2.jpg" alt="images" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="slider-home2">
									<img src="/images/slider/slider-2-3.jpg" alt="images" />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
