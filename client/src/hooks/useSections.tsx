import { useQuery } from 'react-query';
import { getJwt } from '../helpers/getJwt';

const fetchSections = async () => {
  const jwt = getJwt();
  const res = await fetch('http://localhost:1337/api/page?select=Content&populate[Content][select]=*&populate[Content][populate]=*', {
    headers: {
      'Authorization': `Bearer ${jwt}`,
    },
  });
  const data = await res.json();

  return data;
};

export const useSections = () => {
  return useQuery('sections', fetchSections);
};
