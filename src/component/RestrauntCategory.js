import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const RestrauntCategory = ({data, showItems, setShowIndex}) => {

  console.log('render +', data);

  const {title} = data;

  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

   return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <div>{title} ({data?.itemCards?.length})</div>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
    );
  };

  export default RestrauntCategory;