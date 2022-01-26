import axios from "axios";

async function requestImages(query) {
  const formattedQuery = query.split(" ").join("+");
  console.log(formattedQuery);
  const response = await axios.get(
    `https://customsearch.googleapis.com/customsearch/v1?c2coff=0&cr=false&cx=f4dd181c707797719&imgColorType=imgColorTypeUndefined&imgDominantColor=imgDominantColorUndefined&imgSize=HUGE&imgType=imgTypeUndefined&q=${formattedQuery}&safe=safeUndefined&searchType=image&siteSearchFilter=siteSearchFilterUndefined&prettyPrint=true&alt=json&%24.xgafv=1&key=${process.env.REACT_APP_IMAGES_API_KEY}`
  );
  // console.log(response.data.items[0].link);
  return response.data.items[0].link;
}

export default requestImages;
