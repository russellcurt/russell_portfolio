// styles:
import "./CaseStudy.css";
import "./Content Components/NavWindow.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// imported images:
import echoImg1 from "./Assets/echo-assets/Echo Image 1.png";
import echoImg1LQIP from "./Assets/echo-assets/Echo Image 1 lqip.png";
import echoImg2 from "./Assets/echo-assets/Echo Image 2.png";
import echoImg2LQIP from "./Assets/echo-assets/Echo Image 2 lqip.png";
import echoImg3 from "./Assets/echo-assets/Echo Image 3.png";
import echoImg3LQIP from "./Assets/echo-assets/Echo Image 3 lqip.png";
import echoImg4 from "./Assets/echo-assets/Echo Image 4.png";
import echoImg4LQIP from "./Assets/echo-assets/Echo Image 4 lqip.png";
import echoImg5 from "./Assets/echo-assets/Echo Image 5.png";
import echoImg5LQIP from "./Assets/echo-assets/Echo Image 5 lqip.png";
import echoImg6 from "./Assets/echo-assets/Echo Image 6.png";
import echoImg6LQIP from "./Assets/echo-assets/Echo Image 6 lqip.png";
import echoImg7 from "./Assets/echo-assets/Echo Image 7.png";
import echoImg7LQIP from "./Assets/echo-assets/Echo Image 7 lqip.png";
import echoImg8 from "./Assets/echo-assets/Echo Image 8.png";
import echoImg8LQIP from "./Assets/echo-assets/Echo Image 8 lqip.png";
import echoImg9 from "./Assets/echo-assets/Echo Image 9.png";
import echoImg9LQIP from "./Assets/echo-assets/Echo Image 9 lqip.png";
import echoImg10 from "./Assets/echo-assets/Echo Image 10.png";
import echoImg10LQIP from "./Assets/echo-assets/Echo Image 10 lqip.png";
import echoImg11 from "./Assets/echo-assets/Echo Image 11.png";
import echoImg11LQIP from "./Assets/echo-assets/Echo Image 11 lqip.png";
import echoImg12 from "./Assets/echo-assets/Echo Image 12.png";
import echoImg12LQIP from "./Assets/echo-assets/Echo Image 12 lqip.png";
import echoImg13 from "./Assets/echo-assets/Echo Image 13.png";
import echoImg13LQIP from "./Assets/echo-assets/Echo Image 13 lqip.png";
import echoEmpImg from "./Assets/echo-assets/echo-empathize-img.svg";
import echoEmpImgLQIP from "./Assets/echo-assets/echo-empathize-img-lqip.png";
import echoDefChart from "./Assets/echo-assets/echo-define-chart.svg";
import echoDefChartLQIP from "./Assets/echo-assets/echo-define-chart-lqip.png";
import echoGif1 from "./Assets/echo-assets/Echo GIF 1.gif";
import echoGif1LQIP from "./Assets/echo-assets/Echo GIF 1 lqip.png";
import echoGif2 from "./Assets/echo-assets/Echo GIF 2.gif";
import echoGif2LQIP from "./Assets/echo-assets/Echo GIF 2 lqip.png";
import echoDesignVid from "./Assets/echo-assets/echo-design-vid.mp4";

// custom components:
import Footer from "../Footer/Footer.jsx";
import Topnav from "../Topnav/Topnav.jsx";
import Header from "./Content Components/Header.jsx";
import RightNav from "./Content Components/RightNav.jsx";
import CSDWindowTitles from "./Content Components/CSDWindowTitles.jsx";
import CSLinkButton from "./Content Components/CSLinkButton.jsx";
import NavBottom from "./Content Components/NavBottom.jsx";
import { scrollToRef } from "../General/utilities.js";

