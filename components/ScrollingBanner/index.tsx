
const ScrollingBanner = () => {
    return (
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">

            {/* Background/Main Title */}
            <div className="absolute inset-0 inset-x-24 flex items-center z-0">
                <h1 className="text-white text-[10vw] leading-none font-thunder font-bold uppercase text-center">
                    BRUTAL. BEAUTIFUL.
                </h1>
            </div>

            {/* Description Text */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 text-white max-w-sm text-right z-10 hidden md:block">
                <p className=" font-inter text-gray-400 text-left mb-4">
                    UNA COLECCIÓN DE CAOS CONTROLADO.
                    NARRATIVAS VISUALES FORJADAS EN LA
                    INTERSECCIÓN DE LA LUZ, EL SONIDO Y LA
                    BRUTALIDAD ESTÉTICA.
                </p>
                <div className="flex items-center gap-2 text-[#38D6FA] text-xs tracking-wider">
                    <span className="h-[2px] w-8 bg-[#38D6FA] block"></span>
                    SCROLL PARA EXPLORAR
                </div>
            </div>

            {/* Plus Icon Top Right */}
            <div className="absolute top-10 right-10 text-white text-2xl z-10">
                +
            </div>

            {/* Diagonal Scrolling Banner */}
            <div className="absolute w-[120%] bg-brand-red -rotate-3 z-20 top-2/3 left-1/2 -translate-x-1/2 py-4 shadow-lg">
                <div className="whitespace-nowrap animate-marquee flex gap-8">
                    <span className="text-white font-thunder text-6xl md:text-8xl font-bold uppercase tracking-wide">
                        WE THROW OURSELVES INTO CHAOS AND TURN THE UNPREDICTABLE INTO ART • WE THROW OURSELVES INTO CHAOS AND TURN THE UNPREDICTABLE INTO ART • WE THROW OURSELVES INTO CHAOS AND TURN THE UNPREDICTABLE INTO ART •
                    </span>
                    <span className="text-white font-thunder text-6xl md:text-8xl font-bold uppercase tracking-wide">
                        WE THROW OURSELVES INTO CHAOS AND TURN THE UNPREDICTABLE INTO ART • WE THROW OURSELVES INTO CHAOS AND TURN THE UNPREDICTABLE INTO ART • WE THROW OURSELVES INTO CHAOS AND TURN THE UNPREDICTABLE INTO ART •
                    </span>
                </div>
            </div>

        </div>
    );
};

export default ScrollingBanner;
