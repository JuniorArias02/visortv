import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Expand, Minimize } from "lucide-react";
import IMG_PAMI from "../utils/imgPami";

function Prepagadas() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const containerRef = useRef(null);

	const slides = IMG_PAMI;

	useEffect(() => {
		slides.forEach(src => {
			const img = new Image();
			img.src = src;
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			containerRef.current.requestFullscreen().catch(err => {
				console.error(`Error attempting to enable fullscreen: ${err.message}`);
			});
			setIsFullscreen(true);
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
				setIsFullscreen(false);
			}
		}
	};

	// Escuchar cambios en el estado de pantalla completa
	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
		};
	}, []);

	return (
		<div 
			ref={containerRef}
			className={`bg-[#2068A6] relative overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : 'h-screen'}`}
		>
			{/* Header */}
			<div className="absolute top-0 left-0 right-0 z-20 pt-8 px-8 text-center">
				<h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
					{/* SEDE PAMI */}
				</h1>
				<p className="text-2xl text-gray-300 font-light">
					{/* Clinical House - Excelencia Médica */}
				</p>
			</div>

			<div className="relative h-full w-full">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${index === currentSlide ? "opacity-100" : "opacity-0"
							}`}
					>
						{/* Cambiamos object-cover por object-contain para ver la imagen completa */}
						<img
							src={slide}
							alt={`Sede PAMI - Imagen ${index + 1}`}
							className="max-w-full max-h-full object-contain"
						/>
						{/* Overlay para mejor contraste - ahora más sutil */}
						<div className="absolute inset-0 bg-black/10"></div>
					</div>
				))}

				{/* Controles del carrusel */}
				<button
					onClick={prevSlide}
					className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
				>
					<ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
				</button>

				<button
					onClick={nextSlide}
					className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
				>
					<ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
				</button>

				{/* Botón de pantalla completa */}
				<button
					onClick={toggleFullscreen}
					className="absolute top-4 right-4 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
				>
					{isFullscreen ? (
						<Minimize className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
					) : (
						<Expand className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
					)}
				</button>

				{/* Indicadores */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide
								? "bg-white scale-125"
								: "bg-white/50 hover:bg-white/70"
								}`}
						/>
					))}
				</div>

				{/* Número de slide */}
				<div className="absolute bottom-8 right-8 z-30 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
					<span className="text-white text-lg font-medium">
						{currentSlide + 1} / {slides.length}
					</span>
				</div>
			</div>

			{/* Footer */}
			<div className="absolute bottom-0 left-0 right-0 z-20 pb-6 px-8 text-center">
				<p className="text-xl text-gray-400 font-light">
					{/* www.clinicalhouse.co • +57 123 456 7890 */}
				</p>
			</div>
		</div>
	);
}

export default Prepagadas;