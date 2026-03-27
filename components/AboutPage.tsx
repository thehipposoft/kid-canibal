import Image from 'next/image'
import Link from 'next/link'

const AboutPageContent = () => {
    return (
        <div className="min-h-screen bg-black text-white p-6 md:px-8 md:py-24 flex flex-col">
            {/* Top Section - Image */}
            <div className="relative w-full h-[40vh] md:h-[40vh] overflow-hidden mb-8 md:mb-12">
                <Image
                    src="/assets/images/projects/projects-5.jpg"
                    alt="Surfing background"
                    fill
                    className="object-cover object-bottom rounded-2xl"
                    priority
                />
            </div>

            {/* Middle Section - Big Statement */}
            <div className="flex-1 flex items-center mb-12 md:mb-24">
                <div className="w-screen uppercase leading-[0.9] font-thunder font-bold">
                    <div className="flex justify-between w-full text-[7vw]">
                        <span className='hover:text-brand-red'>KIDCANIBAL</span>
                        <span className='hover:text-brand-red'>PROPONE</span>
                        <span className='hover:text-brand-red'>UNA</span>
                        <span className='hover:text-brand-red'>ESTÉTICA,</span>
                        <span className='hover:text-brand-red'>UNA</span>
                    </div>
                    <div className="flex justify-between w-full text-[7vw]">
                        <span className='hover:text-brand-yellow'>FORMA</span>
                        <span className='hover:text-brand-yellow'>DE</span>
                        <span className='hover:text-brand-yellow'>PRODUCIR,</span>
                        <span className='hover:text-brand-yellow'>Y</span>
                        <span className='hover:text-brand-yellow'>UN</span>
                        <span className='hover:text-brand-yellow'>LENGUAJE</span>
                        <span className='hover:text-brand-yellow'>VISUAL</span>
                    </div>
                    <div className="flex justify-between w-full text-[7vw]">
                        <span className='hover:text-brand-blue'>QUE</span>
                        <span className='hover:text-brand-blue'>NO</span>
                        <span className='hover:text-brand-blue'>RESPONDE</span>
                        <span className='hover:text-brand-blue'>A</span>
                        <span className='hover:text-brand-blue'>TENDENCIAS</span>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Logo & Description */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-white/10">
                <Link href={'/'} className="w-1/2 md:w-1/4">
                    <Image
                        src="/assets/images/logo/logo.webp"
                        alt="KIDCANIBAL Logo"
                        width={400}
                        height={100}
                        className="w-full h-auto"
                    />
                </Link>

                <div className="w-full md:w-1/2 flex justify-end">
                    <p className="text-[10px] md:text-lg font-inter uppercase text-justify leading-tight tracking-wider max-w-md">
                        NO REPRESENTAMOS UN ESTILO ESPECÍFICO, SINO UNA FORMA DE MIRAR Y DE HACER.
                        PODEMOS TRABAJAR PARA MARCAS SOFISTICADAS, PERO NUNCA DESDE LO OBVIO.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPageContent
