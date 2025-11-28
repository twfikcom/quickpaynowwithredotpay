import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { BookOpen, X, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            أحدث المقالات والشروحات
          </h2>
          <p className="mt-4 text-gray-600">
            كل ما تحتاج معرفته عن استخدام RedotPay والدفع الإلكتروني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 ml-2" />
                    {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                  {post.summary}
                </p>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="mt-auto w-full flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition font-medium"
                >
                  <BookOpen className="w-4 h-4 ml-2" />
                  اقرأ المزيد
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onClick={() => setSelectedPost(null)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-2xl text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="relative h-64">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4" id="modal-title">
                  {selectedPost.title}
                </h3>
                <div className="prose prose-red max-w-none text-gray-600 whitespace-pre-line leading-relaxed">
                  {selectedPost.content}
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none sm:mr-3 sm:w-auto sm:text-sm"
                  onClick={() => setSelectedPost(null)}
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;