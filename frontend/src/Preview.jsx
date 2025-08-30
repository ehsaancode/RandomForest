import React from 'react';

const Preview = () => {
  return (
    <div className="space-y-20 px-4 py-12 max-w-6xl mx-auto">
        
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-3xl font-bold">
            Create a Website <br />
            <span className="text-purple-600">Quickly and Easily</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Unicorn Platform helps you create websites from scratch,
            with ready-made section templates or using entire site templates.
          </p>
        </div>
        <div>
          <video
            className="w-full rounded-xl shadow-lg"
            autoPlay
            muted
            loop
            src="https://unicorn-s3.b-cdn.net/279339739-f8a3dc0b-bca7-4e87-97d4-c0a87e809df3.mp4"
          ></video>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
       
        <div >
          <video
            className="w-full rounded-xl shadow-lg"
            autoPlay
            muted
            loop
            src="https://unicorn-s3.b-cdn.net/279339985-44a18a9e-ba64-4cd0-ae44-307b0ae5ab55.mp4"
          ></video>
        </div>
         <div >
          <h2 className="text-3xl font-bold">
            Effortless Content <br />
            <span className="text-purple-600">Customization</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Shape your website’s content while retaining responsive
            design for all screen sizes.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-purple-600">AI Co-Pilot</span>: Your Web Design Assistant
          </h2>
          <p className="mt-4 text-gray-600">
            From building to enhancing, let AI take your website to the next level.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-purple-600 rounded-2xl border-1 hover:bg-purple-700 hover:text-white transition">
            Try Now
          </button>
        </div>
        <div>
         <video
            className="w-full rounded-xl shadow-lg"
            autoPlay
            muted
            loop
            src="https://unicorn-s3.b-cdn.net/279340113-851d6141-bffd-4b0d-9f66-4143be3db140.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Preview;