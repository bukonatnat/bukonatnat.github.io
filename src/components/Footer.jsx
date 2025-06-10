import { useState, useEffect } from "react";

export default function Footer() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            <footer
                className={` text-center mt-5
            transform transition-all duration-1200 ease-out mb-5
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
          `}>


                <div class="flex items-center my-4">

                    <div class="flex-grow border-1 h-px mr-2 bg-black mr-5"></div>

                    <button className="border-2 text-lg border-solid rounded-lg pt-2 mr-4 pb-2 pl-4 pr-4"> More about me </button>

                    <div class="flex-grow border-1 h-px mr-2 bg-black ml-5"></div>
                </div>

            </footer >



        </>
    );
}
