import { CDN_URL } from "../../utils/constanst";

const RestrauntCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, lastMileTravelString } =
      resData?.data;
    return (
      <div className="card">
        <img
          src={CDN_URL+cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    )
  };

  export default RestrauntCard;