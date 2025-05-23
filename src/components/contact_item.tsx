import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { gsap } from 'gsap'

interface ContactItemProps {
	icon: React.ComponentType<{ className?: string; size?: number }>
	title: string
	content: string
	delay: number
	gradient?: string
	link : string
}

const ContactItem: React.FC<ContactItemProps> = ({
	icon: Icon,
	title,
	content,
	delay,
	gradient = 'bg-gradient-to-br from-red-500 to-red-600',
	link
}) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const iconRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const contentRef = useRef<HTMLParagraphElement>(null)
	const checkRef = useRef<HTMLDivElement>(null)
	const glowRef = useRef<HTMLDivElement>(null)
	const shimmerRef = useRef<HTMLDivElement>(null)
	const borderRef = useRef<HTMLDivElement>(null)

	const controls = useAnimation()
	const isInView = useInView(containerRef, { once: true, margin: '-100px' })
	const [isHovered, setIsHovered] = useState(false)

	const tl = useRef<gsap.core.Timeline | null>(null)

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		}
	}, [isInView, controls])

	useEffect(() => {
		tl.current = gsap.timeline({ paused: true })

		tl.current
			.to(glowRef.current, {
				scale: 1.1,
				opacity: 0.4,
				duration: 0.4,
				ease: 'power2.out',
			})
			.to(
				borderRef.current,
				{
					opacity: 1,
					scale: 1.01,
					duration: 0.3,
					ease: 'power2.out',
				},
				'-=0.3'
			)
			.to(
				iconRef.current,
				{
					rotateY: 360,
					scale: 1.1,
					duration: 0.6,
					ease: 'back.out(1.7)',
				},
				'-=0.2'
			)
			.to(
				checkRef.current,
				{
					scale: 1.1,
					rotate: 360,
					opacity: 1,
					duration: 0.5,
					ease: 'elastic.out(1, 0.5)',
				},
				'-=0.2'
			)

		gsap.to(shimmerRef.current, {
			x: '200%',
			duration: 2,
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 5,
		})

		return () => {
			tl.current?.kill()
		}
	}, [])

	const handleMouseEnter = () => {
		setIsHovered(true)
		tl.current?.play()

		gsap.to('.floating-particle', {
			y: -20,
			opacity: 0.6,
			scale: 1.2,
			duration: 1,
			stagger: 0.1,
			ease: 'power2.out',
		})
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
		tl.current?.reverse()

		gsap.to('.floating-particle', {
			y: 0,
			opacity: 0,
			scale: 0,
			duration: 0.4,
			ease: 'power2.in',
		})
	}

	const containerVariants = {
		hidden: {
			opacity: 0,
			y: 30,
			scale: 0.95,
			filter: 'blur(5px)',
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			filter: 'blur(0px)',
			transition: {
				duration: 0.8,
				delay,
				type: 'spring',
				stiffness: 100,
				damping: 25,
			},
		},
	}

	const floatingVariants = {
		initial: { y: 0 },
		animate: {
			y: [-2, 2, -2],
			transition: {
				duration: 8,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<motion.div
			ref={containerRef}
			className='contact-item relative cursor-pointer group w-full'
			variants={containerVariants}
			initial='hidden'
			animate={controls}
			whileHover={{
				scale: 1.02,
				transition: {
					duration: 0.3,
					type: 'spring',
					stiffness: 300,
					damping: 30,
				},
			}}
			whileTap={{
				scale: 0.98,
				transition: { duration: 0.1 },
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => window.location.href = link}
		>
			<div
				ref={glowRef}
				className='absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 -z-10 transition-all duration-700'
			/>

			<div
				ref={borderRef}
				className='absolute inset-0 rounded-3xl opacity-0 scale-100 bg-gradient-to-r from-red-400/30 via-pink-400/30 to-purple-400/30 p-[1px] -z-5'
			>
				<div className='w-full h-full bg-white rounded-3xl' />
			</div>

			<div
				ref={shimmerRef}
				className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 -z-5'
			/>

			<motion.div
				className='flex items-center gap-6 p-8 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 relative overflow-hidden hover:bg-gradient-to-br hover:from-red-50/60 hover:to-white transition-all duration-500'
				variants={floatingVariants}
				initial='initial'
				animate='animate'
			>
				<motion.div
					ref={iconRef}
					className={`${gradient} p-6 rounded-2xl shadow-lg relative overflow-hidden transform-gpu flex-shrink-0`}
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.2 },
					}}
				>
					<div className='absolute inset-0 bg-white/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

					<div className='absolute inset-0 rounded-2xl'>
						{[...Array(2)].map((_, i) => (
							<motion.div
								key={i}
								className='absolute inset-0 border border-white/20 rounded-2xl'
								animate={{
									scale: [1, 1.15, 1],
									opacity: [0.3, 0, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									delay: i * 1.5,
									ease: 'easeInOut',
								}}
							/>
						))}
					</div>

					<Icon className='text-white relative z-10 drop-shadow-md' size={32} />
				</motion.div>

				<div className='flex-1 overflow-hidden min-w-0'>
					<motion.h4
						ref={titleRef}
						className='font-bold text-gray-800 text-xl mb-3 group-hover:text-red-600 transition-colors duration-300 transform-gpu'
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: delay + 0.2, duration: 0.5 }}
					>
						{title.split('').map((char, index) => (
							<motion.span
								key={index}
								className='inline-block'
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									delay: delay + 0.3 + index * 0.03,
									duration: 0.3,
									type: 'spring',
									stiffness: 300,
								}}
								whileHover={{
									y: -2,
									scale: 1.05,
									color: '#dc2626',
									transition: { duration: 0.15 },
								}}
							>
								{char === ' ' ? '\u00A0' : char}
							</motion.span>
						))}
					</motion.h4>

					<motion.p
						ref={contentRef}
						className='text-gray-600 text-lg font-medium leading-relaxed transform-gpu'
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: delay + 0.4, duration: 0.5 }}
					>
						{content.split(' ').map((word, index) => (
							<motion.span
								key={index}
								className='inline-block mr-1'
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: delay + 0.5 + index * 0.05,
									duration: 0.3,
								}}
								whileHover={{
									y: -1,
									transition: { duration: 0.15 },
								}}
							>
								{word}
							</motion.span>
						))}
					</motion.p>
				</div>

				<motion.div
					ref={checkRef}
					className='relative flex-shrink-0'
					initial={{ scale: 0, rotate: -90, opacity: 0 }}
					animate={{
						scale: isInView ? 1 : 0,
						rotate: isInView ? 0 : -90,
						opacity: isHovered ? 1 : 0,
					}}
					transition={{
						delay: delay + 0.6,
						duration: 0.6,
						type: 'spring',
						stiffness: 200,
						damping: 15,
					}}
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
				>
					<CheckCircle
						className='text-green-500 relative z-10 drop-shadow-md'
						size={28}
					/>

					{[...Array(2)].map((_, i) => (
						<motion.div
							key={i}
							className='absolute inset-0 border border-green-400 rounded-full -m-1'
							animate={{
								scale: [1, 2, 1],
								opacity: [0.4, 0, 0.4],
							}}
							transition={{
								duration: 2.5,
								repeat: Infinity,
								delay: i * 0.8,
								ease: 'easeOut',
							}}
						/>
					))}
				</motion.div>

				{[...Array(4)].map((_, i) => (
					<motion.div
						key={i}
						className={`floating-particle absolute w-1.5 h-1.5 rounded-full opacity-0 pointer-events-none ${
							i % 3 === 0
								? 'bg-red-400'
								: i % 3 === 1
								? 'bg-pink-400'
								: 'bg-purple-400'
						}`}
						style={{
							left: 30 + Math.random() * 40 + '%',
							top: 30 + Math.random() * 40 + '%',
						}}
						animate={{
							y: [0, -25, 0],
							opacity: isHovered ? [0, 0.5, 0] : 0,
							scale: isHovered ? [0, 1, 0] : 0,
						}}
						transition={{
							duration: 2.5,
							delay: i * 0.3,
							repeat: Infinity,
							repeatDelay: 2,
							ease: 'easeOut',
						}}
					/>
				))}

				<div className='absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-red-200/30 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

				<motion.div
					className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full'
					initial={{ width: 0 }}
					animate={{ width: isHovered ? '100%' : 0 }}
					transition={{ duration: 0.4, ease: 'easeOut' }}
				/>
			</motion.div>
		</motion.div>
	)
}

export default ContactItem