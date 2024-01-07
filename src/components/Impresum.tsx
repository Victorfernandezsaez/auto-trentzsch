import { motion } from 'framer-motion';
import React from 'react';

interface Impresum {
    onClose: () => void;
}

const ImpresumPopup: React.FC<Impresum> = ({ onClose }) => {
    return (
        <div className="fixed z-[1000] text-pretty top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-950 bg-slate-200 p-6 shadow-md max-h-[80vh] overflow-y-auto">
            <motion.div
                animate={{ y: 20 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <h2 className=" text-center text-3xl font-bold mb-10">Impressum</h2>

                <h3 className='text-center mb-4 text-lg font-bold'>Seiteninhaber:</h3>
                <p className="mb-4 leading-relaxed">
                    Enrico Trentzsch<br />
                    Enrico & Guenter Trentzsch GbR<br />
                    Tel.: 0351 4852249<br />
                    Fax: 0351 4852251<br />
                    Hamburger Str. 35 A<br />
                    01067 Dresden<br /><br />

                    Bodenbacher Str. 109<br />
                    01277 Dresden<br />
                    Tel.: 0351 2510432<br />
                    Fax: 0351 2510438<br /><br />

                    Radeberger Str. 23<br />
                    01471 Radeburg<br />
                    Tel.: 035208 2422<br />
                    Fax: 035208 4386<br /><br />

                    USt-ID: DE226766259<br />
                    Gerichtsstand Dresden<br />
                    Handwerkskammer: Dresden<br />
                    Berufsgenossenschaft: Maschinenbau und Metall MMBG<br />
                    e-mail: info@auto-trentzsch.de<br />
                    Web: www.auto-trentzsch.de<br />
                </p>
                <div className="flex justify-center">
                    <button onClick={onClose} className="bg-slate-950 text-slate-50 font-semibold py-3 px-8 rounded-full">
                        Close
                    </button>
                </div>
            </motion.div>
        </div >
    );
};

export default ImpresumPopup;
