import Image from "next/image";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const cardStyle = {
  whiteSpace: "nowrap", 
  width: "200px", 
  overflow: "hidden",
  textOverflow: "ellipsis", 
}

export default function RecommendedPosts() {
  const { recommendedPosts } = useSelector(state => state.posts);

  return (
    <div className="d-flex flex-column border p-4">
      <div>
        <p className="h3 text-center">Related Posts</p>
      </div>
      {
        recommendedPosts && recommendedPosts.map((post) => (
          <Card key={post.id} className="d-flex flex-row my-3">
            <Image 
              src={post.image} 
              objectFit="cover"
              width={200}
              height={100}
              alt={post.text}
            />
            <Card.Body>
              <Card.Title style={cardStyle} as={Link} href={`/${post.id}`} className="text-break overflow-hidden">
                {post.text}
              </Card.Title>
              <Card.Text>
                {post.text}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}