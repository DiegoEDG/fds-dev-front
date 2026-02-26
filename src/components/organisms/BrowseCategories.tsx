import { sanitizeHtml } from '../../utils/sanitizeHtml';

export default function BrowseCategories() {
  const imgMilling = new URL('../../assets/homepage/milling.jpg', import.meta.url).href;
  const imgHoleMaking = new URL('../../assets/homepage/hole-making.png', import.meta.url).href;
  const imgSafety = new URL('../../assets/homepage/safety.png', import.meta.url).href;
  const imgAbrasives = new URL('../../assets/homepage/abrasives.png', import.meta.url).href;
  const imgIndexable = new URL('../../assets/homepage/indexable.png', import.meta.url).href;
  const imgPowerTools = new URL('../../assets/homepage/power-tools.png', import.meta.url).href;
  const imgHose = new URL('../../assets/homepage/hose.png', import.meta.url).href;
  const imgHandTools = new URL('../../assets/homepage/hand-tools.png', import.meta.url).href;
  const imgClamping = new URL('../../assets/homepage/clamping.png', import.meta.url).href;
  const imgFasteners = new URL('../../assets/homepage/fasteners.png', import.meta.url).href;
  const imgJanitorial = new URL('../../assets/homepage/janitorial.png', import.meta.url).href;
  const imgLighting = new URL('../../assets/homepage/lighting.png', import.meta.url).href;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(
          `
    <section class="bg-white py-6">
      <div
        class="mx-auto max-w-screen-2xl px-5 lg:px-10 2xl:px-0 flex flex-col"
      >
        <div
          class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center after:flex-1 after:bg-monochromes-grey_xlight after:h-[1px] sm:after:order-2 after:hidden sm:after:block"
        >
          <h1 class="font-bold text-xl mr-2 order-1 sm:order-1">
            Browse Our Categories
          </h1>

          <a
            href="all-categories.html"
            class="order-3 sm:order-3 text-primary-blue_xdark border rounded border-monochromes-grey_xlight font-bold py-1 px-4 sm:ml-2 flex gap-x-2 justify-center md:justify-start"
          >
            View All Categories

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="15"
              class="fill-primary-blue_xdark"
            >
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </a>

          <p
            class="text-sm order-2 sm:order-4 sm:basis-full sm:w-full py-3 sm:py-0"
          >
            Extensive product range tailored around your Metalworking, Safety
            and MRO needs
          </p>
        </div>

        <div
          id="categories"
          class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 x gap-[1px] bg-monochromes-grey_xlight rounded w-full mt-4 text-center font-bold text-sm cursor-pointer overflow-hidden border"
        >
          <article
            class="flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgMilling}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Milling</p>
            </div>
          </article>

          <article
            class="flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgHoleMaking}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Hole Making</p>
            </div>
          </article>

          <article
            class="flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgSafety}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Safety</p>
            </div>
          </article>

          <article
            class="flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgAbrasives}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Abrasives</p>
            </div>
          </article>

          <article
            class="flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgIndexable}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Indexable Cutting Tools</p>
            </div>
          </article>

          <article
            class="flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgPowerTools}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Power Tools</p>
            </div>
          </article>

          <article
            class="hidden lg:flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgHose}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Hose, Tube, Fittings & Valves</p>
            </div>
          </article>

          <article
            class="hidden lg:flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgHandTools}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Hand Tools</p>
            </div>
          </article>

          <article
            class="hidden xl:flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgClamping}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Clamping, Workholding & Positioning</p>
            </div>
          </article>

          <article
            class="hidden xl:flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgFasteners}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Fasteners</p>
            </div>
          </article>

          <article
            class="hidden xl:flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgJanitorial}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Janitorial & Facility Maintenance</p>
            </div>
          </article>

          <article
            class="hidden xl:flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue"
            style="outline-offset: -2px"
          >
            <div class="sm:p-3 flex items-center sm:justify-center sm:flex-col">
              <img
                src="${imgLighting}"
                class="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
              />
              <p class="text-base">Lighting & Electrical</p>
            </div>
          </article>
        </div>
      </div>
    </section>
        `.trim(),
        ),
      }}
    />
  );
}
