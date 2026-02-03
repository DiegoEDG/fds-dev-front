import React from 'react';

type DocumentItem = {
  title: string;
  typeLabel: string;
  sizeLabel: string;
  viewUrl?: string;
  downloadUrl?: string;
};

interface DocumentsSectionProps {
  title?: string;
  documents?: DocumentItem[];
  className?: string;
  onView?: (doc: DocumentItem) => void;
  onDownload?: (doc: DocumentItem) => void;
}

const PdfIcon = () => (
  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.61458 9.97921H3.35417V8.41671H3.61458C4.03776 8.41671 4.39583 8.77478 4.39583 9.19796C4.39583 9.65369 4.03776 9.97921 3.61458 9.97921ZM7 8.41671H7.26042C7.52083 8.41671 7.78125 8.67712 7.78125 8.93754V11.0209C7.78125 11.3138 7.52083 11.5417 7.26042 11.5417H7V8.41671ZM8.04167 0.083374V4.25004C8.04167 4.83598 8.4974 5.29171 9.08333 5.29171H13.25V14.6667C13.25 15.8386 12.306 16.75 11.1667 16.75H2.83333C1.66146 16.75 0.75 15.8386 0.75 14.6667V2.16671C0.75 1.02738 1.66146 0.083374 2.83333 0.083374H8.04167ZM2.83333 7.37504C2.54036 7.37504 2.3125 7.63546 2.3125 7.89587V12.0625C2.3125 12.3555 2.54036 12.5834 2.83333 12.5834C3.09375 12.5834 3.35417 12.3555 3.35417 12.0625V11.0209H3.61458C4.59115 11.0209 5.4375 10.2071 5.4375 9.19796C5.4375 8.22139 4.59115 7.37504 3.61458 7.37504H2.83333ZM5.95833 12.0625C5.95833 12.3555 6.1862 12.5834 6.47917 12.5834H7.26042C8.10677 12.5834 8.82292 11.8998 8.82292 11.0209V8.93754C8.82292 8.09119 8.10677 7.37504 7.26042 7.37504H6.47917C6.1862 7.37504 5.95833 7.63546 5.95833 7.89587V12.0625ZM10.125 7.37504C9.83203 7.37504 9.60417 7.63546 9.60417 7.89587V12.0625C9.60417 12.3555 9.83203 12.5834 10.125 12.5834C10.3854 12.5834 10.6458 12.3555 10.6458 12.0625V10.5H11.6875C11.9479 10.5 12.2083 10.2722 12.2083 9.97921C12.2083 9.71879 11.9479 9.45837 11.6875 9.45837H10.6458V8.41671H11.6875C11.9479 8.41671 12.2083 8.18884 12.2083 7.89587C12.2083 7.63546 11.9479 7.37504 11.6875 7.37504H10.125ZM9.08333 0.083374L13.25 4.25004H9.08333V0.083374Z"
      fill="#717171"
    />
  </svg>
);

const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  title = 'Documents',
  documents = [
    {
      title: 'Spec Sheet - 5mil Powderfree Blue',
      typeLabel: 'PDF',
      sizeLabel: '24.53 MB',
    },
    {
      title: 'Spec Sheet - 5mil Powderfree Blue',
      typeLabel: 'PDF',
      sizeLabel: '24.53 MB',
    },
    {
      title: 'Spec Sheet - 5mil Powderfree Blue',
      typeLabel: 'PDF',
      sizeLabel: '24.53 MB',
    },
    {
      title: 'Spec Sheet - 5mil Powderfree Black, Orange',
      typeLabel: 'PDF',
      sizeLabel: '86.04 KB',
    },
  ],
  className = '',
  onView,
  onDownload,
}) => {
  const handleView = (doc: DocumentItem) => {
    if (onView) return onView(doc);
    if (doc.viewUrl) window.open(doc.viewUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (doc: DocumentItem) => {
    if (onDownload) return onDownload(doc);
    if (doc.downloadUrl) window.open(doc.downloadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={`flex flex-col bg-white w-full h-fit gap-4 p-4 mb-5 overflow-hidden ${className}`}>
      <h3 className="text-xl font-bold leading-7">{title}</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {documents.map((doc, index) => (
          <div
            key={`${doc.title}-${index}`}
            className="w-full min-w-[170px] sm:w-[360px] md:max-lg:min-h-[140px] h-fit p-4 flex flex-col gap-2 border border-gray-300 rounded overflow-hidden"
          >
            <p className="text-sm font-bold leading-5">{doc.title}</p>
            <div className="flex flex-row items-center gap-3">
              <button
                type="button"
                className="text-blue-800 font-bold"
                onClick={() => handleView(doc)}
                disabled={!onView && !doc.viewUrl}
              >
                View
              </button>
              <span className="border-l border-gray-300 h-5" />
              <button
                type="button"
                className="text-blue-800 font-bold"
                onClick={() => handleDownload(doc)}
                disabled={!onDownload && !doc.downloadUrl}
              >
                Download
              </button>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span>
                <PdfIcon />
              </span>
              <p>
                {doc.typeLabel}, {doc.sizeLabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsSection;
