import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import {
	Dumbbell,
	Users,
	Target,
	Trophy,
	HeartHandshake,
	Sparkles,
	Star,
	Activity,
	Building2,
	Heart,
	Shield,
} from 'lucide-react'

interface ServiceCardProps {
	icon: React.ComponentType<{ size?: number; className?: string }>
	title: string
	description: string
	features: string[]
	gradient: string
	delay: number
}

const ServiceCard = ({
	icon: Icon,
	title,
	description,
	features,
	gradient,
	delay,
}: ServiceCardProps) => {
	const cardRef = useRef<HTMLDivElement>(null)

	return (
		<motion.div
			ref={cardRef}
			className='group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden'
			initial={{ opacity: 0, y: 50, rotateX: -15 }}
			whileInView={{
				opacity: 1,
				y: 0,
				rotateX: 0,
				transition: {
					duration: 0.8,
					delay: delay,
					type: 'spring',
					stiffness: 100,
					damping: 12,
				},
			}}
			whileHover={{
				y: -10,
				scale: 1.02,
				rotateY: 2,
				transition: { duration: 0.3 },
			}}
			viewport={{ once: true, margin: '-50px' }}
			onHoverStart={() => {
				if (cardRef.current) {
					gsap.to(cardRef.current.querySelector('.service-icon'), {
						rotation: 360,
						scale: 1.2,
						duration: 0.6,
						ease: 'back.out(1.7)',
					})
					gsap.to(cardRef.current.querySelectorAll('.feature-item'), {
						x: 10,
						duration: 0.3,
						stagger: 0.05,
						ease: 'power2.out',
					})
				}
			}}
			onHoverEnd={() => {
				if (cardRef.current) {
					gsap.to(cardRef.current.querySelector('.service-icon'), {
						rotation: 0,
						scale: 1,
						duration: 0.4,
						ease: 'power2.out',
					})
					gsap.to(cardRef.current.querySelectorAll('.feature-item'), {
						x: 0,
						duration: 0.3,
						stagger: 0.03,
						ease: 'power2.out',
					})
				}
			}}
		>
			<div
				className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
			/>

			<motion.div
				className={`absolute inset-0 rounded-3xl ${gradient} opacity-0 group-hover:opacity-20`}
				initial={{ scale: 0.8, opacity: 0 }}
				whileHover={{
					scale: 1,
					opacity: 0.1,
					transition: { duration: 0.3 },
				}}
				style={{
					background:
						'linear-gradient(45deg, transparent 30%, currentColor 50%, transparent 70%)',
					filter: 'blur(1px)',
				}}
			/>

			<div className='relative z-10'>
				<motion.div
					className={`w-20 h-20 ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
					whileHover={{
						boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
						transition: { duration: 0.3 },
					}}
				>
					<Icon size={32} className='text-white service-icon' />
				</motion.div>

				<motion.h3
					className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300'
					whileHover={{ scale: 1.05 }}
				>
					{title}
				</motion.h3>

				<motion.p
					className='text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'
					initial={{ opacity: 0.8 }}
					whileHover={{ opacity: 1 }}
				>
					{description}
				</motion.p>

				<ul className='space-y-3'>
					{features.map((feature, index) => (
						<motion.li
							key={index}
							className='flex items-center text-gray-700 feature-item'
							initial={{ opacity: 0, x: -20 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: {
									delay: delay + 0.1 + index * 0.1,
									duration: 0.5,
								},
							}}
							viewport={{ once: true }}
						>
							<motion.div
								className='w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 flex-shrink-0'
								whileHover={{ scale: 1.5 }}
								transition={{ type: 'spring', stiffness: 300 }}
							/>
							<span className='group-hover:font-medium transition-all duration-300'>
								{feature}
							</span>
						</motion.li>
					))}
				</ul>

				<motion.div
					className='absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-500'
					animate={{
						rotate: [0, 360],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: 'linear',
					}}
				>
					<Sparkles size={16} className='text-yellow-400' />
				</motion.div>
			</div>
		</motion.div>
	)
}

const Fourth = () => {
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
					y: 50,
					rotationX: -90,
					scale: 0.5,
				},
				{
					opacity: 1,
					y: 0,
					rotationX: 0,
					scale: 1,
					duration: 0.8,
					stagger: 0.04,
					ease: 'back.out(1.7)',
				}
			)

			if (sparklesRef.current) {
				const sparkles = sparklesRef.current.querySelectorAll('.sparkle')
				gsap.set(sparkles, { scale: 0, rotation: 0, opacity: 0 })
				gsap.to(sparkles, {
					scale: 1,
					rotation: 360,
					opacity: 0.3,
					duration: 2,
					stagger: 0.3,
					ease: 'elastic.out(1, 0.3)',
					delay: 1.2,
				})
			}
		}
	}, [isInView])

	const titleText = 'NUESTROS SERVICIOS'
	const services = [
		{
			icon: Trophy,
			title: 'Ganancia de Masa Muscular',
			description:
				'Programa especializado para desarrollar músculo magro con técnicas avanzadas y nutrición personalizada.',
			features: [
				'Rutinas de hipertrofia progresivas',
				'Plan nutricional para volumen',
				'Suplementación supervisada',
				'Medición de composición corporal',
			],
			gradient: 'bg-gradient-to-br from-red-500 to-red-600',
		},
		{
			icon: Target,
			title: 'Pérdida de Peso',
			description:
				'Transformación corporal integral con enfoque en grasa y mantenimiento de masa muscular.',
			features: [
				'Déficit calórico controlado',
				'Cardio estratégico',
				'Entrenamiento de resistencia',
				'Seguimiento nutricional semanal',
			],
			gradient: 'bg-gradient-to-br from-green-500 to-green-600',
		},
		{
			icon: HeartHandshake,
			title: 'Rehabilitación Física',
			description:
				'Recuperación post-lesión y fortalecimiento específico con enfoque terapéutico.',
			features: [
				'Evaluación funcional completa',
				'Ejercicios correctivos',
				'Fortalecimiento progresivo',
				'Prevención de re-lesiones',
			],
			gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
		},
		{
			icon: Shield,
			title: 'Mantenimiento Físico',
			description:
				'Programa de sostenimiento para mantener tu forma física y salud a largo plazo.',
			features: [
				'Rutinas de mantenimiento',
				'Flexibilidad de horarios',
				'Evaluaciones mensuales',
				'Ajustes según necesidades',
			],
			gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
		},
		{
			icon: Heart,
			title: 'Adultos Mayores',
			description:
				'Entrenamiento especializado para la tercera edad enfocado en movilidad y calidad de vida.',
			features: [
				'Ejercicios de bajo impacto',
				'Mejora de habilidades coordinativas',
				'Fortalecimiento óseo',
				'Actividades funcionales',
			],
			gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
		},
		{
			icon: Building2,
			title: 'Clases en Hospitales',
			description:
				'Programas de actividad física adaptados para pacientes en recuperación hospitalaria.',
			features: [
				'Ejercicios terapéuticos',
				'Coordinación con personal médico',
				'Adaptación a limitaciones',
				'Seguimiento especializado',
			],
			gradient: 'bg-gradient-to-br from-teal-500 to-teal-600',
		},
		{
			icon: Users,
			title: 'Clases en Ancianatos',
			description:
				'Actividades grupales diseñadas para residentes de centros geriátricos.',
			features: [
				'Ejercicios en silla de ruedas',
				'Actividades cognitivo-motoras',
				'Socialización a través del ejercicio',
				'Adaptación individual',
			],
			gradient: 'bg-gradient-to-br from-pink-500 to-pink-600',
		},
		{
			icon: Activity,
			title: 'Terapia de Movimiento',
			description:
				'Sesiones especializadas en recuperación de movilidad y función motora.',
			features: [
				'Técnicas de neurorehabilitación',
				'Ejercicios de coordinación',
				'Recuperación de patrones motores',
				'Trabajo interdisciplinario',
			],
			gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
		},
		{
			icon: Dumbbell,
			title: 'Entrenamiento Adaptado',
			description:
				'Programas personalizados para personas con capacidades diferentes y necesidades especiales.',
			features: [
				'Evaluación funcional especializada',
				'Equipos adaptados',
				'Técnicas inclusivas',
				'Seguimiento multidisciplinario',
			],
			gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
		},
	]

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	}

	return (
		<section
			ref={sectionRef}
			className='services-section py-32 bg-white relative overflow-hidden'
		>
			<div ref={sparklesRef} className='absolute inset-0 pointer-events-none'>
				<Sparkles
					className='sparkle absolute top-20 left-[10%] text-red-200'
					size={20}
				/>
				<Sparkles
					className='sparkle absolute top-32 right-[15%] text-blue-200'
					size={16}
				/>
				<Sparkles
					className='sparkle absolute top-64 left-[20%] text-purple-200'
					size={18}
				/>
				<Sparkles
					className='sparkle absolute bottom-40 right-[25%] text-green-200'
					size={14}
				/>
				<Sparkles
					className='sparkle absolute bottom-64 left-[80%] text-orange-200'
					size={22}
				/>
				<Sparkles
					className='sparkle absolute top-40 right-[70%] text-pink-200'
					size={12}
				/>
			</div>

			<div className='max-w-7xl mx-auto px-6 relative z-10'>
				<motion.div
					className='text-center mb-20'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-50px' }}
				>
					<motion.h2
						ref={titleRef}
						className='text-4xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-8 leading-tight'
					>
						{titleText.split('').map((letter, index) => (
							<span
								key={index}
								className='letter inline-block'
								style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
							>
								{letter === ' ' ? '\u00A0' : letter}
							</span>
						))}
					</motion.h2>

					<motion.div
						className='relative mx-auto mb-8'
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							delay: 0.8,
							type: 'spring',
							stiffness: 100,
						}}
						viewport={{ once: true }}
					>
						<div className='w-32 h-32 mx-auto relative'>
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-full opacity-20'
								animate={{
									scale: [1, 1.2, 1],
									rotate: [0, 180, 360],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'linear',
								}}
							/>
							<div className='absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-lg'>
								<Star className='text-red-500' size={32} />
							</div>
						</div>
					</motion.div>

					<motion.p
						className='text-xl text-gray-600 font-light max-w-3xl mx-auto'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						viewport={{ once: true }}
					>
						Descubre nuestros programas diseñados para transformar tu vida y
						alcanzar tus objetivos fitness
					</motion.p>
				</motion.div>

				<motion.div
					className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-100px' }}
				>
					{services.map((service, index) => (
						<ServiceCard key={index} {...service} delay={index * 0.15} />
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Fourth
