import { useEffect, useRef } from 'react'
import { useMotionValue } from 'framer-motion'
import { gsap, Elastic } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from './components/footer'
import First from './components/first'
import Second from './components/second'
import Third from './components/third'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	useEffect(() => {
		gsap.killTweensOf('*')
		ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

		const tl = gsap.timeline({ delay: 1 })

		tl.from('.hero-icon', {
			duration: 2,
			scale: 0,
			rotation: 360,
			ease: Elastic.easeOut.config(1, 0.8),
			transformOrigin: 'center center',
		})

			.from(
				'.hero-title .title-word',
				{
					duration: 1.5,
					y: 120,
					opacity: 0,
					rotationX: -90,
					transformOrigin: '50% 50% -50px',
					ease: 'power4.out',
					stagger: 0.4,
				},
				'-=1.2'
			)

			.from(
				'.hero-subtitle',
				{
					duration: 2,
					opacity: 0,
					y: 60,
					ease: 'power3.out',
				},
				'-=0.5'
			)

			.from(
				'.hero-cta',
				{
					duration: 1.8,
					scale: 0,
					opacity: 0,
					rotation: 180,
					ease: Elastic.easeOut.config(1.2, 0.75),
				},
				'-=0.3'
			)

			.from(
				'.scroll-indicator',
				{
					duration: 1.5,
					y: 50,
					opacity: 0,
					ease: 'power2.out',
				},
				'-=0.5'
			)

		gsap.to('.hero-bg-layer', {
			yPercent: -20,
			ease: 'none',
			scrollTrigger: {
				trigger: '.hero-section',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
			},
		})

		gsap.to('.floating-element', {
			y: (index) => -30 - index * 10,
			rotation: (index) => 180 * (index % 2 === 0 ? 1 : -1),
			scale: (index) => 1 + index * 0.05,
			ease: 'none',
			scrollTrigger: {
				trigger: '.hero-section',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1.5,
			},
		})

		gsap.from('.trainer-card', {
			duration: 2,
			y: 80,
			opacity: 0,
			rotationY: 10,
			scale: 0.95,
			stagger: 0.4,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.trainers-section',
				start: 'top 80%',
				end: 'bottom 20%',
				toggleActions: 'play none none reverse',
			},
		})

		gsap.from('.contact-item', {
			duration: 1.5,
			x: (index) => (index % 2 === 0 ? -80 : 80),
			opacity: 0,
			scale: 0.9,
			stagger: 0.3,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.contact-section',
				start: 'top 80%',
			},
		})

		gsap.to('.gradient-blob-1, .gradient-blob-2, .gradient-blob-3, .gradient-blob-4', {
			rotation: 360,
			duration: 60,
			repeat: -1,
			ease: 'none',
		})

		gsap.to('.gradient-blob-1', {
			yPercent: -15,
			xPercent: 10,
			ease: 'none',
			scrollTrigger: {
				trigger: '.contact-section',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 2,
			},
		})

		gsap.to('.gradient-blob-2', {
			yPercent: 20,
			xPercent: -8,
			ease: 'none',
			scrollTrigger: {
				trigger: '.contact-section',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1.5,
			},
		})

		gsap.to('.gradient-blob-3', {
			yPercent: -10,
			xPercent: -12,
			ease: 'none',
			scrollTrigger: {
				trigger: '.contact-section',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 2.5,
			},
		})

		gsap.to('.gradient-blob-4', {
			yPercent: 25,
			xPercent: 15,
			ease: 'none',
			scrollTrigger: {
				trigger: '.contact-section',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1.8,
			},
		})

		const random = (min: number, max: number) => Math.random() * (max - min) + min

		const animateBackgroundGradient = (selector: string, delay = 0) => {
			gsap.to(selector, {
				x: () => random(-30, 30),
				y: () => random(-20, 20),
				scale: () => random(0.9, 1.1),
				rotation: () => random(-45, 45),
				duration: () => random(20, 40),
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
				delay: delay
			})
		}

		// Animaciones más suaves para los gradientes de fondo
		setTimeout(() => animateBackgroundGradient('.bg-gradient-1', 0), 1000)
		setTimeout(() => animateBackgroundGradient('.bg-gradient-2', 2), 1500)
		setTimeout(() => animateBackgroundGradient('.bg-gradient-3', 4), 2000)
		setTimeout(() => animateBackgroundGradient('.bg-gradient-4', 6), 2500)
		setTimeout(() => animateBackgroundGradient('.bg-gradient-5', 8), 3000)

		const handleMouseMove = (e: MouseEvent) => {
			const x = (e.clientX - window.innerWidth / 2) / 150
			const y = (e.clientY - window.innerHeight / 2) / 150
			mouseX.set(x)
			mouseY.set(y)

			gsap.to('.gradient-blob-1', {
				x: x * 0.5,
				y: y * 0.3,
				duration: 2,
				ease: 'power2.out'
			})

			gsap.to('.gradient-blob-2', {
				x: x * -0.3,
				y: y * 0.4,
				duration: 2.5,
				ease: 'power2.out'
			})

			gsap.to('.gradient-blob-3', {
				x: x * 0.4,
				y: y * -0.2,
				duration: 2.2,
				ease: 'power2.out'
			})

			gsap.to('.gradient-blob-4', {
				x: x * -0.6,
				y: y * 0.5,
				duration: 1.8,
				ease: 'power2.out'
			})
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
			window.removeEventListener('mousemove', handleMouseMove)
			gsap.killTweensOf('.bg-gradient-1, .bg-gradient-2, .bg-gradient-3, .bg-gradient-4, .bg-gradient-5')
		}
	}, [mouseX, mouseY])

	return (
		<div ref={containerRef} className='min-h-screen bg-white relative'>
			{/* Fondo fijo para evitar scroll adicional */}
			<div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
				{/* Gradiente 1 - Superior izquierda */}
				<div 
					className="bg-gradient-1 absolute"
					style={{
						top: '10%',
						left: '5%',
						width: '400px',
						height: '400px',
						background: 'radial-gradient(circle, rgba(220, 38, 38, 0.132) 0%, rgba(220, 38, 38, 0.066) 30%, rgba(220, 38, 38, 0.022) 60%, transparent 80%)',
						borderRadius: '50%',
						filter: 'blur(60px)',
					}}
				/>
				
				{/* Gradiente 2 - Superior derecha */}
				<div 
					className="bg-gradient-2 absolute"
					style={{
						top: '5%',
						right: '10%',
						width: '350px',
						height: '350px',
						background: 'radial-gradient(circle, rgba(239, 68, 68, 0.11) 0%, rgba(239, 68, 68, 0.055) 35%, rgba(239, 68, 68, 0.0165) 65%, transparent 85%)',
						borderRadius: '50%',
						filter: 'blur(50px)',
					}}
				/>
				
				{/* Gradiente 3 - Centro izquierda */}
				<div 
					className="bg-gradient-3 absolute"
					style={{
						top: '40%',
						left: '-5%',
						width: '300px',
						height: '500px',
						background: 'radial-gradient(ellipse, rgba(185, 28, 28, 0.088) 0%, rgba(185, 28, 28, 0.044) 40%, rgba(185, 28, 28, 0.011) 70%, transparent 90%)',
						borderRadius: '50%',
						filter: 'blur(70px)',
						transform: 'rotate(25deg)',
					}}
				/>
				
				{/* Gradiente 4 - Inferior derecha */}
				<div 
					className="bg-gradient-4 absolute"
					style={{
						bottom: '10%',
						right: '5%',
						width: '450px',
						height: '300px',
						background: 'radial-gradient(ellipse, rgba(248, 113, 113, 0.099) 0%, rgba(248, 113, 113, 0.0495) 30%, rgba(248, 113, 113, 0.0198) 60%, transparent 80%)',
						borderRadius: '50%',
						filter: 'blur(55px)',
					}}
				/>
				
				{/* Gradiente 5 - Centro */}
				<div 
					className="bg-gradient-5 absolute"
					style={{
						top: '60%',
						left: '50%',
						transform: 'translateX(-50%)',
						width: '600px',
						height: '200px',
						background: 'radial-gradient(ellipse, rgba(252, 165, 165, 0.066) 0%, rgba(252, 165, 165, 0.033) 50%, rgba(252, 165, 165, 0.008) 75%, transparent 95%)',
						borderRadius: '50%',
						filter: 'blur(40px)',
					}}
				/>
			</div>

			{/* Contenido principal */}
			<div className="relative">
				<First />
				<Second />
				<Third />
				<Footer />
			</div>
		</div>
	)
}

export default App
