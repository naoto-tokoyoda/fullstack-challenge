// src/components/HeroSection.tsx
"use client"
import React from 'react';

const BASE_URL = 'http://localhost:1337';
interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    buttonText: string;
    buttonURL: string;
  };
}


const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { title, subtitle, image, buttonText, buttonURL } = data;
  const backgroundImage = `${BASE_URL}${image.data.attributes.url}`;

  return (
    <section
      className="relative text-center py-16 bg-cover bg-center min-h-[50vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-lg text-white mb-4">{subtitle}</p>
        <a href={buttonURL} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
