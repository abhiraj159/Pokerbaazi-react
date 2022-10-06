import React from 'react'
import Slider from "react-slick"
import './Slic.css';
import "slick-carousel/slick/slick-theme.css";

export const StoryOfGlory = () => {
    var storynglory = {
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        focusOnSelect: true,
        pauseOnHover: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }
            , { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }
            , { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } }
            , {
                breakpoint: 500, settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px',

                }
            }]
    };
    return (
        <>

            <Slider {...storynglory}>
                <div className="storynglorysec">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="sngtopsec">
                                    <img src="https://web.pokerbaazicdn.com/test/robot-user.jpg" className="img-fluid d-inline-block mb-2" />
                                    <h4>(mr.robot2.0)</h4>
                                    <p className="mb-0">Vikash Kumar - Bihar</p>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="sngtopsec-1">
                                    <p>My name is Vikash Kumar. I have been playing Poker since 2018. The Cash games and Tournaments are very good in PokerBaazi. I love to play on PokerBaazi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sngbottomsec d-flex m-0 align-items-center justify-content-between">
                        <span className="d-flex m-0 align-items-center ">
                            <img src="https://web.pokerbaazicdn.com/asset/images/wining-icon.svg" className="img-fluid mr-2" width="25" /> Biggest Win</span>
                        <span>  ₹5,500 </span>
                    </div>
                </div>
                <div className="storynglorysec">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="sngtopsec">
                                    <img src="https://web.pokerbaazicdn.com/test/ss23-user.png" className="img-fluid d-inline-block mb-2" />
                                    <h4>(ss23)</h4>
                                    <p className="mb-0">Shagun Sarda - West Bengal</p>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="sngtopsec-1">
                                    <p>I'm an actuarial consultant aged 25. Have been playing poker since 6 years now. This is my first big MTT win and looking forward to more."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sngbottomsec d-flex m-0 align-items-center justify-content-between">
                        <span className="d-flex m-0 align-items-center ">
                            <img src="https://web.pokerbaazicdn.com/asset/images/wining-icon.svg" className="img-fluid mr-2" width="25" /> Biggest Win</span>
                        <span>  ₹5,82,900 </span>
                    </div>
                </div>
                <div className="storynglorysec">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="sngtopsec">
                                    <img src="https://web.pokerbaazicdn.com/test/alreadytaken-user.jpg" className="img-fluid d-inline-block mb-2" />
                                    <h4>(AlreadyTaken)</h4>
                                    <p className="mb-0">Shobhit Bhargava - Delhi</p>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="sngtopsec-1">
                                    <p>Hitting a Royal Flush is as special as it is rare :) To make it even special it was of my favorite suit as well - Spades! Will be grinding the Baazi Cash games and try and get that Royal feeling again &#128521; Cheers guys!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sngbottomsec d-flex m-0 align-items-center justify-content-between">
                        <span className="d-flex m-0 align-items-center ">
                            <img src="https://web.pokerbaazicdn.com/asset/images/wining-icon.svg" className="img-fluid mr-2" width="25" /> Biggest Win</span>
                        <span>  ₹60,707 </span>
                    </div>
                </div>
            </Slider>
        </>
    )
}
