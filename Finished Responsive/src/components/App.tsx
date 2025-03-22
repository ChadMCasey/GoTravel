import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Page
import Page from "./Page.tsx";

// Header
import Header from "./Header.tsx";
import Navigation from "./Navigation/Navigation.tsx";
import Hero from "./Hero/Hero.tsx";

// Main
import Main from "./Main.tsx";
import Steps from "./Steps/Steps.tsx";
import Services from "./Services/Services.tsx";
import News from "./News/News.tsx";
import ExploreMore from "./ExploreMore/ExploreMore.tsx";
import FrequentTravelers from "./FrequentTravelers.tsx";
import Testimonials from "./Testimonials/Testimonials.tsx";

// Footer
import Footer from "./Footer.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
