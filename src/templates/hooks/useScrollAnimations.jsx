import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Ensure GSAP is aware of the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const useScrollAnimations = (config) => {
  useEffect(() => {
    // Destructure your configuration here, for example:
    const { config_scroll_animation_on_mobile, is_mobile_device, config_scroll_animation_defaults } = config

    if (config_scroll_animation_on_mobile === false && is_mobile_device) return

    let defaults = {
      duration: 1.2,
      ease: 'power4.out',
      animation: 'fade_from_bottom',
      once: false,
    }

    defaults = typeof config_scroll_animation_defaults === 'undefined' ? defaults : config_scroll_animation_defaults

    gsap.utils.toArray('.scroll-animation').forEach((box) => {
      const settings = {
        ease: box.dataset.animationEase || defaults.ease,
        duration: box.dataset.animationDuration || defaults.duration,
      }

      const animations = {
        fade_from_bottom: { y: 150, opacity: 0 },
        fade_from_left: { x: -150, opacity: 0 },
        fade_from_right: { x: 150, opacity: 0 },
        fade_in: { opacity: 0 },
        rotate_up: { y: 150, rotation: 10, opacity: 0 },
      }

      const scroll_trigger = {
        scrollTrigger: {
          trigger: box,
          once: defaults.once,
          start: 'top bottom+=5%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }

      const gsap_obj = {
        ...settings,
        ...animations[box.dataset.animation || defaults.animation],
        ...scroll_trigger,
      }

      gsap.from(box, gsap_obj)
    })
  }, [config]) // Only re-run the effect if config changes
}

export default useScrollAnimations
