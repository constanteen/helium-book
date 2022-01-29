import { Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function LoadingButton(props) {
	const { isLoadingMore } = useSelector((state) => state.posts);
	
  return (
		<Button variant="primary" data-testid={"loadingButton"} onClick={props.onClick} disabled={isLoadingMore}>
			{isLoadingMore ? (
				<>
					<Spinner
						as="span"
						animation="grow"
						size="sm"
						role="status"
						aria-hidden="true"
					/>
					Loading...
				</>
			) : (
				<>Load More</>
			)}
		</Button>
	);
}

LoadingButton.propTypes = {
  onClick: PropTypes.func,
}
