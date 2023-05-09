"use client"
import { useSections } from '../hooks/useSections';
import HeroSection from '../../src/components/HeroSection';
import FeatureSection from '../../src/components/FeatureSection';
import TestimonialSection from '../../src/components/TestimonialSection';
import Navbar from '../components/Navbar';
import withAuth from '../hoc/withAuth';

const Content = () => {
  const { isLoading, error, data } = useSections();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  const heroData = data.data.attributes.Content.find((content: any) => content.__component === "hero-section.hero-section");
  const featureData = data.data.attributes.Content.filter((content: any) => content.__component === "feature-section.feature-section");
  const testimonialData = data.data.attributes.Content.filter((content: any) => content.__component === "testimonial-section.testimonial-section");
  console.log(heroData);
  

  return (
    <div className="min-h-screen bg-gray-100  flex flex-col justify-center ">
        <Navbar />
        <HeroSection data={heroData} />
        <FeatureSection data={featureData} />
        <TestimonialSection data={testimonialData} />
    </div>
  );
};
export default Content;