// libraries:
import { useRef, useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Echo() {
  const [activeSection, setActiveSection] = useState("");
  const [isTop, setIsTop] = useState(true);

  // object with key value pairs used to set custom section threshold values (can always change it to whatever depending on section content)
  const sectionThresholds = {
    overview: [0.25, 0.75],
    empathize: [0.25, 0.75],
    define: [0.25, 1],
    ideate: [0.1],
    design: [0.035, 1],
  };

  // Create Intersection Observer instances for each section
  const observerMap = {};

  Object.keys(sectionThresholds).forEach((section) => {
    observerMap[section] = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // used to set individual section thresholds
        root: null,
        rootMargin: "0px",
        threshold: sectionThresholds[section],
      }
    );
  });

  // Create refs for the sections you want to track
  const overviewRef = useRef(null);
  const empathizeRef = useRef(null);
  const defineRef = useRef(null);
  const ideateRef = useRef(null);
  const designRef = useRef(null);

  useEffect(() => {
    if (overviewRef.current) observerMap.overview.observe(overviewRef.current);
    if (empathizeRef.current)
      observerMap.empathize.observe(empathizeRef.current);
    if (defineRef.current) observerMap.define.observe(defineRef.current);
    if (ideateRef.current) observerMap.ideate.observe(ideateRef.current);
    if (designRef.current) observerMap.design.observe(designRef.current);

    // Clean up the observers when component unmounts
    return () => {
      Object.keys(observerMap).forEach((section) => {
        observerMap[section].disconnect();
      });
    };
  }, []);

  // handles top stylings for rightnav
  const handleScroll = () => {
    // check if we're at top, can adjust the value being compared in the if statement for better accuracy on class toggle
    if (window.scrollY < 775) {
      setIsTop(true);
      setActiveSection("");
    } else {
      setIsTop(false);
    }
  };
  // clean up of event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Topnav />

      <div className="csd-window">
        <div className="content-space">
          <div>
            <Header
              title="echo"
              img={echoImg1}
              lqip={echoImg1LQIP}
              text="A live captioning mobile app designed for accessibility and inclusivity."
            />
          </div>

          <div ref={overviewRef} id="overview">
            <CSDWindowTitles stepNumber="00" stepName="Overview" />
            <div className="echo-overview-content">
              <div className="echo-overview-top-container">
                <div className="echo-overview-top-left-container">
                  <div className="csd-titles">Summary</div>
                  <p>
                    An end-to-end project from concept ideation to interaction
                    and prototyping for UC Berkeley UX/UI Boot Camp. <br />
                    <br />
                    For our final project we were tasked to combine our user
                    experience, user interface, and front-end development skills
                    to solve a real-world problem. <br />
                    <br />
                    My team and I aimed to develop an intuitive real-time
                    captioning app to empower users and drive positive change in
                    communication.
                  </p>
                </div>
                <div className="echo-overview-top-right-container">
                  <div className="csd-titles">Timeline</div>
                  <p>3 weeks, June - July 2023</p>
                  <br />
                  <br />
                  <div className="csd-titles">My Role</div>
                  <p>
                    UX + UI Design, Interaction Design, Front-End Development,
                    Research, Prototyping, Usability Testing, Visual Design
                  </p>
                  <br />
                  <br />
                  <div className="csd-titles">Tools</div>
                  <p>Figma, VS Code, Github, Trello</p>
                </div>
              </div>

              <div className="echo-overview-btn-container">
                <CSLinkButton buttonText="View Full Case Study" />
                <CSLinkButton buttonText="View Prototype" />
              </div>

              <div className="echo-overview-img-container">
                <LazyLoadImage
                  src={echoImg2}
                  placeholderSrc={echoImg2LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
            </div>
          </div>

          <div ref={empathizeRef} id="empathize">
            <CSDWindowTitles stepNumber="01" stepName="Empathize" />
            <div className="echo-empathize-content">
              <div className="echo-empathize-spacing">
                <div className="csd-titles">Research Approach</div>
                <p>
                  We wanted to understand how hearing impairments affect people
                  and what struggles they face due to their hearing differences.
                  <br />
                  <br />
                  After conducting a quantitative survey with 27 participants we
                  continued further and held five 1:1 interviews to dive deeper
                  and discover more insights.
                </p>
              </div>
              <div className="echo-empathize-spacing">
                <div className="csd-titles">Research Question</div>
                <p>
                  What do individuals with hearing impairments and auditory
                  processing disorders face in their daily lives and how can we
                  come up with solutions that would benefit them?
                </p>
              </div>
              <div className="echo-empathize-spacing">
                <div className="csd-titles">Survey Results</div>
                <div className="echo-empathize-img-container">
                  <LazyLoadImage
                    src={echoEmpImg}
                    placeholderSrc={echoEmpImgLQIP}
                    wrapperClassName="LLI-stylings"
                    effect="blur"
                  />
                </div>
              </div>
              <div className="echo-empathize-spacing">
                <div className="csd-titles">Interview Results</div>
                We Identified the following{" "}
                <span className="echo-empathize-inner-bold">insights</span>:
                <ul>
                  <li>
                    Participants expressed concerns about missing out on
                    potential social bonds
                  </li>
                  <li>
                    Feels like their hearing impairment is frustrating to others
                  </li>
                  <li>
                    Instances of receiving inaccurate information, often
                    attributes to misinterpretation or errors in notetaking
                  </li>
                  <li>
                    Majority of participants use subtitles or closed captioning
                  </li>
                </ul>
              </div>
              <div>
                <div className="csd-titles">User Insight Statement</div>
                <p>
                  In social settings with multiple conversations occurring, it
                  becomes challenging for people, especially those with hearing
                  difficulties, to effectively hear and concentrate on a single
                  conversation. This often becomes a struggle to actively
                  participate and fully engage with others, leading to
                  frustration and exclusion.
                </p>
              </div>
            </div>
          </div>

          <div ref={defineRef} id="define">
            <CSDWindowTitles stepNumber="02" stepName="Define" />
            <div className="echo-define-content">
              <div className="echo-define-spacing">
                <div className="csd-titles">Problem Statement</div>
                <p>
                  Individuals with hearing difficulties face challenges in
                  social and group environments, impeding their ability to
                  communicate efficiently. This issue highlights the need for a
                  reliable and user-friendly solution that can effectively
                  address these barriers and empower individuals with hearing
                  difficulties to actively participate and engage in social
                  interactions, ultimately enhancing their communication
                  experience.
                </p>
              </div>
              <div className="echo-define-spacing">
                <div className="csd-titles">User Persona</div>
                <p>
                  Auditory disorders and hearing impairments affect people of
                  all ages, demographics, and personalities. Our user persona is
                  based on our survey responses and interviewees.
                  <br />
                  <br />
                  Meet Kristin Watson. She is 39 years old, single, a
                  psychologist, and lives in Toronto. She loves being social and
                  hanging out with friends. She suffers from sensorineural
                  hearing loss which can make it difficult to hear in loud
                  environments or if multiple conversations are happening
                  simultaneously.
                  <br />
                  <br />
                  Her goals are to feel more confident in social and work
                  settings and create strong relationships with good
                  communication.
                </p>
              </div>
              <div className="echo-define-spacing">
                <LazyLoadImage
                  src={echoImg3}
                  placeholderSrc={echoImg3LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>

              <div className="echo-define-spacing">
                <div className="csd-titles">Feature Roadmap</div>
                <p>
                  After doing user research, we began looking into existing
                  mobile solutions for auditory disorders and hearing
                  impairments. We learned that there are few apps that can do it
                  all, but there are none specifically built for social
                  captioning.
                  <br />
                  <br />
                  Here are 5 ways we kept our user in mind for accessibility and
                  adaptability at the forefront of our design.
                </p>
              </div>
              <div className="echo-define-spacing">
                <LazyLoadImage
                  src={echoDefChart}
                  placeholderSrc={echoDefChartLQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
            </div>
          </div>

          <div ref={ideateRef} id="ideate">
            <CSDWindowTitles stepNumber="03" stepName="Ideate" />
            <div className="echo-ideate-content">
              <div className="echo-ideate-spacing">
                <div className="csd-titles">Gain Confidence</div>
                <p>
                  With my team, we took part in an intensive brainstorming
                  session, generating and sketching out a wide range of
                  solutions. Our main objective was to create a framework that
                  seamlessly accommodates the five main features we envisioned,
                  prioritizes usability, while also considering the possibility
                  of incorporating additional elements.
                  <br />
                  <br />
                  Initially, we were intrigued by the idea of creating an
                  Augmented Reality (AR) app but after careful deliberation, we
                  recognized that a mobile solution would offer us the larger
                  reach and ensure greater accessibility with less potential
                  barriers.
                  <br />
                  <br />
                  During our collaborative process, we discussed the pros and
                  cons of each direction, eventually converging on a hybrid
                  concept that aligns with our goals and caters to the user's
                  needs.
                  <br />
                  <br />
                  Finally, we created a lo-fi prototype in which my team and I
                  then ran light concept testing.
                </p>
              </div>
              <div className="echo-ideate-spacing">
                <div className="csd-titles">Our Goals</div>
                <p>
                  How might we design a communication tool that provides
                  accurate and reliable real-time transcriptions of ongoing
                  conversations, enabling better participation for those with
                  hearing impairments?
                  <br />
                  <br />
                  How might we explore innovative features within our app that
                  go beyond real-time captioning, offering additional
                  accessibility tools and personalized support for individuals
                  with auditory processing issues?
                </p>
              </div>
              <div className="echo-ideate-spacing echo-ideate-img-containers">
                <LazyLoadImage
                  src={echoImg4}
                  placeholderSrc={echoImg4LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={echoImg5}
                  placeholderSrc={echoImg5LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="echo-ideate-spacing">
                <div className="csd-titles">Low-Fidelity Prototype Testing</div>
                <p>
                  We conducted low-fidelity prototype testing with five
                  participants, looking to seek valuable insights to refine our
                  design. During the creation of the lo-fi prototype, I had
                  additional ideas that hadn't been considered in the team
                  brainstorming session. To gather feedback, I engaged with our
                  participants, discussing their expectations as they interacted
                  with the prototype. Following the test, I also shared my new
                  ideas to gather further feedback.
                  <br />
                  <br />
                  The testing process proved to be instrumental for us in honing
                  in our concepts and identifying key areas of focus. The
                  feedback from participants indicated that adjustments were
                  needed, particularly in the Dashboard's Recents section, where
                  users felt overwhelmed. Participants also expressed a desire
                  for visual differentiation between speakers during live
                  captioning and larger text.
                  <br />
                  <br />
                  Additionally, we noted that some participants encountered
                  challenges while navigating through the settings, leading us
                  to consider some improvements in this area as well. On a
                  positive note, most participants found the prototype
                  straightforward and easy to understand.
                  <br />
                  <br />
                  These insights led us to rethink some aspects of our design
                  and played a crucial role in guiding our further developments
                  and final prototype.
                </p>
              </div>
              <div className="echo-ideate-img-containers">
                <LazyLoadImage
                  src={echoImg6}
                  placeholderSrc={echoImg6LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={echoImg7}
                  placeholderSrc={echoImg7LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
            </div>
          </div>

          <div ref={designRef} id="design">
            <CSDWindowTitles stepNumber="04" stepName="Design" />
            <div className="envision-design-content">
              <div className="echo-design-spacing">
                <LazyLoadImage
                  src={echoGif1}
                  placeholderSrc={echoGif1LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>

              <div className="echo-design-spacing">
                <div className="csd-titles">High Fidelity Prototype</div>
                <p>
                  We honed our user flow and design with the insights gathered
                  from conducting low-fidelity and mid-fidelity usability tests.
                  The feedback from these tests allowed us to pinpoint specific
                  areas for improvement and informed our decision-making during
                  the high-fidelity prototype development.
                </p>
              </div>

              <div className="echo-design-spacing echo-design-img-tray-1">
                <LazyLoadImage
                  src={echoImg2}
                  placeholderSrc={echoImg2LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={echoGif2}
                  placeholderSrc={echoGif2LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={echoImg8}
                  placeholderSrc={echoImg8LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={echoImg9}
                  placeholderSrc={echoImg9LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={echoImg10}
                  placeholderSrc={echoImg10LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
                <LazyLoadImage
                  src={echoImg11}
                  placeholderSrc={echoImg11LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
              <div className="echo-design-spacing">
                <div className="csd-titles">Feedback & Iterations</div>
                <p>
                  In response to participant feedback during testing, we devoted
                  special attention to addressing the challenges encountered in
                  the Dashboard's Recents section. By implementing a more
                  intuitive layout and rethinking organization and hierarchy, we
                  aimed to alleviate the feeling of being overwhelmed and
                  enhance the overall user experience.
                  <br />
                  <br />
                  In addition, participants' expressed desire for visual
                  differentiation between speakers during live captioning and
                  larger text guided us to implement clearer visual cues and
                  distinct styling. We achieved this by incorporating multiple
                  speaker color options and larger bolded text during active
                  captioning. Insights gained from testing the settings
                  navigation led us to revamp this aspect of the app as well. We
                  focused on streamlining the navigation process and improving
                  the overall clarity in hope that users can easily access and
                  adjust the settings to their preferences.
                  <br />
                  <br />
                  Overall, the iterative design process, guided by user
                  feedback, played a pivotal role in shaping our comprehensive
                  high-fidelity prototype. By addressing key areas of
                  improvement and incorporating user-centered enhancements, we
                  are confident that our final product aligns seamlessly with
                  our mission to create a{" "}
                  <span className="echo-design-inner-bold">
                    user-friendly
                  </span>{" "}
                  and{" "}
                  <span className="echo-design-inner-bold">accessible </span>
                  app.
                  <br />
                  <br />
                  <span className="echo-design-inner-bold">
                    See below for my walkthrough of echo.
                  </span>
                </p>
              </div>
              <div className="echo-design-spacing">
                <div className="csd-titles echo-design-vid-spacing">
                  Walkthrough
                </div>
                <div className="echo-design-video-container">
                  <video controls width="100%">
                    <source src={echoDesignVid} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="echo-design-spacing echo-design-center-btn">
                <CSLinkButton buttonText="View Prototype" />
              </div>

              <div className="echo-design-spacing">
                <div className="csd-titles">Website</div>
                <p className="echo-design-inner-spacing">
                  Alongside developing the echo app, I took charge of crafting
                  our desktop landing page, which serves as an essential focal
                  point for showcasing our mission statements.
                </p>
                <LazyLoadImage
                  src={echoImg12}
                  placeholderSrc={echoImg12LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>

              <div className="echo-design-spacing echo-design-center-btns">
                <CSLinkButton buttonText="View Repository" />
                <CSLinkButton buttonText="View Website" />
              </div>

              <div className="echo-design-spacing">
                <div className="csd-titles">Next Steps</div>
                <p>
                  For our next steps we would like to further conduct user
                  testing to gather more feedback and insights on our
                  high-fidelity prototype. Continue to build out the website to
                  showcase more of echo's key features, and lastly assess the
                  feasibility and value of extending echo to wearable devices
                  and augmented reality (AR) platforms.
                </p>
              </div>

              <div className="echo-design-spacing">
                <div className="csd-titles">Reflections & Take-aways</div>
                <p>
                  This project marked the culmination of my UC Berkeley UX/UI
                  Design bootcamp journey. It was fun to combine all the skills
                  I've learned throughout the course and channel them into
                  creating a meaningful and innovative product.
                </p>
              </div>

              <div>
                <LazyLoadImage
                  src={echoImg13}
                  placeholderSrc={echoImg13LQIP}
                  wrapperClassName="LLI-stylings"
                  effect="blur"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="right-nav-container">
          <RightNav
            scrollToRef={scrollToRef}
            overviewRef={overviewRef}
            empathizeRef={empathizeRef}
            defineRef={defineRef}
            ideateRef={ideateRef}
            designRef={designRef}
            activeSection={activeSection}
            isTop={isTop}
          />
        </div>
      </div>

      <NavBottom
        key="echo"
        prevText="WORK"
        nextText="02 Starting Over Inc."
        prevLink="/work"
        nextLink="/work/starting-over-inc"
      />
      <Footer />
    </>
  );
}
