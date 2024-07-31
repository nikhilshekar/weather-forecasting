function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default function getImageURL(image) {
  const allWeatherIcons = importAll(
    require.context("../assets/icons", false, /\.(png)$/)
  );

  const iconsKeys = Object.keys(allWeatherIcons);

  const iconsValues = Object.values(allWeatherIcons);
  const iconIndex = iconsKeys.indexOf(image);

  return iconsValues[iconIndex];
}
