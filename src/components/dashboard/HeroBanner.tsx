
const HeroBanner = () => (
  <div className="w-full relative flex items-center justify-center min-h-[300px] bg-black">
    <img
      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
      alt="Volunteer hero"
      className="absolute inset-0 w-full h-full object-cover opacity-50"
      loading="lazy"
    />
    <div className="relative text-center py-16 md:py-28 z-10 w-full flex flex-col items-center">
      <h1 className="font-sans text-4xl md:text-6xl font-black text-white uppercase tracking-tight drop-shadow-lg mb-4 animate-fade-in">
        Ignite Change.
        <br className="hidden md:block"/>
        Join The Movement.
      </h1>
      <p className="max-w-xl mx-auto mb-6 text-lg md:text-2xl text-gray-100 font-semibold animate-fade-in">
        Hands-on service, real community. <span className="hidden sm:inline">Make your mark with The Movement Street.</span>
      </p>
      <a
        href="/signup"
        className="inline-block bg-[#FF6200] hover:bg-orange-600 transition text-white font-extrabold px-8 py-3 rounded-full uppercase tracking-widest shadow-lg text-lg animate-fade-in"
      >
        Start Volunteering
      </a>
    </div>
  </div>
);

export default HeroBanner;
