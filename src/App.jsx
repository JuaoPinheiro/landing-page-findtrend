/* eslint-disable no-unused-vars */
import React from "react";
import * as C from "../src/styles/style";
import { BsCheck } from "react-icons/bs";
import Logo from "../src/assets/logo.png";
import LogoBlack from "../src/assets/logob.png";
import Tab from "../src/assets/apps.png";
import Group from "../src/assets/find.png";
import Group1 from "../src/assets/groupleft.png";
import Group2 from "../src/assets/groupright.png";

import Brand1 from "../src/assets/brand1.png";
import Brand2 from "../src/assets/brand2.png";
import Brand3 from "../src/assets/brand3.png";
import Brand4 from "../src/assets/brand4.png";
import Brand5 from "../src/assets/brand5.png";
import Brand6 from "../src/assets/brand6.png";
import Brand7 from "../src/assets/brand7.png";
import Brand8 from "../src/assets/brand8.png";
import Brand9 from "../src/assets/brand9.png";
import Brand10 from "../src/assets/brand10.png";
import Brand11 from "../src/assets/brand11.png";
import Brand12 from "../src/assets/brand12.png";
import Brand13 from "../src/assets/brand13.png";
import Brand14 from "../src/assets/brand14.png";
import Brand15 from "../src/assets/brand15.png";
import Brand16 from "../src/assets/brand16.png";

import Face from "../src/assets/face.png";
import Tw from "../src/assets/twitter.png";
import Dri from "../src/assets/dri.png";
import Pin from "../src/assets/pinterest.png";
import Eme from "../src/assets/eme.png";
import Red from "../src/assets/reddit.png";
import Vk from "../src/assets/vk.png";
import Lin from "../src/assets/linkedin.png";
import Tw1 from "../src/assets/tweet1.png";
import Tw2 from "../src/assets/tweet2.png";
import Tw3 from "../src/assets/tweet3.png";

function App() {
  return (
    <C.Container>
      <section className="section-1">
        <header>
          <div>
            <img className="logo" src={Logo} alt="" />
            <div className="div-links">
              <a href="">About</a>
              <a href="">How it work</a>
              <a href="">Pricing</a>
              <a href="">Solution</a>
              <a href="">Features</a>
            </div>

            <div className="div-btn">
              <a href="">Login</a>
              <button>Register</button>
            </div>
          </div>
        </header>

        <div className="text-section1">
          <h1>
            Minimize your tabs.
            <br /> Find the trends!
          </h1>
          <p>
            Don’t let your computer memories consumes all of those browser tabs.
            <br />
            Findtrend let you gathers all of your favorite website into one
            place.
          </p>
          <button>Get Started 🔥</button>
          <img className="four-socials" src={Tab} alt="" />
        </div>
      </section>

      <section className="section-2">
        <div>
          <h1>Open new tabs is sh*t</h1>
          <div className="div-group">
            <img className="image-group1" src={Group1} alt="" />
            <div className="div-find">
              <img src={Group} alt="" />
            </div>
            <img className="image-group2" src={Group2} alt="" />
          </div>
          <p>
            A solution for your browser tabs and don’t make your device get
            slower over time. Get
            <br /> ease and faster to discover a trend with just one tab.
          </p>
        </div>
      </section>

      <section className="section-3">
        <div className="text-findtrend">
          <h1>
            Findtrend helps you to increase your productivity and reduce your
            computers memory load,
            <span>
              an application that can fulfill your daily browsing needs.
            </span>
          </h1>
        </div>

        <div className="div-brands">
          <h1>Findtrend make +1000 Startup grow</h1>

          <div>
            <img src={Brand1} alt="" />
            <img src={Brand2} alt="" />
            <img src={Brand3} alt="" />
            <img src={Brand4} alt="" />
            <img src={Brand5} alt="" />
            <img src={Brand6} alt="" />
            <img src={Brand7} alt="" />
            <img src={Brand8} alt="" />
            <img src={Brand9} alt="" />
            <img src={Brand10} alt="" />
            <img src={Brand11} alt="" />
            <img src={Brand12} alt="" />
            <img src={Brand13} alt="" />
            <img src={Brand14} alt="" />
            <img src={Brand15} alt="" />
            <img src={Brand16} alt="" />
          </div>
        </div>

        <div className="div-platform">
          <h1>All platform connect to Findtrend</h1>
          <div className="images-socials">
            <img src={Face} alt="" />
            <img src={Tw} alt="" />
            <img src={Dri} alt="" />
            <img src={Pin} alt="" />
            <img src={Eme} alt="" />
            <img src={Red} alt="" />
            <img src={Vk} alt="" />
            <img src={Lin} alt="" />
          </div>

          <div className="div-tweets">
            <img src={Tw1} alt="" />
            <img src={Tw2} alt="" />
            <img src={Tw3} alt="" />
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="main-section-4">
          <h1 className="h1-get">Get your best deal</h1>

          <div className="div-prices">
            <div className="price">
              <h1>Personal</h1>
              <p>Special first packet for all</p>

              <h2>
                $8
                <span>/Month</span>
              </h2>

              <div className="advantages">
                <div>
                  <BsCheck className="icon-check" />
                  <p>Up to 5 page each group</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>Up to 10 group page</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>5 Days group page saved</p>
                </div>
              </div>

              <button>Start Free Trial</button>
            </div>

            <div className="price">
              <h1>Regular</h1>
              <p>Recommended for personal pro</p>

              <h2>
                $20
                <span>/Month</span>
              </h2>

              <div className="advantages">
                <div>
                  <BsCheck className="icon-check" />
                  <p>Up to 5 page each group</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>Download page up to 20 page</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>Up to 10 group page</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>15 Days group page saved</p>
                </div>
              </div>

              <button>Start Free Trial</button>
            </div>

            <div className="price">
              <h1>Premium</h1>
              <p>Packet for Startup & Company</p>

              <h2>
                $48
                <span>/Month</span>
              </h2>

              <div className="advantages">
                <div>
                  <BsCheck className="icon-check" />
                  <p>Unlimited group pagesp</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>Unlimited download page</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>Unlimited page each group</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>Customize sorting group pages</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>Customize group page name</p>
                </div>

                <div>
                  <BsCheck className="icon-check" />
                  <p>30 Days group page saved</p>
                </div>
              </div>

              <button>Start Free Trial</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-5">
        <div>
          <h1>
            Join us on email for
            <br /> <span>more trending topics</span>
          </h1>
          <button>Join Now </button>
        </div>
      </section>

      <footer>
        <img src={LogoBlack} alt="" />
        <div>
          <a>Privacy Policy</a>
          <a>Terms and Conditions</a>
          <a>Contact Us</a>
          <a>Careers</a>
        </div>
      </footer>
    </C.Container>
  );
}

export default App;
