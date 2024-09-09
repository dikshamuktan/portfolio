function Homepage() {
  return (
    <div className="page">
      <div className="home container flex flex-row justify-center gap-20 ">
        <div className="left ml-8 p-4 align-center ">
          <ul className="flex gap-4">
            <a href="https://facebook.com/">
              <img
                style={{ height: "40px", width: "40px" }}
                src="/public/facebook.jpeg
            "
              />
            </a>
            <a href="https://instagram.com/">
              <img
                style={{ height: "50px", width: "50px" }}
                src="/public/instagram.jpeg
            "
              />
            </a>
            <a href="https://linkedin.com/">
              <img
                style={{ height: "50px", width: "50px" }}
                src="/public/link.jpeg
            "
              />{" "}
            </a>
          </ul>
          <ul>
            <h1 className="intro">
              Hey there !! <br />
              <span className="mid">it's Diksha Muktan</span>
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              eumrerum voluptatibus nisi ab odio asperiores voluptates iure
              laboriosam reiciendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id, aliquid.
            </p>
          </ul>
        </div>
        <div>
          <img
            className="rounded-full"
            style={{ width: "400px", height: "400px" }}
            src="/public/my-pic.jpeg"
          />
        </div>
      </div>
      <div className="container flex flex-col justify-center">
        <p className="about text-4xl font-bold text-center ">About Me</p>
        <div className="flex gap-10 mt-10 ml-8">
          <div>
            <img
              style={{ height: "500px", width: "400px" }}
              src="/public/my-pic.jpeg"
            />
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            corporis soluta cupiditate qui accusamus esse, quidem sunt optio
            recusandae incidunt.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
