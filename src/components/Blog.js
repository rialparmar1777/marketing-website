import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, ImageOff } from 'lucide-react';
import '../styles/Blog.css';

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Using reliable stock images instead of random Unsplash images
  const posts = [
    {
      id: 1,
      title: '10 Tips for Better Productivity',
      date: 'March 1, 2024',
      readTime: '5 min read', 
      category: 'Productivity',
      excerpt: 'Discover how to boost your productivity with these proven strategies and tools that successful professionals use daily.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    },
    {
      id: 2,
      title: 'The Future of AI in Business',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Technology',
      excerpt: 'Explore how artificial intelligence is revolutionizing business operations and what it means for the future of work.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      author: {
        name: 'Michael Chen',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    {
      id: 3,
      title: 'Building High-Performance Teams',
      date: 'February 25, 2024',
      readTime: '6 min read',
      category: 'Leadership',
      excerpt: 'Learn the key principles behind building and managing high-performing teams in today\'s dynamic workplace.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      author: {
        name: 'Emily Rodriguez',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
      }
    }
  ];

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgOUgxOSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMyAxNUgxOSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik01IDlIMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik01IDE1SDIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=';
    e.target.parentElement.classList.add('image-error');
  };

  return (
    <section className="blog-section" ref={ref}>
      <motion.div
        className="blog-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Latest Insights</h2>
        <p>Expert perspectives, industry trends, and actionable advice</p>
      </motion.div>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="blog-card-image">
              <span className="blog-category">{post.category}</span>
              <img 
                src={post.image} 
                alt={post.title}
                onError={handleImageError}
                loading="lazy"
              />
              <div className="image-error-overlay">
                <ImageOff size={48} />
                <span>Image unavailable</span>
              </div>
            </div>
            
            <div className="blog-card-content">
              <div className="blog-meta">
                <span className="blog-date">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="blog-read-time">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>

              <div className="blog-card-footer">
                <div className="blog-author">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <span>{post.author.name}</span>
                </div>
                
                <motion.button
                  className="read-more"
                  whileHover={{ gap: '0.75rem' }}
                >
                  Read More
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="blog-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button className="view-all-posts">
          View All Posts
          <ArrowRight size={20} />
        </button>
      </motion.div>
    </section>
  );
};

export default Blog;