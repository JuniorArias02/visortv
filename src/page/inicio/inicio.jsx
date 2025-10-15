import Fachadacaobos from "../../../public/Fachada-Caobos.webp";
import Fachadapaami from "../../../public/Fachada-PAMI.webp";
import { useNavigate } from "react-router-dom";

function VistaInicio() {
	const navigate = useNavigate();
	
	return (
		<div className="h-screen bg-gray-900">
			<div className="grid grid-cols-2 h-full">
				{/* Sede PAMI */}
				<div
					onClick={() => navigate("/pami")}
					className="relative bg-cover bg-center cursor-pointer overflow-hidden group"
					style={{ backgroundImage: `url(${Fachadapaami})` }}
				>
					{/* Efecto de zoom en la imagen de fondo */}
					<div 
						className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
						style={{ backgroundImage: `url(${Fachadapaami})` }}
					></div>
					
					{/* Overlay con efecto */}
					<div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center transition-all duration-500 group-hover:bg-blue-900/30">
						<h2 className="text-8xl font-bold text-white text-center drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
							SEDE<br />PAMI
						</h2>
					</div>
				</div>

				{/* Sede Caobos 2 */}
				<div
					onClick={() => navigate("/caobos2")}
					className="relative bg-cover bg-center cursor-pointer overflow-hidden group"
					style={{ backgroundImage: `url(${Fachadacaobos})` }}
				>
					{/* Efecto de zoom en la imagen de fondo */}
					<div 
						className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
						style={{ backgroundImage: `url(${Fachadacaobos})` }}
					></div>
					
					{/* Overlay con efecto */}
					<div className="absolute inset-0 bg-green-900/40 flex items-center justify-center transition-all duration-500 group-hover:bg-green-900/30">
						<h2 className="text-8xl font-bold text-white text-center drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
							SEDE<br />CAOBOS 2
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VistaInicio;