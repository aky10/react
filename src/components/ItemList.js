import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item)); // see the write data architecture where the 1st step was to after what operation we need to use redux
    //so after clicking add 2nd step was dispatching the action to the reducer=>  dispatch(action) dispatch is a hook
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 mb-3 flex flex-col">
              <span className="font-semibold text-lg mb-1">
                {item.card.info.name}
              </span>
              <span>
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
              alt="Item Image"
            />
            <div className="absolute bottom-0 left-0 right-0 m-auto">
              <button
                className="p-1 bg-green-600 text-white rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
