import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import OurStory from "./components/OurStory";
import Reservations from "./components/Reservations";
import Visit from "./components/Visit";

function App() {
  return (
    <div className="App bg-[#FBF2E4] min-h-screen">
      <div className="">
        <Navbar />
        <Hero />
        <Menu />
        <OurStory />
        <Reservations />
        <Visit />
        <Footer />
      </div>
    </div>
  );
}

export default App;
