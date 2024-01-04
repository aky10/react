import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import FoodItems from "./RestaurantCategory";
import { MENU_IMAGE_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams(); //destructure on fly as params returns object

  const resInfo = useRestaurantMenu(resId); //custom Hook since RestaurantMenu componenet was only for printing the data not fetching so fetching is done on useRestaurantMenu file

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // const categories2 =
  //   resInfo?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
  //     (c) =>
  //       c?.card?.card?.["@type"] !=
  //       "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
  //   );
  // console.log(categories2);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold txt-lg">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      {/* category accoidance */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItem={showIndex === index}
          setShowIndex={() =>
            //if index is same as prev one collapse that accordian else show it
            index === showIndex ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
