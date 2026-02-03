import { useEffect } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import SpecificationsTable from '../../components/organisms/SpecificationsTable';
import MscComponentSnippet from '../../components/MscComponentSnippet/MscComponentSnippet';
import { codeSpecificationsTable } from '../Atom/constants';

const SpecificationsTablePage = () => {
  useEffect(() => {
    document.title = 'Specifications Table page';
  }, []);

  return (
    <ComponentLayout name="Specifications Table" description="Specifications table description">
      <MscComponentSnippet code={codeSpecificationsTable}>
        <SpecificationsTable />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default SpecificationsTablePage;
