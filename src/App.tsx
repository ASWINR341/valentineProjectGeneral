import React, { useState } from 'react';
import { Book, PenLine, Menu, X, Github, Heart, Mail } from 'lucide-react';
import BlogPost from './components/BlogPost';
import AddPostModal from './components/AddPostModal';
import PostDetail from './components/PostDetail';
import coverImage from '../public/assests/2.jpg'
import firstTimeCrush from '../public/assests/3.jpg'
import mathaFirstDay from '../public/assests/4.jpg'
import friendCall from '../public/assests/5.jpg'
import alappuzha from '../public/assests/6.jpg'
import gym from '../public/assests/7.jpg'

// Define the Post type
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: "First time crush",
      content: "I still remember the first time I saw you. It was like the world paused for a second, just enough for my heart to skip a beat. I had never felt that way before—nervous, excited, and completely tongue-tied all at once. You had this effortless way of making everything around you seem lighter, like your presence was enough to brighten even the dullest of days. Your laughter was the kind that stayed with me, echoing in the quiet moments long after you had left. And your eyes—there was something about them, like they held a universe I wanted to get lost in.",
      excerpt: "I still remember the first time I saw you. It was like the world paused for a second, just enough for my heart to skip a beat. I had never felt that way before—nervous, excited, and completely tongue-tied all at once.",
      image: firstTimeCrush,
      date: ""
    },
    {
      id: '2',
      title: "First day matha",
      content: "The first time you walked into Matha, my shop, I felt an unexpected rush of excitement, a mix of surprise and nervousness I couldn't quite explain. Seeing you there, standing among the shelves of a place I had built with my own hands, made everything feel different—more significant. I tried to act normal, but my mind kept racing, wondering if you noticed the way my eyes kept finding you. That moment, simple yet unforgettable, turned my shop into more than just a place of business—it became a memory I’d always hold close.",
      excerpt: "The first time you walked into Matha, my shop, I felt an unexpected rush of excitement, a mix of surprise and nervousness I couldn't quite explain.",
      image: mathaFirstDay,
      date: ""
    },
    {
      id: '3',
      title: "Your friend called for having food",
      content: "The day you called me while you were out with your friend for food will always stay with me—not just because of the call itself, but because of what it meant. Meeting you had always been difficult, with family restrictions keeping us apart more often than not, but in that moment, it felt like you were trying, like you wanted me to be part of your world despite the distance. Hearing your voice, even if just for a little while, made everything else fade away, and for that brief moment, it felt like nothing could keep us apart.",
      excerpt: "The day you called me while you were out with your friend for food will always stay with me—not just because of the call itself, but because of what it meant.",
      image: friendCall,
      date: ""
    },
    {
      id: '4',
      title: "Exam at Alappuzha, alla eth kottayama but chumma ath erunno manasil",
      content: "The day of your exam in Alappuzha was unforgettable, not just because of the journey but because of the hilarious moment that followed. I left home at 10 AM, taking the bus, and while you were focused on your exam, I was battling a different kind of urgency—I desperately needed to pee. In my rush and confusion, I ended up walking straight into the girls' toilet, realizing my mistake only when I saw the startled expressions around me. You couldn’t stop laughing, but being the lifesaver you are, you still helped me by asking someone to guide me to the right one. That day, between the stress of the exam and my embarrassing adventure, we somehow ended up with a memory that still makes me smile.",
      excerpt: "The day of your exam in Alappuzha was unforgettable, not just because of the journey but because of the hilarious moment that followed.",
      image: alappuzha,
      date: ""
    },
    {
      id: '5',
      title: "New year pic",
      content: "The New Year’s pic at the gym was more than just a photo—it was a moment that captured the energy, determination, and fresh beginnings we promised ourselves. Surrounded by the sound of weights clanking and the rhythmic beats of workout music, we stood there, sweaty yet smiling, marking the start of another year filled with goals, challenges, and growth. It wasn’t just about fitness; it was about pushing forward, about the small victories that made us stronger—not just in the gym, but in life.",
      excerpt: "The New Year’s pic at the gym was more than just a photo—it was a moment that captured the energy, determination, and fresh beginnings we promised ourselves.",
      image: gym,
      date: ""
    }
  ]);

  const handleAddPost = (newPost: Omit<Post, 'id' | 'date'>) => {
    const post: Post = {
      ...newPost,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
    setPosts([post, ...posts]);
  };

  return (
<div className="min-h-screen bg-slate-50">
  {/* Navigation */}
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          {/* Wrap Heart icon inside an <a> tag */}
          <a href="https://pookieakshay.netlify.app/" className="flex items-center">
            <Heart className="h-8 w-8 text-indigo-600" />
          </a>
          <span className="ml-2 text-xl font-serif font-bold text-gray-900">John & Jane</span>
        </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-4">
              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                <PenLine className="h-4 w-4 mr-2" />
                Add Our Memories
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                New Post
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Welcome to</span>{' '}
                  <span className="block text-indigo-600 xl:inline">John & Jane: A Love Story</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Exploring the depths of love, connection, and togetherness through heartfelt reflections and cherished moments.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 h-full">
  <img
    className="w-full h-full object-cover"
    src={coverImage}
    alt="a"
  />
</div>

      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPost
              key={post.id}
              {...post}
              onReadMore={() => setSelectedPost(post)}
            />
          ))}
        </div>
      </div>

      {/* Add Post Modal */}
      <AddPostModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddPost}
      />

      {/* Post Detail Modal */}
      {selectedPost && (
        <PostDetail
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-white">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
    <div className="flex justify-center space-x-6 md:order-2">
      <a href="https://sandragiftcard.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
        <Mail className="h-6 w-6" />
      </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; To be Mine ❤ & All rights reserved. Today marks our 5th Valentnies day .
            </p>
          </div>
          {/* <div>
  To love is to suffer and there can be no love otherwise. <br /> 
  — Dostoyevsky
</div> */}

        </div>
      </footer>
    </div>
  );
}

export default App;