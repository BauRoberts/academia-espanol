type PlaceholderImageProps = {
  width: number;
  height: number;
  text?: string;
  className?: string;
};

export default function PlaceholderImage({
  width,
  height,
  text,
  className = "",
}: PlaceholderImageProps) {
  const displayText = text || `${width}×${height}`;

  return (
    <div
      className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      role="img"
      aria-label={displayText}
    >
      {displayText}
    </div>
  );
}
