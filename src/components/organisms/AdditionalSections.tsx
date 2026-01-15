export default function AdditionalSections() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <section
      class="mx-auto max-w-screen-2xl flex flex-col px-5 lg:px-10 2xl:px-0"
    >
      <!-- 2nd section -->
      <article
        class="p-3 w-full flex items-center justify-center bg-white font-bold my-4 text-center"
      >
        <span>
          Have a Question? We’re here to help Call:
          <a href="#" class="text-primary-blue_dark">1-800-645-7270</a> or Email
          <a href="mailto:support@mscdirect.com" class="text-primary-blue_dark"
            >support@mscdirect.com
          </a>
        </span>
      </article>

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
              src="../assets/homepage/save-our-sales.jpg"
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
            class="sm:w-6/12 overflow-hidden flex items-center justify-center rounded-l order-1 sm:order-2"
          >
            <img
              src="../assets/homepage/exclusive-brand.jpg"
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
              src="../assets/homepage/two-ine.jpg"
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
              src="../assets/homepage/rigid.jpg"
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
              src="../assets/homepage/gloves.jpg"
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
              src="../assets/homepage/dactory.jpg"
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

      <!-- 5ft section -->

      <article class="bg-white rounded p-6 mb-6">
        <h3 class="text-xl mb-4 font-bold">MSC Industrial Supply Co.</h3>
        <p class="text-sm mb-4 text-monochromes-grey">
          MSC Industrial Supply, Inc. is a leading North American distributor of
          metalworking and
          <a href="#" class="text-black underline">maintenance</a>, repair and
          operations
          <a href="#" class="text-black underline">(MRO) products</a> and
          services. With over 75 years of experience, MSC is dedicated to
          helping customers drive greater productivity, profitability and
          growth. MSC features over 1.5 million products ready-to-ship. Our
          inventory management and other supply chain solutions ensure that your
          workforce and facility are supplied with equipment that is reliable,
          durable and accurate for every operation.
        </p>

        <p class="text-sm text-monochromes-grey">
          We are your steadfast partner in providing innovative solutions that
          deliver. That includes our knowledgeable customer service associates
          who strive to ensure that every customer is provided with the best
          possible shopping experience - first time, every time.
        </p>
      </article>
    </section>
        `.trim(),
      }}
    />
  );
}
