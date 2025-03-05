import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '10 Tips for Better Productivity',
      date: 'March 1, 2023',
      excerpt: 'Discover how to boost your productivity with these simple tips.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'The Future of Technology',
      date: 'February 25, 2023',
      excerpt: 'Explore the latest trends shaping the future of technology.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Why Collaboration Matters',
      date: 'February 20, 2023',
      excerpt: 'Learn why collaboration is key to success in the modern workplace.',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="blog">
      <h2>Latest News</h2>
      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p className="date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href="/">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;