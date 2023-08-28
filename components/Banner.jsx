import React from "react";

const BannerContent = () => {
  return (
    <div className="z-10 relative text-white max-w-screen-lg px-4">
      <h1 className="text-5xl font-bold text-center leading-[3.875rem]">
        The biggest Indian hits. The best Indian stories. All streaming here.
      </h1>
      <p className="text-2xl text-center leading-[3rem]">
        Watch anywhere. Cancel anytime.
      </p>
      <p className="text-xl text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center mt-6 items-center">
        <input
          className="w-[100%] sm:w-[350px] max-w-[350px] rounded-md bg-neutral-900/75 px-5 py-3 border border-solid border-zinc-400"
          placeholder="Email Address"
        ></input>
        <button className="py-3 px-5 bg-bright-red hover:bg-red-600 rounded-md text-2xl font-semibold w-fit">
          Get Started&nbsp;&#10095;
        </button>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative w-full h-[50rem] md:h-[40rem] bg-cover bg-center mt-[-70px] bg-[url('/netflix-banner.jpg')] flex items-center justify-center">
      <div
        className="h-full w-full absolute"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      ></div>
      <BannerContent />
    </div>
  );
};

export default Banner;
