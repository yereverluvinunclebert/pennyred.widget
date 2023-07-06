//===========================================================================
// Steampunk stamp widget
// Originally written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
// Vitality code, advice and patenceform Harry Whitfield
//
//===========================================================================var mainWindowwidthDefault = mainWindow.width;

//resizing variables
var mainWindowwidthDefault = mainWindow.width;
var mainWindowheightDefault = mainWindow.height;

var imagehoffsetDefault = image.hoffset;
var imagevoffsetDefault = image.voffset;
var imagewidthDefault = image.width;
var imageheightDefault = image.height;

var tingingSound = "Resources/ting.mp3";
var currStamp = "Resources/image1.png";
 var widgetName = "pennyred.widget";


var debugFlg = "";
//===========================================
// this function runs on startup
//===========================================
function startup() {
    debugFlg = preferences.debugflgPref.value;
    if (debugFlg === "1") {
        preferences.imageEditPref.hidden=false;
        preferences.imageCmdPref.hidden=false;
    } else {
        preferences.imageEditPref.hidden=true;		
        preferences.imageCmdPref.hidden=true;
    }		
    mainScreen();
    selectimage();
    buildVitality(currStamp);
    resize();
    setmenu();
    settooltip();
    // create the licence window
    createLicence(mainWindow);

}
//=====================
//End function
//=====================

//======================================================================================
// Function to select the image
//======================================================================================
function selectimage() {
    if ( preferences.imageSelector.value == "image1" ){ currStamp = "Resources/image1.png";}
    if ( preferences.imageSelector.value == "image2" ){ currStamp = "Resources/image2.png";}
    if ( preferences.imageSelector.value == "image3" ){ currStamp = "Resources/image3.png";}
    if ( preferences.imageSelector.value == "image4" ){ currStamp = "Resources/image4.png";}
    if ( preferences.imageSelector.value == "image5" ){ currStamp = "Resources/image5.png";}
    if ( preferences.imageSelector.value == "image6" ){ currStamp = "Resources/image6.png";}
    image.src = currStamp;
    image.visible = true;
}
//=====================
//End function
//=====================
