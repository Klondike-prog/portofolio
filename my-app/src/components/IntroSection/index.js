import React from "react";
import { IntroBg, VideoBg, Overlay,Loading,LoadingSection} from "./IntroElements";
import Video from "../../videos/video.mp4";
import LoadingVideo from "../../videos/loading.mp4"

const IntroSection = () => {
  return (
    <>
     <LoadingSection><Loading autoPlay loop muted src={LoadingVideo} type="video/mp4"/><Overlay></Overlay></LoadingSection>
    <IntroBg>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      <Overlay></Overlay>
    </IntroBg>
   
    </>
  );
};

export default IntroSection;
