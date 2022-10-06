import React from 'react'
import Slider from "react-slick"
import './Slic.css';
import "slick-carousel/slick/slick-theme.css";

export const Ourpoliciesslider = () => {
    var ourpolicies = {
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '130px',
        prevArrow: false,
        nextArrow: false,

        responsive: [
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1, prevArrow: false, nextArrow: false }
            },
            {
                breakpoint: 500,
                settings: { slidesToShow: 1, centerPadding: '70px', prevArrow: false, nextArrow: false }
            }
        ]
    };
    return (
        <>
            <div>
                <div className="d-block d-md-none">
                    <div className="mphedcon text-center mb-4">
                        <div className="bluemedline"></div>
                        <h2 className="mphed">Our Policies</h2>
                    </div>
                    <Slider {...ourpolicies} className="text-center">
                        <div className="ourpolicmob">
                            <div className=" ourpl-thumb mb-3 row  align-items-center justify-content-center  "><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-1.svg" /></div>
                            Secured <br />Transactions
                        </div>
                        <div className="ourpolicmob">
                            <div className=" ourpl-thumb mb-3 row  align-items-center justify-content-center " ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-2.svg" /></div>
                            Responsible<br /> gaming
                        </div>
                        <div className="ourpolicmob">
                            <div className="ourpl-thumb mb-3 row  align-items-center justify-content-center " ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-3.svg" /></div>
                            Trusted<br /> experience
                        </div>
                        <div className="ourpolicmob">
                            <div className="ourpl-thumb mb-3 row  align-items-center justify-content-center " ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-4.svg" /></div>
                            RNG <br /> Certified
                        </div>
                        <div className="ourpolicmob">
                            <div className="ourpl-thumb mb-3 row  align-items-center justify-content-center " ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-5.svg" /></div>
                            Protection <br />from threats
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}
