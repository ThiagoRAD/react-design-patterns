import {useEffect, useState} from 'react';

export const useResource = (url, defaultValue = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    console.log('Loading data from ', url, '...');
    // Simulate fetching user data
    const fetchResource = () => {
      return {
        name: 'John Doe',
        age: 30,
        hairColor: 'brown',
        hobbies: ['reading', 'gaming', 'coding'],
      };
    };

    const loadedData = fetchResource();
    setData(loadedData);
    setIsLoading(false);
  }, [url]);

  return {data, isLoading};
};
