import Navbar from "../components/Navbar"
import Info from "../components/Info"
import Projects from "../components/Projects";
import Pinfo from "../components/Pinfo";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className="mt-5 font-shadows">

      <Navbar />

      <Info />

      <Projects />

      <Pinfo />

      <Footer />


    </div>
  );
}
