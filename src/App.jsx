import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import OurStory from "./components/OurStory";
import Reservations from "./components/Reservations";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#FBF2E4] min-h-screen overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Menu />
      <OurStory />
      <Reservations />
      <Visit />
      <Footer />
    </div>
  );
}

export default App;
