'use client';
import CornersMenu from "@/components/Menu/CornersMenu";
import { VideoProject } from "@/types";
import { useRef, useState, useCallback, useEffect, memo } from "react";

const ExtraData = memo(({ html }: { html: string }) => (
    <div
        dangerouslySetInnerHTML={{ __html: html.replace(/>\s+</g, '><').trim() }}
        className="extra-data-content"
    />
));
ExtraData.displayName = 'ExtraData';

const ProjectPage = ({ project }: { project: VideoProject }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const hideTimeout = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        const handler = () =>
            setIsFullscreen(
                !!(document.fullscreenElement || (document as any).webkitFullscreenElement)
            );
        document.addEventListener('fullscreenchange', handler);
        document.addEventListener('webkitfullscreenchange', handler);
        return () => {
            document.removeEventListener('fullscreenchange', handler);
            document.removeEventListener('webkitfullscreenchange', handler);
        };
    }, []);

    const togglePlay = useCallback(() => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) { v.play(); setIsPlaying(true); }
        else { v.pause(); setIsPlaying(false); }
    }, []);

    const toggleMute = useCallback(() => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = !v.muted;
        setIsMuted(v.muted);
    }, []);

    const handleVolume = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const v = videoRef.current;
        if (!v) return;
        const val = parseFloat(e.target.value);
        v.volume = val;
        v.muted = val === 0;
        setVolume(val);
        setIsMuted(val === 0);
    }, []);

    const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const v = videoRef.current;
        if (!v) return;
        const time = (parseFloat(e.target.value) / 100) * v.duration;
        v.currentTime = time;
        setProgress(parseFloat(e.target.value));
    }, []);

    const toggleFullscreen = useCallback(() => {
        if (!isFullscreen) {
            const el = containerRef.current;
            const vid = videoRef.current;
            if (!el || !vid) return;

            // iOS Safari solo soporta fullscreen en el elemento video
            const enterFullscreen =
                el.requestFullscreen?.bind(el) ||
                (vid as any).webkitEnterFullscreen?.bind(vid);

            enterFullscreen?.();

            if (vid) {
                vid.muted = false;
                setIsMuted(false);
            }
        } else {
            document.exitFullscreen?.();
        }
    }, [isFullscreen]);

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, '0')}`;
    };

    const handleMouseMove = useCallback(() => {
        setShowControls(true);
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => setShowControls(false), 2500);
    }, []);

    return (
        <main>
            <CornersMenu />
            <div className="relative w-full flex flex-col min-h-screen lg:gap-20 bg-black pb-12 pt-[10vh] lg:pt-4">
                <div
                    ref={containerRef}
                    className="relative lg:w-full lg:h-[80vh] lg:inset-20 z-0 rounded-2xl max-w-[90vw] mx-auto lg:mx-0 bg-black group"
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleMouseMove}
                    onMouseLeave={() => setShowControls(false)}
                    style={{ cursor: 'default' }}
                >
                    <video
                        ref={videoRef}
                        className={`w-full rounded-2xl transition-all duration-300
                                ${isFullscreen
                                    ? 'h-full object-contain'
                                    : 'h-[60vh] lg:h-full object-cover lg:object-contain'
                                }`}
                        src={project.fullVideoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        onTimeUpdate={() => {
                            const v = videoRef.current;
                            if (!v) return;
                            setCurrentTime(v.currentTime);
                            setProgress((v.currentTime / v.duration) * 100);
                        }}
                        onLoadedMetadata={() => {
                            if (videoRef.current) setDuration(videoRef.current.duration);
                        }}
                        onClick={togglePlay}
                    />

                    {/* Overlay de controles */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 rounded-b-2xl px-4 pb-4 pt-16 flex flex-col gap-2 transition-opacity duration-300 z-50 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
                    >
                        {/* Barra de progreso */}
                        <input
                            type="range"
                            min={0}
                            max={100}
                            step={0.1}
                            value={progress}
                            onChange={handleSeek}
                            className="w-full h-1 appearance-none bg-white/20 rounded-full cursor-pointer accent-white"
                        />

                        <div className="flex items-center gap-3">
                            {/* Play / Pause */}
                            <button
                                onClick={togglePlay}
                                className="text-white hover:text-white/70 transition-colors"
                                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                            >
                                {isPlaying
                                    ? <PauseIcon />
                                    : <PlayIcon />
                                }
                            </button>

                            {/* Volumen */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={toggleMute}
                                    className="text-white hover:text-white/70 transition-colors"
                                    aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                                >
                                    {isMuted || volume === 0 ? <VolumeOffIcon /> : <VolumeIcon />}
                                </button>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.05}
                                    value={isMuted ? 0 : volume}
                                    onChange={handleVolume}
                                    className="w-16 h-1 appearance-none bg-white/20 rounded-full cursor-pointer accent-white"
                                    aria-label="Volumen"
                                />
                            </div>

                            {/* Tiempo */}
                            <span className="text-white/50 text-xs font-mono ml-1">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>

                            <div className="flex-1" />

                            {/* Fullscreen */}
                            <button
                                onClick={toggleFullscreen}
                                className="text-white/60 hover:text-white transition-colors"
                                aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
                            >
                                {isFullscreen ? <ShrinkIcon /> : <ExpandIcon />}
                            </button>
                        </div>
                    </div>
                </div>
                    <div className="relative mx-auto z-20 w-full max-w-[90vw] h-full flex flex-col justify-end pt-12 lg:px-0 md:py-12 gap-4">
                    <div className="flex items-end justify-between">
                        <h1 className="text-white font-schabo lg:text-[13vw] text-8xl leading-[0.85] uppercase">
                            {project.title}
                        </h1>
                    </div>
                    <div className="w-full h-px bg-white/30" />
                    <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-12 md:py-2">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest text-white">DIRECCIÓN</span>
                            <span className="text-2xl font-inter font-light text-white/70">{project.director}</span>
                            <div className="flex md:flex-row flex-col gap-2">
                                <span className="text-white/50">{project.location}</span>
                                <span className="text-white/50">- EST. {project.year}</span>
                            </div>
                        </div>

                        <div>
                            {project.extra_data && (
                                <ExtraData html={project.extra_data} />
                            )}
                        </div>

                        <button
                            onClick={() => window.history.back()}
                            className="text-white/60 hover:text-white w-fit hover:underline font-inter text-sm tracking-widest uppercase transition-colors duration-300 pb-2"
                        >
                            go Back
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

// Íconos SVG inline (sin dependencias)
const PlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
);
const PauseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
);
const VolumeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
);
const VolumeOffIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
);
const ExpandIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
);
const ShrinkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>
);

export default ProjectPage;




