import { useEffect, useState } from "react";
import CardComponent from "../Card/CardComponent";
import "./Main.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { debounceFunction, fetchData } from "../../Action/action";
function MainBody() {
  const [recipe, setReceips] = useState(null);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.searchReducer);
  const { loading, error, data } = useSelector((state) => state.apiData);
  useEffect(() => {
    debounceFunction(search, dispatch);
  }, [search]);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error:{error}</p>;

  // const search = useSelector((state) => state.search);
  // useEffect(() => {
  //   if (search.length >= 3) {
  //     axios
  //       .get(
  //         `https://api.spoonacular.com/food/menuItems/search?query=${search}`,
  //         {
  //           headers: {
  //             "x-api-key": "e073b573e9a941589cc048c5bcaeabd0",
  //           },
  //         }
  //       )
  //       .then((res) => setReceips(res.data))
  //       .catch((err) => console.error(err));
  //   }
  // }, [search]);
  return (
    <main>
      <h2>Festive Finger Food!</h2>
      <div className="grid">
        {recipe &&
          recipe.menuItems.map((item) => {
            return <CardComponent item={item} />;
          })}
      </div>
    </main>
  );
}
export default MainBody;
