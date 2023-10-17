export async function getBikeNum() {
  const keyFile = await fetch("../key/apiKey.json");
  const jsonData = await keyFile.json();
  const apiKey = jsonData.apiKey;
  return await fetch(
    `http://openapi.seoul.go.kr:8088/${apiKey}/json/tbCycleStationInfo/1/5`
  ).then((res) => res.json());
}
