import { useState, useEffect } from "react";
import hyprland from '../components/assets/hyprland.png';

console.log(hyprland);

export default function Pinfo() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            <section
                className={`
            transform transition-all duration-1200 ease-out mb-5
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
          `}>
                {/* sets a container */}
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 h-full">

                    {/* sets the container to 2/ making it responsive to other devices */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* card starts here */}

                        <div className=" flex flex-col  p-6 border-2 shadow-lg border-solid rounded-lg">
                            <img
                                className="items-center text-center justify-center rounded-lg h-50 w-ful object-cover border-2 border-solid"
                                src={hyprland}
                                alt="hyprland"
                            />

                            <div className="ml-3 mt-5">
                                <a href="" className="mt-2 text-xl pt-2">Hyprland - Minimal Setup</a>
                                <h1 className="text-gray-500"> June 25 2025 </h1>
                            </div>
                        </div>

                        {/* card ends here */}




                    </div>




                </div>


            </section>



        </>
    );
}
