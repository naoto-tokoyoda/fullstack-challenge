import { useQuery } from 'react-query';

const fetchSections = async () => {
  const res = await fetch('http://localhost:1337/api/page?select=Content&populate[Content][select]=*&populate[Content][populate]=*');
  const data = await res.json();
  
  return data;
};

export const useSections = () => {
  return useQuery('sections', fetchSections);
};
