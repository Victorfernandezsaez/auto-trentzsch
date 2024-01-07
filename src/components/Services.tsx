import { ServicesList } from "../lib/serviceList";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Services = () => {
    const { ref, inView } = useInView();
    const { setActiveSection } = useActiveSectionContext();
    useEffect(() => {

        if (inView) {
            setActiveSection('Services');
        }
    }, []);

    return (
        <div
            ref={ref}
            id='services'
            className="flex justify-center text-center w-full pt-24 pb-12 bg-slate-100 ">
            <div className="flex flex-col text-balance px-8">
                <h1 className="font-semibold pb-9">Unsere Services</h1>
                <h2 className="font-bold text-4xl pb-9">Was wir für Sie tun</h2>
                <div

                    className="flex flex-wrap justify-center -mx-4">
                    {ServicesList.map((service) => (
                        <div key={service.name} className=" mx-4 mb-8 max-w-xs">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-slate-800 rounded-md size-80 overflow-hidden shadow-slate-700 shadow-lg"
                            >
                                <img
                                    className="w-full h-40 object-cover"
                                    src={service.image}
                                    alt={service.name}
                                />
                                <div className="p-10">
                                    <h3 className="text-xl text-[#f4bc1c] font-semibold mb-2">{service.name}</h3>
                                    {/* <p className="text-gray-700">{service.name}</p> */}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
