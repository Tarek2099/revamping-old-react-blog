import React from "react";
import { UseContext } from "../../Context/MyContext";

const LatestPosts = () => {
  const blogs = UseContext();
  // Get last 5 posts using slice;
  const latestPosts = blogs.slice(-5);
  return (
    <div className="category">
      <h2 className="categoryhead">Latest post</h2>
      <ul>
        {latestPosts.map((post) => (
          <li key={post.id}>
            <span>
              <a href={`/blog/${post.id}`}>{post.name}</a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPosts;
