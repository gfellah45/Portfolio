import React from "react";
import Layout from "../components/layout";

import Card from "../components/card";

const projects = () => {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-2 justify-items-center ">
        <Card
          image={
            "https://res.cloudinary.com/gfellah45/image/upload/v1605532439/Portfolio/iPhone_SE_-_1_z5syo6.png"
          }
          company={"Livrite HealthCare"}
          project={"Bimrec "}
          url={"https://bimrec-frontend-svc.herokuapp.com/"}
        />
        <Card
          image={
            "https://res.cloudinary.com/gfellah45/image/upload/v1605537344/Portfolio/screencapture-devcareer2-netlify-app-2020-11-16-15_32_34_v0qb9i.png"
          }
          company={"Dev Career"}
          project={"WebsiteV2 "}
          url={"https://devcareer2.netlify.app/"}
        />
        <Card
          image={
            "https://res.cloudinary.com/gfellah45/image/upload/v1605613253/Portfolio/screencapture-localhost-8000-2020-11-17-12_40_28_qg8yzw.png"
          }
          company={"Jerry Aaron"}
          project={"Personal Portfolio"}
          url={"jerryaaron.netlify.app"}
        />
      </div>
    </Layout>
  );
};

export default projects;
