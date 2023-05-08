// src/components/FeatureSection.tsx
"use client"
import React from 'react';
const BASE_URL = 'http://localhost:1337';

interface FeatureData {
  title: string;
  description: string;
  icon: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string;
          };
        };
      };
    };
  };
}

interface FeatureSectionProps {
  data: FeatureData[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ data }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={`${BASE_URL}${feature.icon.data.attributes.url}`}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-center">{feature.description}</p>
              <img
                src={`${BASE_URL}${feature.image.data.attributes.formats.medium.url}`}
                alt={feature.title}
                className="w-full h-auto mt-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
