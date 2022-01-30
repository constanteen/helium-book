import { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import LoadingButton from '../src/components/LoadingButton';
import { fetchMore, fetchPosts } from '../store/actions/actions';

const SinglePost = dynamic(() => import ('../src/components/SinglePost'));

export default function Home() {
	const { posts, isLoading } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(fetchMore());
  }
  
	return (
		<Container>
			<Row>
				<Col>
					<h1 data-testid="heading" className="text-center my-3 text-primary">Helium Book</h1>
				</Col>
			</Row>
			<Row className="h-100 align-items-stretch">
				{isLoading ? (
					<div className="d-flex justify-content-center h-100 align-items-center">
						<Spinner animation="grow" />
					</div>
				) : (
					posts && (
						<>
							{posts.map((post) => (
								<SinglePost key={post.id} post={post} />
							))}
							<div className="d-flex justify-content-center my-3">
								<LoadingButton onClick={handleLoadMoreClick}>Load More</LoadingButton>
							</div>
						</>
					)
				)}
			</Row>
		</Container>
	);
}
