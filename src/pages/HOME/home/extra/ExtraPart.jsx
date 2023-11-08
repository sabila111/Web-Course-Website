

const ExtraPart = () => {
    return (
        <div>
            <h1 className="text-center text-5xl font-bold mt-20">Our <span className="text-blue-900">Awesome</span> Pricing Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
                <div className="card w-96 bg-base-100 shadow-xl mt-12">
                    <div className="">
                        <h2 className="card-title mb-3 px-5 text-3xl font-bold">Basic Plan</h2>
                        <p className="px-5 mb-5 text-slate-500">Our purpose is to build solutions that remove barriers preventing people.</p>
                        <p className="bg-blue-800 mb-3 py-2 text-white text-center "><span className="text-4xl font-bold ">$29</span> /monthly</p>
                        <div className="px-8 my-4 text-slate-500 text-lg ">

                            <p className="my-3">24/7 system monitoring</p>
                            <p className="my-3">Security management</p>
                            <p className="my-3">Secure finance backup</p>
                            <p className="my-3">Remote suppor</p>

                        </div>
                        <div className="">
                            <button className="px-3 py-4 w-[350px] rounded-lg mx-4 mb-4 bg-blue-900 text-white font-bold ">Get a free trial</button>
                        </div>
                    </div>
                </div>

                {/* 2 */}

                <div className="card w-96 bg-base-100 mt-10 shadow-xl">
                    <div className="">
                        <h2 className="card-title mb-3 px-5 text-3xl font-bold">Standard Plan</h2>
                        <p className="px-5 mb-5 text-slate-500">Our purpose is to build solutions that remove barriers preventing people.</p>
                        <p className="bg-blue-800 mb-3 py-2 text-white text-center "><span className="text-4xl font-bold ">$49</span> /monthly</p>
                        <div className="px-8 my-4 text-slate-500 text-lg ">

                            <p className="my-3">24/7 system monitoring</p>
                            <p className="my-3">Security management</p>
                            <p className="my-3">Secure finance backup</p>
                            <p className="my-3">Remote suppor</p>

                        </div>
                        <div className="">
                            <button className="px-3 py-4 w-[350px] rounded-lg mx-4 mb-4 bg-blue-900 text-white font-bold ">Get a free trial</button>
                        </div>
                    </div>
                </div>

                {/* 3 */}

                <div className="card w-96 bg-base-100 mt-10 shadow-xl">
                    <div className="">
                        <h2 className="card-title mb-3 px-5 text-3xl font-bold">Extended Plan</h2>
                        <p className="px-5 mb-5 text-slate-500">Our purpose is to build solutions that remove barriers preventing people.</p>
                        <p className="bg-blue-800 mb-3 py-2 text-white text-center "><span className="text-4xl font-bold ">$59</span> /monthly</p>
                        <div className="px-8 my-4 text-slate-500 text-lg ">

                            <p className="my-3">24/7 system monitoring</p>
                            <p className="my-3">Security management</p>
                            <p className="my-3">Secure finance backup</p>
                            <p className="my-3">Remote suppor</p>

                        </div>
                        <div className="">
                            <button className="px-3 py-4 w-[350px] rounded-lg mx-4 mb-4 bg-blue-900 text-white font-bold ">Get a free trial</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExtraPart;