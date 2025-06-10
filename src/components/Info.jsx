import { useState, useEffect } from "react";
import pfp from '../components/assets/pfp.jpeg';

export default function Info() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        flex justify-center items-center pt-20 pb-10 border-2 shadow-lg border-black rounded-lg
        transform transition-all duration-1200 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
      `}
    >
      <div className="flex flex-col items-center">

        <img
          className="rounded-full object-cover w-48 h-48 mb-1"
          src={pfp}
          alt="Logo"
        />

        <h1 className="mt-2 text-[30px]">@bukonatnat</h1>
        <h1 className="text-[20px] text-colorComment">• Web Developer • Student</h1>

      </div>
    </div>
  );
}
