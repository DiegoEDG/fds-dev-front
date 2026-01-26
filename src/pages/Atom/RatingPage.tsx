import { useEffect } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import Rating from '../../components/atoms/Rating';
import MscComponentSnippet from '../../components/MscComponentSnippet/MscComponentSnippet';
import { codeRating } from './constants';

const RatingPage = () => {
	useEffect(() => {
		document.title = 'Rating page';
	}, []);

	return (
		<ComponentLayout name="Rating" description="Rating description">
			<MscComponentSnippet code={codeRating}>
				<Rating />
				<Rating value={3.0} />
				<Rating value={5} />
			</MscComponentSnippet>
		</ComponentLayout>
	);
};

export default RatingPage;
