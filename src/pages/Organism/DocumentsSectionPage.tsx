import { useEffect } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import DocumentsSection from '../../components/organisms/DocumentsSection';
import MscComponentSnippet from '../../components/MscComponentSnippet/MscComponentSnippet';
import { codeDocumentsSection } from '../Atom/constants';

const DocumentsSectionPage = () => {
  useEffect(() => {
    document.title = 'Documents section page';
  }, []);

  return (
    <ComponentLayout name="Documents Section" description="Documents section description">
      <MscComponentSnippet code={codeDocumentsSection}>
        <DocumentsSection />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default DocumentsSectionPage;
