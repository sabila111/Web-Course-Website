
const Banner = () => {
    return (
        <div className="hero h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/ygj22vN/nick-morrison-FHnnjk1-Yj7-Y-unsplash.jpg)' }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-neutral-content ">
                <div className="max-w-5xl mr-[600px] mb-20 ">
                    <h1 className="text-white text-6xl font-bold mb-3">Think Big. We Make <br /><span className="mt-5">It, Possible!</span></h1>
                    <p className="mb-3 text-white text-base">We Observe The Ongoing Trends And analize the upcoming <br />technology to transform the digital person</p>
                    <button className="py-3 px-4 rounded-lg bg-blue-900 font-bold text-white">Our Team</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;