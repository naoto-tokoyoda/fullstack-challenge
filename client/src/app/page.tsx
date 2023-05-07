"use client"
import Image from 'next/image'
import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('http://localhost:1337/posts');
  console.log(res.json());
  
  // return res.json();
};

interface ImageFormats {
  thumbnail: {
    url: string;
  };
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
}

interface Image {
  alternativeText: string;
  formats: ImageFormats;
}

interface Post {
  _id: string;
  content: string;
  published_at: string;
  img: Image;
}
export default function Home() {
  const { isLoading, error, data } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;



  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <h1 className="text-2xl font-bold text-center">Welcome to the Home Page</h1>
      <p className="mt-4 text-center">This is a simple home component with an image and text using Tailwind CSS.</p>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        
            <ul>
              {/* {data.map((post: Post) => (
                <div className="relative px-4 py-4 mb-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <li key={post._id} className="mt-4">
                  <p>Published at: {new Date(post.published_at).toLocaleDateString()}</p>
                  <h3 className="text-lg font-semibold">{post.content}</h3>
                  <div className="mt-4 flex justify-center">
                    <img
                      src={`http://localhost:1337${post.img.formats.small.url}`}
                      alt={post.img.alternativeText || 'Post image'}
                      className="rounded-lg"
                    />
                  </div>
                </li>
                </div>
              ))} */}
            </ul>
      </div>
    </div>
  );
}
