import React from "react";
import Layout from "../components/layout";
import Skillscard from "../components/skillscard";

function skills() {
  return (
    <Layout>
      <div>
        <h2 className="text-4xl text-white font-bold font-portfoliotext">
          My Development Stack Includes:
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-7 justify-items-center mt-16 ">
          <Skillscard
            name="HTML5"
            time={0.1}
            image="https://res.cloudinary.com/gfellah45/image/upload/v1605602340/Portfolio/Vector_3_f2lg8v.svg"
          />
          <Skillscard
            name="CSS3"
            time={0.2}
            image="https://res.cloudinary.com/gfellah45/image/upload/v1605602571/Portfolio/Vector_4_xhj2fp.svg"
          />
          <Skillscard
            name="ReactJS"
            time={0.3}
            image="https://res.cloudinary.com/gfellah45/image/upload/v1605602718/Portfolio/Group_7_k5cnm2.svg"
          />
          <Skillscard
            name="GatsbyJS"
            time={0.4}
            image="https://res.cloudinary.com/gfellah45/image/upload/v1605602572/Portfolio/Vector_6_wvpii8.svg"
          />
          <Skillscard
            name="NextJS"
            time={0.5}
            image="https://res.cloudinary.com/gfellah45/image/upload/v1605602572/Portfolio/Vector_5_f9xpe3.svg"
          />
          <Skillscard
            name="Firebase"
            time={0.6}
            image="https://res.cloudinary.com/gfellah45/image/upload/v1605602572/Portfolio/Group_8_hkk1rp.svg"
          />
          <Skillscard
            name="Tailwindcss"
            time={0.7}
            image="https://res.cloudinary.com/gfellah45/image/upload/v1605605672/Portfolio/Group_1_xb1rq5.svg"
          />
        </div>
      </div>
    </Layout>
  );
}

export default skills;
