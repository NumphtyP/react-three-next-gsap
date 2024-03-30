import React from 'react'
import ProgressBar from '../../progressBar'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Anatomy from './Anatomy'

const circleProgressData = [
  { language: 'Mass', progress: 95 },
  { language: 'Russian', progress: 80 },
  { language: 'Arabic', progress: 90 },
]

const progressBarData = [
  { bgcolor: '#7d7789', completed: 60, title: 'HTML & CSS' },
  { bgcolor: '#7d7789', completed: 85, title: 'Javascript' },
  { bgcolor: '#7d7789', completed: 90, title: 'WordPress' },
]

const services = [
  {
    desc: 'Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.',
    img: 'img/testimonials/1.jpg',
    info1: 'Alexander Walker',
    info2: 'Graphics Designer',
  },
  {
    desc: 'I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.',
    img: 'img/testimonials/2.jpg',
    info1: 'Baraka Clinton',
    info2: 'Construction Engineering',
  },
  {
    desc: 'These people really know what they are doing! Great customer support availability and supperb kindness.',
    img: 'img/testimonials/3.jpg',
    info1: 'Armin Van Buuren',
    info2: 'Content Manager',
  },
]

export default function CarlLewis() {
  return (
    <>
      {/* <!-- ABOUT --> */}
      <div
        className='fixed inset-y-0 right-0 z-10 m-0 w-16 break-words border-0 bg-white p-0 align-baseline leading-7 text-zinc-500'
        style={{ outline: 'none' }}
      >
        <Anatomy class='size-full break-words leading-7 text-zinc-500' style={{ width: '100%', height: '100%' }} />

        <div className='relative float-left clear-both h-auto w-full px-[100px] pb-0 pt-[92px]'>
          <div className='float-left clear-both h-auto w-full'>
            <div className='float-left clear-both mb-[87px] h-auto w-full'>
              <div className='float-left clear-both h-auto w-full overflow-hidden'>
                <span>About Me</span>
              </div>
              <div className='mt-[55px] flex h-auto w-full justify-between'>
                <div className='w-2/5'>
                  <p className='mb-[15px]'>
                    Hello there! My name is <strong>Alan Walker.</strong> I am a graphic designer, and I&#39;m very
                    passionate and dedicated to my work.
                  </p>
                  <p>
                    With 20 years experience as a professional a graphic designer, I have acquired the skills and
                    knowledge necessary to make your project a success.
                  </p>
                </div>
                <div className='w-6/12'>
                  <ul>
                    <li>
                      <span className='first'>Name:</span>
                      <span className='second'>Alan Walker</span>
                    </li>
                    <li>
                      <span className='first'>Address:</span>
                      <span className='second'>Ave Street, New York, USA</span>
                    </li>
                    <li>
                      <span className='first'>Study:</span>
                      <span className='second'>Univercity of Oxford</span>
                    </li>
                    <li>
                      <span className='first'>Degree:</span>
                      <span className='second'>Master of Science</span>
                    </li>
                    <li>
                      <span className='first'>Mail:</span>
                      <span className='second'>
                        <a href='#'>hello@cavani.com</a>
                      </span>
                    </li>
                    <li>
                      <span className='first'>Phone:</span>
                      <span className='second'>+77 022 444 05 05</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='float-left clear-both mb-[87px] h-auto w-full'>
              <div className='clear-both flex h-auto w-full justify-between'>
                <div className='float-left clear-both mt-[55px] h-auto w-full'>
                  <div className='float-left clear-both h-auto w-full overflow-hidden'>
                    <span className="relative inline-block font-bold uppercase tracking-[8px] text-[#333] after:absolute after:left-full after:top-2/4 after:ml-[30px] after:h-px after:w-[5000px] after:-translate-y-2/4 after:bg-[#7d7789] after:content-['']">
                      Services
                    </span>
                  </div>
                  <div className='list'>
                    <ul>
                      <li>Web Development</li>
                      <li>Graphic Design</li>
                      <li>Landing Page</li>
                      <li>On-Page SEO</li>
                      <li>Web Hosting</li>
                    </ul>
                  </div>
                </div>
                <div className='w-2/5'>
                  <div className='float-left clear-both h-auto w-full overflow-hidden'>
                    <span>Interests</span>
                  </div>
                  <div className='float-left clear-both mt-[55px] h-auto w-full'>
                    <ul>
                      <li>Painting &amp; Drawing</li>
                      <li>Reading &amp; Writing</li>
                      <li>Music &amp; Cinema</li>
                      <li>Travel &amp; Picnik</li>
                      <li>Rain &amp; Snow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='float-left clear-both mb-[65px] h-auto w-full'>
              <div className='clear-both flex h-auto w-full flex-row justify-between'>
                <div className='w-2/5'>
                  <div className='mx-auto my-0 w-full max-w-[120px]'>
                    <span>Programming</span>
                  </div>
                  <div className='mt-[95px]'>
                    {progressBarData.map((item, idx) => (
                      <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} title={item.title} />
                    ))}
                  </div>
                </div>
                <div className='w-6/12'>
                  <div className='mx-auto my-0 w-full max-w-[120px]'>
                    <span>Language</span>
                  </div>
                  <div className='mx-auto my-0 w-full max-w-[120px]'>
                    <div className='flex items-center justify-between'>
                      {circleProgressData.map((item, idx) => (
                        <div key={idx}>
                          <div className='w-full text-center'>
                            <CircularProgressbar
                              value={item.progress}
                              text={`${item.progress}%`}
                              strokeWidth={3}
                              stroke='#7d7789'
                              Language={item.language}
                              className={'list_inner'}
                            />
                            <div className='title'>
                              <span>{item.language}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='float-left clear-both mb-[75px] h-auto w-full'>
              <div className='clear-both flex h-auto w-full justify-between'>
                <div className='w-2/5'>
                  <div className='mx-auto my-0 w-full max-w-[120px]'>
                    <span>Education</span>
                  </div>
                  <div className='list'>
                    <div className='float-left clear-both mt-[55px] h-auto w-full'>
                      <ul>
                        <li className='relative float-left m-0 w-full pb-[45px] pl-5 before:absolute before:left-[-9px] before:top-2 before:size-[18px] before:rounded-[100%] before:border-[#ccc] before:border-[solid] before:content-[""] last:pb-0'>
                          <div className='w-full text-center'>
                            <div className='w-6/12 pr-5'>
                              <span>2014 - 2016</span>
                            </div>
                            <div className='w-6/12 pl-5'>
                              <h3 className='mb-0.5 text-base font-semibold'>Oxford Univercity</h3>
                              <span className='text-sm'>Master Degree</span>
                            </div>
                          </div>
                        </li>
                        <li className='relative float-left m-0 w-full pb-[45px] pl-5 before:absolute before:left-[-9px] before:top-2 before:size-[18px] before:rounded-[100%] before:border-[#ccc] before:border-[solid] before:content-[""] last:pb-0'>
                          <div className='w-full text-center'>
                            <div className='w-6/12 pr-5'>
                              <span>2010 - 2014</span>
                            </div>
                            <div className='w-6/12 pl-5'>
                              <h3 className='mb-0.5 text-base font-semibold'>Texas Univercity</h3>
                              <span className='text-sm'>Bachelor Degree</span>
                            </div>
                          </div>
                        </li>
                        <li className='relative float-left m-0 w-full pb-[45px] pl-5 before:absolute before:left-[-9px] before:top-2 before:size-[18px] before:rounded-[100%] before:border-[#ccc] before:border-[solid] before:content-[""] last:pb-0'>
                          <div className='w-full text-center'>
                            <div className='w-6/12 pr-5'>
                              <span>2008 - 2010</span>
                            </div>
                            <div className='w-6/12 pl-5'>
                              <h3 className='mb-0.5 text-base font-semibold'>Simone College</h3>
                              <span className='text-sm'>Associate Degree</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='w-6/12'>
                  <div className='mx-auto my-0 w-full max-w-[120px]'>
                    <span>Experience</span>
                  </div>
                  <div className='list'>
                    <div className='float-left clear-both mt-[55px] h-auto w-full'>
                      <ul className='relative m-0 inline-block list-none pt-2.5 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[rgba(0,0,0,0.07)] before:content-[""]'>
                        <li className='relative float-left m-0 w-full pb-[45px] pl-5 before:absolute before:left-[-9px] before:top-2 before:size-[18px] before:rounded-[100%] before:border-[#ccc] before:border-[solid] before:content-[""] last:pb-0'>
                          <div className='relative clear-both flex h-auto w-full'>
                            <div className='w-6/12 pr-5'>
                              <span>2018 - running</span>
                            </div>
                            <div className='w-6/12 pl-5'>
                              <h3 className='mb-0.5 text-base font-semibold'>Envato Elements</h3>
                              <span className='text-sm'>Exclusive Author</span>
                            </div>
                          </div>
                        </li>
                        <li className='relative float-left m-0 w-full pb-[45px] pl-5 before:absolute before:left-[-9px] before:top-2 before:size-[18px] before:rounded-[100%] before:border-[#ccc] before:border-[solid] before:content-[""] last:pb-0'>
                          <div className='relative clear-both flex h-auto w-full'>
                            <div className='w-6/12 pr-5'>
                              <span className='inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,0.05)] px-[25px] py-[5px] text-sm'>
                                2015 - 2018
                              </span>
                            </div>
                            <div className='w-6/12 pl-5'>
                              <h3 className='mb-0.5 text-base font-semibold'>Avo Corporation</h3>
                              <span className='text-sm'>Content Manager</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='relative clear-both flex h-auto w-full'>
                            <div className='w-6/12 pr-5'>
                              <span className='inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,0.05)] px-[25px] py-[5px] text-sm'>
                                2012 - 2015
                              </span>
                            </div>
                            <div className='w-6/12 pl-5'>
                              <h3 className='mb-0.5 text-base font-semibold'>FC Barcelona</h3>
                              <span className='text-sm'>Football Player</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='float-left clear-both mb-[92px] h-auto w-full'>
              <div className='mx-auto my-0 w-full max-w-[120px]'>
                <span>Partners</span>
              </div>
              <div className='float-left clear-both mt-[62px] w-full overflow-hidden border-2 border-solid border-[#e5edf4]'>
                <ul>
                  <li>
                    <div className='float-left clear-both h-auto w-full opacity-50 transition-all duration-[0.3s] ease-[ease] hover:opacity-100'>
                      <img src='img/partners/1.png' alt='' />
                      <a className='cavani_tm_full_link' href='#'></a>
                    </div>
                  </li>
                  <li>
                    <div className='float-left clear-both h-auto w-full opacity-50 transition-all duration-[0.3s] ease-[ease] hover:opacity-100'>
                      <img src='img/partners/2.png' alt='' />
                      <a className='cavani_tm_full_link' href='#'></a>
                    </div>
                  </li>
                  <li>
                    <div className='list_inner'>
                      <img src='img/partners/3.png' alt='' />
                      <a className='cavani_tm_full_link' href='#'></a>
                    </div>
                  </li>
                  <li>
                    <div className='float-left clear-both h-auto w-full opacity-50 transition-all duration-[0.3s] ease-[ease] hover:opacity-100'>
                      <img src='img/partners/4.png' alt='' />
                      <a className='cavani_tm_full_link' href='#'></a>
                    </div>
                  </li>
                  <li>
                    <div className='float-left clear-both h-auto w-full opacity-50 transition-all duration-[0.3s] ease-[ease] hover:opacity-100'>
                      <img src='img/partners/5.png' alt='' />
                      <a className='cavani_tm_full_link' href='#'></a>
                    </div>
                  </li>
                  <li>
                    <div className='float-left clear-both h-auto w-full opacity-50 transition-all duration-[0.3s] ease-[ease] hover:opacity-100'>
                      <img src='img/partners/1.png' alt='' />
                      <a className='cavani_tm_full_link' href='#'></a>
                    </div>
                  </li>
                  <li>
                    <div className='float-left clear-both h-auto w-full opacity-50 transition-all duration-[0.3s] ease-[ease] hover:opacity-100'>
                      <img src='img/partners/2.png' alt='' />
                      <a className='cavani_tm_full_link' href='#'></a>
                    </div>
                  </li>
                  <li>
                    <div className='float-left clear-both h-auto w-full opacity-50 transition-all duration-[0.3s] ease-[ease] hover:opacity-100'>
                      <img src='img/partners/3.png' alt='' />
                      <a className='cavani_tm_full_link' href='#'></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='float-left clear-both mb-[90px] h-auto w-full'>
              <div className='mx-auto my-0 w-full max-w-[120px]'>
                <span>Testimonials</span>
              </div>
              <div className='float-left clear-both mt-[75px] h-auto w-full'>
                <ul className=''>
                  <li>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      // navigation={{
                      //     prevEl: ".custom_prev",
                      //     nextEl: ".custom_next",
                      // }}
                      className='custom-class'
                      breakpoints={{
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {services.map((item, i) => (
                        <SwiperSlide key={i}>
                          <div className='relative float-left clear-both h-auto w-full'>
                            <div className='absolute left-[50px] top-[-29px] z-[1] text-3xl'>
                              <i className='icon-quote-left' />
                              <p>{item.desc}</p>
                            </div>
                            <div className='float-left clear-both flex h-auto w-full items-center pl-5'>
                              <div className='relative size-[60px]'>
                                <div className='main' data-img-url={item.img} />
                              </div>
                              <div className='info'>
                                <h3>{item.info1}</h3>
                                <span>{item.info2}</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT --> */}
    </>
  )
}
