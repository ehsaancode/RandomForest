import React from 'react';

const Hero = () => {
  const projects = [
    {src: 'https://unicorn-images.b-cdn.net/65f1c5a7-9bb3-4a7a-80f7-854f3fd1498b?optimizer=gif'},
    {src: 'https://unicorn-images.b-cdn.net/32421ec4-8997-4cc8-85e5-7e2b7674bff1?optimizer=gif'},
    {src: "https://unicorn-images.b-cdn.net/70bb38f5-3503-493a-a18d-a42cc7698e76?optimizer=gif"},
    {src: 'https://unicorn-images.b-cdn.net/70bb38f5-3503-493a-a18d-a42cc7698e76?optimizer=gif'},
    {src: 'https://unicorn-images.b-cdn.net/7a8c64f3-d0a0-42cd-ba19-8e9e4f82047b?optimizer=gif'},
    {src: 'https://unicorn-images.b-cdn.net/d7d07898-4c45-478b-a6f2-d9026d26c095?optimizer=gif'},
    {src: 'https://unicorn-images.b-cdn.net/2b72a792-b47f-4df3-bbf9-8149772a1a45?optimizer=gif'},
    {src: 'https://unicorn-images.b-cdn.net/4f7fb38c-7369-4ad3-babc-64efcc853892?optimizer=gif'},
    {src: 'https://unicorn-images.b-cdn.net/acddd871-d94b-4d76-b8b6-431b9d885308?optimizer=gif'},
    
  ];

  return (
    <section className="bg-linear-to-br from-red-950 from-30% to-black to-90% py-20">
        <div className='pb-10 text-center'>
            <h1 className='text-4xl pb-2 sm:text-5xl font-extrabold bg-clip-text text-white'>Built with Unicorn Platform</h1>
            <p className=' text-sm text-gray-300'>We are serving over 104,000 fantastic websites.</p>

        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {projects.map((project, index) => (
          <a key={index} className="block aspect-[16/10] overflow-hidden rounded-xl  shadow-purple-400 hover:shadow-[0_0_60px_10px_rgba(16,85,247,0.5)] transition-shadow duration-300 ease-in-out">
            <img src={project.src} className="w-full h-auto  top-0 left-0 transition-transform ease-in-out duration-1000 hover:-translate-y-100"/>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;