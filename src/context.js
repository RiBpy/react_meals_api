import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [searchText, setSearchText] = useState("a");
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`${url}${searchText}`);
      const data = await res.json();
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((item) => {
          const {
            idMeal,
            strMeal,
            strMealThumb,
            strCategory,
            strArea,
            strTags,
            strInstructions,
          } = item;
          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
            type: strCategory,
            info: strArea,
            tag: strTags,
            instructions: strInstructions,
          };
        });
        setMeals(newMeals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },[searchText]);
  useEffect(() => {
    fetchData();
  }, [searchText, fetchData]);
  return (
    <AppContext.Provider value={{ loading, meals, searchText, setSearchText }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

