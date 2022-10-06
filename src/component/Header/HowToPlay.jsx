import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../../App.css';
import Banner from "./Banner";
import { Section1 } from "../Section1";
import { Section2 } from "../Body/Section2";
import { QuickLink } from "../QuickLink/QuickLink";

function HowToPlay() {
    return (
        <>
            <section className="newstrigersec py-2 py-md-3 text-center ">
                <div className="container text-uppercase">
                    <h2 className="mb-0 p-0">This is 'How To Play' Section</h2>
                </div>
            </section>
            <Banner />
            <Section1 />
            <Section2 />
            <QuickLink />
        </>
    );
}

export default HowToPlay;