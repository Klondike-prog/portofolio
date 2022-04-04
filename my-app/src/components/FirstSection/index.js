import React from "react";
import { FirstBox, Title, MyEducation,AnimateTitle,LastTitle} from "./FirstSectionElements";



const FirstSection = () => {
  return (
    <FirstBox>

      <AnimateTitle>
      <Title>Catalin.niceToMeetYou( )</Title>
      </AnimateTitle>
      <MyEducation>
        &lt;p&gt; Hi there, my name is Catalin Bondane and I am a Front End Developer from Romania. If You want to Learn more about my  life-journey,
        how I got where I am today, my work experience, or if You just want to explore this little world I made feel free to 
        start  SCROLLING. &lt;/p&gt;
      </MyEducation>
      <LastTitle>Enjoy !</LastTitle>
    </FirstBox>
  );
};

export default FirstSection;
