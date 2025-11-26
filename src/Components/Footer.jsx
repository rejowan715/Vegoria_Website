import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SubHeading = ({ heading }) => {
  return (
    <>
      <h4 className="text-xl text-zinc-800 font-bold py-2">{heading}</h4>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-200">
      <div className=" px-16 py-10 md:flex items-start justify-between font-semibold text-sm">
        <div className="max-w-[300px]">
          <a href="/" className="flex items-baseline justify-start text-center">
            <SubHeading heading={'Veg'} />
            <span className="text-orange-500 text-xl font-bold uppercase">o</span>
            <SubHeading heading={'ria'} />
          </a>
          <div className="text-zinc-600 space-y-3">
            <p>
              Bred for a high content of beneficial substances. Our product are all fresh and
              healthy.
            </p>

            <p>2025 &copy; all rights reserved.</p>
          </div>
        </div>

        <div className="max-w-[100px]">
          <SubHeading heading={'Company'} />
          <p>About</p>
          <p>FAQ's</p>
        </div>

        <div>
          <SubHeading heading={'Support'} />
          <p>Support center</p>
          <p>Feedback</p>
          <p>Contact us</p>
        </div>

        <div>
          <SubHeading heading={'Stay Connected'} />
          <p className="text-zinc-600 max-w-[180px] mb-3">
            Questions or Feedback? We'd love to hear from you.
          </p>
          <div className="max-w-fit flex items-center bg-white p-1 rounded-lg">
            <input
              type="email"
              className="text-md px-2 py-1 outline-none ring-offset-0"
              placeholder="Email address"
            />
            <button className="bg-gradient-to-br cursor-pointer from-orange-400 to-orange-500 rounded-lg text-white text-2xl p-2">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
