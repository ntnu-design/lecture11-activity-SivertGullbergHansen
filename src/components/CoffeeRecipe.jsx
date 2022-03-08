import "./CoffeeRecipe.css";

function getrating(rating) {
  if (rating[0] === -1) return;
  let ratingstring = "";
  for (let index = 0; index < rating[0]; index++) {
    ratingstring += "☕";
  }
  switch (rating) {
    case 1:
      ratingstring += " Poor";
      break;
    case 2:
      ratingstring += " Decent";
      break;
    case 3:
      ratingstring += " Good";
      break;
    case 4:
      ratingstring += " Very Good";
      break;
    case 5:
      ratingstring += " Excellent";
      break;
    default:
      break;
  }
  return ratingstring + " (votes: " + rating[1] + ")";
}
function getGrinding(grind) {
  let string = "";
  switch (grind) {
    case 1:
      string += " Extra Coarse";
      break;
    case 2:
      string += " Coarse";
      break;
    case 3:
      string += " Medium-coarse";
      break;
    case 4:
      string += " Medium";
      break;
    case 5:
      string += " Medium-fine";
      break;
    case 6:
      string += " Fine";
      break;
    case 7:
      string += " Extra Fine";
      break;
    default:
      break;
  }
  return string;
}

const CoffeeInfo = (props) => {
  const {
    grindingsettings = 1,
    litresWater = 1,
    typeOfCoffee = "Unknown",
    rating = [-1, 0],
  } = { ...props };

  return (
    <div className="CoffeeRecipe">
      <ul>
        <li>
          <span>Grinding Settings </span>
          {getGrinding(grindingsettings)}
        </li>
        <li>
          <span>Litres of Water needed </span>
          {litresWater}L
        </li>
        <li>
          <span>Brand </span>
          {typeOfCoffee}
        </li>
        <li>
          <span>{rating[0] > 0 ? "Rating " : ""}</span>
          {getrating(rating)}
        </li>
      </ul>
    </div>
  );
};

export default CoffeeInfo;
