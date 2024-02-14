import gsap from 'gsap'

// Wait for the page to load before running the animation
document.addEventListener('astro:page-load', () => {
	// Create the timeline
	const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power1.out' }, paused: true }) // Create a timeline
	tl.to('#nav-menu', {
		display: 'flex',
		opacity: 1,
		position: 'fixed',
		top: '0',
		left: '0',
		width: '100%',
		height: '85%',
		backgroundColor: '#343B2B',
		borderRadius: '0 0 32px 32px'
	})
	tl.to('#menu-overlay', { display: 'block', opacity: 0.6 }, '=')

	//Keep track of the menu state
	let menuOpen = false

	//Activate the animation on click of the menu button
	const menuButton = document.getElementById('menu-button')
	menuButton.addEventListener('click', () => {
		if (menuOpen) {
			tl.timeScale(2).reverse()
			menuButton.setDirection(-1)
			menuButton.play()
			menuOpen = false
		} else {
			tl.timeScale(1).play()
			menuButton.setDirection(1)
			menuButton.play()
			menuOpen = true
		}
	})
	const menuOverlay = document.getElementById('menu-overlay')
	menuOverlay.addEventListener('click', () => {
		menuButton.click()
	})
})
