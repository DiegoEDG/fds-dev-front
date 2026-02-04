import React, { useState } from 'react';

interface Specification {
  title: string;
  value: string;
  hidden?: boolean;
}

interface SpecificationsTableProps {
  title?: string;
  specifications?: Specification[];
  className?: string;
}

const SpecificationsTable: React.FC<SpecificationsTableProps> = ({
  title = 'Specifications',
  specifications = [
    { title: 'Primary Material', value: 'Nitrile' },
    { title: 'Thickness (mil)', value: '2.5' },
    { title: 'Grip Surface', value: 'Grain (Full)' },
    { title: 'Grade', value: 'General Purpose' },
    { title: 'Cuff Type', value: 'Regular' },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
    { title: 'Hidden Row Title', value: 'Hidden Row Spec', hidden: true },
  ],
  className = '',
}) => {
  const [showHidden, setShowHidden] = useState(false);
  const hasHiddenRows = specifications.some((spec) => spec.hidden);

  const toggleHidden = () => {
    setShowHidden(!showHidden);
  };

  return (
    <div className={className}>
      <p className="font-bold text-xl mb-2">{title}</p>
      <table
        id="specificationsTable"
        className="table-auto w-full border border-collapse text-sm mb-3"
      >
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index} className={spec.hidden ? (showHidden ? '' : 'hc hidden') : ''}>
              <td className="border px-4 py-1 w-1/2">{spec.title}</td>
              <td className="border px-4 py-1 w-1/2">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {hasHiddenRows && (
        <div
          className="w-full md:w-fit border border-blue-200 rounded text-blue-700 font-bold text-sm mb-3 py-1 px-3 flex items-center justify-center cursor-pointer"
          onClick={toggleHidden}
        >
          {showHidden ? 'Show less specifications' : 'Show all specifications'}
          <svg
            id="dropDownSpec"
            className={`ml-1 transition-all ${showHidden ? 'rotate-0' : 'rotate-180'}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0003 10.8333C12.766 10.8333 12.5576 10.7552 12.4014 10.5989L8.00033 6.1979L3.57324 10.5989C3.26074 10.9375 2.71387 10.9375 2.40137 10.5989C2.06283 10.2864 2.06283 9.73956 2.40137 9.42706L7.40137 4.42706C7.71387 4.08852 8.26074 4.08852 8.57324 4.42706L13.5732 9.42706C13.9118 9.73956 13.9118 10.2864 13.5732 10.5989C13.417 10.7552 13.2087 10.8333 13.0003 10.8333Z"
              fill="#2563eb"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default SpecificationsTable;
