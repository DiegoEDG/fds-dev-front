import React from 'react';

type FeatureItem = {
  label: string;
};

interface ProductFeaturesProps {
  title?: string;
  features?: FeatureItem[];
  className?: string;
}

const FeatureIcon = () => (
  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 5.1875C17 9.1875 14.7812 12.5312 11.5 13.625C10.875 13.875 10.1875 14 9.5 14C7.46875 14 5.5625 12.875 4.625 11.0625C2.9375 12.625 2.46875 14.4062 2.46875 14.4375C2.375 14.7812 2.0625 15 1.75 15C1.6875 15 1.625 15 1.5625 15C1.15625 14.9062 0.90625 14.5 1 14.0938C1.3125 12.8438 3.84375 7 11.4688 7C11.75 7 12 6.78125 12 6.5C12 6.25 11.75 6 11.5 6C8.125 6 5.71875 7.09375 4 8.375C4 8.03125 4.03125 7.6875 4.09375 7.34375C4.53125 5.28125 6.15625 3.625 8.21875 3.15625C9.09375 2.9375 9.9375 2.96875 10.75 3.15625C12.5 3.5625 14.4375 2.90625 15.4062 1.25C15.5938 0.9375 16.0312 0.9375 16.1875 1.25C16.6875 2.40625 17 3.8125 17 5.1875Z"
      fill="#212121"
    />
  </svg>
);

const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  title = 'Features & Benefits',
  features = [
    { label: 'Biodegradale' },
    { label: 'Biodegradale' },
    { label: 'Biodegradale' },
    { label: 'Biodegradale' },
    { label: 'Biodegradale' },
  ],
  className = '',
}) => {
  return (
    <section
      className={`flex flex-col py-4 px-5 w-full h-fit bg-white gap-4 my-5 lg:rounded-lg ${className} border`}
    >
      <h5 className="font-bold text-base">{title}</h5>
      {features.map((feature, index) => (
        <div key={`${feature.label}-${index}`} className="flex flex-row gap-2 items-center">
          <span>
            <FeatureIcon />
          </span>
          <p className="text-sm font-normal">{feature.label}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductFeatures;
