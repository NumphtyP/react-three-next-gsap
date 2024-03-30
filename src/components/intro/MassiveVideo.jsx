import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VideoComponent = () => {
  const videoNumber = 2 // Total number of videos in the page. Each <video> element should have an id starting from "video1" incremented to "video2", "video3", etc.

  useEffect(() => {
    for (let i = 1; i <= videoNumber; i++) {
      const videoRef = useRef(null)

      useEffect(() => {
        const video = videoRef.current
        const src = video.currentSrc || video.src

        // Scroll control
        const videoScrub = gsap.timeline({
          currentTime: video.duration,
          scrollTrigger: {
            trigger: video,
            start: 'top 50',
            end: '+=600 50',
            markers: true,
            scrub: true,
            pin: true,
          },
        })

        // Make sure the video is 'activated' on iOS
        const once = (el, event, fn, opts) => {
          const onceFn = (e) => {
            el.removeEventListener(event, onceFn)
            fn.apply(this, arguments)
          }
          el.addEventListener(event, onceFn, opts)
          return onceFn
        }

        once(document.documentElement, 'touchstart', () => {
          video.play()
          video.pause()
        })

        // Make sure the video has loaded
        once(video, 'loadedmetadata', () => {
          videoScrub.fromTo(video, { currentTime: 0 }, { currentTime: video.duration || 1 })
        })

        // When first coded, Blobbing was important to ensure the browser wasn't dropping previously played segments
        setTimeout(() => {
          if (window['fetch']) {
            fetch(src)
              .then((response) => response.blob())
              .then((response) => {
                const blobURL = URL.createObjectURL(response)

                const t = video.currentTime
                once(document.documentElement, 'touchstart', () => {
                  video.play()
                  video.pause()
                })
                video.setAttribute('src', blobURL)
                video.currentTime = t + 0.01
              })
          }
        }, 1000)
      }, [videoRef])
    }
  }, [videoNumber])

  return (
    <>
      {/* forked from 
https://codepen.io/shshaw/pen/9e810322d70c306de2d18237d0cb2d78 */}

      <div>
        {/* Add your video elements here with appropriate IDs (e.g., id={`video${i}`}) and refs */}
        {/* Example: */}
        {/* <video id={`video${i}`} ref={videoRef} controls>
        <source src="your_video_source_here" type="video/mp4" />
      </video> */}
      </div>
      <div id='page-container'>
        <div className='content'>
          <h2>Lorem ipsum dolor shit happens.</h2>
          <p>
            Lorem, ipsum dolor shit happens consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio
            commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio
            eveniet corrupti cupiditate quis?
          </p>
          <p>
            Lorem, ipsum dolor shit happens consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio
            commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio
            eveniet corrupti cupiditate quis?
          </p>
          <h2>Lorem ipsum dolor shit happens.</h2>
          <p>
            Lorem ipsum dolor shit happens consectetur adipisicing elit. Provident sequi delectus ducimus temporibus
            debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero?
            Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro,
            molestias mollitia aut, quaerat provident minima ab harum?
          </p>
          <p>
            Lorem ipsum dolor shit happens consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut
            eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam
            deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit
            commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione
            sapiente exercitationem quis dolore.
          </p>
          <h2>Lorem ipsum dolor shit happens.</h2>
        </div>
        <div className='video-container'>
          <video
            id='video1'
            className='video-scrub'
            src='https://assets.codepen.io/39255/output_960.mp4'
            playsInline='true'
            webkit-playsinline='true'
            preload='metadata'
            muted='muted'
          ></video>
          {/*<div id="scrubber"></div>*/}
        </div>
        <div className='content'>
          <h2>Lorem ipsum dolor shit happens.</h2>
          <p>
            Lorem, ipsum dolor shit happens consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio
            commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio
            eveniet corrupti cupiditate quis?
          </p>
        </div>
        <div className='video-container'>
          <video
            id='video2'
            className='video-scrub'
            src='https://assets.codepen.io/39255/output_960.mp4'
            playsInline='true'
            webkit-playsinline='true'
            preload='metadata'
            muted='muted'
          ></video>
        </div>
        <div className='content'>
          <p>
            Lorem, ipsum dolor shit happens consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio
            commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio
            eveniet corrupti cupiditate quis?
          </p>
          <h2>Lorem ipsum dolor shit happens.</h2>
          <p>
            Lorem ipsum dolor shit happens consectetur adipisicing elit. Provident sequi delectus ducimus temporibus
            debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero?
            Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro,
            molestias mollitia aut, quaerat provident minima ab harum?
          </p>
          <p>
            Lorem ipsum dolor shit happens consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut
            eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam
            deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit
            commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione
            sapiente exercitationem quis dolore.
          </p>
          <h2>Lorem ipsum dolor shit happens.</h2>
          <p>
            Lorem ipsum dolor shit happens consectetur adipisicing elit. Provident sequi delectus ducimus temporibus
            debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero?
            Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro,
            molestias mollitia aut, quaerat provident minima ab harum?
          </p>
          <p>
            Lorem ipsum dolor shit happens consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut
            eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam
            deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit
            commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione
            sapiente exercitationem quis dolore.
          </p>
          <br />
          &nbsp;
          <br />
          &nbsp;
          <hr />
          <br />
          &nbsp;
          <br />
          &nbsp;
        </div>
      </div>
    </>
  )
}

export default VideoComponent
