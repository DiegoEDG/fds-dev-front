import { Children, ReactNode, useEffect, useMemo, useState } from "react";

interface SliderProps {
  children: ReactNode;
  intervalMs?: number;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  children,
  intervalMs = 4000,
  className = "",
}) => {
  const items = useMemo(() => Children.toArray(children), [children]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  useEffect(() => {
    if (index >= items.length) setIndex(0);
  }, [items.length, index]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((child, i) => (
          <div
            key={i}
            className="w-full shrink-0 grow-0 basis-full flex items-center justify-center"
          >
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 ? (
        <div className="flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index
                  ? "bg-primary-blue w-6"
                  : "bg-monochromes-grey_xlight hover:bg-monochromes-grey_light"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Slider;
