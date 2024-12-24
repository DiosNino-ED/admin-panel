const Banner = () => {
  return (
    <div className="container mt-32">
      <div className="grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]">
        <div
          className="h-[200px] md:h-[460px] bg-[url(/product-banner-1.png)] bg-cover
                bg-center rounded-xl p-8 md:p-16"
        >
          <p className="text-topHeadingSecondary text-white text-xl font-medium">
            Sale <span className="text-red-600">-20%</span> off all store
          </p>
          <h2 className="text-topHeadingPrimary text-white font-bold text-xl sm:text-3xl max-w-[240px]">
            Acer Aspire Nitro
          </h2>
          <a
            className="inline-block mt-6 hover:text-accent text-topHeadingSecondary text-green-400 font-medium transition-all duration-300"
            href="#"
          >
            Shop Now
          </a>
        </div>
        <div className="h-[460px] bg-[url(/product-banner-2.png)] bg-right rounded-xl hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Banner;
