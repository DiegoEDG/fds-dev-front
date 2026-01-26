import React, { useState } from "react";

const SimilarItems: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const items = [
    {
      img: "https://cdn.mscdirect.com/global/images/ProductImages/8930544-24.jpg",
      brand: "Chicago-Latrobe",
      title: 'Jobber Drill: 1/32" Dia, 118 deg Point, High Speed Steel',
      price: "$6.25",
      sizeInch: "1/32",
      sizeDec: "0.0312",
      material: "HSS",
      angle: "118",
    },
    {
      img: "https://cdn.mscdirect.com/global/images/ProductImages/8930544-24.jpg",
      brand: "Chicago-Latrobe",
      title: 'Jobber Drill: 3/64" Dia, 135 deg Point, High Speed Steel',
      price: "$6.75",
      sizeInch: "3/64",
      sizeDec: "0.0469",
      material: "HSS",
      angle: "135",
    },
    {
      img: "https://cdn.mscdirect.com/global/images/ProductImages/8930544-24.jpg",
      brand: "Chicago-Latrobe",
      title: 'Jobber Drill: 1/16" Dia, 118 deg Point, High Speed Steel',
      price: "$7.10",
      sizeInch: "1/16",
      sizeDec: "0.0625",
      material: "HSS",
      angle: "118",
    },
    {
      img: "https://cdn.mscdirect.com/global/images/ProductImages/8930544-24.jpg",
      brand: "Chicago-Latrobe",
      title: 'Jobber Drill: 5/64" Dia, 118 deg Point, High Speed Steel',
      price: "$7.40",
      sizeInch: "5/64",
      sizeDec: "0.0781",
      material: "HSS",
      angle: "118",
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-[#F2F2F2] border rounded-md border-monochromes-grey_xlight md:pt-3 flex flex-col">
        <div className="mb-3 font-bold pl-[256px] hidden md:flex">
          <p className="w-[256px]">This Item:</p>
          <p className="w-[256px]">Recomendations:</p>
        </div>

        <div className="flex overflow-x-auto md:overflow-x-hidden whitespace-nowrap">
          <article className="md:w-[256px] md:min-w-[256px] absolute md:relative pointer-events-none">
            <div className="h-[215px]"></div>
            <div className="p-2 font-bold border-t-2 h-[55px] md:h-auto">
              Price
            </div>
            <div className="p-2 font-bold border-t-2 h-[55px] md:h-auto">
              Customer Rating
            </div>
            <div className="p-2 font-bold border-t-2 h-[55px] md:h-auto">
              Stock
            </div>
            <div className="p-2 font-bold border-t-2 h-[100px] md:h-[76px]">
              Delivery
            </div>
            <div className="p-2 font-bold border-t-2 h-[55px] md:h-auto">
              Drill Bit Size (Inch)
            </div>

            <div className={`hidd-cont ${expanded ? "block" : "hidden"}`}>
              <div className="p-2 font-bold border-t-2 h-[55px] md:h-auto">
                Drill Bit Size (Decimal Inch)
              </div>
              <div className="p-2 font-bold border-t-2 h-[55px] md:h-auto">
                Drill Bit Material
              </div>
              <div className="p-2 font-bold border-t-2 h-[55px] md:h-auto">
                Drill Point Angle
              </div>
              <div className="p-2 font-bold border-t-2 h-[55px] md:h-auto">
                And More...
              </div>
            </div>
          </article>

          <article className="bg-white w-[256px] min-w-[256px] mr-2 whitespace-normal">
            <div className="h-auto p-3 min-h-[215px]">
              <div className="w-full">
                <img
                  className="h-[80px] m-auto mb-2"
                  src="https://cdn.mscdirect.com/global/images/ProductImages/8930544-24.jpg"
                  alt=""
                />
              </div>
              <p className="mb-2 text-[12px] font-bold">Chicago-Latrobe</p>
              <p className="mb-2 text-sm font-bold">
                Jobber Drill: 1/64&quot; Dia, 118 deg Point, High Speed Steel
              </p>
              <button className="px-2 md:px-5 rounded-full font-bold text-sm h-7 py-1 cursor-pointer min-w-24 md:min-w-32 bg-[#186DF5] text-white">
                Add to Cart
              </button>
            </div>
            <div className="p-2 pt-6 md:pt-2 font-bold border-t-2">$5.35</div>
            <div className="p-2 pt-6 md:pt-2 font-bold border-t-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  fill="none"
                  height="15"
                  viewBox="0 0 14 15"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.90089 5.25033H13.0415C13.3019 5.25033 13.5363 5.43262 13.6144 5.69303C13.7186 5.92741 13.6144 6.21387 13.4061 6.37012L9.99464 9.02637L11.3228 13.193C11.4269 13.4535 11.3228 13.7399 11.0884 13.8962C10.8801 14.0524 10.5676 14.0524 10.3592 13.8701L6.99985 11.266L3.61443 13.8701C3.4061 14.0524 3.0936 14.0524 2.88527 13.8962C2.65089 13.7399 2.54672 13.4535 2.65089 13.193L3.97902 9.02637L0.567558 6.37012C0.359224 6.21387 0.255058 5.92741 0.359224 5.69303C0.437349 5.43262 0.671724 5.25033 0.958183 5.25033H5.07277L6.40089 1.1097C6.47902 0.849284 6.71339 0.666992 6.99985 0.666992C7.26027 0.666992 7.49464 0.849284 7.57277 1.1097L8.90089 5.25033Z"
                    fill="#1C58EE"
                  />
                </svg>
              ))}
              (X)
            </div>
            <div className="p-2 pt-6 md:pt-2 font-bold border-t-2">
              <span className="text-[#0E754A]">In Stock</span>
            </div>
            <div className="p-2 pt-6 md:pt-2 border-t-2 h-[100px] md:h-[76px] text-[#717171]">
              <p className="font-bold">Ships from supplier</p>
              <p>Expected to ship within 3 business days</p>
            </div>
            <div className="p-2 pt-6 md:pt-2 border-t-2">1/64</div>

            <div className={`hidd-cont ${expanded ? "block" : "hidden"}`}>
              <div className="p-2 pt-6 md:pt-2 border-t-2">0.0156</div>
              <div className="p-2 pt-6 md:pt-2 border-t-2">HSS</div>
              <div className="p-2 pt-6 md:pt-2 border-t-2">118</div>
              <div className="p-2 pt-6 md:pt-2 border-t-2">And More...</div>
            </div>
          </article>

          <div
            id="alv"
            className="flex md:overflow-x-auto whitespace-nowrap pointer-events-auto gap-2 pr-20 md:pr-0"
          >
            {items.map((it, idx) => (
              <article
                key={idx}
                className="bg-white w-[256px] min-w-[256px] whitespace-normal"
              >
                <div className="h-auto p-3 min-h-[215px]">
                  <div className="w-full">
                    <img className="h-[80px] m-auto mb-2" src={it.img} alt="" />
                  </div>
                  <p className="mb-2 text-[12px] font-bold">{it.brand}</p>
                  <p className="mb-2 text-sm font-bold">{it.title}</p>
                  <button className="px-2 md:px-5 rounded-full font-bold text-sm h-7 py-1 cursor-pointer min-w-24 md:min-w-32 bg-[#186DF5] text-white">
                    Add to Cart
                  </button>
                </div>
                <div className="p-2 pt-6 md:pt-2 font-bold border-t-2">
                  {it.price}
                </div>
                <div className="p-2 pt-6 md:pt-2 font-bold border-t-2 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      fill="none"
                      height="15"
                      viewBox="0 0 14 15"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.90089 5.25033H13.0415C13.3019 5.25033 13.5363 5.43262 13.6144 5.69303C13.7186 5.92741 13.6144 6.21387 13.4061 6.37012L9.99464 9.02637L11.3228 13.193C11.4269 13.4535 11.3228 13.7399 11.0884 13.8962C10.8801 14.0524 10.5676 14.0524 10.3592 13.8701L6.99985 11.266L3.61443 13.8701C3.4061 14.0524 3.0936 14.0524 2.88527 13.8962C2.65089 13.7399 2.54672 13.4535 2.65089 13.193L3.97902 9.02637L0.567558 6.37012C0.359224 6.21387 0.255058 5.92741 0.359224 5.69303C0.437349 5.43262 0.671724 5.25033 0.958183 5.25033H5.07277L6.40089 1.1097C6.47902 0.849284 6.71339 0.666992 6.99985 0.666992C7.26027 0.666992 7.49464 0.849284 7.57277 1.1097L8.90089 5.25033Z"
                        fill="#1C58EE"
                      />
                    </svg>
                  ))}
                  (X)
                </div>
                <div className="p-2 pt-6 md:pt-2 font-bold border-t-2">
                  <span className="text-[#0E754A]">In Stock</span>
                </div>
                <div className="p-2 pt-6 md:pt-2 border-t-2 h-[100px] md:h-[76px] text-[#717171]">
                  <p className="font-bold">Ships from supplier</p>
                  <p>Expected to ship within 3 business days</p>
                </div>
                <div className="p-2 pt-6 md:pt-2 border-t-2">{it.sizeInch}</div>
                <div className={`${expanded ? "block" : "hidden"}`}>
                  <div className="p-2 pt-6 md:pt-2 border-t-2">
                    {it.sizeDec}
                  </div>
                  <div className="p-2 pt-6 md:pt-2 border-t-2">
                    {it.material}
                  </div>
                  <div className="p-2 pt-6 md:pt-2 border-t-2">{it.angle}</div>
                  <div className="p-2 pt-6 md:pt-2 border-t-2">And More...</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="toggleButton"
        className="bg-white text-primary-blue font-bold p-3 text-center mt-3 mb-4 cursor-pointer"
        onClick={() => setExpanded((s) => !s)}
      >
        See all product specifications{" "}
        <i className="fa-solid fa-chevron-up"></i>
      </section>
    </div>
  );
};

export default SimilarItems;
