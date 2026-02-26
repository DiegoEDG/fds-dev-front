import { sanitizeHtml } from '../../utils/sanitizeHtml';

export default function ServicesDesigned() {
  const imgProcurement = new URL('../../assets/homepage/procurement.jpg', import.meta.url).href;
  const imgInventory = new URL('../../assets/homepage/inventory-management.jpg', import.meta.url)
    .href;
  const imgSafety = new URL('../../assets/homepage/safety-service.jpg', import.meta.url).href;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(
          `
    <section
      class="mx-auto max-w-screen-2xl flex flex-col px-5 lg:px-10 2xl:px-0"
    >
      <div
        class="flex pt-4 items-center after:flex-1 after:bg-monochromes-grey_xlight after:h-[1px] mb-4"
      >
        <h1 class="font-bold text-xl mr-2">
          Services Designed For Your Business Needs
        </h1>
      </div>
      <!-- 1st section  -->
      <div class="flex flex-col sm:flex-row gap-4">
        <article class="bg-white rounded w-full lg:w-4/12">
          <div
            class="h-[140px] overflow-hidden flex justify-center items-center rounded-t"
          >
            <img
              src="${imgProcurement}"
              alt=""
              class="object-cover h-full w-full"
            />
          </div>
          <div
            class="p-5 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center"
          >
            <span class="font-bold text-base">eProcurement</span>
            <button
              class="sm:mt-4 lg:mt-0 ml-auto sm:ml-0 lg:ml-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Learn More
            </button>
          </div>
        </article>

        <article class="bg-white rounded w-full lg:w-4/12">
          <div
            class="h-[140px] overflow-hidden flex justify-center items-center rounded-t"
          >
            <img
              src="${imgInventory}"
              alt=""
              class="object-cover h-full w-full"
            />
          </div>
          <div
            class="p-5 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center"
          >
            <span class="font-bold text-base">Inventory Management</span>
            <button
              class="sm:mt-4 lg:mt-0 ml-auto sm:ml-0 lg:ml-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Learn More
            </button>
          </div>
        </article>

        <article class="bg-white rounded w-full lg:w-4/12">
          <div
            class="h-[140px] overflow-hidden flex justify-center items-center rounded-t"
          >
            <img
              src="${imgSafety}"
              alt=""
              class="object-cover h-full w-full"
            />
          </div>
          <div
            class="p-5 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center"
          >
            <span class="font-bold text-base">Safety Service</span>
            <button
              class="sm:mt-4 lg:mt-0 ml-auto sm:ml-0 lg:ml-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Learn More
            </button>
          </div>
        </article>
      </div>
    </section>
        `.trim(),
        ),
      }}
    />
  );
}
