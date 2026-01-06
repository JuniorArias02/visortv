import React, { useRef, useState, useEffect } from 'react';
import { Expand, Minimize } from "lucide-react";

function Subsidiadas() {
	const containerRef = useRef(null);
	const [isFullscreen, setIsFullscreen] = useState(false);

	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			containerRef.current.requestFullscreen().catch(err => {
				console.error(`Error attempting to enable fullscreen: ${err.message}`);
			});
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
	};

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
		<div ref={containerRef} className="relative flex items-center justify-center h-screen bg-white overflow-hidden group">
			<button
				onClick={toggleFullscreen}
				className={`absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-300 ${isFullscreen ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
			>
				{isFullscreen ? <Minimize size={24} /> : <Expand size={24} />}
			</button>

			<iframe
				src="https://docs.google.com/presentation/d/e/2PACX-1vQFA-N11gdb7Qy7bIONjq8Ktm3DDTqUI8wWu92p6HmtkAS8Wb_DojRaOPUptso-S9y4n1f1dJ40GvpJ/pubembed?start=true&loop=true&delayms=30000"
				frameBorder="0"
				width="1440"
				height="839"
				allowFullScreen={true}
				mozallowfullscreen="true"
				webkitallowfullscreen="true"
				className="w-full h-full"
			></iframe>
		</div>
	);
}

export default Subsidiadas;