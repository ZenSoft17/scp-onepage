import {
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, Trophy, Zap, Star, Sparkles, Plus } from 'lucide-react'
import logo from '../assets/logo.png'

const First = () => {
	const heroRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll()
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)
	const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100])
	const scaleTransform = useTransform(scrollYProgress, [0, 0.5], [1, 1.02])
	const opacityTransform = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

	const ySpring = useSpring(yTransform, {
		stiffness: 50,
		damping: 30,
		restDelta: 0.001,
	})

	const stars = Array.from({ length: 20 }, (_, i) => ({
		id: i,
		size: Math.random() * 20 + 12,
		delay: Math.random() * 10,
		duration: Math.random() * 15 + 10,
		x: Math.random() * 100,
		y: Math.random() * 100,
		opacity: Math.random() * 0.6 + 0.2,
	}))

	const sparkles = Array.from({ length: 15 }, (_, i) => ({
		id: i,
		size: Math.random() * 16 + 8,
		delay: Math.random() * 8,
		duration: Math.random() * 12 + 8,
		x: Math.random() * 100,
		y: Math.random() * 100,
		opacity: Math.random() * 0.5 + 0.3,
		rotation: Math.random() * 360,
	}))

	return (
		<section
			ref={heroRef}
			className='hero-section relative min-h-screen flex items-center justify-center overflow-hidden'
		>
			<motion.div
				className='hero-bg-layer absolute inset-0 bg-gradient-to-br from-slate-900 via-red-950 to-black'
				style={{
					y: ySpring,
					scale: scaleTransform,
					opacity: opacityTransform,
				}}
			>
				<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70'></div>
				<div className='absolute inset-0 bg-gradient-to-r from-red-950/30 via-transparent to-red-950/30'></div>

				<div
					className='absolute inset-0 opacity-15'
					style={{
						backgroundImage:
							'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
						backgroundSize: '25px 25px',
					}}
				></div>

				<div className='absolute inset-0'>
					<motion.div
						className='floating-element absolute top-20 left-20 w-56 h-56 bg-gradient-to-br from-red-500/50 to-red-600/25 rounded-full blur-2xl'
						style={{
							x: useTransform(mouseX, [-1, 1], [-20, 20]),
							y: useTransform(mouseY, [-1, 1], [-20, 20]),
						}}
						animate={{
							scale: [1, 1.3, 1],
							opacity: [0.3, 0.7, 0.3],
						}}
						transition={{
							duration: 9,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					></motion.div>

					<motion.div
						className='floating-element absolute bottom-32 right-40 w-44 h-44 bg-gradient-to-br from-white/40 to-white/15 rounded-full blur-xl'
						animate={{
							y: [0, -30, 0],
							rotate: [0, 180, 360],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 14,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					></motion.div>

					<motion.div
						className='floating-element absolute top-1/3 right-16 w-32 h-32 bg-gradient-to-br from-red-400/60 to-red-500/30 rounded-full blur-lg'
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.4, 0.9, 0.4],
							rotate: [0, -120, 0],
						}}
						transition={{
							duration: 7,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					></motion.div>

					<motion.div
						className='floating-element absolute bottom-28 left-1/3 w-28 h-28 bg-white/25 rounded-full blur-md'
						animate={{
							x: [0, 40, 0],
							y: [0, -40, 0],
							opacity: [0.2, 0.6, 0.2],
						}}
						transition={{
							duration: 11,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					></motion.div>

					<motion.div
						className='floating-element absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-400/40 to-yellow-500/20 rounded-full blur-sm'
						animate={{
							scale: [1, 1.3, 1],
							opacity: [0.3, 0.7, 0.3],
							x: [0, 25, 0],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					></motion.div>

					<motion.div
						className='floating-element absolute bottom-1/3 right-1/3 w-36 h-36 bg-gradient-to-br from-red-300/30 to-pink-400/20 rounded-full blur-lg'
						animate={{
							rotate: [0, 270, 0],
							scale: [1, 1.2, 1],
							opacity: [0.2, 0.5, 0.2],
						}}
						transition={{
							duration: 13,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					></motion.div>

					{stars.map((star) => (
						<motion.div
							key={star.id}
							className='absolute'
							style={{
								left: `${star.x}%`,
								top: `${star.y}%`,
							}}
							initial={{ opacity: 0, scale: 0 }}
							animate={{
								opacity: [0, star.opacity, 0],
								scale: [0, 1, 0],
								rotate: [0, 360],
							}}
							transition={{
								duration: star.duration,
								delay: star.delay,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<Star
								className='text-yellow-400/70 drop-shadow-lg'
								size={star.size}
							/>
						</motion.div>
					))}

					{sparkles.map((sparkle) => (
						<motion.div
							key={sparkle.id}
							className='absolute'
							style={{
								left: `${sparkle.x}%`,
								top: `${sparkle.y}%`,
							}}
							initial={{ opacity: 0, scale: 0, rotate: sparkle.rotation }}
							animate={{
								opacity: [0, sparkle.opacity, 0],
								scale: [0, 1.2, 0],
								rotate: [sparkle.rotation, sparkle.rotation + 360],
							}}
							transition={{
								duration: sparkle.duration,
								delay: sparkle.delay,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<Sparkles
								className='text-white/60 drop-shadow-md'
								size={sparkle.size}
							/>
						</motion.div>
					))}

					<motion.div
						className='absolute top-12 left-1/2'
						animate={{
							rotate: [0, 360],
							scale: [1, 1.3, 1],
							opacity: [0.4, 0.8, 0.4],
						}}
						transition={{
							duration: 18,
							repeat: Infinity,
							ease: 'linear',
						}}
					>
						<Plus className='text-red-400/60' size={28} />
					</motion.div>

					<motion.div
						className='absolute bottom-12 right-12'
						animate={{
							rotate: [360, 0],
							y: [0, -20, 0],
							opacity: [0.3, 0.9, 0.3],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					>
						<Zap className='text-yellow-300/70' size={32} />
					</motion.div>
				</div>

				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50'></div>
			</motion.div>

			<div className='relative z-10 text-center px-6 max-w-8xl mx-auto'>
				<motion.div
					className='hero-icon mb-16'
					initial={{ scale: 0, rotate: 720, opacity: 0 }}
					animate={{ scale: 1, rotate: 0, opacity: 1 }}
					transition={{
						duration: 2.8,
						delay: 0.5,
						type: 'spring',
						stiffness: 80,
						damping: 12,
					}}
				>
					<div className='relative'>
						<motion.div
							className='absolute -inset-12 rounded-full bg-gradient-to-r from-red-500/40 via-transparent to-red-500/40'
							animate={{ rotate: 360 }}
							transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
						>
							<div className='w-full h-full rounded-full border-2 border-red-500/50 border-dashed'></div>
						</motion.div>

						<motion.div
							className='absolute -inset-8 rounded-full bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20'
							animate={{ rotate: -360 }}
							transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
						>
							<div className='w-full h-full rounded-full border border-yellow-400/30 border-dotted'></div>
						</motion.div>

						<motion.div
							className='absolute inset-0 bg-red-500/40 rounded-full blur-3xl'
							animate={{
								scale: [1, 1.4, 1],
								opacity: [0.3, 0.8, 0.3],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						></motion.div>

						<motion.div
							className='relative z-10 w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 mx-auto'
							whileHover={{ scale: 1.15, rotate: 8 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<img
								src={logo}
								alt='SportCenter Logo'
								className='w-full h-full object-contain drop-shadow-2xl'
							/>
						</motion.div>

						<motion.div
							className='absolute -top-6 -right-6 z-20'
							animate={{
								y: [0, -15, 0],
								rotate: [0, 15, -15, 0],
								scale: [1, 1.2, 1],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<Zap className='text-yellow-400 drop-shadow-xl' size={36} />
						</motion.div>

						<motion.div
							className='absolute -bottom-4 -left-6 z-20'
							animate={{
								scale: [1, 1.3, 1],
								opacity: [0.7, 1, 0.7],
								rotate: [0, 10, 0],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<Trophy className='text-yellow-500 drop-shadow-xl' size={32} />
						</motion.div>
					</div>
				</motion.div>

				<motion.h1
					className='hero-title text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-16 leading-tight'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.8 }}
				>
					<motion.span
						className='title-word block drop-shadow-2xl'
						initial={{ y: 200, opacity: 0, rotateX: -90, scale: 0.7 }}
						animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
						transition={{
							duration: 2,
							delay: 2.2,
							ease: [0.25, 0.46, 0.45, 0.94],
							type: 'spring',
							stiffness: 100,
						}}
					>
						¿QUIERES
					</motion.span>
					<motion.span
						className='title-word block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl'
						initial={{ y: 200, opacity: 0, rotateX: -90, scale: 0.7 }}
						animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
						transition={{
							duration: 2,
							delay: 2.8,
							ease: [0.25, 0.46, 0.45, 0.94],
							type: 'spring',
							stiffness: 100,
						}}
					>
						CAMBIAR
					</motion.span>
					<motion.span
						className='title-word block drop-shadow-2xl'
						initial={{ y: 200, opacity: 0, rotateX: -90, scale: 0.7 }}
						animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
						transition={{
							duration: 2,
							delay: 3.4,
							ease: [0.25, 0.46, 0.45, 0.94],
							type: 'spring',
							stiffness: 100,
						}}
					>
						TU VIDA?
					</motion.span>
				</motion.h1>

				<motion.p
					className='hero-subtitle text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 mb-20 font-light leading-relaxed max-w-6xl mx-auto flex flex-wrap justify-center gap-x-2 text-center'
					initial={{ opacity: 0, y: 100, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						duration: 2.5,
						delay: 4.2,
						ease: [0.25, 0.46, 0.45, 0.94],
					}}
				>
					<motion.span
						className='text-red-400 font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent'
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 400 }}
					>
						SportCenter
					</motion.span>
					<span>de la mano del</span>
					<motion.span
						className='text-red-400 font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent'
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 400 }}
					>
						Profe Cris
					</motion.span>
					<span>y</span>
					<motion.span
						className='text-red-400 font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent'
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 400 }}
					>
						Sebas
					</motion.span>
					<span>te puede ayudar a transformar tu vida completamente</span>
				</motion.p>

				<motion.button
					className='hero-cta relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-24 py-12 rounded-full text-xl md:text-2xl lg:text-3xl font-bold shadow-2xl hover:shadow-red-500/60 transition-all duration-700 transform overflow-hidden group border-2 border-red-400/70'
					initial={{ scale: 0, opacity: 0, rotate: 180, y: 80 }}
					animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
					transition={{
						duration: 2.5,
						delay: 5.0,
						type: 'spring',
						stiffness: 100,
						damping: 12,
					}}
					whileHover={{
						scale: 1.1,
						boxShadow: '0 50px 100px rgba(239, 68, 68, 0.7)',
						y: -12,
					}}
					whileTap={{ scale: 0.95 }}
				>
					<motion.div
						className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0'
						initial={{ x: '-100%' }}
						whileHover={{ x: '100%' }}
						transition={{ duration: 1.2 }}
					></motion.div>

					<span className='relative z-10 flex items-center gap-6'>
						<motion.div
							animate={{ rotate: [0, 20, -20, 0] }}
							transition={{ duration: 2.5, repeat: Infinity }}
						>
							<Trophy size={32} />
						</motion.div>
						COMIENZA TU TRANSFORMACIÓN
						<motion.div
							animate={{ scale: [1, 1.3, 1] }}
							transition={{ duration: 1.8, repeat: Infinity }}
						>
							<Heart className='text-pink-300' size={32} />
						</motion.div>
					</span>

					<motion.div
						className='absolute inset-0 pointer-events-none'
						whileHover={{
							background:
								'radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)',
							backgroundSize: '12px 12px',
						}}
					></motion.div>
				</motion.button>
			</div>
		</section>
	)
}

export default First
