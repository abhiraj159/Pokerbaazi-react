import React from 'react';
import './Slic.css';
import Accordion from 'react-bootstrap/Accordion';
import { Ourpoliciesslider } from './Ourpoliciesslider';
import { Prestigiousevent } from './Prestigiousevent';
import { StoryOfGlory } from './StoryOfGlory';


export const Section2 = () => {
    var vid = document.getElementById("myVideoss");

    function playVid() {
        vid.play();
    }

    function myFunctions() {
        var x = document.getElementById("myDIVs");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <>
            {/* Discover a World-Class Gaming Experience Start*/}
            <section className="pt-5  position-relative">
                <div data-inviewport="fade-toptobottom" className="pleft img50 mptop40 ptop posabb pl-0 pl-sm-5 pt-1">
                    <img src="https://web.pokerbaazicdn.com/asset/images/tringle-bg.png" className="img-fluid " style={{ opacity: .5 }} />
                </div>
                <div data-inviewport="fade-toptobottom" className="pright ptop posabb img50 mptop40 pr-1 pr-md-5 mr-0 mr-md-0 text-right">
                    <img src="https://web.pokerbaazicdn.com/asset/images/heart-twobg.png" className="img-fluid " width="100" /></div>
                <div data-inviewport="fade-toptobottom" className="pleft poscenter posabb img50">
                    <img src="https://web.pokerbaazicdn.com/asset/images/tiger-left-bg.png" className="img-fluid " width="100" />
                </div>
                <div className="container">
                    <div className="mphedcon text-center mb-5">
                        <div className="bluemedline"></div>
                        <h2 className="mphed pl-4 pl-md-0 pr-4 pr-md-0">Discover a World-Class Gaming Experience </h2>
                        <div className="mptext">It's not just a game. It's a sport where you play for gold, glory and everything in between. </div>
                    </div>
                    <div className="row justify-content-center pt-0 pt-md-4">
                        <div className="col-lg-10">
                            <div className="text-center  videotext">
                                <h4>Hear it from Shahid</h4>
                                <div className="videocover videocovers my-3">
                                    <div id="myDIVs">
                                        <button onClick={playVid} type="button">
                                            <span onClick={myFunctions}>
                                                <img src="https://web.pokerbaazicdn.com/asset/images/video-play.svg" className="img-fluid" /></span></button>
                                    </div>
                                    <div className="yt_video_wrapper">
                                        <video id="myVideoss" width="900" height="506" controls poster="https://web.pokerbaazicdn.com/asset/images/videocover.webp">
                                            <source src="https://pb-app-download.sgp1.digitaloceanspaces.com/pokerhomevideo1.mp4" type="video/mp4" />
                                            <source src="https://web.pokerbaazicdn.com/asset/videos/pokerhomevideo.webm" type="video/webm" />
                                        </video>
                                    </div>
                                    <img src="https://web.pokerbaazicdn.com/asset/images/videocover.webp" className="img-fluid w-100 videocimg" />
                                </div>
                                <p>Seamless gameplay, world-class experience and an adventure you’d want to go on again and again. This is where experts are made.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center videotext pt-2">
                        <div className="col-lg-6">
                            <div className="pt-2 text-center">
                                <h5>Emojis &amp; Throwables </h5>
                                <div className="videocover videocovers my-3">
                                    <div className="yt_video_wrapper">
                                        <iframe width="738" className="w-100" src="https://www.youtube.com/embed/O93u0Dzlbmg"
                                            srcDoc="<style>*{margin:0;padding:0;overflow:hidden}
                       .imgs{position:absolute;width:100%;top:0;bottom:0;margin:auto; border-radius:7px;}
                       .imgss{position:absolute; width:80px; height:80px;  top:50%; transform:translateY(-50%);margin:0 auto; left:0; right:0}
                       </style><a href=https://www.youtube.com/embed/O93u0Dzlbmg?autoplay=1><img src=https://web.pokerbaazicdn.com/asset/images/videocovernew.webp  class=imgs><img src='https://web.pokerbaazicdn.com/asset/images/video-play.svg'  class=imgss  /></a>"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    </div>
                                    <img src="https://web.pokerbaazicdn.com/asset/images/videocovernew.webp" className="img-fluid w-100 videocimg" />
                                </div>
                                <p>Poker is a thrilling and interesting sport. Now it’s time to make poker fun with Emojis, Throwables, and Voice chat feature at the table. Interact with your opponents at the table and make online poker fun.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pt-2 text-center">
                                <h5>Player Stats Feature</h5>
                                <div className="videocover videocovers my-3">
                                    <div className="yt_video_wrapper">
                                        <iframe width="738" className="w-100" src="https://www.youtube.com/embed/IudST0ACv9E"
                                            srcDoc="<style>*{margin:0;padding:0;overflow:hidden}
                       .imgs{position:absolute;width:100%;top:0;bottom:0;margin:auto; border-radius:7px;}
                       .imgss{position:absolute; width:80px; height:80px;  top:50%; transform:translateY(-50%);margin:0 auto; left:0; right:0}
                       </style><a href=https://www.youtube.com/embed/IudST0ACv9E?autoplay=1><img src=https://web.pokerbaazicdn.com/asset/images/videocovernew-a.webp  class=imgs><img src='https://web.pokerbaazicdn.com/asset/images/video-play.svg'  class=imgss  /></a>"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    </div>
                                    <img src="https://web.pokerbaazicdn.com/asset/images/videocovernew-a.webp" className="img-fluid w-100 videocimg" />
                                </div>
                                <p>In poker, information is everything. With the Player Stats feature, know the player before your PLAY the player. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted gaming ecosystem, ensures honest gameplay.Start */}
            <section className=" pt-5 ">
                <div className="container">
                    <div className="homecertificales position-relative">
                        <div data-inviewport="fade-toptobottom" className="pleft img50 ptop posabb is-inViewport"><img src="https://web.pokerbaazicdn.com/asset/images/certificate-leftdesign.png" className="img-fluid " width="180" /></div>
                        <div className="row justify-content-center align-items-center ">
                            <div className="col-xl-4 col-lg-6 mb-4 text-center"><img src="https://web.pokerbaazicdn.com/asset/images/certificate-hicon.png" className="img-fluid" /></div>
                            <div className="col-xl-5 col-lg-6  mb-4 text-center text-lg-left">
                                <h3 className="mb-3 text-white">Trusted gaming ecosystem, ensures honest gameplay.</h3>
                                <div className="d-inline-block">
                                    <div className="row  align-items-center justify-content-center m-0"><a href="/rngcertification" className="mr-3 cetbutton mb-2" target="_blank">View Certificate</a><img src="https://web.pokerbaazicdn.com/asset/images/certificate-smicon.png" width="62" className="img-fluid mb-2 certificate-width" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stories Of Glory Start */}
            <section className="mb-5 mb_10 pb-5 position-relative storiesofglorysec" >
                <div data-inviewport="fade-toptobottom" className="pleft ptop posabb img50 is-inViewport">
                    <img
                        src="https://web.pokerbaazicdn.com/asset/images/top-left-bg.png" className="img-fluid " width="100" />
                </div>
                <div data-inviewport="fade-toptobottom" className="pright ptop posabb fade_top img50 text-right is-inViewport">
                    <img src="https://web.pokerbaazicdn.com/asset/images/top-right-bg.png" className="img-fluid pull-right" width="100" />
                </div>
                <div className="container ">
                    <div className="mphedcon text-center mb-5">
                        <div className="bluemedline"></div>
                        <h2 className="mphed">Stories Of Glory</h2>
                        <div className="mptext">On PokerBaazi, you hold the cards. Move up the ladder with your capabilities, hone your skill with every game you play, and make your mark in the world of poker. Our expertise is here to help you become an expert, just like them.
                        </div>
                    </div>
                    {/* <div className="lessthanmargin">
                        <div className="storynglory py-2" >
                            <div>
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
                                    <div className="sngbottomsec row m-0 align-items-center justify-content-between">
                                        <span className="row big_win m-0 align-items-center "><img src="https://web.pokerbaazicdn.com/asset/images/wining-icon.svg" className="img-fluid mr-2 w_50" width="25" /> Biggest Win</span>
                                        <span className='big_win'>  ₹5,500 </span></div>
                                </div>
                            </div>
                            <div className='d_sm_none'>
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
                                    <div className="sngbottomsec row m-0 align-items-center justify-content-between"> <span className="row big_win m-0 align-items-center "><img src="https://web.pokerbaazicdn.com/asset/images/wining-icon.svg" className="img-fluid mr-2 w_50" width="25" /> Biggest Win</span> <span className='big_win'>  ₹5,82,900 </span></div>
                                </div>
                            </div>
                            <div className='d_sm_none'>
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
                                    <div className="sngbottomsec row m-0 align-items-center justify-content-between"> <span className="row big_win m-0 align-items-center ">
                                        <img src="https://web.pokerbaazicdn.com/asset/images/wining-icon.svg" className="img-fluid mr-2 w_50" width="25" /> Biggest Win</span>
                                        <span className='big_win'>  ₹60,707 </span></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <StoryOfGlory />
                </div>
            </section>

            {/* Come Home To India’s Most Prestigious Events Start */}
            <section className="pt-5 pb-5 chtompesection position-relative">
                <div className="container ">
                    <div className="mphedcon text-center mb-5">
                        <div className="bluemedline"></div>
                        <h2 className="mphed pl-4 pl-md-0 pr-4 pr-md-0">
                            Come Home To India’s Most Prestigious Events
                            <div className="mptext pt-2">Play India's Biggest Poker Tournaments on India's Biggest Poker App</div>
                        </h2>
                    </div>
                </div>
                <div className="container pl-0 pl-md-1 pr-0 pr-md-1">
                    {/* <div className="chtimpeslider mb-0 mb-md-3 slick-initialized slick-slider d-none d-md-block">
                        <button className="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true">Previous</button>
                        <div className="slick-list draggable">
                            <div className="slick-track slick_track_5">
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
                                                        <div className="col-6 text-right">
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
                                                        <div className="col-6 text-right">
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
                                                        <div className="col-6 text-right">
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
                                                        <div className="col-6 text-right ">
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
                            </div>
                        </div>
                        <button className="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false">Next</button>
                    </div> */}
                    <Prestigiousevent />
                </div>
                <div data-inviewport="fade-toptobottom" className="pleft ptop posabb zindex2 img50 d-none d-md-block is-inViewport">
                    <img src="https://web.pokerbaazicdn.com/asset/images/King-frame-left.png" className="img-fluid " width="70" /></div>
                <div data-inviewport="fade-toptobottom" className="pright pbottom posabb zindex2 text-right img50 d-none d-md-block"><img src="https://web.pokerbaazicdn.com/asset/images/King-frame-right.png" width="70" className="img-fluid pb-5 mb-4" /></div>
            </section>

            {/* Play and learn for free Win from free entry tournaments with 25 LAC prize pool */}
            <section className="pt-md-5 pb-0 pb-sm-4 pt-sm-0">
                <div className="container pl-0 pr-0">
                    <div className="bluertybg">
                        <div className="blueboxcontent">
                            <div className="blueboxcontentinner">
                                <h2 className="text-white text-center">
                                    Play and learn for free<br />
                                    Win from free entry tournaments<br /> with 25 LAC prize pool
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Playing Poker Effortlessly */}
            <section className="pt-5 pb-0 position-relative">
                <div className="container ">
                    <div className="mphedcon text-center mb-5 ">
                        <div className="bluemedline"></div>
                        <h2 className="mphed">Start Playing Poker Effortlessly</h2>
                        <div className="mptext">New to the game? Begin your journey with tutorials or learn on-the-go with round-the-clock Free Entry Tournaments on the app.</div>
                    </div>
                    <div className="row justify-content-center mb-0 mb-md-5 pt-3">
                        <div className="col-md-4   mb-4">
                            <div className="sppsection">
                                <div className="sppsectop row m-0 justify-content-between"><strong>01</strong><span className="textcolor-1">#game formats</span></div>
                                <div className="sppsecthumb"><img src="https://web.pokerbaazicdn.com/asset/images/sppe-1.webp" className="img-fluid w-100" /></div>
                                <h5 className="text-center">Choose from your preferred format</h5>
                            </div>
                        </div>
                        <div className="col-md-4   mb-4">
                            <div className="sppsection">
                                <div className="sppsectop row m-0 justify-content-between"><strong>02</strong><span className="textcolor-3">#table listings</span></div>
                                <div className="sppsecthumb"><img src="https://web.pokerbaazicdn.com/asset/images/sppe-3.webp" className="img-fluid w-100" /></div>
                                <h5 className="text-center">Register to the table of your choice</h5>
                            </div>
                        </div>
                        <div className="col-md-4   mb-4">
                            <div className="sppsection">
                                <div className="sppsectop row m-0 justify-content-between"><strong>03</strong><span className="textcolor-2">#play game</span></div>
                                <div className="sppsecthumb"><img src="https://web.pokerbaazicdn.com/asset/images/sppe-2.webp" className="img-fluid w-100" /></div>
                                <h5 className="text-center">Enjoy the game of Poker with a touch of finesse</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download & play */}
            <section className="pb-4 position-relative pt-md-5 pt-sm-4 pt-md-0">
                <div data-inviewport="fade-toptobottom" className="prleft mptop ptop posabb  img50"><img src="https://web.pokerbaazicdn.com/asset/images/downloadnplay-left.png" className="img-fluid" /></div>
                <div data-inviewport="fade-toptobottom" className="pright ptop   posabb  d-none d-md-block text-right img50"><img src="https://web.pokerbaazicdn.com/asset/images/downloadnplay-right.png" className="img-fluid" /></div>
                <div className="container pt-5 pt-md-0">
                    <div className="row justify-content-center  ">
                        <div className="col-md-11">
                            <div className="downloadnplaysection d-none d-md-block">
                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <div className="mphedcon  pt-4">
                                            <div className="bluemedline whitebg"></div>
                                            <h2 className="mphed text-left text-white mb-4">Download & play</h2>
                                            <ul className="p-0 whitebgstyle">
                                                <li>Step 1: Visit pokerbaazi.com</li>
                                                <li>
                                                    Step 2: Download the  file
                                                </li>
                                                <li>
                                                    Step 3: Install & play
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-7  mb-3">
                                        <img src="https://web.pokerbaazicdn.com/asset/images/downloadnplay-thumb.png" className="img-fluid w-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="mobiledownloadplay  d-block d-md-none">
                                <div className="mphedcon  pt-4 text-center">
                                    <div className="bluemedline whitebg"></div>
                                    <h2 className="mphed  text-white mb-4">Download & play</h2>
                                </div>
                                <div className="text-center mb-4">
                                    <div className="d-inline-block">
                                        <a href="https://www.pokerbaazi.com/go-mobile">  <img src="https://web.pokerbaazicdn.com/asset/images/downloadimg-ios.png" className="img-fluid iosshow1  dnone" />
                                            <img src="https://web.pokerbaazicdn.com/asset/images/downloadimg-android.png" className="img-fluid indroinshow1  dnone" style={{ display: 'block' }} /></a>
                                    </div>
                                </div>
                                <div className="text-center"><a href="https://www.pokerbaazi.com/go-mobile" target="_blank"><img src="https://web.pokerbaazicdn.com/asset/images/downloadnplay-mobile.png" className="img-fluid " /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Policies */}
            <section className="pt-5 pb-4 mainourpolicyss">
                <div className="container">
                    <div className="d-none d-md-block">
                        <div className="ourpolicysec">
                            <div className="mphedcon text-center mb-4">
                                <div className="bluemedline"></div>
                                <h2 className="mphed">Our Policies</h2>
                            </div>
                            <ul className="row m-0 justify-content-center text-center p-0">
                                <li className="mb-4">
                                    <div className="ourpl-thumb mb-3 row  align-items-center justify-content-center " ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-1.svg" /></div>
                                    Secured <br />Transactions
                                </li>
                                <li className="mb-4">
                                    <div className="ourpl-thumb mb-3 row  align-items-center justify-content-center" ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-2.svg" /></div>
                                    Responsible<br /> gaming
                                </li>
                                <li className="mb-4">
                                    <div className="ourpl-thumb mb-3 row  align-items-center justify-content-center" ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-3.svg" /></div>
                                    Trusted<br /> experience
                                </li>
                                <li className="mb-4">
                                    <div className="ourpl-thumb mb-3 row  align-items-center justify-content-center" ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-4.svg" /></div>
                                    RNG <br /> Certified
                                </li>
                                <li className="mb-4">
                                    <div className="ourpl-thumb mb-3 row  align-items-center justify-content-center" ><img src="https://web.pokerbaazicdn.com/asset/images/op-icon-5.svg" /></div>
                                    Protection <br />from threats
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Ourpoliciesslider />
            </section>

            {/* Poker Game – Play Poker Online India */}
            <section className="pt-5 pb-4 position-relative">
                <div className="container">
                    <div className="mphedcon text-center mb-5">
                        <div className="bluemedline"></div>
                        <h1 className="mphed">Poker Game – Play Poker Online India</h1>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-lg-8">
                            <section className="faq-accordion newfaqs">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Accordion>
                                            <Accordion.Item eventKey="0" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            What is Poker Game?
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className=" " itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <p>There exists a variety of poker games played globally that have gained popularity over the decades. However, since the advent of online poker, a couple of variations have enjoyed more attention than others. <a href="/texas-holdem-poker" className="text-blue"><b>Texas Hold’em poker</b></a>, 4 Card Omaha Poker, and 5 Card Omaha Poker are the three top most variants that are widely played all over the world especially in online <a href="/poker-app" className="text-blue"><b>poker apps</b></a>.
                                                            </p>
                                                            <p>However, if you had to choose one variation of the game, Texas Hold’em ranks the highest in popularity. It is due to its simpler rules, also it's easier for the software to display the odds to the players. With just two hole cards to begin with, the action is decent enough for beginners to wrap their heads around and catch up with the gameplay.</p>
                                                            <p>Omaha poker is also the second favorite <a href="/poker-variations" className="text-blue"><b>variation in the poker</b></a> community, and is widely available in online poker platforms and apps as well. The rules of the game are quite similar except for the presence of four hole cards instead of two in Hold’em which affects the gameplay and strategy. However, both variations are equally fun.</p>
                                                            <p>Other popular versions of poker are- 7 Card Stud, 5 Card Draw, Omaha Hi Low, <a href="/razz-poker" className="text-blue"><b>Razz Poker</b></a> among others.</p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            History of Poker
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <h3 className="font-h3 font-weight-bold">Origin of Poker</h3>
                                                            <p> <b>14th Century</b> - An impoverished version of a poker game dates back to the
                                                                9th Century in China. The online poker tournament variation known to us today
                                                                was shaped in France
                                                                in 1400. ‘Poque’ was the game played with a <a
                                                                    href="https://www.pokerbaazi.com/blog/the-history-of-playing-cards/"
                                                                    className="text-blue">deck of 52 cards</a> with very similar
                                                                gameplay to the modern forms of of poker game.
                                                            </p>
                                                            <p>
                                                                <b>18th Century</b> - Though Poque remains the closest ancestor, the game got
                                                                it’s complete, proper form 400 years later in America. Credited
                                                                to the Mississippi Delta region, the finer and more crucial gameplay is deemed
                                                                to have been added here. Wagering,
                                                                raising and bluffing were new <a href="/poker-rules" className="text-blue"><b>poker
                                                                    rules</b></a> added
                                                                to the poker game in the
                                                                mid-1700s. Mississippi could probably be
                                                                christened as the birthplace of modern online poker. By the 1800s, every
                                                                riverboat on
                                                                the Mississippi was rocking a poker game.
                                                                Played with a 52-card deck, poker included straight and stud poker. A heads-up
                                                                of the game was seen playing with 20
                                                                cards.
                                                            </p>
                                                            <p>
                                                                <b>Early 19th Century</b> - The 19th century saw Mississippi riverboats meander
                                                                up and float the game to other young Americans. The Gold Rush in
                                                                California brought gold and poker to the west. The popular modern poker game
                                                                variation began to seep its way into literature
                                                                by the mid-1800s. Turbulent times during the American Civil War proved fruitful
                                                                for the game. The war is said to have
                                                                got American soldiers playing a game of online poker in their camps.
                                                            </p>
                                                            <p><b>Late 19th Century</b> - The second half of the 19th century witnessed online
                                                                poker variants’ innovations to make the game more exciting. The flush and
                                                                straight were included in 1850. The game also witnessed various other
                                                                experiments, like lowball versions, split-pot
                                                                <a href="/online-games" className="text-blue"><b>online games</b></a> and ‘community cards.’
                                                                The concept of community cards hung around
                                                                and was seen used in a game of Texas
                                                                Holdem Poker in 1925.
                                                            </p>
                                                            <p><b>1970s</b> - The poker game continued to spread its wings in 1900 and was
                                                                played in riverboats, parlours, and halls. The stigma
                                                                associated with the game began to change. In 1970, Benny Binion decided to
                                                                invite the country’s seven best poker players
                                                                to compete at his casino in Las Vegas, and that was the birth of the World
                                                                Series of Poker (WSOP), a legacy that stands
                                                                tall in the online poker world even today! Though it was WSOP’s unofficial
                                                                first, Doyle
                                                                Brunson and Amarillo Slim played cash
                                                                games and voted the world’s first poker champion and this was the first time
                                                                that the faster poker game variation of Texas
                                                                Hold’em was the preferred game style. Organisers believed that <a
                                                                    href="https://www.pokerbaazi.com/blog/texas-holdem-play-slow/"
                                                                    className="text-blue">No-Limit Texas
                                                                    holdem poker</a> made the game fun, easy to
                                                                watch, and understand. The decision to play Hold’em set it on track to become
                                                                the most popular poker variants of all
                                                                globally.
                                                            </p>
                                                            <p><b>1980s</b> - The 1980s saw game catapult into its first ‘poker boom’ when the
                                                                State of California legalised the poker game. Online Poker
                                                                rooms mushroomed in LA as a result. Then came the Indian Gaming Regulatory Act
                                                                in 1988, passed by the US Congress, which
                                                                legalised casinos on indigenous lands. Game caught on like wildfire on the West
                                                                Coast.
                                                            </p>
                                                            <p><b>1995</b> - An invention by Henry Orenstein was about to change the game
                                                                forever. A video camera that could be mounted on a <a href="/poker-table"
                                                                    className="text-blue"><b>poker
                                                                        table</b></a> to view each player’s hole cards discreetly opened up this game
                                                                broadcast
                                                                channels. Live poker now became a
                                                                spectator sport and quickly got television producers standing in line.
                                                            </p>
                                                            <p><b>1998</b> - On January 1st, 1998, the first hand was dealt on the poker site
                                                                Planet Poker. With the advancement of technology, it
                                                                was no doubt the popularity of online poker games would soar.
                                                            </p>
                                                            <p><b>2003</b> - The second ‘Boom’ spread the game worldwide and encouraged
                                                                more youngsters to test the waters. It was 2003, and it
                                                                was accountant Chris Moneymaker who recorded game glory. A satellite through an
                                                                online poker site that cost him $86
                                                                went on to make him $2,550,000 in the World Series Main Event! He brought alive
                                                                the dream of this game, and millions today try their
                                                                <a href="/poker-hands" className="text-blue"><b>poker hands</b></a> at small-stakes
                                                                satellites in online poker games and online poker games and
                                                                tournaments hoping for their first hefty million!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            Play Poker Online - The Peoples’ Game
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body><div itemType="https://schema.org/Answer">
                                                    <div className="card-body" itemProp="text">
                                                        <p>What made the skilled-based mind game of poker so famous? Indeed a 100
                                                            million-odd players spending hours in front of
                                                            their screen has to be more than just cool. We’ll tell you why:
                                                        </p>
                                                        <h3 className="font-weight-bold font-h3">The Underdog Stories Poker Game</h3>
                                                        <p>The ultimate joy of this game is winning. All the <a href="/tips-and-tricks"
                                                            className="text-blue"><b>poker tips and tricks</b></a>, strategy, and skill used to
                                                            outfox your opponent is
                                                            finally rewarded with a hefty paycheck. The greatest success stories in a
                                                            sporting field are always of the underdog. The
                                                            poker game world has one of its own, the Chris Moneymaker. The tale of an
                                                            amateur
                                                            player who made his first million through
                                                            an online poker satellite in the world’s most prestigious tournament, the
                                                            WSOP Main Event. His accounting
                                                            background helped him calculate the odds and manage his <a href="/poker-chips"
                                                                className="text-blue"><b>poker chips</b></a> forever cementing the need for skill in
                                                            this game.
                                                            The rest is history as thousands of inspired amateurs work their way up in the
                                                            game world, whether via live or <a href="/free-poker" className="text-blue"><b>free
                                                                poker online</b></a>
                                                            poker games today, hoping for their day of ‘poker glory.’
                                                        </p>
                                                        <h3 className="font-weight-bold font-h3">Making Your Grey Matter Count</h3>
                                                        <p>
                                                            Games and hobbies are known to improve one’s brain function. Online poker games
                                                            require a player to study the game, and
                                                            it’s strategies, and the ability to make decisions in split seconds while you
                                                            remain calm and confident. Furthermore,
                                                            online poker variants require you to adapt constantly during the game, and two
                                                            hands are ever to play poker out the
                                                            same. Now, that’s the ‘smart play’ rush that got everyone loving this strategic
                                                            card game.
                                                        </p>
                                                        <h3 className="font-weight-bold font-h3">Online Poker Variants</h3>
                                                        <p>The world of online poker is a definite pull for the game. Today, online
                                                            variants like Texas Hold’em, Pot Limit
                                                            Omaha, and Open Face Chinese make the game fun and exciting. A player gets
                                                            to combine different <a href="/poker-strategy" className="text-blue"><b>poker
                                                                strategy</b></a>
                                                            across several game variations with different wagers and outplay their
                                                            opponents in new ways.
                                                        </p>
                                                        <h3 className="font-weight-bold font-h3">The Glitz and the Glamour of Online Poker</h3>
                                                        <p>This is a global sport, and it takes players to great locations, from the Vegas
                                                            strip to the beaches of Monte Carlo to
                                                            the oriental lands of southeast Asia, who wouldn’t want to work and play poker
                                                            ike this. Professional players set their
                                                            jetting setting poker calendars and take their game places!
                                                        </p>
                                                        <h3 className="font-weight-bold font-h3">The Reads</h3>
                                                        <p>The <a href="https://www.pokerbaazi.com/blog/anatomy-of-a-poker-bluff/"
                                                            className="text-blue"><b>poker bluff</b></a> is an authentic charm of the game. Trying
                                                            to mislead an poker game opponent or look out for their <a href="/poker-tells"
                                                                className="text-blue"><b>poker tells</b></a>
                                                            brings some much-needed heat in live as well as online poker games. Engaging in
                                                            multi-level and metagame strategies
                                                            keeps players guessing and preserves the thrill of the game, every single hand.
                                                        </p>
                                                        <h3 className="font-weight-bold font-h3">The Science Behind Bad Beats</h3>
                                                        <p>The science behind a bad beat in this game is fascinating. A bad beat (when a
                                                            poker
                                                            hand goes wrong) results in what is
                                                            known as ‘tilt.’ A player who enters tilt is known to put themselves in a
                                                            ‘flight or fright’ zone that results in stress
                                                            and cortisol release. Players are aware that if they continue in this state,
                                                            their brain’s higher reasoning functions
                                                            reduce affecting their gameplay. The more you keep yourself calm, the more
                                                            thrilling the game.<br />
                                                            From biological thrills to neuroscience applications and straightforward old
                                                            math, the mental challenges of the game is
                                                            what makes it rewarding and famous today. Welcome to the world’s most vibrant,
                                                            intellectual, and fun gaming community
                                                            that’s now all the rage in <a href="/poker-sites" className="text-blue"><b>best poker
                                                                sites</b></a> of the day.
                                                        </p>
                                                    </div>
                                                </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            Poker’s Hall of Fame
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <p>The history of this game dates back to the 10th century. Since then, the game has
                                                                evolved and soared in popularity. Credit
                                                                to its growth needs to also go to the players who worked relentlessly to master
                                                                the game, its different poker game
                                                                variations, spread their knowledge, and encourage new players. These are the
                                                                dedicated badge wearers of the game of
                                                                poker during their times. The finesse of their skills and mastery of the game is
                                                                what makes them exceptional in history!
                                                                Meet the legends that also made online poker what it is today.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Daniel Negreanu</h3>
                                                            <p>Daniel Negreanu, aka ‘kid poker’, has undoubtedly earned his name in the list of
                                                                top poker players in history. With
                                                                numerous accolades to his name and a whopping $42 million in total live
                                                                earnings, the young Canadian remains a force to
                                                                reckon with. Negreanu is also active on the community front, steering the future
                                                                of poker in the right direction.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Stu Ungar</h3>
                                                            <p>Stu Ungar is probably known as the best Texas Hold’em player in history. Known as
                                                                the ‘Comeback Kid, Ugar remains one of
                                                                the two <a
                                                                    href="https://www.pokerbaazi.com/blog/best-poker-players-on-instagram/"
                                                                    className="text-blue">poker players</a> in history to win the WSOP Main Event
                                                                three times!
                                                                Characterised by the expert timing of his
                                                                bluffs and a notoriously aggressive style to back it, Stu was unstoppable on the
                                                                felts.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Doyle Brunson</h3>
                                                            <p>Doyle Brunson is a legendary veteran player with over 50 playing years to
                                                                his experience. Known as the Texas
                                                                Dolly, Doyle has two WSOP Main Event titles to his name, remains the first
                                                                person to win a $1 million in a online poker
                                                                tournament, and has won 10 WSOP bracelets. Brunson has also played a pivotal
                                                                role in contributing to poker literature by
                                                                authoring several books. A parting game in 2018 announced Doyle’s retirement; he
                                                                went on to finish sixth.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Phil Hellmuth</h3>
                                                            <p>Phil announced the birth of modern legends. The Poker game Brat boasts fifteen
                                                                WSOP bracelets and rightly so for the
                                                                only record. An inductee of the WSOP Hall of Fame, Hellmuth, will go down
                                                                as one of the best casino players in
                                                                poker history.While several names pop up on the list and several new ones are
                                                                added, these legends are sure to have
                                                                their name carried forward over the years; such is their mastery. To the legends
                                                                making game history!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            History of Indian Poker Game
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <p>The Indian subcontinent has a long drawn history with card games. The card games
                                                                carry various influences from its
                                                                colonisation impact from both the West and the East. However, India also
                                                                developed their native card games that garnered
                                                                a following over the years. The Indian online poker variant, <a href="/3-patti"
                                                                    className="text-blue"><b>3 Patti</b></a> was soon introduced in it’s digitised avatar
                                                                in 2006. With
                                                                the advent of the internet, penetration in the smartphone market, and viable
                                                                technology, online poker games soon caught
                                                                on among the mass players in India.
                                                                <br /><br />
                                                                Considering the potential of this voracious appetite, it wasn’t long before
                                                                companies wanted to expose the Indian market
                                                                to an online poker game. Already a wildly popular game in the West and Europe,
                                                                the
                                                                Indian waters were soon tested. Thereby,
                                                                Indian gaming companies began to develop Indian poker sites for playing this fun
                                                                <a href="/card-game-online" className="text-blue"><b>online card game</b></a>.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Online Poker Industry India</h3>
                                                            <p>The interest in online poker games grew with the birth of an application
                                                                developed for social networking site, Facebook
                                                                in 2007. By 2011, it boasted of a 36 million player base, making it the world’s
                                                                largest Indian online poker site. Offline, the
                                                                LIVE poker games continued its battle with the Indian Legal system. The
                                                                universal appeal of the online gaming industry
                                                                offered direct monetisation opportunities and called for a regulatory framework.
                                                                Indian laws had to differentiate
                                                                between games of skill and games of chance to regulate the industry’s monetary
                                                                offerings. The former is one that depends
                                                                principally on the knowledge, training, and experience of the player. With that
                                                                definition emerged the <a href="/real-money-games" className="text-blue"><b>Real Money
                                                                    Gaming</b></a>
                                                                (RMG) online market.The ‘golden moment’ of online poker had thus arrived with
                                                                the regulated RMG sector.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">PokerBaazi as a Leader in the Indian Poker
                                                                Industry
                                                            </h3>
                                                            <p>Given the high growth potential, several existing foreign poker sites set out to
                                                                explore possibilities to set up India’s
                                                                operations. Meanwhile, a home-grown product exposing the Indian market to
                                                                international levels of online poker became
                                                                the need of the hour. Making just that their priority, Pokerbaazi, set out to
                                                                revolutionise the way to play poker online.<br />
                                                                Bootstrapped and led by great visionaries, PokerBaazi soon marked its name in
                                                                the <a href="/indian-poker" className="text-blue"><b>Indian Poker</b></a> Gaming Industry.
                                                                Spearheading technology innovations with astounding product offerings, the brand
                                                                soon grew synonymous as the most
                                                                trusted Indian poker site.
                                                                <br /><br />
                                                                PokerBaazi continued to disrupt the landscape of online poker games with
                                                                crushing new guarantees, fun to play poker variations,
                                                                and for the first of its kind a player loyalty program. Capturing millions of
                                                                players’ hearts, PokerBaazi continues to
                                                                be the flag bearers of the Indian Poker industry.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            Why PokerBaazi To Play Poker Online?
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <h3 className="font-weight-bold font-h3">Tournaments</h3>
                                                            <p>Online poker games are of two basic kinds, poker cash games and tournaments. <a
                                                                href="/poker-tournaments" className="text-blue">Online poker tournaments</a> are
                                                                the most
                                                                popular among poker game players sheerly for their exponential value.
                                                                PokerBaazi.com is known
                                                                for these value tournaments and are,
                                                                the first to host a 1 Cr, 2 Cr, and 5 Cr guarantee tournaments! Inclusion is the
                                                                name of the game at PokerBaazi, and
                                                                there are online poker tournaments at various stakes that fit perfectly for any
                                                                player’s
                                                                poker bankroll management. A newbie to poker
                                                                and worried about putting in real money in India? Pokerbaazi.com has you covered
                                                                with a host of <a href="/free-entry-tournaments" className="text-blue"><b>free entry
                                                                    poker
                                                                    tournaments</b></a> that allow you to practice all your <a href="/poker-skills"
                                                                        className="text-blue"><b>poker skills</b></a> with absolutely
                                                                nothing at stake! What say, be a part of
                                                                the Indian online poker tournament revolution with its pioneer, Pokerbaazi.com?
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Promotions</h3>
                                                            <p>Promotions sure are a deal-breaker when it comes to online poker. PokerBaazi.com
                                                                customises its promotions to deliver
                                                                significant value to your online poker game. From the special <a href="/offers"
                                                                    className="text-blue"><b>poker offers</b></a> that unlock
                                                                great privileges to deposit
                                                                recommendations that make depositing equally fun as withdrawing to the
                                                                ‘always-on offers’ rewarding online poker oddities, the
                                                                propositions pour in year-long and are around the clock. Ride with
                                                                Pokerbaazi.com to value town with great <a href="/promotions"
                                                                    className="text-blue"><b>online poker
                                                                        promotions</b></a>!
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Best Online Poker Gameplay</h3>
                                                            <p>The quintessential gameplay on PokerBaazi. com is what makes it India’s most
                                                                trusted online poker site to play on—beginning
                                                                with one of the best user-interfaces that allows players to navigate their
                                                                game without any hurdles. The
                                                                PokerBaazi app further ensures you can play poker game online on the go and not
                                                                miss
                                                                out on your favourite poker games. The
                                                                additional vertical orientation allows you to free up one hand and not interrupt
                                                                <a href="/gameplay-tutorial" className="text-blue"><b>poker gameplay</b></a>. As key as data
                                                                is for a
                                                                poker site, so should it be for its players. The <a href="/poker-math"
                                                                    className="text-blue"><b>poker math</b></a>, tournament stats, and
                                                                promotion caveats are clearly displayed to
                                                                the user, ensuring transparency. As for all the winning streaks, we don’t want
                                                                you to delay your celebrations;
                                                                enjoy our instant withdrawals!
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">24x7 Customer Support - We Listen With All Our
                                                                Hearts.
                                                            </h3>
                                                            <p>Customer care forms the backbone of an online poker site. Considering the several
                                                                unfamiliar situations a poker player can
                                                                encounter in online poker games, <a href="/faq" className="text-blue"><b>our customer
                                                                    care</b></a> plays a pivotal role in educating and guiding its player base. At
                                                                PokerBaazi.com, our customer care works around the clock to ensure poker players
                                                                receive effective resolutions to any of
                                                                their poker game queries in 24-48 hours. The well-equipped team is just an email
                                                                or
                                                                call away to resolve all your online
                                                                poker queries.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Responsible Gaming - Play Your Cards,
                                                                Right!
                                                            </h3>
                                                            <p>A skill-based poker game in India is bound to
                                                                have
                                                                you enthralled from the word go. The
                                                                thrill of winning and outfoxing your opponents is too enticing in an online
                                                                poker game. Ensuring your spirit for a game
                                                                of online doesn’t turn south, the responsible gaming section on
                                                                pokerbaazi.com equips you with the right checks to
                                                                keep your online poker games on track! Pokerbaazi.com is committed to
                                                                working
                                                                with you and protecting you from the
                                                                game’s anomalies with its responsible gaming policy. Effectively use the
                                                                tools
                                                                of our approach to ensure you enjoy a
                                                                <a href="/responsible-gaming" className="text-blue"><b>responsible gaming</b></a>
                                                                experience.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            Variants of Online Poker Game
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <p> Game Variations certainly add some flavour to the game and keeps the game fun
                                                                by testing you in different ways. Similar
                                                                to live poker, online <a href="/tournament-variants" className="text-blue"><b>poker
                                                                    tournament variants</b></a> serve up to three most popular online
                                                                poker variations, namely, Texas Hold’em,
                                                                PLO, and OFC.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Texas Hold’em</h3>
                                                            <p>The most popular online poker variant is known as <a href="/texas-holdem-poker"
                                                                className="text-blue"><b>Texas Holdem Poker</b></a> Two cards
                                                                known as ‘hole cards’ are dealt face
                                                                down to each player on the table. Five cards known as the community cards are
                                                                opened face up by the dealer in stages.
                                                                The community cards are spread in three stages: first, the flop, three cards,
                                                                second, the turn, consisting of one card
                                                                and third, the river, consisting of one card. Players go through a round of
                                                                wager before each stage of the community
                                                                card being dealt.
                                                                <br /><br />
                                                                The wager contributed by each player has no limit, and therefore, it’s tag
                                                                No-Limit Texas Hold’em. Each online poker
                                                                player must aim to hit their best five-card poker hand from a combination of the
                                                                seven cards, i.e., five community plus
                                                                two hole cards in this game variation. The player who has the best combination
                                                                and is still in the hand (not folded) at
                                                                the end of all the wagering rounds wins the money wagered for the hand, commonly
                                                                known as the pot.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">PLO</h3>
                                                            <p>PLO or Omaha or <a href="/pot-limit-omaha" className="text-blue"><b>Pot Limit Omaha
                                                                Poker</b></a> is another popular online poker variant. In this game variation,
                                                                a poker game player
                                                                is dealt with four ‘hole cards’ face down. Community card; its stages, and
                                                                wagering rounds remain the same as a game of
                                                                Texas Hold’em. However, in this online <a href="/cash-game"
                                                                    className="text-blue"><b>poker cash game</b></a>, the wager amount in each
                                                                round is limited to the pot size, and
                                                                the name Pot-Limit Omaha. A winning hand in this online poker variant is formed
                                                                with
                                                                the best possible five-card combination
                                                                with precisely two of the hole cards plus exactly three of the five community
                                                                cards.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">OFC</h3>
                                                            <p>Open Face Chinese Poker or <a href="/ofc-tutorial" className="text-blue"><b>OFC Poker</b></a>
                                                                is a variant of Chinese poker; an online
                                                                poker variant considered to be
                                                                beginner-friendly as you only need to have a basic knowledge of <a
                                                                    href="/hand-rankings" className="text-blue"><b>poker hand
                                                                        rankings</b></a> to get started! The objective of
                                                                this friendly game variant is to collect individual hand combinations that
                                                                follow hand ranking. Each player is
                                                                dealt a total of thirteen cards and needs to be arranged in 3 hands. The bottom
                                                                and middle hand consist of five-card
                                                                combinations and the top row a three-card combination. To win or for a hand to
                                                                be qualified, your Bottom Hand ≥ Middle
                                                                hand ≥ Top hand as per the <a href="/promotions/open-face-chinese-poker"
                                                                    className="text-blue"><b>Open Face Chinese Poker</b></a> hand ranking rules.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">To win this online poker variant a player
                                                                must:-
                                                            </h3>
                                                            <p>- accumulate points by winning more hands/rows. To win a row, your hand ranking
                                                                needs to be higher than your opponents’
                                                                in the same row.<br />- Collect royalties on premium hands.
                                                            </p>
                                                            <h3 className="font-weight-bold font-h3">Fantasyland</h3>
                                                            <p>Fantasyland is every OFC player's objective. A player is awarded a special bonus
                                                                in this poker variation if their first
                                                                hand has a queen pair or higher and hasn't fouled the rest of their poker hands.
                                                                What does this do?<br />
                                                                - A <a
                                                                    href="https://www.pokerbaazi.com/blog/fantasyland-for-playing-ofc-online-with-friends/"
                                                                    className="text-blue">poker fantasyland</a> bonus gives you a significant
                                                                advantage in the next round since you will receive all 13 cards in one
                                                                go, while the remaining players play out the hand as usual.<br />
                                                                - Receiving all 13 cards in one go certainly helps you arrange and rearrange
                                                                your cards in the best combination possible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            How many different poker games are there?
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <p>There exists a good number of poker games with its own set of rules, and unique <a href="/gameplay-tutorial" className="text-blue"><b>poker gameplay and strategy</b></a>. The most popular poker games played across different regions across the globe are-</p>
                                                            <ul className="pl-3">
                                                                <li>Texas Hold’em poker</li>
                                                                <li><a href="/omaha-poker-rules" className="text-blue"><b>4 Card Omaha poker</b></a></li>
                                                                <li>5 Card Omaha</li>
                                                                <li><a href="/ofc-tutorial" className="text-blue"><b>Open Face Chinese Poker</b></a></li>
                                                                <li>5 Card Draw</li>
                                                                <li><a href="/stud-poker" className="text-blue"><b>7 Card Stud</b></a></li>
                                                                <li><a href="/razz-poker" className="text-blue"><b>Razz Poker</b></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            Which online poker is the best?
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <p>This purely depends on your skill set and experience of playing poker in the long run. However, there exists three popular variations of online poker, available widely in credible online poker platforms, namely Texas Hold’em poker, Pot Limit Omaha and Open Face Chinese poker. You can play free games, <a href="/cash-game" className="text-blue"><b>cash games</b></a> and tournaments of these variations across stakes and win real money.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            Where can I play online poker for free?
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <p>You can play poker online for free on various online poker platforms or apps. If you wish to play online poker on a safe and secure network and enjoy a smooth transition from free games to the world of real money poker, PokerBaazi happens to be a reliable platform to learn and <a href="/poker-online-with-friends" className="text-blue"><b>play poker online with friends</b></a> on a level playing field.
                                                            </p>
                                                            <p>PokerBaazi is India’s biggest poker platform trusted by over 20LAC Indians and therefore, you can be part of a credible environment that allows you to learn and enjoy poker online at your own pace and convenience. The PokerBaazi app hosts <a href="/free-entry-tournaments" className="text-blue"><b>free entry tournaments</b></a> for beginners and learners that rewards  with leaderboard bonus money that players can use to sit on the cash tables without spending any amount of money of their own.</p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            Can I play poker for free?
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <p>Yes, you can play poker for free in a variety of <a href="/poker-app" className="text-blue"><b>online poker apps</b></a> and websites. Credible platforms in India such as PokerBaazi are an excellent choice to play free poker online. Their app is seamless, user friendly, easily navigable for new users to help you <a href="/how-to-play-poker" className="text-blue"><b>learn how to play poker</b></a> without any challenge.</p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="11" className='accordionCard'>
                                                <Accordion.Header>
                                                    <div className="card-link">
                                                        <h2 className="card-header text-blue">
                                                            Poker FAQs
                                                        </h2>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div itemType="https://schema.org/Answer">
                                                        <div className="card-body" itemProp="text">
                                                            <h3 className="font-h3 font-weight-bold">Is poker illegal in India?</h3>
                                                            <p>No, Poker is completely legal in India as per the judgment of the Supreme Court. You can play online poker for stakes and <strong>earn real money</strong> on online poker apps as well as live casinos based in Goa as per the platform you play on abides by government laws. However, certain states such as Assam, Odisha, Nagaland  have passed their own laws that restrict all games for real money.</p>
                                                            <h3 className="font-h3 font-weight-bold">Is poker skill or luck?</h3>
                                                            <p>Poker is predominantly a game of skill with an element of luck that’s common to all sports. Besides learning the rules of the game, a player has to apply strategic <a href="/poker-betting-rules" className="text-blue"><b>poker betting</b></a> based on the cards they are dealt and the players they are up against on a certain table. In order to be a winning player, you must carry emotional intelligence, patience, focus and learn the <a href="/poker-odds-calculator" className="text-blue"><b>pot odds</b></a> and practice consistently.</p>
                                                            <h3 className="font-h3 font-weight-bold">Which is the best poker app?</h3>
                                                            <p>PokerBaazi is one of the oldest poker platforms that hosts both live events and online games of poker on its platform throughout the year. Trusted by over 20LAC players in the country, it has a credible, safe and reliable network that allows beginners and professionals fair opportunities to play poker and <a href="/money-earning-app" className="text-blue"><b>win real money</b></a>. Professionals can go for this platform and play some of the most prestigious tournaments on the national as well as international realm of poker.</p>
                                                            <h3 className="font-h3 font-weight-bold">Can Poker be a career?</h3>
                                                            <p>Certainly, Poker is a legit career choice to make if you dedicate yourself to the game wholeheartedly.  You have to be a consistent learner and play regularly to develop the necessary skills and knowledge about the game well enough to be a winner in this game. You must play regularly to thoroughly understand the nuances of the game and contest with a variety of skillful opponents to learn and ladder up to the winner’s circle.</p>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div data-inviewport="fade-toptobottom" className="pright ptop posabb halfcircle text-right img50"><img src="https://web.pokerbaazicdn.com/asset/images/elephant-right-bg.png" className="img-fluid pull-right mt-0 mt-sm-5 pt-0 pt-sm-5" />
                </div>
            </section>
        </>
    )
}


