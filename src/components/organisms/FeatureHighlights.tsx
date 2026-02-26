import { sanitizeHtml } from '../../utils/sanitizeHtml';

export default function FeatureHighlights() {
  const imgSaveOurSales = new URL('../../assets/homepage/save-our-sales.jpg', import.meta.url).href;
  const imgExclusiveBrand = new URL('../../assets/homepage/exclusive-brand.jpg', import.meta.url)
    .href;
  const imgTwoIne = new URL('../../assets/homepage/two-ine.jpg', import.meta.url).href;
  const imgRigid = new URL('../../assets/homepage/rigid.jpg', import.meta.url).href;
  const imgGlovesJpg = new URL('../../assets/homepage/gloves.jpg', import.meta.url).href;
  const imgDactory = new URL('../../assets/homepage/dactory.jpg', import.meta.url).href;
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(
            `
    <section
      class="mx-auto max-w-screen-2xl flex flex-col px-5 lg:px-10 2xl:px-0"
    >

      <!-- 3rd section -->
      <div class="flex flex-col md:flex-row gap-4">
        <article
          class="w-full md:w-6/12 bg-white rounded flex flex-col sm:flex-row"
        >
          <div
            class="order-2 sm:order-1 p-5 sm:w-6/12 flex flex-col justify-center"
          >
            <b class="font-bold text-base">Save with our sales flyers</b>
            <p class="text-sm mb-4">
              This body copy area can support up to 108 cc max including spaces
              and the text can wrap to container.
            </p>
            <button
              class="px-2 w-fit md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Shop Clearance
            </button>
          </div>

          <div
            class="order-1 sm:order-2 sm:w-6/12 overflow-hidden flex items-center justify-center rounded-r"
          >
            <img
              src="${imgSaveOurSales}"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>
        </article>

        <article
          class="w-full md:w-6/12 bg-white rounded flex flex-col sm:flex-row"
        >
          <div
            class="p-5 sm:w-6/12 flex flex-col items-start order-2 sm:order-1"
          >
            <b class="font-bold text-base">Exclusive Brands Clearance</b>
            <p class="text-sm mb-4">
              This body copy area can support up to 108 cc max including spaces
              and the text can wrap to container.
            </p>
            <button
              class="mt-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Shop Clearance
            </button>
          </div>

          <div
            class="sm:w-6/12 overflow-hidden flex items-center justify-center rounded-r order-1 sm:order-2"
          >
            <img
              src="${imgExclusiveBrand}"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>
        </article>
      </div>

      <!-- 4th section -->

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <article class="bg-white rounded">
          <div class="h-[140px] overflow-hidden rounded-t">
            <img
              src="${imgTwoIne}"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-5 flex flex-col items-start">
            <p class="font-bold text-base mb-4">
              This is a Line Can Take up to 48CC Max or 2 line
            </p>
            <button
              class="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Shop Clearance
            </button>
          </div>
        </article>

        <article class="bg-white rounded">
          <div class="h-[140px] overflow-hidden rounded-t">
            <img
              src="${imgRigid}"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-5 flex flex-col items-start">
            <p class="font-bold text-base mb-4">
              This is a Line Can Take up to 48CC Max or 2 line
            </p>
            <button
              class="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Shop Clearance
            </button>
          </div>
        </article>

        <article class="bg-white rounded">
          <div class="h-[140px] overflow-hidden rounded-t">
            <img
              src="${imgGlovesJpg}"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-5 flex flex-col items-start">
            <p class="font-bold text-base mb-4">
              This is a Line Can Take up to 48CC Max or 2 line
            </p>
            <button
              class="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Shop Clearance
            </button>
          </div>
        </article>

        <article class="bg-white rounded">
          <div class="h-[140px] overflow-hidden rounded-t">
            <img
              src="${imgDactory}"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-5 flex flex-col items-start">
            <p class="font-bold text-base mb-4">
              This is a Line Can Take up to 48CC Max or 2 line
            </p>
            <button
              class="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
            >
              Shop Clearance
            </button>
          </div>
        </article>
      </div>


    </section>
        `.trim(),
          ),
        }}
      />
    </>
  );
}
