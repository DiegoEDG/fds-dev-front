import { useEffect } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import Badge from '../../components/atoms/Badge';
import MscComponentSnippet from '../../components/MscComponentSnippet/MscComponentSnippet';
import { codeAtom } from './constants';

const BadgePage = () => {
	useEffect(() => {
		document.title = 'Badge page';
	}, []);

	return (
		<ComponentLayout name="Badge" description="Badge description">
			<MscComponentSnippet code={codeAtom}>
				<Badge />
				<Badge variant="best_seller" />
				<Badge variant="top_rated" />
			</MscComponentSnippet>
		</ComponentLayout>
	);
};

export default BadgePage;
