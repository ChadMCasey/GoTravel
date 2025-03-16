// Page
import Page from "./Page.tsx";

// Header
import Header from "./Header.tsx";
import Navigation from "./Navigation/Navigation.tsx";
import Hero from "./Hero.tsx";

// Main
import Main from "./Main.tsx";
import Steps from "./Steps/Steps.tsx";
import Services from "./Services.tsx";
import News from "./News.tsx";
import ExploreMore from "./ExploreMore/ExploreMore.tsx";
import FrequentTravelers from "./FrequentTravelers.tsx";
import Testimonials from "./Testimonials/Testimonials.tsx";

// Footer
import Footer from "./Footer.tsx";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>

      <Main>
        <Steps />
        <Services />
        <News />
        <ExploreMore />
        <FrequentTravelers />
        <Testimonials />
      </Main>

      <Footer />
    </Page>
  );
}

export default App;
