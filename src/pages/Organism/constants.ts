export const codeOrganism = `<!-- Header Organism Example -->
<header class="bg-white border-b border-gray-200 p-4 flex justify-between items-center w-full">
  <!-- Logo (Atom/Molecule) -->
  <div class="text-xl font-bold text-blue-600">Brand</div>

  <!-- Navigation (Molecule) -->
  <nav class="hidden md:flex gap-6 text-gray-600">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">About</a>
    <a href="#" class="hover:text-blue-500">Products</a>
    <a href="#" class="hover:text-blue-500">Contact</a>
  </nav>

  <!-- Search (Molecule) -->
  <div class="flex gap-2">
    <input type="text" placeholder="Search..." class="border rounded px-2 py-1 text-sm" />
    <button class="bg-blue-500 text-white px-3 py-1 rounded text-sm">Search</button>
  </div>
</header>`;

export const codeCategoryTags = ``;
export const codeSlider = ``;
export const codeRecentlyViewed = ``;
export const codeBestSellers = ``;
export const codeBrowseCategories = ``;
export const codeServicesDesigned = `
  <!-- Services Designed section container -->
  <section class="mx-auto max-w-screen-2xl flex flex-col px-5 lg:px-10 2xl:px-0">
    <!-- Title row with divider line -->
    <div class="flex pt-4 items-center after:flex-1 after:bg-monochromes-grey_xlight after:h-[1px] mb-4">
      <h1 class="font-bold text-xl mr-2">Services Designed For Your Business Needs</h1>
    </div>

    <!-- Cards grid: stacks on mobile, 3 columns on large screens -->
    <div class="flex flex-col sm:flex-row gap-4">
      <!-- Card: eProcurement -->
      <article class="bg-white rounded w-full lg:w-4/12">
        <!-- Media (image) -->
        <div class="h-[140px] overflow-hidden flex justify-center items-center rounded-t">
          <img src="../assets/homepage/procurement.jpg" alt="eProcurement" class="object-cover h-full w-full" />
        </div>
        <!-- Content -->
        <div class="p-5 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center">
          <span class="font-bold text-base">eProcurement</span>
          <button class="sm:mt-4 lg:mt-0 ml-auto sm:ml-0 lg:ml-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Learn More
          </button>
        </div>
      </article>

      <!-- Card: Inventory Management -->
      <article class="bg-white rounded w-full lg:w-4/12">
        <!-- Media (image) -->
        <div class="h-[140px] overflow-hidden flex justify-center items-center rounded-t">
          <img src="../assets/homepage/inventory-management.jpg" alt="Inventory Management" class="object-cover h-full w-full" />
        </div>
        <!-- Content -->
        <div class="p-5 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center">
          <span class="font-bold text-base">Inventory Management</span>
          <button class="sm:mt-4 lg:mt-0 ml-auto sm:ml-0 lg:ml-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Learn More
          </button>
        </div>
      </article>

      <!-- Card: Safety Service -->
      <article class="bg-white rounded w-full lg:w-4/12">
        <!-- Media (image) -->
        <div class="h-[140px] overflow-hidden flex justify-center items-center rounded-t">
          <img src="../assets/homepage/safety-service.jpg" alt="Safety Service" class="object-cover h-full w-full" />
        </div>
        <!-- Content -->
        <div class="p-5 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center">
          <span class="font-bold text-base">Safety Service</span>
          <button class="sm:mt-4 lg:mt-0 ml-auto sm:ml-0 lg:ml-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Learn More
          </button>
        </div>
      </article>
    </div>
  </section>
`;
export const codeTestimonialSection = ``;
export const codeFeatureHighlights = `
  <!-- Feature Highlights section container -->
  <section class="mx-auto max-w-screen-2xl flex flex-col px-5 lg:px-10 2xl:px-0">

    <!-- Two-up highlights row -->
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Card: Save with our sales flyers -->
      <article class="w-full md:w-6/12 bg-white rounded flex flex-col sm:flex-row">
        <div class="order-2 sm:order-1 p-5 sm:w-6/12 flex flex-col justify-center">
          <b class="font-bold text-base">Save with our sales flyers</b>
          <p class="text-sm mb-4">
            This body copy area can support up to 108 cc max including spaces and the text can wrap to container.
          </p>
          <button class="px-2 w-fit md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Shop Clearance
          </button>
        </div>
        <div class="order-1 sm:order-2 sm:w-6/12 overflow-hidden flex items-center justify-center rounded-r">
          <img src="../assets/homepage/save-our-sales.jpg" alt="Save with our sales flyers" class="h-full w-full object-cover" />
        </div>
      </article>

      <!-- Card: Exclusive Brands Clearance -->
      <article class="w-full md:w-6/12 bg-white rounded flex flex-col sm:flex-row">
        <div class="p-5 sm:w-6/12 flex flex-col items-start order-2 sm:order-1">
          <b class="font-bold text-base">Exclusive Brands Clearance</b>
          <p class="text-sm mb-4">
            This body copy area can support up to 108 cc max including spaces and the text can wrap to container.
          </p>
          <button class="mt-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Shop Clearance
          </button>
        </div>
        <div class="sm:w-6/12 overflow-hidden flex items-center justify-center rounded-r order-1 sm:order-2">
          <img src="../assets/homepage/exclusive-brand.jpg" alt="Exclusive Brands Clearance" class="h-full w-full object-cover" />
        </div>
      </article>
    </div>

    <!-- Four-up grid highlights -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
      <!-- Card 1 -->
      <article class="bg-white rounded">
        <div class="h-[140px] overflow-hidden rounded-t">
          <img src="../assets/homepage/two-ine.jpg" alt="Highlight 1" class="w-full h-full object-cover" />
        </div>
        <div class="p-5 flex flex-col items-start">
          <p class="font-bold text-base mb-4">This is a Line Can Take up to 48CC Max or 2 line</p>
          <button class="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Shop Clearance
          </button>
        </div>
      </article>

      <!-- Card 2 -->
      <article class="bg-white rounded">
        <div class="h-[140px] overflow-hidden rounded-t">
          <img src="../assets/homepage/rigid.jpg" alt="Highlight 2" class="w-full h-full object-cover" />
        </div>
        <div class="p-5 flex flex-col items-start">
          <p class="font-bold text-base mb-4">This is a Line Can Take up to 48CC Max or 2 line</p>
          <button class="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Shop Clearance
          </button>
        </div>
      </article>

      <!-- Card 3 -->
      <article class="bg-white rounded">
        <div class="h-[140px] overflow-hidden rounded-t">
          <img src="../assets/homepage/gloves.jpg" alt="Highlight 3" class="w-full h-full object-cover" />
        </div>
        <div class="p-5 flex flex-col items-start">
          <p class="font-bold text-base mb-4">This is a Line Can Take up to 48CC Max or 2 line</p>
          <button class="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Shop Clearance
          </button>
        </div>
      </article>

      <!-- Card 4 -->
      <article class="bg-white rounded">
        <div class="h-[140px] overflow-hidden rounded-t">
          <img src="../assets/homepage/dactory.jpg" alt="Highlight 4" class="w-full h-full object-cover" />
        </div>
        <div class="p-5 flex flex-col items-start">
          <p class="font-bold text-base mb-4">This is a Line Can Take up to 48CC Max or 2 line</p>
          <button class="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight">
            Shop Clearance
          </button>
        </div>
      </article>
    </div>
  </section>
`;
