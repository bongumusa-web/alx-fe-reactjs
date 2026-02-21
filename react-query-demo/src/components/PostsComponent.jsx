import { useQuery } from "react-query";

function PostsComponent() {

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  };

  const { data, isLoading, error } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
      <h2>Posts</h2>

      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

    </div>
  );
}

export default PostsComponent;
