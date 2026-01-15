export default function BestSellers() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <div
      class="bg-white w-screen lg:w-full h-fit flex flex-col pt-4 pb-1 py-6 px-5 lg:px-6 gap-3 overflow-hidden rounded scroll-container"
    >
      <div class="flex flex-row justify-between items-center gap-4">
        <h3 class="text-xl font-bold text-nowrap">Best Sellers</h3>

        <div class="border-b border-monochromes-grey_xlight w-full block"></div>
      </div>

      <section class="relative group">
        <article
          class="absolute left-0 min-h-full items-center flex rounded-r z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300"
        >
          <button
            class="scroll-left bg-white w-9 h-32 flex items-center justify-center shadow-[4px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-r -left-2 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-3 fill-primary-blue"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
        </article>

        <div
          class="flex flex-row justify-between gap-3 overflow-x-scroll pb-4 relative custom-scroll"
        >
          <!-- Item Card -->
          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/drill.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>

            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <input
                  type="text"
                  class="h-10 w-[60px] border rounded appearance-none text-center"
                  inputmode="numeric"
                  value="1"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>

          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/gloves.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>
            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <input
                  type="text"
                  class="h-10 w-[60px] border rounded appearance-none text-center"
                  inputmode="numeric"
                  value="1"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>

          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/battery.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>
            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <select class="h-10 w-[60px] border rounded text-center">
                  <option value="1">1</option>
                  <option value="2">5</option>
                  <option value="3">10</option>
                  <option value="4">15</option>
                  <option value="5">20</option>
                </select>
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>

          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/ac.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>
            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <input
                  type="text"
                  class="h-10 w-[60px] border rounded appearance-none text-center"
                  inputmode="numeric"
                  value="1"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>

          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300 block"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/compresor.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>
            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <input
                  type="text"
                  class="h-10 w-[60px] border rounded appearance-none text-center"
                  inputmode="numeric"
                  value="1"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>

          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300 block"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/battery2.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>
            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <select class="h-10 w-[60px] border rounded text-center">
                  <option value="1">1</option>
                  <option value="2">5</option>
                  <option value="3">10</option>
                  <option value="4">15</option>
                  <option value="5">20</option>
                </select>
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>

          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300 block"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/battery2.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>
            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <input
                  type="text"
                  class="h-10 w-[60px] border rounded appearance-none text-center"
                  inputmode="numeric"
                  value="1"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>

          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300 block"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/battery2.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>
            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <input
                  type="text"
                  class="h-10 w-[60px] border rounded appearance-none text-center"
                  inputmode="numeric"
                  value="1"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>

          <article
            class="max-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300 block"
          >
            <div class="h-[88px] w-[210px] flex justify-center">
              <img
                src="../assets/homepage/battery2.png"
                alt="Product Image"
                class="object-fit"
              />
            </div>
            <div class="flex flex-row justify-between items-center mt-3">
              <p class="text-sm">Web Price</p>
              <p>
                <span class="font-bold text-lg">$293.17</span>
                <span class="text-gray-500 text-xs">/ea</span>
              </p>
            </div>
            <p class="text-xs font-bold">DEWALT</p>
            <p class="text-sm font-bold">
              Power Tool Battery: 20V, Lithium-ion
            </p>
            <p class="text-sm pt-1 text-gray-500">MSC# 73659377</p>

            <div
              class="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom"
            >
              <div
                class="relative flex flex-col h-fit w-fit items-center self-end"
              >
                <p class="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                <select class="h-10 w-[60px] border rounded text-center">
                  <option value="1">1</option>
                  <option value="2">5</option>
                  <option value="3">10</option>
                  <option value="4">15</option>
                  <option value="5">20</option>
                </select>
              </div>

              <button
                class="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
              >
                Add to Cart
              </button>
            </div>
          </article>
        </div>

        <article
          class="absolute right-0 top-0 min-h-full items-center flex rounded-l z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300"
        >
          <button
            class="scroll-right bg-white w-9 h-32 flex items-center justify-center shadow-[-4px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-l -right-2 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-3 fill-primary-blue rotate-180"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
        </article>
      </section>
    </div>
        `.trim(),
      }}
    />
  );
}
