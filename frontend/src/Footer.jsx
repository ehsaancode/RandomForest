import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <img className='w-8 pb-4' src="https://unicorn-images.b-cdn.net/7dcabea3-9657-4d11-9487-f7444d349c9d?optimizer=gif" alt="" />
          <p className="text-sm mb-2">Unicorn Platform is an easy-to-use website builder for busy founders.</p>
          <p className="text-sm">
            We are a part of the MarsX dev community.
          </p>
          <p className="text-sm mt-2">Led by @johnrushx</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Website Builder</li>
            <li>Showcase</li>
            <li>Changelog</li>
            <li>Pricing</li>
            <li>Status</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Join on Discord</li>
            <li>White Label</li>
            <li>Media Kit</li>
            <li>Email Us</li>
            <li>Affiliate Program</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Compare with Wix</li>
            <li>Compare with Webflow</li>
            <li>Compare with WordPress</li>
            <li>Compare with Unbounce</li>
            <li>Website for Mobile Apps</li>
            <li>Website for SaaS</li>
            <li>Website for NFT</li>
            <li>Chat GPT website builder</li>
            <li>Interactive AI</li>
            <li>Free AI landing page generator</li>
            <li>Roast your website</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Mars Verse</h4>
          <ul className="space-y-2 text-sm">
            <li>John Rush</li>
            <li>MarsX</li>
            <li>DevHunt (Weekly Best Dev Tools)</li>
            <li>SeoBOT (Automate Entire SEO)</li>
            <li>Marketsy AI (Sell Digital Products)</li>
            <li>Float UI (AI Tailwind UI Kit)</li>
            <li>Fleexy (Microapps Builder)</li>
            <li>UI generator [freebie]</li>
            <li>Submit website to directories</li>
            <li>allGPTs (Directory of GPTs)</li>
            <li>IndexRusher (fast site indexing)</li>
            <li>RapidForms (online form builder)</li>
            <li>Directory Launchpad</li>
            <li>RushHoster</li>
            <li>SaaS Emailer</li>
            <li>Wrapifai</li>
          </ul>
        </div>
      </div>
      <div className="mb-4 sm:mb-0">
          <p className='font-bold'>Say 'hi'</p>
          <div className='flex flex-row w-4 pt-4 gap-3 pl-0'>
            <img className='filter brightness-0 invert' src="https://cdn.unicornplatform.com/static/img/icons/social/color/instagram.svg" alt="" />
            <img className='filter brightness-0 invert' src="https://cdn.unicornplatform.com/static/img/icons/social/color/facebook-only-letter.svg" alt="" />
            <img className='filter brightness-0 invert' src="https://cdn.unicornplatform.com/static/img/icons/social/color/product-hunt.svg" alt="" />
            <img className='filter brightness-0 invert' src="https://cdn.unicornplatform.com/static/img/icons/social/color/ih.svg" alt="" />
          </div>
        </div>

      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        
        <div>
          <button className="bg-transparent border border-gray-500 text-gray-300 px-4 py-2 rounded hover:bg-gray-700 transition">
            Create free website
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;