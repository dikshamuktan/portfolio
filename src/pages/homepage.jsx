import react from "react";

function Homepage() {
  return (
    <div className="page container ml-8 font-serif">
      {/* hamepage */}
      <div className="home  flex  gap-20 ">
        <div className="left  ">
          {/* <ul className="flex  gap-4">
            <a href="https://facebook.com/">facebook</a>
            <a href="https://instagram.com/">instagram</a>
            <a href="https://linkedin.com/">linkedin</a>
          </ul> */}
          <ul className="intro ">
            <h1 className="text-5xl font-bold ">Hey there !! </h1>
            <p className="mid text-2xl">it's Diksha Muktan</p>

            <p className=" text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              eumrerum voluptatibus nisi ab odio asperiores voluptates iure
              laboriosam reiciendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id, aliquid.
            </p>
          </ul>
        </div>
        <div>
          <img className="my-img rounded-full" src="/public/my-img.jpeg" />
        </div>
      </div>
      {/* aboutpage */}
      <div className="aboutpage  flex flex-col justify-center ">
        <p className="about text-4xl font-bold text-center ">About Me</p>
        <div className="flex gap-10 mt-10 ml-8">
          <div>
            <img
              style={{ height: "400px", width: "300px" }}
              src="/public/my-img.jpeg"
            />
          </div>
          <div className="about-right flex flex-col gap-5">
            <div>
              <p>I am an Full Stack Developer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
            <div className=" flex about-skill gap-5 flex-col">
              <div className="skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="skill">
                <p>JavaScript</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="skill">
                <p>Node Js</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="skill">
                <p>React Js</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
            <button class="download">Download CV</button>
          </div>
        </div>
      </div>
      <div id="portfolio" class="projects">
        <div>
          <h3 class="extra text-3xl">What I Have Done</h3>
          <br />
          <p class="big text-center">My Projects</p>
        </div>
        <div class="my_projects">
          <div>
            <img
              class="project_one"
              src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
          <div>
            <img
              class="project_one"
              src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
          <div>
            <img
              class="project_one"
              src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
