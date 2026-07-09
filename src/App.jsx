// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Menu from "./components/Menu";
// import Navbar from "./components/Navbar";
// import OurStory from "./components/OurStory";
// import Reservations from "./components/Reservations";
// import Visit from "./components/Visit";

import React, { Suspense } from "react";
import VisibilityLoader from "./ui/VisibilityLoader";

const Hero = React.lazy(() => import("./components/Hero"));
const Menu = React.lazy(() => import("./components/Menu"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const OurStory = React.lazy(() => import("./components/OurStory"));
const Reservations = React.lazy(() => import("./components/Reservations"));
const Visit = React.lazy(() => import("./components/Visit"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="App bg-[#FBF2E4] min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
      </Suspense>
      <VisibilityLoader fallback={<div className="h-32 animate-pulse bg-gray-200 rounded mx-auto container" />}>
        <Menu />
      </VisibilityLoader>
      <VisibilityLoader fallback={<div className="h-32 animate-pulse bg-gray-200 rounded mx-auto container" />}>
        <OurStory />
      </VisibilityLoader>
      <VisibilityLoader fallback={<div className="h-32 animate-pulse bg-gray-200 rounded mx-auto container" />}>
        <Reservations />
      </VisibilityLoader>
      <VisibilityLoader fallback={<div className="h-32 animate-pulse bg-gray-200 rounded mx-auto container" />}>
        <Visit />
      </VisibilityLoader>
      <VisibilityLoader fallback={<div className="h-32 animate-pulse bg-gray-200 rounded mx-auto container" />}>
        <Footer />
      </VisibilityLoader>
    </div>
  );
}

export default App;
