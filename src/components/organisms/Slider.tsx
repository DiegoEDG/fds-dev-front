export default function Slider() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <div class="flex gap-4 w-full">
      <picture>
        <source
          media="(min-width:768px)"
          srcset="../assets/homepage/slider-ss-test-a.jpg"
        />

        <img
          src="../assets/homepage/slider-ss-test-dd.jpg"
          alt="Copy test image"
          class="w-full rounded"
        />
      </picture>

      <picture>
        <source
          media="(min-width:768px)"
          srcset="../assets/homepage/slider-ss-test-b.jpg"
        />

        <img
          src="../assets/homepage/slider-ss-test-c.jpg"
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
