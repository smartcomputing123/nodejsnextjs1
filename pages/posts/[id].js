import { useRouter } from 'next/router';

// Fetch post data from JSONPlaceholder API
const fetchPostData = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return await response.json();
};

// Generate static paths
export async function getStaticPaths() {
  // Fetch a list of posts to generate paths
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return { paths, fallback: false }; // Adjust fallback as needed
}

// Fetch specific post data based on dynamic route
export async function getStaticProps({ params }) {
  const postData = await fetchPostData(params.id); // Fetch data using the ID

  return {
    props: {
      postData,
    },
  };
}

// Component to display the post content
const Post = ({ postData }) => {
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
};

export default Post;
