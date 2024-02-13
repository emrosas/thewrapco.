import gsap from 'gsap'

const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power1.out' }, paused: true }) // Create a timeline
tl.to('#menu-button', { opacity: 0.2 })

document.addEventListener('astro:page-load', () => {
	let menuOpen = false
	const menuButton = document.getElementById('menu-button')
	menuButton.addEventListener('click', () => {
		if (menuOpen) {
			tl.reverse()
			menuButton.setDirection(-1)
			menuButton.play()
			menuOpen = false
		} else {
			tl.play()
			menuButton.setDirection(1)
			menuButton.play()
			menuOpen = true
		}
		// menuButton.play()
	})
})
