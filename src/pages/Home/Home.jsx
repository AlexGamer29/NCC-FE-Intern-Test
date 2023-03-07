import React from "react";
import { Sidebar, Footer } from "../../components";
import "./Home.css";

import { Logo, Css, Html, Url } from "../../constants/image";

function Home() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <main class="main">
          <img class="main__logo" src={Logo} />
          <section>
            <div class="main__introduction">
              <strong class="main__introduction-title">
                Lorem Ipsum is simply dummy text ?
              </strong>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </section>

          <section>
            <div className="main__content">
              <div class="main__content-detail">
                <div class="content__detail-heading">
                  <strong>Lorem Ipsum is simply dummy</strong>
                </div>
                <div class="content__text">
                  <img class="content__text-img" src={Css} alt="img" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
              <div class="main__content-detail">
                <div class="content__detail-heading">
                  <strong>Lorem Ipsum is simply dummy</strong>
                </div>
                <div class="content__text">
                  <img class="content__text-img" src={Html} alt="img" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
              <div class="main__content-detail">
                <div class="content__detail-heading">
                  <strong>Lorem Ipsum is simply dummy</strong>
                </div>
                <div class="content__text">
                  <img class="content__text-img" src={Url} alt="img" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
