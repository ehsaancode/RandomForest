import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="bg-linear-to-tr from-white from-70% to-pink-100 to-90% pt-16">
      <div className="flex flex-row gap-3 justify-center">
        <img
          className="w-25"
          src="https://unicorn-images.b-cdn.net/467e23f7-778c-4586-bafc-bf0c86bba7a5"
          alt=""
        />
        <img
          className="w-25"
          src="https://unicorn-images.b-cdn.net/702e79dc-32cf-4790-a6e4-e1053feddb00"
          alt=""
        />
      </div>
      <div className="w-full min-h-screen pt-4 px-4 sm:px-8 max-w-7xl mx-auto text-center">
        <h1 className="fonttext-4xl sm:text-5xl -extrabold bg-clip-text text-purple-700">
          Create a Website
        </h1>
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">
          for Your Project Fast
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Unicorn Platform is an <strong>AI website builder</strong> that helps
          to quickly create websites without design or development skills for{" "}
          <strong>SaaS, Apps, Directories, Blogs, Personal pages</strong>, and
          more.
        </p>

        <div className="mt-8">
          <button className="inline-block rounded-full p-[4px] bg-[conic-gradient(at_top_left,_theme('colors.yellow.400'),_theme('colors.pink.400'),_theme('colors.yellow.400'),_theme('colors.green.400'),_theme('colors.cyan.400'))] shadow-lg">
            <div className="bg-white/70 backdrop-blur-md rounded-full px-8 py-4 text-center">
              <span className="text-gray-900 font-semibold text-sm sm:text-base">
                Create Your Website
              </span>
            </div>
          </button>
          <p className="mt-2 text-sm text-gray-300">Get free lifetime plan</p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-yellow-100 border border-purple-300 shadow-sm">
            <div className="flex -space-x-3">
              <img
                src="https://unicorn-images.b-cdn.net/ddb403eb-1678-40b8-8d33-efdeee3ccf44"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://unicorn-images.b-cdn.net/acd510d2-fa4c-45ba-b70c-99bbe97a4373"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://unicorn-images.b-cdn.net/2941146d-83a2-43d8-a3ce-90c421d5546c"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://unicorn-images.b-cdn.net/129f8a74-35f9-406c-8b50-5f384670678f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            <div className="justify-center">
              <div className="flex items-center -space-x-1 flex-wrap">
                <img
                  src="https://unicorn-images.b-cdn.net/5ac75c92-6df5-44d8-9740-460164f0c2ae"
                  className="w-6 h-6"
                />
                <img
                  src="https://unicorn-images.b-cdn.net/e5a6cd04-1c02-4d7c-8f56-0aef051efc5b"
                  className="w-6 h-6"
                />
                <img
                  src="https://unicorn-images.b-cdn.net/a592cb93-3616-4029-b0f7-0ef2d461f810"
                  className="w-6 h-6 rounded-2xl"
                />
                <span className="text-purple-500 ml-5 text-lg">★★★★★</span>
              </div>
              <span className="text-gray-600 text-sm">
                Loved by <strong className="text-gray-800">100,000+</strong>{" "}
                founders
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto mt-10">
          <img
            src="https://unicorn-images.b-cdn.net/c77c0ba4-45b8-41ed-9977-8f65dde5393e?optimizer=gif"
            className="w-full h-auto"
          />

          <div className=" absolute top-[7%] left-[12.5%] w-[75%] h-[80%] rounded-xl overflow-hidden">
            <video
              src="https://unicorn-s3.b-cdn.net/279338881-ef608e5c-1891-4401-8557-09348a62eeed.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-40">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Really Easy To Use
          </h1>
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mt-1">
            Website Builder
          </h1>
          <p className="mt-4 mb-10 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Unicorn Platform is a <strong>powerful website builder</strong> for <br />
            startups, solo entrepreneurs, and hackers. Try it for free.
          </p>


          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-2 mb-8">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-30 mb-4"
                src="https://unicorn-images.b-cdn.net/1e79e677-2226-47d1-95c6-2937da789b0e?optimizer=gif"
                alt=""
              />
              <h3 className="text-lg font-semibold">AI-Powered</h3>
              <p className="text-sm">
                Build a website or make <br /> changes with prompts
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                className="w-30 mb-4"
                src="https://unicorn-images.b-cdn.net/c516565c-425c-449d-80d9-a5660edfd8c8?optimizer=gif"
                alt=""
              />
              <h3 className="text-lg font-semibold">100% No Code</h3>
              <p className="text-sm">
                No need to code to build a <br />powerful website
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                className="w-30 mb-4"
                src="https://unicorn-images.b-cdn.net/e912fa9c-a20f-4621-bd47-3d6b23e6f9cb?optimizer=gif"
                alt=""
              />
              <h3 className="text-lg font-semibold">UI & UX-Ready</h3>
              <p className="text-sm">
                No need to be a designer to <br /> make a website
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                className="w-30 mb-4"
                src="https://unicorn-images.b-cdn.net/a9fa6535-caf1-4a4c-8cf2-8ef3d6f4288a?optimizer=gif"
                alt=""
              />
              <h3 className="text-lg font-semibold">Custom Code</h3>
              <p className="text-sm">
                If you need more, you can <br /> add custom code
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <img
                className="w-30 mb-4"
                src="https://unicorn-images.b-cdn.net/cd5933db-290e-452d-b774-bcb40a643e4c?optimizer=gif"
                alt=""
              />
              <h3 className="text-lg font-semibold">Create a Blog</h3>
              <p className="text-sm">
                Attract your audience by <br /> creating a blog
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                className="w-30 mb-4"
                src="https://unicorn-images.b-cdn.net/57f94bcc-c3ec-4114-8286-9e5a25f1acaa?optimizer=gif"
                alt=""
              />
              <h3 className="text-lg font-semibold">Accept Payments</h3>
              <p className="text-sm">Accept payments with secure <br /> Stripe</p>
            </div>
          </div>
        </div>
        <button className="my-10 px-8 bg-white text-purple-800 font-semibold rounded-xl border-2 py-4 hover:bg-purple-700 hover:text-white transition">
            Get Started Today
          </button>
      </div>

      <Hero />
    </div>
  );
};

export default Home;
