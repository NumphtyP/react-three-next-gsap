import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import elementResizeDetectorMaker from 'element-resize-detector';

const BiomechanicalPerformanceFactors = () => {
  const viewportRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let viewport = viewportRef.current;
    let content = contentRef.current;
    let smoothness = 1;

    const isMobileDevice = window.innerWidth <= 767;

    if (isMobileDevice) {
      smoothness = 0.2; // Adjust the smoothness for mobile devices
    }

    gsap.set(viewport || content.parentNode, {
      overflow: 'hidden',
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    });

    gsap.set(content, { overflow: 'visible' });

    let getProp = gsap.getProperty(content);
    let setProp = gsap.quickSetter(content, 'y', 'px');
    let setScroll = ScrollTrigger.getScrollFunc(window);
    let removeScroll = () => (content.style.overflow = 'visible');
    let killScrub = function (trigger) {
      let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0];
      scrub && scrub.kill();
      trigger.animation.progress(trigger.progress);
    };
    let height, isProxyScrolling;

    function onResize() {
      height = content.clientHeight;
      content.style.overflow = 'visible';
      document.body.style.height = height + 'px';
    }
    onResize();

    ScrollTrigger.addEventListener('refreshInit', onResize);
    ScrollTrigger.addEventListener('refresh', function () {
      removeScroll();
      requestAnimationFrame(removeScroll);
    });

    ScrollTrigger.defaults({ scroller: content });
    ScrollTrigger.prototype.update = function (p) {
      p;
    };

    ScrollTrigger.scrollerProxy(content, {
      scrollTop: function scrollTop(value) {
        if (arguments.length) {
          isProxyScrolling = true;
          setProp(-value);
          setScroll(value);
          return;
        }

        return -getProp('y');
      },
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    function elResizeListener() {
      const erdUltraFast = elementResizeDetectorMaker({
        strategy: 'scroll',
      });

      erdUltraFast.listenTo(document.getElementsByClassName('section-container'), function () {
        ScrollTrigger.refresh();
      });
    }
    elResizeListener();

    return ScrollTrigger.create({
      animation: gsap.fromTo(
        content,
        { y: 0 },
        {
          y: function () {
            return document.documentElement.clientHeight - height;
          },
          ease: 'none',
          onUpdate: ScrollTrigger.update,
        }
      ),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: function () {
        return height - document.documentElement.clientHeight;
      },
      scrub: smoothness,
      onUpdate: function (self) {
        if (isProxyScrolling) {
          killScrub(self);
          isProxyScrolling = false;
        }
      },
      onRefresh: killScrub,
    });
  }, []);

  return(
    <>
      <div
        className="flex fixed justify-center items-center w-1/2 h-full font-light text-white select-none"
        style={{ zIndex: 2, top: "0%" }}
      >
        {/* INNER CONTENT */}
        <div
          className="relative text-white opacity-100"
          style={{
            transform: "translate(0%, 0px) rotateY(5deg) scale(1.00001, 1)",
            opacity: 1,
            width: "26vw",
            height: "32vw"
          }}
        >
          {/* NAME */}
          <div
            className="absolute bottom-12 left-16 z-10 opacity-100"
            style={{ opacity: 1 }}
          >
            <p className="my-0 font-sans text-4xl tracking-wide leading-6">
              Jenna Sinclair
            </p>
            <div className="mt-2 w-16 h-px bg-white" />
          </div>
          {/* /NAME */}
          <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
              style={{
                backgroundImage: 'url("assets/images/person.jpg")',
                backgroundPosition: "center center"
              }}
            />
            <canvas
              width={998}
              height={1228}
              style={{ display: "block", width: 499, height: 614, zIndex: 3 }}
              className="block absolute left-0 top-px w-64"
            />
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full border border-white border-solid opacity-25"
            style={{ zIndex: -2, transform: "translate(-2rem, 2rem)" }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full border border-white border-solid"
            style={{
              zIndex: -2,
              opacity: "0.15",
              transform: "translate(-4rem, 4rem)"
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full border border-white border-solid opacity-5"
            style={{ zIndex: -2, transform: "translate(-6rem, 6rem)" }}
          />
        </div>
        {/* /INNER CONTENT */}
      </div>

      <div
        className="overflow-visible relative left-1/2 w-1/2 font-light text-white"
        style={{
          overflow: "visible",
          transform: "translate3d(0px, -379.604px, 0px)"
        }}
      >
        {/* SECTION CONTAINER */}
        <div
          className="relative text-white"
          style={{position: "relative", maxWidth: "70rem"}}
        >
          {/* SECTION ( INTRODUCTION ) */}
          <div
            className="flex relative items-center pb-8 w-full min-h-screen"
            style={{paddingBottom: "2rem"}}
            id="intro"
          >
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-16 font-sans text-xl font-bold leading-6"
                style={{letterSpacing: "2.24px"}}
              >
                INTRODUCTION
              </p>
              <h1
                className="mt-0 mb-20 ml-12 font-sans font-extralight tracking-normal leading-4"
                style={{fontSize: 160}}
              >
                Im a Creative Developer &amp; Technology Expert
              </h1>
              <div className="w-16 h-px bg-white"/>
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( INTRODUCTION ) */}
          {/* SECTION ( ABOUT ) */}
          <div className="relative w-full" style={{paddingBottom: 416}} id="about">
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-12 font-sans text-xl font-bold leading-6 opacity-100"
                style={{
                  opacity: 1,
                  transform: "translate(0px, 0px)",
                  letterSpacing: "2.24px"
                }}
              >
                ABOUT
              </p>
              <h3
                className="mt-0 mb-16 ml-4 font-sans text-6xl tracking-normal leading-4 opacity-100"
                style={{opacity: 0, transform: "translate(0px, 0px)"}}
              >
                My approach to building
                <br className="text-5xl tracking-tight" style={{lineHeight: 55}}/>
                the tech brands of tomorrow.
              </h3>
              <div
                className="mb-16 w-16 h-px bg-white opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              />
              <p
                className="my-0 font-sans text-5xl tracking-normal leading-6 opacity-100 text-neutral-500"
                style={{opacity: 0, transform: "translate(0px, 0px)"}}
              >
                 We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
              </p>
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( ABOUT ) */}
          {/* SECTION ( ACHIEVEMENTS ) */}
          <div className="relative pb-80 w-full" style={{paddingBottom: "20rem"}}>
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-12 font-sans text-xl font-bold leading-6 opacity-0"
                style={{
                  opacity: 0,
                  transform: "translate(0px, 150px)",
                  letterSpacing: "2.24px"
                }}
              >
                ACHIEVEMENTS
              </p>
              <h3
                className="mt-0 mb-16 ml-4 font-sans text-6xl tracking-normal leading-4 opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                Acceleration: A rapid increase in valuation and standards.
              </h3>
              <div
                className="mb-16 w-16 h-px bg-white opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              />
              <p
                className="mt-0 mb-20 font-sans text-5xl tracking-normal leading-6 opacity-0 text-neutral-500"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
             We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
              </p>
              {/* CARD GRID */}
              <div
                className="flex flex-wrap opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                {/* LEFT SIDE */}
                <div className="flex-grow-0 flex-shrink-0 basis-1/2">
                  {/* ITEM */}
                  <div
                    className="relative select-none bg-neutral-900"
                    style={{
                      backgroundColor: "rgb(24, 24, 24)",
                      paddingBottom: "96%"
                    }}
                  >
                    {/* ITEM CONTAINER */}
                    <div
                      className="absolute top-1/2 left-1/2"
                      style={{transform: "translate(-50%, -50%)"}}
                    >
                      <h2 className="my-0 font-sans text-9xl font-extralight tracking-normal leading-4">
                        40
                      </h2>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                        Awards
                      </p>
                    </div>
                    {/* /ITEM CONTAINER */}
                  </div>
                  {/* /ITEM */}
                  {/* ITEM */}
                  <div
                    className="relative bg-black"
                    style={{backgroundColor: "rgb(8, 8, 8)", paddingBottom: "96%"}}
                  >
                    {/* ITEM CONTAINER */}
                    <div
                      className="absolute top-1/2 left-1/2"
                      style={{transform: "translate(-50%, -50%)"}}
                    >
                      <h2 className="my-0 font-sans text-9xl font-extralight tracking-normal leading-4">
                        30+
                      </h2>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                        Apps
                      </p>
                    </div>
                    {/* /ITEM CONTAINER */}
                  </div>
                  {/* /ITEM */}
                </div>
                {/* /LEFT SIDE */}
                {/* RIGHT SIDE */}
                <div className="flex-grow-0 flex-shrink-0 mt-24 basis-1/2">
                  {/* ITEM */}
                  <div
                    className="relative bg-neutral-900"
                    style={{
                      backgroundColor: "rgb(17, 17, 17)",
                      paddingBottom: "96%"
                    }}
                  >
                    {/* ITEM CONTAINER */}
                    <div
                      className="absolute top-1/2 left-1/2"
                      style={{transform: "translate(-50%, -50%)"}}
                    >
                      <h2 className="my-0 font-sans text-9xl font-extralight tracking-normal leading-4">
                        90+
                      </h2>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                        Projects
                      </p>
                    </div>
                    {/* /ITEM CONTAINER */}
                  </div>
                  {/* /ITEM */}
                  {/* ITEM */}
                  <div
                    className="relative bg-black"
                    style={{backgroundColor: "rgb(3, 3, 3)", paddingBottom: "96%"}}
                  >
                    {/* ITEM CONTAINER */}
                    <div
                      className="absolute top-1/2 left-1/2"
                      style={{transform: "translate(-50%, -50%)"}}
                    >
                      <h2 className="my-0 font-sans text-9xl font-extralight tracking-normal leading-4">
                        130%
                      </h2>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                        Client ROI
                      </p>
                    </div>
                    {/* /ITEM CONTAINER */}
                  </div>
                  {/* /ITEM */}
                </div>
                {/* /RIGHT SIDE */}
              </div>
              {/* /CARD GRID */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( ACHIEVEMENTS ) */}
          {/* SECTION ( SERVICES ) */}
          <div className="relative pb-80 w-full" style={{paddingBottom: "20rem"}}>
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-12 font-sans text-xl font-bold leading-6 opacity-0"
                style={{
                  opacity: 0,
                  transform: "translate(0px, 150px)",
                  letterSpacing: "2.24px"
                }}
              >
                SERVICES
              </p>
              <h3
                className="mt-0 mb-16 ml-4 font-sans text-6xl tracking-normal leading-4 opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                What I can do.
              </h3>
              <div
                className="mb-16 w-16 h-px bg-white opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              />
              <p
                className="mt-0 mb-16 font-sans text-5xl tracking-normal leading-6 opacity-0 text-neutral-500"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                Lorem ipsum dolor sit amet, consectetur.
                <br className="text-4xl" style={{lineHeight: "47.6px"}}/>
                adipiscing elit. Aenean et elementum purus.
              </p>
              {/* ACCORDION */}
              <ul
                className="relative p-0 mx-0 mt-2 mb-0"
                data-active-index="false"
                data-slide-Speed={200}
                style={{listStyle: "none"}}
              >
                {/* ACCORDION ITEM */}
                <li
                  className="overflow-hidden relative z-10 pb-8 text-left opacity-0"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 150px)",
                    listStyle: "outside none none"
                  }}
                >
                  <div
                    className="block relative py-8 pr-20 pl-0 border-b-2 border-white border-solid cursor-pointer"
                    style={{listStyle: "outside none none"}}
                  >
                    <h5
                      className="my-0 font-sans text-5xl tracking-normal leading-5"
                      style={{listStyle: "outside none none"}}
                    >
                      Design
                    </h5>
                    <div
                      className="absolute right-8 top-1/2 w-6 h-6 border-b-2 border-l-2 border-white border-solid"
                      style={{
                        transform: "translateY(-50%) rotate(-225deg)",
                        transition: "all 0.1s ease 0s",
                        listStyle: "outside none none"
                      }}
                    />
                  </div>
                  <div
                    className="block px-0 pt-12 pb-4"
                    style={{listStyle: "outside none none"}}
                  >
                    <p
                      className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500"
                      style={{listStyle: "outside none none"}}
                    >
                      Brand Systems - Design Systems - Visual Identities - Interaction
                      Design - Visal Design - Motion Design
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
                {/* ACCORDION ITEM */}
                <li
                  className="overflow-hidden relative z-10 pb-8 text-left opacity-0"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 150px)",
                    listStyle: "outside none none"
                  }}
                >
                  <div
                    className="block relative py-8 pr-20 pl-0 border-b-2 border-white border-solid cursor-pointer"
                    style={{listStyle: "outside none none"}}
                  >
                    <h5
                      className="my-0 font-sans text-5xl tracking-normal leading-5"
                      style={{listStyle: "outside none none"}}
                    >
                      Marketing
                    </h5>
                    <div
                      className="absolute right-8 top-1/2 w-6 h-6 border-b-2 border-l-2 border-white border-solid"
                      style={{
                        transform: "translateY(-50%) rotate(-45deg)",
                        transition: "all 0.1s ease 0s",
                        listStyle: "outside none none"
                      }}
                    />
                  </div>
                  <div
                    className="hidden px-0 pt-12 pb-4"
                    style={{display: "none", listStyle: "outside none none"}}
                  >
                    <p
                      className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500"
                      style={{listStyle: "outside none none"}}
                    >
                      Marketing Strategy - SEO Strategy - Analytics - Creative
                      Storytelling - UX Copywriting - Google PPC
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
                {/* ACCORDION ITEM */}
                <li
                  className="overflow-hidden relative z-10 pb-8 text-left opacity-0"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 150px)",
                    listStyle: "outside none none"
                  }}
                >
                  <div
                    className="block relative py-8 pr-20 pl-0 border-b-2 border-white border-solid cursor-pointer"
                    style={{listStyle: "outside none none"}}
                  >
                    <h5
                      className="my-0 font-sans text-5xl tracking-normal leading-5"
                      style={{listStyle: "outside none none"}}
                    >
                      Development
                    </h5>
                    <div
                      className="absolute right-8 top-1/2 w-6 h-6 border-b-2 border-l-2 border-white border-solid"
                      style={{
                        transform: "translateY(-50%) rotate(-45deg)",
                        transition: "all 0.1s ease 0s",
                        listStyle: "outside none none"
                      }}
                    />
                  </div>
                  <div
                    className="hidden px-0 pt-12 pb-4"
                    style={{display: "none", listStyle: "outside none none"}}
                  >
                    <p
                      className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500"
                      style={{listStyle: "outside none none"}}
                    >
                      UI Development - Technical Consultancy - App Development -
                      Back-End Development - Cloud Infrastructure - Dev-Ops - SDK
                      Development
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
              </ul>
              {/* /ACCORDION */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( SERVICES ) */}
          {/* SECTION ( RESUME ) */}
          <div
            className="relative pb-80 w-full"
            style={{paddingBottom: "20rem"}}
            id="resume"
          >
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-12 font-sans text-xl font-bold leading-6 opacity-100"
                style={{
                  opacity: 0,
                  transform: "translate(0px, 0px)",
                  letterSpacing: "2.24px"
                }}
              >
                RESUME
              </p>
              <h3
                className="mt-0 mb-16 ml-4 font-sans text-6xl tracking-normal leading-4 opacity-100"
                style={{opacity: 0, transform: "translate(0px, 0px)"}}
              >
                Experience
              </h3>
              <div
                className="mb-16 w-16 h-px bg-white opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              />
              <p
                className="mt-0 mb-24 font-sans text-5xl tracking-normal leading-6 opacity-100 text-neutral-500"
                style={{opacity: 0, transform: "translate(0px, 0px)"}}
              >
                Lorem ipsum dolor sit amet, consectetur.
                <br className="text-4xl" style={{lineHeight: "47.6px"}}/>
                adipiscing elit. Aenean et elementum purus.
              </p>
              {/* RESUME */}
              <div className="border-l-2 border-white border-solid">
                {/* ITEM */}
                <div
                  className="flex absolute -left-20 py-24 px-32 mb-24 ml-20 w-px h-10 bg-white opacity-0"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 150px)",
                    flexFlow: "column wrap",
                    content: '""',
                    top: "20%",
                    zIndex: 11
                  }}
                >
                  <p className="mt-0 mb-6 font-sans text-4xl font-normal tracking-normal leading-6">
                    Google<span className="ml-8 text-xl leading-8">2017-2019</span>
                  </p>
                  <p className="mt-0 mb-4 font-sans text-5xl tracking-normal leading-6">
                    Full-Stack Developer
                  </p>
                  <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </p>
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className="flex absolute -left-20 py-24 px-32 mb-24 ml-20 w-px h-10 bg-white opacity-100"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 0px)",
                    flexFlow: "column wrap",
                    content: '""',
                    top: "20%",
                    zIndex: 11
                  }}
                >
                  <p className="mt-0 mb-6 font-sans text-4xl font-normal tracking-normal leading-6">
                    Tesla<span className="ml-8 text-xl leading-8">2015-2017</span>
                  </p>
                  <p className="mt-0 mb-4 font-sans text-5xl tracking-normal leading-6">
                    Front-End Developer
                  </p>
                  <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </p>
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className="flex absolute -left-20 py-24 px-32 ml-20 w-px h-10 bg-white opacity-100"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 0px)",
                    flexFlow: "column wrap",
                    content: '""',
                    top: "20%",
                    zIndex: 11
                  }}
                >
                  <p className="mt-0 mb-6 font-sans text-4xl font-normal tracking-normal leading-6">
                    Adobe<span className="ml-8 text-xl leading-8">2014-2015</span>
                  </p>
                  <p className="mt-0 mb-4 font-sans text-5xl tracking-normal leading-6">
                    Javascript Developer
                  </p>
                  <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </p>
                </div>
                {/* /ITEM */}
              </div>
              {/* /RESUME */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( RESUME ) */}
          {/* SECTION ( SKILLS ) */}
          <div className="relative pb-80 w-full" style={{paddingBottom: "20rem"}}>
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-12 font-sans text-xl font-bold leading-6 opacity-0"
                style={{
                  opacity: 0,
                  transform: "translate(0px, 150px)",
                  letterSpacing: "2.24px"
                }}
              >
                SKILLS
              </p>
              <h3
                className="mt-0 mb-16 ml-4 font-sans text-6xl tracking-normal leading-4 opacity-100"
                style={{opacity: 0, transform: "translate(0px, 0px)"}}
              >
                Skills I have collected
                <br className="text-5xl tracking-tight" style={{lineHeight: 55}}/>
                over the years and days.
              </h3>
              <div
                className="mb-16 w-16 h-px bg-white opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              />
              {/* SKILL BAR */}
              <div
                className="opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                <div className="py-8 px-0 select-none">
                  <h5 className="my-0 font-sans text-5xl tracking-normal leading-5">
                    HTML/CSS
                  </h5>
                </div>
                {/* BAR */}
                <div className="block relative mb-8 w-full h-px bg-white bg-opacity-[0.2]">
                  <div
                    className="absolute top-0 left-0 w-5/6 h-full"
                    style={{width: "85%"}}
                  />
                  <div
                    className="absolute top-0 py-1 px-5 w-4 h-4 select-none bg-neutral-900"
                    style={{
                      left: "85%",
                      transform: "translateX(-50%) rotate(45deg)",
                      content: '""',
                      bottom: "-0.45rem",
                      zIndex: -2
                    }}
                  >
                    <p className="my-0 font-sans text-4xl tracking-normal leading-6">
                      85%
                    </p>
                  </div>
                </div>
                {/* /BAR */}
              </div>
              {/* /SKILL BAR */}
              {/* SKILL BAR */}
              <div
                className="mb-8 opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                <div className="py-8 px-0 select-none">
                  <h5 className="my-0 font-sans text-5xl tracking-normal leading-5">
                    Javascript
                  </h5>
                </div>
                {/* BAR */}
                <div className="block relative w-full h-px bg-white bg-opacity-[0.2]">
                  <div
                    className="absolute top-0 left-0 w-2/3 h-full"
                    style={{width: "70%"}}
                  />
                  <div
                    className="absolute top-0 py-1 px-5 w-4 h-4 select-none bg-neutral-900"
                    style={{
                      left: "70%",
                      transform: "translateX(-50%) rotate(45deg)",
                      content: '""',
                      bottom: "-0.45rem",
                      zIndex: -2
                    }}
                  >
                    <p className="my-0 font-sans text-4xl tracking-normal leading-6">
                      70%
                    </p>
                  </div>
                </div>
                {/* /BAR */}
              </div>
              {/* /SKILL BAR */}
              {/* SKILL BAR */}
              <div
                className="opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                <div className="py-8 px-0 select-none">
                  <h5 className="my-0 font-sans text-5xl tracking-normal leading-5">
                    WordPress
                  </h5>
                </div>
                {/* BAR */}
                <div className="block relative w-full h-px bg-white bg-opacity-[0.2]">
                  <div
                    className="absolute top-0 left-0 h-full"
                    style={{width: "96%"}}
                  />
                  <div
                    className="absolute top-0 py-1 px-5 w-4 h-4 select-none bg-neutral-900"
                    style={{
                      left: "95%",
                      transform: "translateX(-50%) rotate(45deg)",
                      content: '""',
                      bottom: "-0.45rem",
                      zIndex: -2
                    }}
                  >
                    <p className="my-0 font-sans text-4xl tracking-normal leading-6">
                      95%
                    </p>
                  </div>
                </div>
                {/* /BAR */}
              </div>
              {/* /SKILL BAR */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( SKILLS ) */}
          {/* SECTION ( PORTFOLIO ) */}
          <div
            className="relative pb-80 w-full"
            style={{paddingBottom: "20rem"}}
            id="portfolio"
          >
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-12 font-sans text-xl font-bold leading-6 opacity-0"
                style={{
                  opacity: 0,
                  transform: "translate(0px, 150px)",
                  letterSpacing: "2.24px"
                }}
              >
                PORTFOLIO
              </p>
              <h3
                className="mt-0 mb-16 ml-4 font-sans text-6xl tracking-normal leading-4 opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                Selected Work
              </h3>
              <div
                className="mb-16 w-16 h-px bg-white opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              />
              <p
                className="mt-0 mb-24 font-sans text-5xl tracking-normal leading-6 opacity-0 text-neutral-500"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                Lorem ipsum dolor sit amet, consectetur.
                <br className="text-4xl" style={{lineHeight: "47.6px"}}/>
                adipiscing elit. Aenean et elementum purus.
              </p>
              {/* WORK GRID */}
              <div className="">
                {/* ITEM */}
                <div
                  className="block absolute top-0 left-0 w-full h-full opacity-100 select-none"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 0px)",
                    paddingBottom: "48%",
                    content: '""',
                    zIndex: -1,
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                  }}
                >
                  <div
                    className="inline-block overflow-hidden absolute bottom-12 right-20 flex-wrap w-24 h-24 text-2xl text-center border-2 border-white border-solid opacity-0 cursor-pointer select-none"
                    style={{
                      lineHeight: 58,
                      borderRadius: "100%",
                      zIndex: 2,
                      transition: "all 0.25s ease 0s"
                    }}
                  >
              <span
                className="absolute top-0 left-0 not-italic font-normal normal-case text-neutral-500"
                style={{
                  fontFamily: "themify",
                  speak: "none",
                  fontVariant: "normal"
                }}
              />
                  </div>
                  <div
                    className="overflow-hidden absolute bottom-16 left-20"
                    style={{zIndex: 2}}
                  >
                    <p className="my-0 font-sans text-5xl tracking-normal leading-6">
                      Immersive Solutions
                    </p>
                    <div className="mt-4 w-16 h-px bg-white"/>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: 'url("assets/images/work/item-1/preview.jpg")',
                      backgroundPosition: "center center",
                      zIndex: -2
                    }}
                  />
                  {/* LIGHTBOX CONTENT */}
                  <div className="hidden">
                    {/* LIGHTBOX IMAGES */}
                    <div className="">
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-1/1.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-1/2.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-1/3.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                    </div>
                    {/* /LIGHTBOX IMAGES */}
                    {/* INFO CONTENT */}
                    <div className="">
                      <h3 className="mt-0 mb-12 font-sans text-6xl tracking-normal leading-4">
                        Immersive Solutions
                      </h3>
                      <div className="mb-12 w-16 h-px bg-white"/>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                      We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
                      </p>
                    </div>
                    {/* /INFO CONTENT */}
                  </div>
                  {/* LIGHTBOX CONTENT */}
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className="block absolute top-0 left-0 mt-24 w-full h-full opacity-100 select-none"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 0px)",
                    paddingBottom: "48%",
                    content: '""',
                    zIndex: -1,
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                  }}
                >
                  <div
                    className="inline-block overflow-hidden absolute bottom-12 right-20 flex-wrap w-24 h-24 text-2xl text-center border-2 border-white border-solid opacity-0 cursor-pointer select-none"
                    style={{
                      lineHeight: 58,
                      borderRadius: "100%",
                      zIndex: 2,
                      transition: "all 0.25s ease 0s"
                    }}
                  >
              <span
                className="absolute top-0 left-0 not-italic font-normal normal-case text-neutral-500"
                style={{
                  fontFamily: "themify",
                  speak: "none",
                  fontVariant: "normal"
                }}
              />
                  </div>
                  <div
                    className="overflow-hidden absolute bottom-16 left-20"
                    style={{zIndex: 2}}
                  >
                    <p className="my-0 font-sans text-5xl tracking-normal leading-6">
                      Surface Experience
                    </p>
                    <div className="mt-4 w-16 h-px bg-white"/>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: 'url("assets/images/work/item-2/preview.jpg")',
                      backgroundPosition: "center center",
                      zIndex: -2
                    }}
                  />
                  {/* LIGHTBOX CONTENT */}
                  <div className="hidden">
                    {/* LIGHTBOX IMAGES */}
                    <div className="">
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-2/1.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                    </div>
                    {/* /LIGHTBOX IMAGES */}
                    {/* INFO CONTENT */}
                    <div className="">
                      <h3 className="mt-0 mb-12 font-sans text-6xl tracking-normal leading-4">
                        Surface Experience
                      </h3>
                      <div className="mb-12 w-16 h-px bg-white"/>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                      We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
                      </p>
                    </div>
                    {/* /INFO CONTENT */}
                  </div>
                  {/* LIGHTBOX CONTENT */}
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className="block absolute top-0 left-0 mt-24 w-full h-full opacity-100 select-none"
                  style={{
                    opacity: 0,
                    transform: "translate(0px, 0px)",
                    paddingBottom: "48%",
                    content: '""',
                    zIndex: -1,
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                  }}
                >
                  <div
                    className="inline-block overflow-hidden absolute bottom-12 right-20 flex-wrap w-24 h-24 text-2xl text-center border-2 border-white border-solid opacity-0 cursor-pointer select-none"
                    style={{
                      lineHeight: 58,
                      borderRadius: "100%",
                      zIndex: 2,
                      transition: "all 0.25s ease 0s"
                    }}
                  >
              <span
                className="absolute top-0 left-0 not-italic font-normal normal-case text-neutral-500"
                style={{
                  fontFamily: "themify",
                  speak: "none",
                  fontVariant: "normal"
                }}
              />
                  </div>
                  <div
                    className="overflow-hidden absolute bottom-16 left-20"
                    style={{zIndex: 2}}
                  >
                    <p className="my-0 font-sans text-5xl tracking-normal leading-6">
                      Adaptive Generation
                    </p>
                    <div className="mt-4 w-16 h-px bg-white"/>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: 'url("assets/images/work/item-3/preview.jpg")',
                      backgroundPosition: "center center",
                      zIndex: -2
                    }}
                  />
                  {/* LIGHTBOX CONTENT */}
                  <div className="hidden">
                    {/* LIGHTBOX IMAGES */}
                    <div className="">
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-3/1.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-3/2.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-3/3.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                    </div>
                    {/* /LIGHTBOX IMAGES */}
                    {/* INFO CONTENT */}
                    <div className="">
                      <h3 className="mt-0 mb-12 font-sans text-6xl tracking-normal leading-4">
                        Adaptive Generation
                      </h3>
                      <div className="mb-12 w-16 h-px bg-white"/>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                      We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
                      </p>
                    </div>
                    {/* /INFO CONTENT */}
                  </div>
                  {/* LIGHTBOX CONTENT */}
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className="block absolute top-0 left-0 mt-24 w-full h-full select-none"
                  style={{
                    opacity: "0.9847",
                    transform: "translate3d(0px, 2.2919px, 0px)",
                    paddingBottom: "48%",
                    content: '""',
                    zIndex: -1,
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                  }}
                >
                  <div
                    className="inline-block overflow-hidden absolute bottom-12 right-20 flex-wrap w-24 h-24 text-2xl text-center border-2 border-white border-solid opacity-0 cursor-pointer select-none"
                    style={{
                      lineHeight: 58,
                      borderRadius: "100%",
                      zIndex: 2,
                      transition: "all 0.25s ease 0s"
                    }}
                  >
              <span
                className="absolute top-0 left-0 not-italic font-normal normal-case text-neutral-500"
                style={{
                  fontFamily: "themify",
                  speak: "none",
                  fontVariant: "normal"
                }}
              />
                  </div>
                  <div
                    className="overflow-hidden absolute bottom-16 left-20"
                    style={{zIndex: 2}}
                  >
                    <p className="my-0 font-sans text-5xl tracking-normal leading-6">
                      Frame Manufacturer
                    </p>
                    <div className="mt-4 w-16 h-px bg-white"/>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: 'url("assets/images/work/item-4/preview.jpg")',
                      backgroundPosition: "center center",
                      zIndex: -2
                    }}
                  />
                  {/* LIGHTBOX CONTENT */}
                  <div className="hidden">
                    {/* LIGHTBOX IMAGES */}
                    <div className="">
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-4/1.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                      <div
                        className="block absolute top-0 left-0 w-full h-full"
                        data-image="assets/images/work/item-4/2.jpg"
                        style={{
                          paddingBottom: "48%",
                          content: '""',
                          zIndex: -1,
                          backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))"
                        }}
                      />
                    </div>
                    {/* /LIGHTBOX IMAGES */}
                    {/* INFO CONTENT */}
                    <div className="">
                      <h3 className="mt-0 mb-12 font-sans text-6xl tracking-normal leading-4">
                        Frame Manufacturer
                      </h3>
                      <div className="mb-12 w-16 h-px bg-white"/>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-6 text-neutral-500">
                      We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
                      </p>
                    </div>
                    {/* /INFO CONTENT */}
                  </div>
                  {/* LIGHTBOX CONTENT */}
                </div>
                {/* /ITEM */}
              </div>
              {/* /WORK GRID */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( PORTFOLIO ) */}
          {/* SECTION ( CUSTOMERS ) */}
          <div className="relative pb-80 w-full" style={{paddingBottom: "20rem"}}>
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-12 font-sans text-xl font-bold leading-6 opacity-100"
                style={{
                  opacity: 0,
                  transform: "translate(0px, 0px)",
                  letterSpacing: "2.24px"
                }}
              >
                CUSTOMERS
              </p>
              <h3
                className="mt-0 mb-16 ml-4 font-sans text-6xl tracking-normal leading-4 opacity-100"
                style={{opacity: 0, transform: "translate(0px, 0px)"}}
              >
                Selected Clients
              </h3>
              <div
                className="mb-24 w-16 h-px bg-white opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              />
              {/* CUSTOMER GRID */}
              <div
                className="flex flex-wrap opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                <div
                  className="flex-grow-0 flex-shrink-0 mb-20 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/1.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
                <div
                  className="flex-grow-0 flex-shrink-0 mb-20 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/2.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
                <div
                  className="flex-grow-0 flex-shrink-0 mb-20 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/3.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
                <div
                  className="flex-grow-0 flex-shrink-0 mb-20 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/4.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
                <div
                  className="flex-grow-0 flex-shrink-0 mb-20 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/5.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
                <div
                  className="flex-grow-0 flex-shrink-0 mb-20 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/6.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
                <div
                  className="flex-grow-0 flex-shrink-0 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/7.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
                <div
                  className="flex-grow-0 flex-shrink-0 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/8.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
                <div
                  className="flex-grow-0 flex-shrink-0 opacity-80"
                  style={{flexBasis: "33.3333%"}}
                >
                  <img
                    src="assets/images/clients/9.png"
                    className="h-auto align-middle"
                    alt="logo"
                    style={{maxWidth: "65%"}}
                  />
                </div>
              </div>
              {/* /CUSTOMER GRID */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( CUSTOMERS ) */}
          {/* SECTION ( TESTIMONIALS ) */}
          <div className="relative pb-80 w-full" style={{paddingBottom: "20rem"}}>
            {/* CONTAINER */}
            <div className="block w-full">
              <p
                className="mt-0 mb-12 font-sans text-xl font-bold leading-6 opacity-0"
                style={{
                  opacity: 0,
                  transform: "translate(0px, 150px)",
                  letterSpacing: "2.24px"
                }}
              >
                TESTIMONIALS
              </p>
              <h3
                className="mt-0 mb-16 ml-4 font-sans text-6xl tracking-normal leading-4"
                style={{
                  opacity: "0.9617",
                  transform: "translate3d(0px, 5.7489px, 0px)"
                }}
              >
                What my customers
                <br className="text-5xl tracking-tight" style={{lineHeight: 55}}/>
                are saying about me?
              </h3>
              <div
                className="mb-24 w-16 h-px bg-white opacity-0"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              />
              {/* TESTIMONIAL CAROUSEL */}
              <div
                className="block relative opacity-0 select-none"
                style={{opacity: 0, transform: "translate(0px, 150px)"}}
              >
                <div
                  className="inline-block overflow-hidden absolute top-0 left-0 flex-wrap w-24 h-24 text-2xl text-center border-2 border-white border-solid opacity-0 cursor-pointer select-none"
                  aria-disabled="true"
                  style={{
                    lineHeight: 58,
                    borderRadius: "100%",
                    zIndex: 4,
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.3s ease 0s"
                  }}
                >
            <span
              className="absolute top-0 left-0 not-italic font-normal normal-case text-neutral-500"
              style={{
                fontFamily: "themify",
                speak: "none",
                fontVariant: "normal"
              }}
            />
                </div>
                {/* ITEM */}
                <div
                  className="block overflow-hidden relative p-0 m-0"
                  style={{transform: "translate3d(0px, 0px, 0px)"}}
                >
                  <div
                    className="table clear-both relative top-0 left-0 mx-auto w-64 opacity-100"
                    style={{
                      opacity: 1,
                      width: 2100,
                      content: '""',
                      transform: "translate3d(0px, 0px, 0px)"
                    }}
                  >
                    <div
                      className="block float-left relative top-0 left-0 w-64 h-full opacity-100"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{
                        width: 700,
                        position: "relative",
                        left: 0,
                        top: 0,
                        zIndex: 999,
                        opacity: 1,
                        minHeight: 1
                      }}
                    >
                      <p className="relative py-24 px-32 my-0 font-sans text-5xl tracking-normal leading-6 bg-neutral-900 text-neutral-500">
                      We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
                      </p>
                      <p className="mt-12 mb-0 font-sans text-5xl tracking-normal leading-5">
                        Elena Clouse
                      </p>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-5 text-neutral-500">
                        CEO Stellar Inc.
                      </p>
                    </div>
                    <div
                      className="block float-left relative top-0 w-64 h-full opacity-0"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{
                        width: 700,
                        position: "relative",
                        left: "-700px",
                        top: 0,
                        zIndex: 998,
                        opacity: 0,
                        minHeight: 1
                      }}
                    >
                      <p className="relative py-24 px-32 my-0 font-sans text-5xl tracking-normal leading-6 bg-neutral-900 text-neutral-500">
                      We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
                      </p>
                      <p className="mt-12 mb-0 font-sans text-5xl tracking-normal leading-5">
                        Brandon Hadid
                      </p>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-5 text-neutral-500">
                        CTO Market Hero
                      </p>
                    </div>
                    <div
                      className="block float-left relative top-0 w-64 h-full opacity-0"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{
                        width: 700,
                        position: "relative",
                        left: "-1400px",
                        top: 0,
                        zIndex: 998,
                        opacity: 0,
                        minHeight: 1
                      }}
                    >
                      <p className="relative py-24 px-32 my-0 font-sans text-5xl tracking-normal leading-6 bg-neutral-900 text-neutral-500">
                        We chose Lenoox because its the perfect combination of
                        convenience and quality. Team takes care of getting us
                        high-quality images quickly and more than build jacket
                        efficiently.
                      </p>
                      <p className="mt-12 mb-0 font-sans text-5xl tracking-normal leading-5">
                        John Miller
                      </p>
                      <p className="my-0 font-sans text-5xl tracking-normal leading-5 text-neutral-500">
                        CTO SpaceX Industries
                      </p>
                    </div>
                  </div>
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                {/* /ITEM */}
                {/* ITEM */}
                {/* /ITEM */}
                <div
                  className="inline-block overflow-hidden absolute right-0 flex-wrap w-24 h-24 text-2xl text-center border-2 border-white border-solid cursor-pointer select-none"
                  style={{
                    top: "293.969px",
                    lineHeight: 58,
                    borderRadius: "100%",
                    zIndex: 4,
                    transform: "translate(50%, 50%)",
                    transition: "all 0.3s ease 0s"
                  }}
                  aria-disabled="false"
                >
            <span
              className="absolute top-0 left-0 not-italic font-normal normal-case text-neutral-500"
              style={{
                fontFamily: "themify",
                speak: "none",
                fontVariant: "normal"
              }}
            />
                </div>
              </div>
              {/* /TESTIMONIAL CAROUSEL */}
            </div>
            {/* /CONTAINER */}
          </div>
          </div>
          

        {/* /SECTION CONTAINER */}
      </div>
    </>
  );
};

export default BiomechanicalPerformanceFactors;
