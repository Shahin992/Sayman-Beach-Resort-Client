const About_Us = () => {
  return (
    <div>
      <div className="my-10 p-4">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Welcome to Sayeman Beach Resort
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 my-5 w-full">
          <div className="lg:w-1/2 ">
            <img
              className="h-full"
              src="https://sayemanresort.com/wp-content/uploads/2019/10/banner.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-1/2">
            <p className="md:text-4 text-2xl font-medium">
              Sayeman Beach Resort features 245 beautifully designed rooms and
              suites with gorgeous & best sea view hotel in Cox’s Bazar. Choose
              your sea view from three spectacular options: Two Bedroom Panorama
              Ocean Suite, Infinity Sea View and Ocean view Junior Suite. They
              are all beautifully appointed with modern furniture, central air
              conditioning, hot water, flat screen TV, High Speed Internet.
              Bathrooms are elegantly appointed with luxury fittings. Large
              covered balconies offer panoramic views of the Bay of Bengal and
              the meandering hills. “Services, amenities and comfort that guest
              will enjoy at Sayeman Beach Resort will be unparalleled to any
              other hotels in Cox’s Bazar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
