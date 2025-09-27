
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Construction, Wrench } from 'lucide-react';

const Blog = () => {
  return (
    <PageLayout>
      <SEO 
        title="WRLDS - News (Under Construction)" 
        description="News section is currently under construction. Stay tuned for updates about smart textile technology from WRLDS Technologies."
        keywords={['smart textiles', 'textile technology', 'news', 'WRLDS']}
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News</h1>
            <p className="text-xl text-gray-300 mb-6">
              Coming soon...
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          {/* Simple doodle with construction icons */}
          <div className="relative mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Construction size={48} className="text-orange-500 animate-bounce" />
              <Wrench size={40} className="text-blue-500 animate-pulse" />
            </div>
            <div className="text-6xl text-gray-300">🚧</div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Under Construction</h2>
          <p className="text-lg text-gray-600 max-w-md">
            We're working hard to bring you the latest news and insights about smart textile technology. Check back soon!
          </p>
          
          {/* Simple decorative elements */}
          <div className="mt-8 flex space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
