interface VideoBackgroundProps {
    src: string;
    poster?: string;
    ariaLabel?: string;
    slot?: string;
}

export default function VideoBackground({
    src,
    poster,
    ariaLabel = "Decorative background video",
    slot = "default",
}: VideoBackgroundProps) {
    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            role="img"
            aria-label={ariaLabel}
            data-slot={slot}
        >
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={src}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
            />
            {/* Slot overlay — gradient applied by parent section */}
            <div className="absolute inset-0" aria-hidden="true" />
        </div>
    );
}
