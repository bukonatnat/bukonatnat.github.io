import { useState, useEffect } from "react";

export default function Projects() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div
                className={`
                    transform transition-all duration-1200 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>

                <div class="flex items-center my-4">

                    <div className="space-x-6 sm:flex bg-secondGround shadow-lg pt-2 mr-4 pb-2 pl-4 pr-4 border-2 border-solid rounded-lg">
                        <h1 className="text-lg text-black"> Projects </h1>
                    </div>

                    <div class="flex-grow border-1 h-px mr-2 bg-black"></div>
                </div>


            </div>

        </>
    );
}
