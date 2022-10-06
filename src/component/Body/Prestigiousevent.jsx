import React from 'react'
import Slider from "react-slick"
import './Slic.css';


export const Prestigiousevent = () => {
    var prestigiousevent = {
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1100,
                settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false, dots: true }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1, centerMode: true, autoplay: true, centerPadding: '60px',
                    prevArrow: false,
                    nextArrow: false
                }
            }]
    };
    return (
        <>
            <div>
                <div className="d-block ">

                    <Slider {...prestigiousevent} className="text-center">
                        <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "388px" }}>
                            <div>
                                <div className="" style={{ width: '100%', display: "inline-block" }}>
                                    <div className="tournaments">
                                        <a href="#" tabIndex="0"><img src="https://web.pokerbaazicdn.com/asset/images/tournaments_NPS.webp" alt="National Poker Series" className="img-fluid w-100" /></a>
                                        <div className="tournaments-content">
                                            <h3 className="h2h">National Poker Series</h3>
                                            <div className="row mb-3  pt-2">
                                                <div className="col-6">
                                                    <h5 className="text-grey">Prize Pool</h5>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <h3 className="mb-3"> 18.5 CR</h3>
                                                </div>
                                            </div>
                                            <h3 className="h3h mb-0">
                                                Ultimate Battle of Skill, Mental Strength and Endurance
                                            </h3>
                                            <span className="d-none"><a href="#" tabIndex="0">Learn More <img src="https://web.pokerbaazicdn.com/asset/images/blue-errow.svg" className="img-fluid ml-2" /></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "388px" }}>
                            <div>
                                <div className="" style={{ width: '100%', display: "inline-block" }}>
                                    <div className="tournaments">
                                        <a href="#" tabIndex="0"><img src="https://web.pokerbaazicdn.com/asset/images/tournaments_EB.webp" alt="EndBoss" className="img-fluid w-100" /></a>
                                        <div className="tournaments-content">
                                            <h3 className="h2h">EndBoss</h3>
                                            <div className="row  mb-3  pt-2">
                                                <div className="col-6">
                                                    <h5 className="text-grey">Prize Pool</h5>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <h3 className="mb-3">5 CR</h3>
                                                </div>
                                            </div>
                                            <h3 className="h3h mb-0">
                                                India's Biggest Poker Tournament
                                            </h3>
                                            <span className="d-none">
                                                <a href="#" tabIndex="0">Learn More <img src="https://web.pokerbaazicdn.com/asset/images/blue-errow.svg" className="img-fluid ml-2" /></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "388px" }}>
                            <div>
                                <div className="" style={{ width: '100%', display: "inline-block" }}>
                                    <div className="tournaments">
                                        <a href="#" tabIndex="0"><img src="https://web.pokerbaazicdn.com/asset/images/tournaments_GC.webp" alt="Game Changer" className="img-fluid w-100" /></a>
                                        <div className="tournaments-content">
                                            <h3 className="h2h">Game Changer</h3>
                                            <div className="row  mb-3  pt-2">
                                                <div className="col-6">
                                                    <h5 className="text-grey">Prize Pool</h5>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <h3 className="mb-3"> 2 CR</h3>
                                                </div>
                                            </div>
                                            <h3 className="h3h mb-0">India's First 2 CRORE Tournament</h3>
                                            <span className="d-none"><a href="#" tabIndex="0">Learn More <img src="https://web.pokerbaazicdn.com/asset/images/blue-errow.svg" className="img-fluid ml-2" /></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slick-slide" data-slick-index="3" aria-hidden="true" tabIndex="-1" style={{ width: "388px" }}>
                            <div>
                                <div className="" style={{ width: '100%', display: "inline-block" }}>
                                    <div className="tournaments">
                                        <a href="#" tabIndex="-1"><img src="https://web.pokerbaazicdn.com/asset/images/tournaments_MM.webp" alt="MoneyMaker" className="img-fluid w-100" /></a>
                                        <div className="tournaments-content">
                                            <h3 className="h2h">MoneyMaker</h3>
                                            <div className="row mb-3 pt-2">
                                                <div className="col-6">
                                                    <h5 className="text-grey">Prize Pool</h5>
                                                </div>
                                                <div className="col-6 text-end ">
                                                    <h3 className="mb-3">1 CR</h3>
                                                </div>
                                            </div>
                                            <h3 className="h3h mb-0">
                                                India's First 1 CRORE Guaranteed Prize Pool Tournament
                                            </h3>
                                            <span className="d-none"><a href="#" tabIndex="-1">Learn More <img src="https://web.pokerbaazicdn.com/asset/images/blue-errow.svg" className="img-fluid ml-2" /></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}
