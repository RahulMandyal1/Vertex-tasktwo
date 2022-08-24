import React from "react"
import Card from "./Card"
import "./testimonial.css"
import Heading from "../heading/Heading";

function Testimonial() {
  return (
    <section className="testimonial-container">
      <Heading  headingText="Love using vertex"/>
      <div className="testimonial-wrapper">
        <Card
          width="flex-30"
          userImage="https://preview.colorlib.com/theme/vertex/images/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp"
          userQuote="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          userName="Rahul Thakur"
          userProfession="Civil Engineer"
        />

        <Card
          width="flex-30"
          userImage="https://preview.colorlib.com/theme/vertex/images/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp"
          userQuote="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          userName="Rahul Thakur"
          userProfession="Civil Engineer"
        />
        <Card
          width="flex-30"
          userImage="https://preview.colorlib.com/theme/vertex/images/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp"
          userQuote="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          userName="Rahul Thakur"
          userProfession="Civil Engineer"
        />
      </div>
    </section>
  );
}

export default Testimonial;
