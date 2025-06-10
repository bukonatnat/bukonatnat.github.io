import { useState, useEffect } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <nav
        className={`
            bg-secondGround rounded-lg shadow-lg border-2 border-solid
            transform transition-all duration-1200 ease-out mb-5
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
          `}>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div>
              <a className="text-xl text-black" href="./index.html">
                bukonat.
              </a>
            </div>

            <div className="space-x-6 sm:flex bg-secondGround shadow-lg pt-2 pb-2 pl-4 pr-4 border-2 border-solid rounded-lg">
              <a href="#" className="text-lg text-black hover:text-secondGround">me</a>
            </div>
          </div>
        </div>
      </nav>



    </>
  );
}
