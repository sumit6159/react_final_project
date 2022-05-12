import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              laborum vero aperiam? Nihil, reprehenderit voluptatem ratione quas
              amet accusantium temporibus nobis esse ipsam officia porro dolorum
              reiciendis vero incidunt aut!
            </p>
            <a className="btn btn-outline-primary px-3">Contact Us</a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/about.jpeg" alt="about" height='400px' width='400px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
