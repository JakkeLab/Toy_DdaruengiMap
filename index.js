import { getBikeNum } from "./component/bikeNum.js";

const bikeDataValue = document.getElementById("bikeData");
getBikeNum().then((res) => {
  bikeDataValue.innerHTML = res.stationInfo.row[0].STA_LOC;
  console.log(res);
});
