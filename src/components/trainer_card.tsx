import { motion } from 'framer-motion'
import { Star, Target, Award, Zap, Trophy } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const TrainerCard = ({
	name,
	description,
	image,
	delay,
}: {
	name: string
	description: string
	image: string
	delay: number
}) => {
	const { ref: cardRef, inView: isInView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<motion.div
			ref={cardRef}
			className='trainer-card relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-8 hover:scale-105 border border-gray-100 overflow-hidden group backdrop-blur-sm'
			initial={{ opacity: 0, y: 150, rotateX: -25, scale: 0.8 }}
			animate={
				isInView
					? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
					: { opacity: 0, y: 150, rotateX: -25, scale: 0.8 }
			}
			transition={{
				duration: 1.4,
				delay: delay,
				ease: [0.25, 0.46, 0.45, 0.94],
			}}
			whileHover={{
				scale: 1.08,
				y: -20,
				rotateX: 8,
				boxShadow: '0 50px 100px -12px rgba(239, 68, 68, 0.6)',
				transition: { duration: 0.5 },
			}}
		>
			<div className='absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-t-3xl'>
				<div className='absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-transparent to-yellow-400/30 rounded-t-3xl'></div>
			</div>

			<div className='absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-red-100/80 via-red-200/60 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-200 group-hover:rotate-90 transition-all duration-1000 opacity-60'></div>
			<div className='absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-yellow-100/60 via-yellow-200/40 to-transparent rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 group-hover:rotate-45 transition-all duration-800 opacity-40'></div>

			<div className='relative mb-6 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'>
					<div className='absolute inset-0 bg-gradient-to-t from-red-50/30 via-transparent to-transparent'></div>
					<div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-red-50/40'></div>
				</div>

				<div 
					className='absolute inset-0 opacity-5'
					style={{
						backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)',
						backgroundSize: '20px 20px'
					}}
				></div>

				<div className='relative h-96 flex items-end justify-center pt-8 px-4'>
					<motion.img
						src={image}
						alt={name}
						className='h-full w-auto max-w-full object-contain object-bottom transition-all duration-700 group-hover:scale-110 drop-shadow-2xl'
						style={{
							filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
						}}
						whileHover={{
							filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.05)',
						}}
						transition={{ duration: 0.3 }}
					/>
					
					<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black/20 rounded-full blur-lg group-hover:w-40 group-hover:h-10 transition-all duration-700'></div>
				</div>

				<div className='absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

				<motion.div
					className='absolute top-4 left-4'
					initial={{ y: 50, opacity: 0, scale: 0.8 }}
					whileInView={{ y: 0, opacity: 1, scale: 1 }}
					transition={{ delay: delay + 0.6, duration: 0.8 }}
				>
					<div className='bg-white/95 backdrop-blur-md rounded-2xl p-3 flex items-center gap-2 shadow-xl border border-white/50'>
						<motion.div
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
						>
							<Award className='text-yellow-500' size={20} />
						</motion.div>
						<span className='text-sm font-bold text-gray-800'>
							Certificado
						</span>
					</div>
				</motion.div>

				<motion.div
					className='absolute bottom-4 right-4'
					initial={{ y: 50, opacity: 0, scale: 0.8 }}
					whileInView={{ y: 0, opacity: 1, scale: 1 }}
					transition={{ delay: delay + 0.8, duration: 0.8 }}
				>
					<div className='bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-3 flex items-center gap-2 shadow-xl'>
						<div className='flex gap-1'>
							{[1, 2, 3, 4, 5].map((star) => (
								<motion.div
									key={star}
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ delay: delay + 1 + (star * 0.1), duration: 0.3 }}
								>
									<Star
										className='text-white fill-current'
										size={14}
									/>
								</motion.div>
							))}
						</div>
						<span className='text-white font-bold text-sm'>5.0</span>
					</div>
				</motion.div>

				<motion.div
					className='absolute top-8 right-12'
					animate={{
						y: [0, -10, 0],
						rotate: [0, 15, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					<Zap className='text-red-400/60' size={24} />
				</motion.div>

				<motion.div
					className='absolute top-16 left-12'
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.4, 0.8, 0.4],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					<Trophy className='text-yellow-500/50' size={20} />
				</motion.div>
			</div>

			<div className='relative z-10 px-8 pb-8'>
				<motion.h3
					className='text-3xl font-bold text-gray-800 mb-6 flex items-center gap-4 group'
					whileHover={{ x: 8 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						className='bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-lg'
						whileHover={{ rotate: 180, scale: 1.15 }}
						transition={{ duration: 0.5 }}
					>
						<Target className='text-white' size={24} />
					</motion.div>
					<span className='bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent'>
						{name}
					</span>
				</motion.h3>

				<p className='text-gray-600 leading-relaxed text-lg mb-8 font-medium line-height-loose'>
					{description}
				</p>

				<div className='flex gap-3 flex-wrap'>
					<motion.span
						className='bg-gradient-to-r from-red-100 to-red-200 text-red-700 px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg border border-red-300/50 backdrop-blur-sm'
						whileHover={{ scale: 1.08, y: -3, boxShadow: '0 10px 20px rgba(239, 68, 68, 0.3)' }}
						transition={{ duration: 0.2 }}
					>
						<span className='flex items-center gap-2'>
							<Trophy size={14} />
							Certificado 
						</span>
					</motion.span>
					<motion.span
						className='bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg border border-blue-300/50 backdrop-blur-sm'
						whileHover={{ scale: 1.08, y: -3, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}
						transition={{ duration: 0.2 }}
					>
						<span className='flex items-center gap-2'>
							<Target size={14} />
							Especialista
						</span>
					</motion.span>
					<motion.span
						className='bg-gradient-to-r from-green-100 to-green-200 text-green-700 px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg border border-green-300/50 backdrop-blur-sm'
						whileHover={{ scale: 1.08, y: -3, boxShadow: '0 10px 20px rgba(34, 197, 94, 0.3)' }}
						transition={{ duration: 0.2 }}
					>
						<span className='flex items-center gap-2'>
							<Award size={14} />
							Resultados garantizados
						</span>
					</motion.span>
				</div>
			</div>

			<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-1200 pointer-events-none'></div>

			<div className='absolute inset-0 rounded-3xl border border-transparent group-hover:border-red-200/50 group-hover:shadow-inner transition-all duration-500'></div>
		</motion.div>
	)
}

export default TrainerCard