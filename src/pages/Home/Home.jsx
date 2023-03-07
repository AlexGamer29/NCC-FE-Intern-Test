import React, { useState } from "react";
import { Sidebar, Footer } from "../../components";
import "./Home.css";

import { Logo, Css, Html, Url } from "../../constants/image";

function Home() {
  return (
    <>
      <div className="container">
        <Sidebar/>
        <main className="main">
          <img className="main__logo" src={Logo} alt="img" />
          <section>
            <div className="main__introduction">
              <strong className="main__introduction-title">
                Lorem ipsum dolor sit asmet?
              </strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
              </p>
            </div>
          </section>

          <section>
            <div className="main__content">
              <div className="main__content-detail">
                <div className="content__detail-heading">
                  <strong>Lorem Ipsum is simply dummy</strong>
                </div>
                <div className="content__text">
                  <img className="content__text-img" src={Css} alt="img" />
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
              <div className="main__content-detail">
                <div className="content__detail-heading">
                  <strong>Lorem Ipsum is simply dummy</strong>
                </div>
                <div className="content__text">
                  <img className="content__text-img" src={Html} alt="img" />
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
              <div className="main__content-detail">
                <div className="content__detail-heading">
                  <strong>Lorem Ipsum is simply dummy</strong>
                </div>
                <div className="content__text">
                  <img className="content__text-img" src={Url} alt="img" />
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
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
