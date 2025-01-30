import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import BlogPostSection from './components/BlogPostSection';
import FeaturedPostsSection from './components/FeaturedPostsSection';
import TrendingPostsSection from './components/TrendingPostsSection';
import CategoriesSection from './components/CategoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import RecentCommentsSection from './components/RecentCommentsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <Navigation />
      <BlogPostSection />
      <FeaturedPostsSection />
      <TrendingPostsSection />
      <CategoriesSection />
      <TestimonialsSection />
      <RecentCommentsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
