export default function Slider() {
  const imgSliderA = new URL(
    "../../assets/homepage/slider-ss-test-a.jpg",
    import.meta.url
  ).href;
  const imgSliderB = new URL(
    "../../assets/homepage/slider-ss-test-b.jpg",
    import.meta.url
  ).href;
  const imgSliderC = new URL(
    "../../assets/homepage/slider-ss-test-c.jpg",
    import.meta.url
  ).href;
  const imgSliderD = new URL(
    "../../assets/homepage/slider-ss-test-dd.jpg",
    import.meta.url
  ).href;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <div class="flex gap-4 w-full">
      <picture>
        <source
          media="(min-width:768px)"
          srcset="${imgSliderA}"
        />

        <img
          src="${imgSliderD}"
          alt="Copy test image"
          class="w-full rounded"
        />
      </picture>

      <picture>
        <source
          media="(min-width:768px)"
          srcset="${imgSliderB}"
        />

        <img
          src="${imgSliderC}"
          alt="Copy test image"
          class="w-full rounded"
        />
      </picture>
    </div>
        `.trim(),
      }}
    />
  );
}
