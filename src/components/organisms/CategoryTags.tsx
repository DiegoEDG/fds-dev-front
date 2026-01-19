import imgChevron from "../../assets/chevron-down.svg";

export default function CategoryTags() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <div class="flex flex-col pt-4 w-full h-fit gap-4 mx-auto">
      <div
        class="border border-primary-blue_light rounded w-full py-3 gap-3 h-fit flex flex-col"
      >
        <div class="flex flex-row justify-between px-4">
          <div
            class="flex flex-col items-start md:items-center gap-1 md:gap-4 md:flex-row"
          >
            <p class="font-bold text-xl">Top Categories for You</p>
            <p class="text-primary-blue_dark font-bold flex gap-x-2">
              View All Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="12"
                class="fill-primary-blue_dark"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </p>
          </div>
          <div class="flex-row gap-2 hidden md:flex">
            <button
              class="scroll-left flex items-center justify-center rounded-full bg-transparent size-10 shadow-md"
            >
              <img src="${imgChevron}" class="rotate-180" />
            </button>
            <button
              class="scroll-right flex items-center justify-center rounded-full bg-white size-10 shadow-md"
            >
              <img src="${imgChevron}" />
            </button>
          </div>
        </div>

        <div
          class="flex flex-row gap-3 overflow-x-scroll text-nowrap pb-3 ml-4 pr-4 text-sm custom-scroll"
        >
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Holemaking</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Milling</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Abrasives</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Safety</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Indexable Cutting Tools</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Threading</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Measuring & Inspecting</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Hand Tools</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Janitorial & Facility Maintenance</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Fasteners</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Threading</p>
          </button>

          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Measuring & Inspecting</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Hand Tools</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Janitorial & Facility Maintenance</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Fasteners</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Threading</p>
          </button>

          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Measuring & Inspecting</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Hand Tools</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Janitorial & Facility Maintenance</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Fasteners</p>
          </button>
          <button
            class="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
          >
            <p>Threading</p>
          </button>
        </div>
      </div>
    </div>
        `.trim(),
      }}
    />
  );
}
