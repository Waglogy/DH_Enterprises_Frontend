const placehold = document.getElementById("keyword");

const anime = () => {
  var arr = ["Geo Tech, Projects", "Slope, Terrain", "Geophysical Investigations", "Project Managment and Consultation Service", "Topographical Surveys", "Landside Restorsation, Slope Stabilisation"];
  i = 0;
  const changeplaceholder = () => {
    placehold.placeholder = arr[i];
    i = (i + 1) % arr.length;

    setTimeout(changeplaceholder, 2900);
  };
  changeplaceholder();
};
setTimeout(anime, 2000);
