import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

// Fetch function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

// Data fetching component
function Posts() {
  const { data, isLoading, error, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;

  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>Posts</h2>

      {/* Refetch button */}
      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {data.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Demo</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
