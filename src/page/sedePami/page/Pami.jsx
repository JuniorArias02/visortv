import { useNavigate } from "react-router-dom";
import IMGPAMI from "../../../../public/pami/pami.jpeg";
import PAGES_ROUTES from "../../../router/routers";
function PamiVista() {
	const navigate = useNavigate();
	
	return (
		<div 
			className="min-h-screen flex items-center justify-center p-4 relative"
			style={{
				backgroundImage: `url(${IMGPAMI})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
		>
			{/* Overlay para mejor contraste */}
			<div className="absolute inset-0 bg-black/40"></div>
			
			<div className="relative z-10 flex gap-12 items-center justify-center w-full max-w-5xl">
				
				{/* Carta Prepagadas - Izquierda */}
				<button 
					onClick={() => navigate(PAGES_ROUTES.PAMI.PREPAGADAS)}
					className="flex-1 max-w-md h-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center border-2 border-white/30 hover:border-blue-400 group"
				>
					<span className="text-4xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
						PREPAGADAS
					</span>
				</button>

				{/* Título en medio con fondo */}
				<div className="text-center bg-white/20 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/30">
					<h1 className="text-5xl font-bold text-white drop-shadow-2xl">SEDE PAMI</h1>
					<p className="text-white/90 text-lg mt-2 drop-shadow-lg">Clinical House</p>
				</div>

				{/* Carta Subsidiadas - Derecha */}
				<button 
					onClick={() => navigate(PAGES_ROUTES.PAMI.SUBSIDADAS)}
					className="flex-1 max-w-md h-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center border-2 border-white/30 hover:border-green-400 group"
				>
					<span className="text-4xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
						SUBSIDIADAS
					</span>
				</button>

			</div>
		</div>
	);
}

export default PamiVista;