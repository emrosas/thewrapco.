import gsap from 'gsap'

const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power1.out' }, paused: true }) // Create a timeline
tl.to('#menu-button', { opacity: 0.2 })

document.addEventListener('astro:page-load', () => {
	document.getElementById('menu-button').addEventListener('click', () => {
		console.log('clicked')
		tl.play()
	})
})
