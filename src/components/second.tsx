import { motion } from 'framer-motion'
import TrainerCard from './trainer_card'
import crisImage from '../assets/cistian_processed.png'
import sebasImage from '../assets/craiyon_163137_image.png'
import { Users } from 'lucide-react'

const Second = () => {
	return (
		<section className='trainers-section py-32 bg-gradient-to-br from-gray-50 via-white to-red-50/30 relative overflow-hidden'>
			<div className='absolute top-0 left-0 w-full h-full opacity-10'>
				<div className='absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-red-300 to-red-400 rounded-full blur-2xl animate-pulse'></div>
			</div>

			<div className='max-w-7xl mx-auto px-6 relative z-10'>
				<motion.div
					className='text-center mb-24'
					initial={{ opacity: 0, y: 80 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
					viewport={{ once: true }}
				>
					<motion.h2
						className='text-5xl md:text-7xl lg:text-8xl font-black text-gray-800 mb-8 leading-tight'
						initial={{ scale: 0.5, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
					>
						CONOCE A TUS
						<span className='text-red-500 block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-sm'>
							ENTRENADORES
						</span>
					</motion.h2>
					<motion.div
						className='w-48 h-4 bg-gradient-to-r from-red-500 via-red-600 to-red-500 mx-auto rounded-full mb-12 shadow-lg'
						initial={{ width: 0 }}
						whileInView={{ width: 192 }}
						transition={{ duration: 1.5, delay: 0.5 }}
						viewport={{ once: true }}
					></motion.div>
					<motion.p
						className='text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.8 }}
						viewport={{ once: true }}
					>
						Profesionales experimentados que te guiarán hacia tu mejor versión
					</motion.p>
				</motion.div>

				<div className='grid md:grid-cols-2 gap-16 mb-20'>
					<TrainerCard
						name='Cristian'
						description='Hola, soy Cristian y llevo más de 10 años en el fitness y vida saludable. Mi pasión es ayudar a las personas a descubrir su potencial y lograr resultados que nunca creyeron posibles. Especializado en transformaciones corporales y desarrollo de hábitos duraderos.'
						image={crisImage}
						delay={0.2}
					/>

					<TrainerCard
						name='Sebastián'
						description='Hola, soy Sebas y al igual que mi compañero llevo varios años en el fitness. Me especializo en crear programas personalizados que se adaptan a tu estilo de vida y objetivos únicos. Mi enfoque se basa en la constancia y el progreso sostenible.'
						image={sebasImage}
						delay={0.5}
					/>
				</div>

				<motion.div
					className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-3xl p-16 text-center shadow-2xl relative overflow-hidden'
					initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
					whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
					transition={{ duration: 1.2, delay: 0.3 }}
					viewport={{ once: true }}
					whileHover={{
						scale: 1.02,
						boxShadow: '0 40px 80px rgba(239, 68, 68, 0.4)',
						transition: { duration: 0.4 },
					}}
				>
					<div className='absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10'></div>
					<div className='absolute top-0 left-0 w-full h-full opacity-20'>
						<div className='absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse'></div>
						<div className='absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse'></div>
						<div className='absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping'></div>
					</div>

					<div className='relative z-10'>
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							viewport={{ once: true }}
						>
							<Users
								className='mx-auto text-white mb-8 drop-shadow-lg'
								size={80}
							/>
						</motion.div>
						<motion.h3
							className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'
							initial={{ y: 30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.7 }}
							viewport={{ once: true }}
						>
							Podemos ayudarte a lograr un cambio real en tu vida
						</motion.h3>
						<motion.p
							className='text-2xl text-red-100 mb-12 leading-relaxed max-w-4xl mx-auto font-light'
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.9 }}
							viewport={{ once: true }}
						>
							Con entrenamiento personalizado, dieta balanceada y mucha
							disciplina, transformaremos no solo tu cuerpo, sino tu mentalidad
							completa.
						</motion.p>
						<motion.div
							className='text-3xl font-bold text-white'
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8, delay: 1.1 }}
							viewport={{ once: true }}
						>
							<span className='text-red-200 text-4xl'>TÚ DECIDES</span> CUÁNDO
							COMIENZA TU CAMBIO
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Second
