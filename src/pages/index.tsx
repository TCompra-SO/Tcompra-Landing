import * as React from "react"
import GlobalStyles from "../styles/GlobalStyles";
import Home from "../components/Home";
import AboutUsComponent from "../components/AboutUsComponent";
import ServicesComponent from "../components/ServicesComponent";
import BenefitsComponent from "../components/BenefitsComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import ContactComponent from "../components/ContactComponent";
import QuestionsComponent from "../components/QuestionsComponent";
import PackagesComponent from "../components/PackagesComponent";
import FooterComponent from "../components/FooterComponent";
import { MainBody } from "../styles/components/containers/container";
import NavigationComponent from "../components/NavigationComponent";
import Videos from "../modules/videos/Videos";




const IndexPage = () => {

  /*
   
  */
  return <>

    <GlobalStyles />
    <MainBody>
      <NavigationComponent />
      <Home />
      <AboutUsComponent />
      <ServicesComponent />
      <BenefitsComponent />
      <HowItWorksComponent />
      <PackagesComponent />
      <ContactComponent />
      <Videos />
      <QuestionsComponent />
      <FooterComponent />
    </MainBody>


  </>
}

export default IndexPage


