import { useState } from 'react';
import PrivacyPolicyPopup from './Datenschutz';
import ImpresumPopup from './Impresum';

const Footer = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const [showImpresum, setShowImpresum] = useState(false);

    const togglePrivacyPolicy = () => {
        setShowPrivacyPolicy(!showPrivacyPolicy);
        setShowImpresum(false);
    };

    const toggleImpresum = () => {
        setShowImpresum(!showImpresum);
        setShowPrivacyPolicy(false);
    }
    return (
        <footer className="flex justify-center bg-slate-950 text-slate-50 p-6">
            <div className="max-w-2xl mx-auto">
                <div className="my-12 flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center pb-6">Freie Werkstatt Auto Trentzsch</h2>
                    <div className="flex">
                        <div className="street mx-4">
                            <p>  <a href='https://www.google.com/maps/place/Auto+Trentzsch+GbR/@51.0593668,13.6961162,18.53z/data=!4m15!1m8!3m7!1s0x4709cf905ca11ca5:0x38879f67be1965b0!2sHamburger+Str.+35A,+01067+Dresden!3b1!8m2!3d51.0593136!4d13.6970435!16s%2Fg%2F11b8vdt3fs!3m5!1s0x4709cf905b9def97:0xc572762182d922b8!8m2!3d51.0595457!4d13.6969275!16s%2Fg%2F1td4c7wj?entry=ttu' target='_blank'>Hamburger Str. 35a, <br />01067 Dresden,</a></p>
                            <p className='pt-6'><a href='https://www.google.com/maps/place/Bodenbacher+Str.+109,+01277+Dresden/@51.0266676,13.8005104,17z/data=!3m1!4b1!4m6!3m5!1s0x4709c62f654f0153:0xaa5b3c78fe1c87aa!8m2!3d51.0266643!4d13.8030907!16s%2Fg%2F11c5l5vkd8?entry=ttu' >Bodenbacher Str. 109,<br />01277 Dresden,</a></p>
                            <p className='pt-6'><a href='https://www.google.com/maps/place/Radeberger+Str.+23,+01099+Dresden/@51.0667077,13.764665,17z/data=!3m1!4b1!4m6!3m5!1s0x4709cf311a8baddf:0x53c5d7aa4f831862!8m2!3d51.0667044!4d13.7672453!16s%2Fg%2F11b8v6qfrw?entry=ttu' >Radeberger Str. 23,<br />01471 Radeburg, </a></p>
                        </div>
                        <div className="telephon mx-4">
                            <p>Tel.: 0351 4852249</p><br />
                            <p className='pt-6'>Tel.: 0351 2510432</p><br />
                            <p className='pt-6'>Tel.: 0352 082422</p><br />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-center cursor-pointer" onClick={togglePrivacyPolicy}>DATENSCHUTZERKLÄRUNG</h2>
                    {showPrivacyPolicy && <PrivacyPolicyPopup onClose={togglePrivacyPolicy} />}
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-center cursor-pointer" onClick={toggleImpresum}>IMPRESUM</h2>
                    {showImpresum && <ImpresumPopup onClose={toggleImpresum} />}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
