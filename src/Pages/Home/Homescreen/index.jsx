import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Podcasts from "../Podcasts";
import Testimonial from "../Testimonials";
import { PodcastProvider } from "../PodcastContext";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PodcastProvider>
        <Podcasts />
      </PodcastProvider>
      <AboutMe />
      {/* <MyPortfolio /> */}
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  );
}
