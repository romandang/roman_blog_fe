import AboutMeSection from "./components/AboutMeSection";
import AboutOurCompanySection from "./components/AboutOurCompanySection";
import OurProductsSection from "./components/OurProductsSection";
import OurTeamsSection from "./components/OurTeamsSection";
import OurValuesSection from "./components/OurValuesSection";

const AboutUsView = ({ data }) => {
  const { aboutMe, aboutOurCompany, ourValues, ourProducts, ourTeams } = data;
  const isDisplayAboutMe = aboutMe?.isEnable;
  const isDisplayAboutOurCompany = aboutOurCompany?.isEnable;
  const isDisplayOurValues = ourValues?.isEnable;
  const isDisplayOurProducts = ourProducts?.isEnable;
  const isDisplayOurTeams = ourTeams?.isEnable;

  return (
    <main>
      {isDisplayAboutMe && <AboutMeSection data={aboutMe} />}
      {isDisplayAboutOurCompany && <AboutOurCompanySection data={aboutOurCompany} />}
      {isDisplayOurValues && <OurValuesSection data={ourValues} />}
      {isDisplayOurProducts && <OurProductsSection data={ourProducts} />}
      {isDisplayOurTeams && <OurTeamsSection data={ourTeams} />}
    </main>
  );
};

export default AboutUsView;
