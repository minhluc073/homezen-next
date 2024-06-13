
import Link from "next/link"
import AdvancedFilter from "../elements/AdvancedFilter"
import TabNav from "../elements/TabNav"

export default function Slider1() {
	return (
		<>

			<section className="flat-slider home-1">
				<div className="container relative">
					<div className="row">
						<div className="col-lg-12">
							<div className="slider-content">
								<div className="heading text-center">
									<h1 className="text-white wow fadeIn js-letters" data-wow-delay=".2s" data-wow-duration="2000ms">Find Your Dream Home</h1>
									<p className="subtitle text-white body-1 wow fadeIn" data-wow-delay=".8s" data-wow-duration="2000ms">We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?</p>
								</div>
								<div className="flat-tab flat-tab-form">
									<ul className="nav-tab-form style-1 justify-content-center" role="tablist">
									<TabNav />
									</ul>
									<div className="tab-content">
										<div className="tab-pane fade active show" role="tabpanel">
											<div className="form-sl">
												<form method="post">
													<AdvancedFilter sidecls="shadow-st" />
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="overlay" />
			</section>
		</>
	)
}
