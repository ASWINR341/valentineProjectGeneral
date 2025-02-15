import React from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  onReadMore: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, image, date, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-6">
        <p className="text-sm font-medium text-indigo-600">{date}</p>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-base text-gray-500">{excerpt}</p>
        <div className="mt-4">
          <button 
            onClick={onReadMore}
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
