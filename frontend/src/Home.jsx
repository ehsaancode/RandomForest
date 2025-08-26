import React from 'react';
import Hero from './Hero';

const Home = () => {
  return (
    <div className='bg-linear-to-br from-white from-30% to-pink-100 to-90% pt-16'>
        <div className='flex flex-row gap-3 justify-center'>
            <img className='w-25' src="https://unicorn-images.b-cdn.net/467e23f7-778c-4586-bafc-bf0c86bba7a5" alt="" />
            <img className='w-25' src="https://unicorn-images.b-cdn.net/702e79dc-32cf-4790-a6e4-e1053feddb00" alt="" />
        </div>
    <div className="w-full min-h-screen pt-4 px-4 sm:px-8 max-w-7xl mx-auto text-center">
      <h1 className="fonttext-4xl sm:text-5xl -extrabold bg-clip-text text-purple-700">
        Create a Website
      </h1>
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">for Your Project Fast</h1>

      <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
        Unicorn Platform is an <strong>AI website builder</strong> that helps to quickly create
        websites without design or development skills for <strong>SaaS, Apps, Directories, Blogs,
        Personal pages</strong>, and more.
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
        <img src="https://unicorn-images.b-cdn.net/ddb403eb-1678-40b8-8d33-efdeee3ccf44" className="w-10 h-10 rounded-full border-2 border-white"/>
        <img src="https://unicorn-images.b-cdn.net/acd510d2-fa4c-45ba-b70c-99bbe97a4373" className="w-10 h-10 rounded-full border-2 border-white"/>
        <img src="https://unicorn-images.b-cdn.net/2941146d-83a2-43d8-a3ce-90c421d5546c" className="w-10 h-10 rounded-full border-2 border-white"/>
        <img src="https://unicorn-images.b-cdn.net/129f8a74-35f9-406c-8b50-5f384670678f" className="w-10 h-10 rounded-full border-2 border-white"/>
        </div>

        <div className="justify-center">
            <div className='flex items-center -space-x-1 flex-wrap'>
                <img src="https://unicorn-images.b-cdn.net/5ac75c92-6df5-44d8-9740-460164f0c2ae" className="w-6 h-6"/>
                <img src="https://unicorn-images.b-cdn.net/e5a6cd04-1c02-4d7c-8f56-0aef051efc5b" className="w-6 h-6"/>
                <img src="https://unicorn-images.b-cdn.net/a592cb93-3616-4029-b0f7-0ef2d461f810" className="w-6 h-6 rounded-2xl"/>
            <span className="text-purple-500 ml-5 text-lg">★★★★★</span>
            </div>
            <span className="text-gray-600 text-sm">Loved by <strong className="text-gray-800">100,000+</strong> founders</span>
        </div>
    </div>
</div>

<div className="relative w-full max-w-4xl mx-auto mt-10">
  <img src="https://unicorn-images.b-cdn.net/c77c0ba4-45b8-41ed-9977-8f65dde5393e?optimizer=gif" className="w-full h-auto"/>

  <div className=" absolute top-[7%] left-[12.5%] w-[75%] h-[80%] rounded-xl overflow-hidden">
    <video src="https://unicorn-s3.b-cdn.net/279338881-ef608e5c-1891-4401-8557-09348a62eeed.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover"/>
  </div>
</div>

      <div className="mt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Really Easy To Use
        </h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
          Website Builder
        </h1>
        <p className="mt-4 mb-10 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Unicorn Platform is a powerful website builder for startups, solo entrepreneurs, and
          hackers. Try it for free.
        </p>
      </div>
      </div>

      <Hero />
    </div>
  );
};

export default Home;