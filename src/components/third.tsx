import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ContactItem from './contact_item'
import { Heart, Star, Phone, MapPin, Instagram, Sparkles } from 'lucide-react'

const Third = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const sparklesRef = useRef<HTMLDivElement>(null)
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

	useEffect(() => {
		if (isInView && titleRef.current) {
			const letters = titleRef.current.querySelectorAll('.letter')
			gsap.fromTo(
				letters,
				{
					opacity: 0,
					y: 30,
					rotationX: -90,
				},
				{
					opacity: 1,
					y: 0,
					rotationX: 0,
					duration: 0.8,
					stagger: 0.03,
					ease: 'back.out(1.7)',
				}
			)

			if (sparklesRef.current) {
				const sparkles = sparklesRef.current.querySelectorAll('.sparkle')
				gsap.set(sparkles, { scale: 0, rotation: 0 })
				gsap.to(sparkles, {
					scale: 1,
					rotation: 360,
					duration: 2,
					stagger: 0.2,
					ease: 'elastic.out(1, 0.3)',
					delay: 1,
				})
			}
		}
	}, [isInView])

	const titleText = '¡CONTÁCTANOS'
	const subtitleText = 'HOY MISMO!'

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
			},
		},
	}

	return (
		<section
			ref={sectionRef}
			className='contact-section py-32 bg-white relative overflow-hidden'
		>
			<div ref={sparklesRef} className='absolute inset-0 pointer-events-none'>
				<Sparkles
					className='sparkle absolute top-20 left-1/4 text-red-200 opacity-30'
					size={16}
				/>
				<Sparkles
					className='sparkle absolute top-40 right-1/3 text-blue-200 opacity-25'
					size={12}
				/>
				<Sparkles
					className='sparkle absolute bottom-32 left-1/3 text-purple-200 opacity-30'
					size={14}
				/>
				<Sparkles
					className='sparkle absolute bottom-20 right-1/4 text-pink-200 opacity-25'
					size={18}
				/>
			</div>

			<div className='max-w-6xl mx-auto px-6 relative z-10'>
				<motion.div
					className='text-center mb-20'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-50px' }}
				>
					<motion.h2
						ref={titleRef}
						className='text-5xl md:text-7xl lg:text-8xl font-black text-gray-800 mb-8 leading-tight'
						variants={itemVariants}
					>
						<span className='inline-block'>
							{titleText.split('').map((letter, index) => (
								<span
									key={index}
									className='letter inline-block'
									style={{
										display: letter === ' ' ? 'inline' : 'inline-block',
									}}
								>
									{letter === ' ' ? '\u00A0' : letter}
								</span>
							))}
						</span>
						<motion.span
							className='text-red-500 block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent'
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 1.2,
								type: 'spring',
								stiffness: 120,
							}}
							viewport={{ once: true }}
						>
							{subtitleText.split('').map((letter, index) => (
								<span
									key={index}
									className='letter inline-block'
									style={{
										display: letter === ' ' ? 'inline' : 'inline-block',
									}}
								>
									{letter === ' ' ? '\u00A0' : letter}
								</span>
							))}
						</motion.span>
					</motion.h2>

					<motion.div
						className='relative mx-auto mb-12'
						variants={itemVariants}
					>
						<motion.div
							className='w-48 h-4 bg-gradient-to-r from-red-500 via-red-600 to-red-500 mx-auto rounded-full shadow-lg'
							initial={{ width: 0, opacity: 0 }}
							whileInView={{ width: 192, opacity: 1 }}
							transition={{
								duration: 1.5,
								delay: 0.5,
								ease: 'easeOut',
							}}
							viewport={{ once: true }}
						/>
						<motion.div
							className='absolute inset-0 w-48 h-4 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto rounded-full'
							initial={{ x: '-100%' }}
							whileInView={{ x: '100%' }}
							transition={{
								duration: 2,
								delay: 1.8,
								repeat: Infinity,
								repeatDelay: 3,
							}}
							viewport={{ once: true }}
						/>
					</motion.div>

					<motion.p
						className='text-2xl text-gray-600 font-light'
						variants={itemVariants}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3 },
						}}
					>
						Estamos listos para comenzar tu transformación
					</motion.p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 px-4'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-100px' }}
				>
					<motion.div variants={itemVariants}>
						<ContactItem
							icon={Phone}
							title='Teléfono'
							content='+57 3228450344'
							delay={0.1}
							gradient='bg-gradient-to-br from-green-500 to-green-600'
							link='tel:+573228450344'
						/>
					</motion.div>

					<motion.div variants={itemVariants}>
						<ContactItem
							icon={MapPin}
							title='Dirección'
							content='a 11-101, Cra. 8 #111, Chinchiná, Caldas'
							delay={0.2}
							gradient='bg-gradient-to-br from-blue-500 to-blue-600'
							link='https://www.google.com/maps/search/?api=1&query=Cra.+8+%2311-101%2C+Chinchin%C3%A1%2C+Caldas%2C+Colombia'
						/>
					</motion.div>

					<motion.div variants={itemVariants}>
						<ContactItem
							icon={Instagram}
							title='Instagram'
							content='sportcenter_chinchina'
							delay={0.3}
							gradient='bg-gradient-to-br from-purple-500 to-pink-500'
							link='https://www.instagram.com/sportcenter_chinchina/'
						/>
					</motion.div>
				</motion.div>
				<motion.div
					className='text-center'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<a href='https://wa.me/573228450344?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20mi%20primera%20consulta%20y%20comenzar%20el%20cambio%20hacia%20una%20mejor%20versi%C3%B3n%20de%20m%C3%AD.'>
						<motion.button
							className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-16 py-8 rounded-full text-xl md:text-2xl font-bold shadow-2xl hover:shadow-red-500/40 transition-all duration-500 relative overflow-hidden group border-2 border-red-400/30'
							whileHover={{
								scale: 1.05,
								boxShadow: '0 30px 60px rgba(239, 68, 68, 0.5)',
								y: -5,
							}}
							whileTap={{
								scale: 0.95,
								transition: { duration: 0.1 },
							}}
							onHoverStart={() => {
								gsap.to('.button-icon', {
									rotation: 360,
									duration: 0.6,
									ease: 'back.out(1.7)',
								})
							}}
						>
							<span className='relative z-10 flex items-center gap-3 justify-center'>
								<Star className='button-icon text-yellow-300' size={24} />
								¡AGENDA TU PRIMERA SESIÓN GRATIS!
								<Heart className='button-icon text-pink-300' size={24} />
							</span>
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0'
								initial={{ x: '-100%' }}
								whileHover={{ x: '100%' }}
								transition={{ duration: 0.8 }}
							/>
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-300/20 to-red-400/0'
								animate={{
									x: ['-100%', '100%'],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									repeatDelay: 2,
									ease: 'easeInOut',
								}}
							/>
						</motion.button>
					</a>

					<motion.p
						className='text-gray-600 mt-6 text-lg font-medium'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.8 }}
						viewport={{ once: true }}
						whileHover={{
							color: '#374151',
							transition: { duration: 0.3 },
						}}
					>
						<motion.span
							className='inline-block'
							whileHover={{ scale: 1.1 }}
							transition={{ type: 'spring', stiffness: 400 }}
						>
							Sin compromiso
						</motion.span>
						{' • '}
						<motion.span
							className='inline-block'
							whileHover={{ scale: 1.1 }}
							transition={{ type: 'spring', stiffness: 400, delay: 0.1 }}
						>
							Evaluación gratuita
						</motion.span>
						{' • '}
						<motion.span
							className='inline-block'
							whileHover={{ scale: 1.1 }}
							transition={{ type: 'spring', stiffness: 400, delay: 0.2 }}
						>
							Resultados garantizados
						</motion.span>
					</motion.p>
				</motion.div>
			</div>
		</section>
	)
}

export default Third
