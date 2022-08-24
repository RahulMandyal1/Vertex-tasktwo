import React from "react";
import Card from "./Card";
import Heading from "../heading/Heading";
import "./blog.css";

function Blog() {
  return (
    <section className="blog-container">
      <Heading headingText={"Our Blog"} />
      <div className="blog-wrapper">
        <Card
          width={"flex-23"}
          articleTitle="Even the all-powerful Pointing has no control about the blind texts"
          commentsCount={"3"}
          date={"June 29 , 2022"}
          articleUser={"Admin"}
          articleImageUrl={
            "https://preview.colorlib.com/theme/vertex/images/ximage_6.jpg.pagespeed.ic.9bp8-gT870.webp"
          }
        />
        <Card
          width={"flex-23"}
          articleTitle="Even the all-powerful Pointing has no control about the blind texts"
          commentsCount={"3"}
          date={"June 29 , 2022"}
          articleUser={"Admin"}
          articleImageUrl={
            "https://preview.colorlib.com/theme/vertex/images/ximage_5.jpg.pagespeed.ic.iKm4ByX0ak.webp"
          }
        />
        <Card
          width={"flex-23"}
          articleTitle="Even the all-powerful Pointing has no control about the blind texts"
          commentsCount={"3"}
          date={"June 29 , 2022"}
          articleUser={"Admin"}
          articleImageUrl={
            "https://preview.colorlib.com/theme/vertex/images/ximage_8.jpg.pagespeed.ic.7s90HPsA1Q.webp"
          }
        />
        <Card
          width={"flex-23"}
          articleTitle="Even the all-powerful Pointing has no control about the blind texts"
          commentsCount={"3"}
          date={"June 29 , 2022"}
          articleUser={"Admin"}
          articleImageUrl={
            "https://preview.colorlib.com/theme/vertex/images/ximage_7.jpg.pagespeed.ic.LpuSpxKrZB.webp"
          }
        />
      </div>
    </section>
  );
}

export default Blog;
