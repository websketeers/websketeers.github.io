window.onload = function() {
  adjustNavbar();
};
window.onresize = function(event) {
  adjustNavbar();
};
function adjustNavbar() {
var navbarChild = document.getElementsByTagName("nav")[0];
var backgroundImage = document.getElementsByClassName("bg-image")[0];
if ((window.innerWidth < 575) && (backgroundImage.contains(navbarChild)))
    {
        backgroundImage.removeChild(navbarChild);
        document.body.insertBefore(navbarChild,backgroundImage);
    }
else if ((window.innerWidth >= 575) && (!backgroundImage.contains(navbarChild)))
{
   
    document.body.removeChild(navbarChild);
    backgroundImage.insertBefore(navbarChild,backgroundImage.children[0]);
        }
}
    




