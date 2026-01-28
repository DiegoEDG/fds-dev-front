import { useEffect, useMemo, useRef, useState } from 'react';

export default function BestSellers() {
  const imgDrill = new URL('../../assets/homepage/drill.png', import.meta.url).href;
  const imgGloves = new URL('../../assets/homepage/gloves.png', import.meta.url).href;
  const imgBattery = new URL('../../assets/homepage/battery.png', import.meta.url).href;
  const imgAC = new URL('../../assets/homepage/ac.png', import.meta.url).href;
  const imgCompressor = new URL('../../assets/homepage/compresor.png', import.meta.url).href;
  const imgBattery2 = new URL('../../assets/homepage/battery2.png', import.meta.url).href;

  const items = useMemo(
    () => [
      { img: imgDrill, selectQty: false },
      { img: imgGloves, selectQty: false },
      { img: imgBattery, selectQty: true },
      { img: imgAC, selectQty: false },
      { img: imgCompressor, selectQty: false },
      { img: imgBattery2, selectQty: true },
      { img: imgBattery2, selectQty: false },
      { img: imgBattery2, selectQty: false },
      { img: imgBattery2, selectQty: true },
    ],
    [imgDrill, imgGloves, imgBattery, imgAC, imgCompressor, imgBattery2],
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateButtonStates = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 1);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    // Initial update after mount
    updateButtonStates();
  }, []);

  return (
    <div className="bg-white w-screen lg:w-full h-fit flex flex-col pt-4 pb-1 py-6 px-5 lg:px-6 gap-3 overflow-hidden rounded scroll-container">
      <div className="flex flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-bold text-nowrap">Best Sellers</h3>
        <div className="border-b border-monochromes-grey_xlight w-full block"></div>
      </div>

      <section className="relative group">
        <article className="absolute left-0 min-h-full items-center flex rounded-r z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
          <button
            onClick={scrollLeft}
            className={`scroll-left bg-white w-9 h-32 flex items-center justify-center shadow-[4px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-r -left-2 relative ${!canScrollLeft ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-3 fill-primary-blue"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
        </article>

        <div
          ref={scrollRef}
          onScroll={updateButtonStates}
          onMouseEnter={() => {
            const el = scrollRef.current;
            if (!el) return;
            if (el.scrollWidth <= el.clientWidth) return;
            const original = el.scrollLeft;
            el.scrollLeft += 1;
            el.scrollLeft = original;
            updateButtonStates();
          }}
          className="flex flex-row justify-between gap-3 overflow-x-scroll pb-4 relative custom-scroll"
        >
          {items.map((item, idx) => (
            <article
              key={idx}
              className="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div className="h-[88px] w-[210px] flex justify-center">
                <img src={item.img} alt="Product Image" className="object-fit" />
              </div>

              <div className="flex flex-row justify-between items-center mt-3">
                <p className="text-sm">Web Price</p>
                <p>
                  <span className="font-bold text-lg">$293.17</span>
                  <span className="text-gray-500 text-xs">/ea</span>
                </p>
              </div>
              <p className="text-xs font-bold">DEWALT</p>
              <p className="text-sm font-bold">Power Tool Battery: 20V, Lithium-ion</p>
              <p className="text-sm pt-1 text-gray-500">MSC# 73659377</p>

              <div className="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom">
                <div className="relative flex flex-col h-fit w-fit items-center self-end">
                  <p className="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                  {item.selectQty ? (
                    <select className="h-10 w-[60px] border rounded text-center">
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      className="h-10 w-[60px] border rounded appearance-none text-center"
                      inputMode="numeric"
                      defaultValue="1"
                      onInput={(e) => {
                        const target = e.currentTarget;
                        target.value = target.value.replace(/[^0-9]/g, '');
                      }}
                    />
                  )}
                </div>

                <button className="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        <article className="absolute right-0 top-0 min-h-full items-center flex rounded-l z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
          <button
            onClick={scrollRight}
            className={`scroll-right bg-white w-9 h-32 flex items-center justify-center shadow-[-4px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-l -right-2 relative ${!canScrollRight ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-3 fill-primary-blue rotate-180"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
        </article>
      </section>
    </div>
  );
}
