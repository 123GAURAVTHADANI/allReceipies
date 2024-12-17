import { useEffect, useState } from "react";
import CardComponent from "../Card/CardComponent";
import "./Main.css";
import axios from "axios";
function MainBody() {
  const [recipe, setReceips] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/food/menuItems/search?query=pasta", {
        headers: {
          "x-api-key": "e073b573e9a941589cc048c5bcaeabd0",
        },
      })
      .then((res) => setReceips(res.data))
      .catch((err) => console.error(err));
  }, []);
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
