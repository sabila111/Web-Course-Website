
const Banner = () => {
    return (
        <div className="hero h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ygj22vN/nick-morrison-FHnnjk1-Yj7-Y-unsplash.jpg)' }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-neutral-content ml-auto  mb-28">
                <div className="max-w-md">
                    <p className="text-slate-300 font-normal text-start mb-4 mr-28"># Spring 2023</p>
                    <h1 className="mb-5 text-5xl font-bold text-start mr-28 text-white">T <span>R</span> <span>E</span> <span>N</span> <span>D</span> <span>Y</span></h1>
                    <h1 className="mt-3 text-5xl font-bold text-end mr-20 text-white">S <span>H</span> <span>O</span> <span>P</span> </h1>
                    <p className="mb-5 mt-5 text-start">Want a perfect pick for your classic collection? <br /> We are the best option </p>
                    <button className="btn mr-64"> Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;