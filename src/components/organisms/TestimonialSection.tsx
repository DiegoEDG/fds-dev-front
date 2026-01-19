export default function TestimonialSection() {
  const imgLogo = new URL("../../assets/homepage/logo-lon.png", import.meta.url)
    .href;
  const imgTestimonial = new URL(
    "../../assets/homepage/testimonial.png",
    import.meta.url
  ).href;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <section
      id="parallax-section"
      class="bg-white rounded pt-16 pb-8 lg:py-16 sm:mx-5 lg:mx-10 2xl:mx-auto mt-4 max-w-screen-2xl overflow-hidden relative"
    >
      <!-- Horizontal -->
      <svg
        id="msclogo"
        viewBox="0 0 1536 495"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute left-0 bottom-0 hidden h-full sm:block"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1133.28 374.939C1114.11 442.117 1161.97 494.988 1231.25 494.988H1456.81C1500.23 494.988 1553.85 453.196 1566.45 411.333L1588.64 334.172H1452.69L1445.41 356.471C1441.38 369.906 1432.16 376.294 1416.66 376.318H1303.21C1284.82 376.318 1279.49 365.711 1283.34 351.544L1342.05 146.591C1346.66 130.326 1355.41 118.293 1373.79 118.293H1490.88C1506.43 118.293 1511.94 124.669 1508.11 138.117L1499.62 169.078H1635.51L1644.33 138.081C1665.16 69.3589 1613.74 7.68482e-08 1541.95 7.68482e-08H1332.55C1305.93 -0.000942839 1280.03 8.67521 1258.78 24.7155C1237.52 40.7557 1222.07 63.287 1214.75 88.8996L1133.28 374.939ZM1096.1 323.695C1116.92 254.949 1065.51 185.531 993.719 185.531H856.57C838.431 185.236 833.826 173.533 837.772 160.604L842.742 143.161C846.865 130.079 856.382 118.022 873.048 118.376H1121.75L1175.72 7.68482e-08H828.643C765.228 2.86393 723.344 47.3786 712.237 97.6329L687.384 183.515L687.302 183.869C668.127 251.059 715.994 303.93 785.275 303.93L790.269 304.024H935.203C947.029 304.178 956.004 308.244 951.563 323.824L942.329 356.235C937.794 371.486 927.618 376.259 915.192 376.742H645.006L611.378 494.976H962.199C1005.36 494.081 1058.66 452.937 1071.11 411.534L1096.11 323.683L1096.1 323.695ZM497.433 140.391L396.445 495H543.911L684.911 0.0117906H425.962L264.526 270.906L285.539 0.0117906H47.6494L-166 495H-19.7705L140.405 140.391L116.271 495H265.009L497.433 140.391Z"
          fill="#F2F2F2"
        />
      </svg>

      <!-- Vertical -->
      <svg
        viewBox="0 0 358 703"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute left-0 bottom-0 sm:hidden"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M270.911 140.658C319.361 154.477 357.492 119.981 357.492 70.0528L357.492 -92.4977C357.492 -123.785 327.351 -162.433 297.159 -171.506L241.509 -187.498L241.509 -89.5267L257.591 -84.281C267.281 -81.3779 271.888 -74.7317 271.905 -63.5612L271.905 18.198C271.905 31.4481 264.255 35.2933 254.038 32.5177L106.223 -9.79639C94.493 -13.1154 85.8145 -19.4221 85.8145 -32.6638L85.8145 -117.046C85.8145 -128.259 90.413 -132.223 100.111 -129.464L122.441 -123.344L122.441 -221.282L100.086 -227.631C50.5225 -242.647 0.499944 -205.587 0.499946 -153.851L0.499953 -2.94629C0.499274 16.2389 6.75662 34.9021 18.325 50.2191C29.8935 65.5361 46.1433 76.6732 64.6155 81.9449L270.911 140.658ZM233.953 167.456C184.372 152.449 134.307 189.5 134.307 241.236L134.307 340.073C134.094 353.145 125.654 356.464 116.33 353.621L103.749 350.039C94.3145 347.068 85.619 340.209 85.874 328.198L85.874 148.968L0.499958 110.075L0.499969 360.199C2.56547 405.9 34.67 436.084 70.914 444.089L132.853 461.999L133.109 462.058C181.567 475.877 219.698 441.381 219.698 391.453L219.766 387.854L219.766 283.406C219.877 274.883 222.809 268.415 234.046 271.615L257.421 278.27C268.42 281.538 271.863 288.872 272.211 297.827L272.211 492.54L357.483 516.774L357.483 263.95C356.837 232.849 327.164 194.432 297.303 185.459L233.944 167.447L233.953 167.456ZM101.752 598.889L357.5 671.668L357.5 565.395L0.508477 463.782L0.508485 650.396L195.881 766.737L0.508489 751.593L0.508497 923.031L357.5 1077L357.5 971.618L101.752 856.186L357.5 873.578L357.5 766.389L101.752 598.889Z"
          fill="#F2F2F2"
        />
      </svg>

      <div
        class="flex flex-col md:flex-row items-center justify-between max-w-[892px] mx-auto px-10 lg:px-0 w-fit md:w-full z-10 relative"
      >
        <!-- Testimonial  -->
        <div
          class="w-full lg:w-1/2 lg:min-h-96 flex lg:pl-[1.2rem] mb-8 lg:mb-0"
        >
          <div
            class="relative bg-primary-blue_xdark text-white p-8 pr-[100px] rounded-3xl w-full max-w-[80%] sm:max-w-[358px] min-h-[395px]"
          >
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute -top-8 left-4 rotate-icon transition-transform duration-[1200ms] ease-out"
              style="transform: rotate(-90deg)"
            >
              <path
                d="M46.2712 0C49.9894 0 52.8814 2.8628 52.8814 6.44131V35.785C52.8814 39.2613 49.8861 42.2264 46.2712 42.2264H31.3983L18.4878 51.735C17.6615 52.3484 16.5254 51.8372 16.5254 50.8148V42.2264H6.61017C2.89195 42.2264 0 39.3636 0 35.785V6.44131C0 2.8628 2.89195 0 6.61017 0H46.2712ZM24.7881 23.6181V17.0746C24.7881 14.0073 22.206 11.5535 19.0042 11.5535C15.8024 11.5535 13.2203 14.1095 13.2203 17.1768C13.2203 20.2441 15.8024 22.8002 19.0042 22.8002C19.3141 22.8002 19.6239 22.8002 19.9338 22.8002V23.6181C19.9338 25.0495 18.7977 26.072 17.455 26.072C16.009 26.072 14.9762 27.1966 14.9762 28.5258C14.9762 29.9572 16.009 30.9796 17.455 30.9796C21.3798 30.9796 24.7881 27.7079 24.7881 23.6181ZM39.661 23.6181V17.1768C39.661 14.1095 37.0789 11.5535 33.8771 11.5535C30.7786 11.5535 28.0932 14.1095 28.0932 17.1768C28.0932 20.2441 30.7786 22.9024 33.8771 22.9024C34.187 22.9024 34.4968 22.8002 34.8067 22.8002V23.6181C34.8067 25.0495 33.6706 26.072 32.3279 26.072C30.8819 26.072 29.849 27.1966 29.849 28.5258C29.849 29.9572 30.8819 30.9796 32.2246 30.9796C36.2526 30.9796 39.661 27.7079 39.661 23.6181Z"
                fill="#B3C7F9"
              />
            </svg>

            <p class="text-sm lg:text-lg font-semibold mb-4">
              MSC helped this business become more profitable, more efficient,
              and has driven standardization here. I’m looking forward to the
              future and what is to come.
            </p>

            <hr class="border-primary-blue_light mb-4" />

            <div class="mb-5">
              <p class="font-bold">Chris Basgall</p>
              <p class="text-white text-xs">Owner, Catamount Machine Works</p>
            </div>

            <div
              class="w-24 bg-white rounded-md flex items-center justify-center"
            >
              <img src="${imgLogo}" alt="" />
            </div>

            <div class="absolute -right-[73px] top-0 flex items-center h-full">
              <img
                src="${imgTestimonial}"
                alt="Chris Basgall"
                class="h-[250px] testimonial-image transition-transform duration-[1200ms] ease-out"
              />
            </div>
          </div>
        </div>

        <!-- Text Section -->
        <div class="w-full lg:w-1/2 lg:min-h-96 flex items-center md:pl-[60px]">
          <div class="w-full lg:flex-1 text-left max-w-[450px] lg:pt-0">
            <h2 class="text-[28px] font-bold">Success Stories</h2>
            <hr class="w-12 border-2 border-black my-5" />
            <p class="text-gray-700 mb-8 text-sm">
              In this compelling case study, Chris Basgall and the team at
              Catamount share their journey of partnering with MSC to drive
              efficiency, reduce costs, and enhance productivity.
            </p>
            <a
              href="#"
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full transition"
              >Find out more</a
            >
          </div>
        </div>
      </div>
    </section>
        `.trim(),
      }}
    />
  );
}
