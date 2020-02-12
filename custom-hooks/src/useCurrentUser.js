import { useEffect, useState } from 'react'

export const useCurrentUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = () => {
      return {
        name: "John Doe",
        age: 30,
        hairColor: "brown",
        hobbies: ["reading", "gaming", "coding"]
      }
    }

    const userData = fetchUser();
    setUser(userData);
    setIsLoading(false);
  }, []);

  return {user, isLoading}
}
