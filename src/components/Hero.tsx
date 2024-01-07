const Hero = () => {


    return (
        <div id='home' style={{ backgroundImage: "url(src/assets/vw__golf__gti.jpg)" }}
            className="flex flex-col h-screen bg-cover bg-center  ">
            <div className="filter contrast-125 saturate-125 bg-[#222222] bg-opacity-20 w-full h-full text-slate-100 flex flex-col justify-center text-center">
                <h2 className='sm:text-4xl text-3xl font-semibold'>Willkommen bei</h2>
                <h1 className='sm:text-8xl text-5xl font-bold'>Auto Trentzsch</h1>
                <h2 className='sm:text-4xl text-3xl font-semibold'>Meisterbetriebe des KFZ-Handwerks</h2>
                <span className='text-2xl font-semibold'>Freie KFZ Werkstatt
                    und Reifen1+ Partner</span>
                <div className="flex justify-center text-center mt-5 ">
                    <a href="#services">
                        <button className="bg-[#f4bc1c]  hover:text-slate-200  text-slate-950 font-semibold py-3 px-8 rounded-full">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>
        </div>)
}

export default Hero;
