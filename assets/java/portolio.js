var newsrc = "purp.jpg";

function changeImage() {
  if ( newsrc == "mars.jpg" ) {
    document.images["pic"].src = "assets/images/other/purp.jpg";
    document.images["pic"].alt = "purple";
    newsrc  = "super.jpg";
  }
  else {
    document.images["pic"].src = "assets/images/other/super.jpg";
    document.images["pic"].alt = "super";
    newsrc  = "purp.jpg";
  }
}