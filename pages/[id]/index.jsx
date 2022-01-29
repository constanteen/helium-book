import Image from 'next/image';
import { useEffect } from 'react';
import { Badge, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import RandomPosts from '../../src/components/RandomPosts';
import { fetchPost, removeSetPost } from '../../store/actions/actions';

export default function PostDetails({ id }) {
	const dispatch = useDispatch();
	const {post, isLoading} = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchPost(id));
    () => {
      dispatch(removeSetPost());
    }
	}, [dispatch, id]);

	return (
		<Container>
			{ 
        isLoading ? 
        <div className="d-flex justify-content-center h-100 align-items-center">
          <Spinner animation="grow" /> 
        </div> :
        <>
          <Row>
            <div className="text-center my-3">
              <h1>{post.text}</h1> 
            </div>
          </Row>
          <Row>
            <Col xs={12} md={8} className="d-flex flex-column align-items-center">
              <div>
                <div>
                  { 
                    post.image && <Image
                      src={post.image}
                      width={600}
                      height={500}
                      alt={post.text}
                      objectFit="cover"
                    />
                  }
                </div>
                <div>
                  <p className="text-capitalize h3">{`${post.owner?.title}. ${post.owner?.firstName} ${post.owner?.lastName}`}</p>
                  <p>Likes: {post.likes}</p>
                  <p>Follow on instagram: <a href={post.link} rel="noreferrer" target={'_blank'}>Click Here</a></p>
                  <div className="d-flex">
                    {post.tags?.map((tag) => (<Badge pill bg="info" className="me-2" key={tag}>{tag}</Badge>))}
                  </div>
                  <div className="my-3">
                    Published: {new Date(post.publishDate).toDateString()}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <RandomPosts />
            </Col>
          </Row>
        </>
      }
		</Container>
	);
}

PostDetails.getInitialProps = (ctx) => {
	const id = ctx.query.id;
	return { id };
};
