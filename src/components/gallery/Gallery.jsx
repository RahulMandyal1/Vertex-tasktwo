import React from "react";
import Heading from "../heading/Heading";
import "./gallery.css";

function Gallery() {
  return (
    <section className="gallery-container">
      <Heading headingText="We love to share our accomplishments" />
      <div className="photos-wrapper">
        <figure className="full-image">
          <img
            src="https://preview.colorlib.com/theme/vertex/images/ximage_1.jpg.pagespeed.ic.VFgWXX8Nfk.webp"
            alt="first-image"
          />
        </figure>
        <div className="picture-col-container">
          <figure>
            <img
              src="https://preview.colorlib.com/theme/vertex/images/image_2.jpg"
              alt="second-image"
            />
          </figure>
          <figure>
            <img
              src="https://preview.colorlib.com/theme/vertex/images/image_3.jpg"
              alt="third-image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
