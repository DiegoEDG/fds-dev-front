import { useEffect } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import ProductFeatures from '../../components/organisms/ProductFeatures';
import MscComponentSnippet from '../../components/MscComponentSnippet/MscComponentSnippet';
import { codeProductFeatures } from '../Atom/constants';

const ProductFeaturesPage = () => {
  useEffect(() => {
    document.title = 'Product features page';
  }, []);

  return (
    <ComponentLayout name="Product Features" description="Product features description">
      <MscComponentSnippet code={codeProductFeatures}>
        <ProductFeatures />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default ProductFeaturesPage;
