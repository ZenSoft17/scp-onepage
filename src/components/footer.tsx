import { motion } from 'framer-motion'
import { Phone, MapPin, Instagram } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from '../assets/logo.png'

const Footer = () => {
	const backgroundRef = useRef(null)
	const logoRef = useRef(null)
	const statsRef = useRef(null)

	useEffect(() => {
		// Animación de fondo con GSAP
		const ctx = gsap.context(() => {
			gsap.to('.bg-blob-1', {
				x: 50,
				y: 30,
				scale: 1.2,
				duration: 4,
				repeat: -1,
				yoyo: true,
				ease: 'power2.inOut'
			})

			gsap.to('.bg-blob-2', {
				x: -30,
				y: -40,
				scale: 0.8,
				duration: 5,
				repeat: -1,
				yoyo: true,
				ease: 'power2.inOut',
				delay: 1
			})

			gsap.to('.bg-blob-3', {
				rotation: 360,
				scale: 1.3,
				duration: 8,
				repeat: -1,
				ease: 'none'
			})

			// Animación del logo con GSAP
			gsap.set(logoRef.current, { rotation: -10 })
			gsap.to(logoRef.current, {
				rotation: 10,
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: 'power2.inOut'
			})

			// Animación de brillo en las estadísticas
			gsap.to('.stat-glow', {
				opacity: 0.3,
				scale: 1.1,
				duration: 2,
				repeat: -1,
				yoyo: true,
				stagger: 0.5,
				ease: 'power2.inOut'
			})
		}, backgroundRef)

		return () => ctx.revert()
	}, [])

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3
			}
		}
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94]
			}
		}
	}

	const logoVariants = {
		hidden: { opacity: 0, scale: 0.5, rotateY: 180 },
		visible: {
			opacity: 1,
			scale: 1,
			rotateY: 0,
			transition: {
				duration: 1.2,
				type: 'spring',
				stiffness: 100,
				damping: 15
			}
		}
	}

	const iconVariants = {
		hidden: { scale: 0, rotate: -180 },
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: 'spring',
				stiffness: 200,
				damping: 10
			}
		}
	}

	return (
		<footer 
			ref={backgroundRef}
			className='bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 relative overflow-hidden'
		>
			{/* Fondo animado mejorado */}
			<div className='absolute inset-0 opacity-15'>
				<div className='bg-blob-1 absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500 via-red-600 to-pink-500 rounded-full blur-3xl'></div>
				<div className='bg-blob-2 absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-white via-gray-200 to-red-100 rounded-full blur-3xl'></div>
				<div className='bg-blob-3 absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2'></div>
				<div className='absolute top-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-50'></div>
			</div>

			{/* Overlay con patrón */}
			<div className='absolute inset-0 opacity-5'>
				<div className='w-full h-full' style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
					backgroundSize: '20px 20px'
				}}></div>
			</div>

			<div className='max-w-6xl mx-auto px-6 relative z-10'>
				<motion.div
					className='text-center'
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					{/* Logo y título */}
					<motion.div
						className='flex justify-center items-center gap-6 mb-12'
						variants={itemVariants}
					>
						<motion.div
							ref={logoRef}
							variants={logoVariants}
							whileHover={{ 
								scale: 1.2, 
								rotate: 15,
								filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))'
							}}
							whileTap={{ scale: 0.95 }}
							className='relative group cursor-pointer'
						>
							<img 
								src={logo} 
								alt="SportCenter Logo" 
								className='w-16 h-16 md:w-20 md:h-20 object-contain filter drop-shadow-2xl'
							/>
							<div className='absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:bg-red-500/40 transition-all duration-500'></div>
							<div className='absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-500/20 to-red-400/0 rounded-full animate-pulse'></div>
						</motion.div>
						
						<motion.h3
							className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent'
							variants={itemVariants}
							whileHover={{ 
								scale: 1.05,
								textShadow: '0 0 20px rgba(239, 68, 68, 0.3)'
							}}
							transition={{ duration: 0.3 }}
						>
							SportCenter
						</motion.h3>
					</motion.div>

					{/* Descripción mejorada */}
					<motion.div
						variants={itemVariants}
						className='mb-12'
					>
						<motion.p
							className='text-gray-300 text-xl md:text-2xl mb-6 max-w-4xl mx-auto leading-relaxed font-light'
							whileInView={{
								backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
							}}
							transition={{ duration: 3, repeat: Infinity }}
							style={{
								background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(239,68,68,0.8) 50%, rgba(255,255,255,0.9) 100%)',
								backgroundSize: '200% 100%',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						>
							Tu destino hacia una vida más saludable y activa. Juntos lograremos
							la transformación que siempre has soñado.
						</motion.p>
						<motion.p
							className='text-red-400 font-bold text-xl md:text-2xl'
							transition={{ duration: 2, repeat: Infinity }}
						>
							Porque tu bienestar es nuestra prioridad.
						</motion.p>
					</motion.div>

					{/* Iconos sociales mejorados */}
					<motion.div
						className='flex justify-center gap-8 mb-16'
						variants={itemVariants}
					>
						{[
							{ Icon: Instagram, color: 'from-purple-500 to-pink-500', delay: 0 },
							{ Icon: Phone, color: 'from-green-500 to-blue-500', delay: 0.1 },
							{ Icon: MapPin, color: 'from-red-500 to-orange-500', delay: 0.2 }
						].map(({ Icon, color, delay }, index) => (
							<motion.div
								key={index}
								variants={iconVariants}
								custom={delay}
								className={`bg-gradient-to-br ${color} p-4 md:p-5 rounded-full cursor-pointer shadow-2xl relative group`}
								whileHover={{ 
									scale: 1.3, 
									rotate: [0, -10, 10, 0],
									boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
								}}
								whileTap={{ scale: 0.9 }}
								transition={{ 
									duration: 0.4,
									type: 'spring',
									stiffness: 200
								}}
							>
								<Icon className='text-white relative z-10' size={28} />
								<div className='absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:bg-white/30 transition-all duration-300'></div>
							</motion.div>
						))}
					</motion.div>

					{/* Separador animado */}
					<motion.div
						className='border-t border-gradient-to-r from-transparent via-gray-600 to-transparent pt-12 mb-8'
						variants={itemVariants}
					>
						<motion.div
							className='w-32 h-0.5 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8'
							animate={{
								scaleX: [1, 1.5, 1],
								opacity: [0.5, 1, 0.5]
							}}
							transition={{ duration: 2, repeat: Infinity }}
						/>
					</motion.div>

					{/* Copyright mejorado */}
					<motion.div variants={itemVariants}>
						<motion.p
							className='text-gray-400 text-lg mb-4'
							whileInView={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 3, repeat: Infinity }}
						>
							© 2025 SportCenter. Todos los derechos reservados.
						</motion.p>
						<motion.p
							className='text-red-400 font-bold text-2xl md:text-3xl'
							transition={{ duration: 2.5, repeat: Infinity }}
						>
							¡Tu cambio comienza hoy!
						</motion.p>
					</motion.div>

					{/* Estadísticas mejoradas */}
					<motion.div
						ref={statsRef}
						className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700'
						variants={containerVariants}
					>
						{[
							{ number: '500+', label: 'Clientes Transformados', delay: 0 },
							{ number: '10+', label: 'Años de Experiencia', delay: 0.2 },
							{ number: '100%', label: 'Satisfacción Garantizada', delay: 0.4 }
						].map(({ number, label, delay }, index) => (
							<motion.div
								key={index}
								className='text-center relative group'
								variants={itemVariants}
								whileHover={{ scale: 1.1 }}
							>
								<div className='stat-glow absolute inset-0 bg-red-500/10 rounded-xl blur-xl opacity-0'></div>
								<motion.h4
									className='text-5xl md:text-6xl font-bold bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent mb-3 relative z-10'
									whileInView={{ 
										scale: [0.8, 1.2, 1],
										rotate: [0, 5, -5, 0]
									}}
									transition={{ 
										duration: 1, 
										delay: delay,
										type: 'spring',
										stiffness: 100
									}}
								>
									{number}
								</motion.h4>
								<p className='text-gray-300 text-lg font-medium relative z-10'>{label}</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</footer>
	)
}

export default Footer