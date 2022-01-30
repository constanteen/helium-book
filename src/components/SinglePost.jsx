import Image from 'next/image';
import Link from 'next/link';
import { Card, Col, } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function SinglePost({post}) {
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="my-3">
      <Card className="h-100 rounded-3 overflow-hidden shadow">
        <div>
          <Image priority={true} src={post.image} width={200} height={200} objectFit="cover" layout="responsive" alt={post.text} />
        </div>
        <Card.Body>
          <Card.Title>
            <Link rel="preconnect" className="post_title" href={`/${post.id}`}>
              {post.text}
            </Link>
          </Card.Title>
          <div className="d-flex my-3">
            <Image src={post.owner.picture} className="rounded-circle" width={50} height={50} alt={post.owner.firstName} />
            <div className="d-flex align-items-center">
              <p className="mb-0 ms-3 text-capitalize">{`${post.owner.title}. ${post.owner.firstName} ${post.owner.lastName}`}</p>
            </div>
          </div>
          <div className="d-flex mt-3 align-items-center">
            <p className="mb-0 text-secondary">
              Likes ({post.likes})
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

SinglePost.propTypes = {
  post: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  owner: PropTypes.object,
  likes: PropTypes.string,
}

SinglePost.defaultProps = {
  post: {},
  image: "https://picsum.photos/400/400",
  name: "",
  text: "",
  owner: {},
  likes: "",
}
