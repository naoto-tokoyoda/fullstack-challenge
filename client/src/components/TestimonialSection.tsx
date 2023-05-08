// src/components/TestimonialSection.tsx
"use client"
import React from 'react';
const BASE_URL = 'http://localhost:1337';

interface TestimonialProps {
    quote: string;
    author: string;
    title: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    companyLogo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  }
  
  interface TestimonialSectionProps {
    data: TestimonialProps[];
  }

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ data }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {data.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center">
                  <img src={`${BASE_URL}${testimonial.image.data.attributes.url}`} alt={testimonial.author} className="w-20 h-20 rounded-full mr-4 object-cover border-4 border-white" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">{testimonial.author}</h4>
                    <p className="text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-lg italic mb-6">{testimonial.quote}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
