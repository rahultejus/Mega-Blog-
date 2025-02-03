import { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts();
        if (response && response.documents) {
          setPosts(response.documents);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8">
        <Container>
          <p className="text-center">Loading posts...</p>
        </Container>
      </div>
    );
  }
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        {posts.length === 0 ? (
          <div className="text-center">
            <p>No posts available. Create your first post!</p>
          </div>
        ) : (
          <div className="flex flex-wrap -mx-2">
            {posts.map((post) => (
              <div
                key={post.$id}
                className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export { AllPosts };
