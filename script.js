function load() {
	document.getElementById("WTTextArea").innerHTML = WTInfo[0]; 
	document.getElementById("mapTextArea").innerHTML = mapInfoTexts[0]; 
	document.getElementById("WTCap").innerHTML = WTCaption[0]; 
	document.getElementById("WMTextArea").innerHTML = WMInfo[0]; 
	document.getElementById("WMCap").innerHTML = WMCaption[0]; 
	document.getElementById("HFTextArea").innerHTML = HFInfo[0]; 
	document.getElementById("HFCap").innerHTML = HFCaption[0]; 
	document.getElementById("NPTextArea").innerHTML = NPInfo[0];
	document.getElementById("NPCap").innerHTML = NPCaption[0]; 
}
function swapWTInfo() {
	swapText(WTHeaderTexts, ++ currWT, "WTHeader");
	swapText(WTInfo, currWT, "WTTextArea");
	swapText(WTCaption, currWT, "WTCap"); 
	swapImg(WTImg, currWT, "water_treatment_img");
}
function swapWMInfo() {
	swapText(WTHeaderTexts, ++ currWM, "WMHeader");
	swapText(WMInfo, currWM, "WMTextArea");
	swapText(WMCaption, currWM, "WMCap"); 
	swapImg(WMImg, currWM, "waste_management_img");
}
function swapHFInfo() {
	swapText(WTHeaderTexts, ++ currHF, "HFHeader");
	swapText(HFInfo, currHF, "HFTextArea");
	swapText(HFCaption, currHF, "HFCap"); 
	swapImg(HFImg, currHF, "housing_farming_img");
}
function swapNPInfo() {
	swapText(WTHeaderTexts, ++ currNP, "NPHeader");
	swapText(NPInfo, currNP, "NPTextArea");
	swapText(NPCaption, currNP, "NPCap"); 
	swapImg(NPImg, currNP, "nature_preserve_img");
}
function swapMapInfo() {
	swapText(mapInfoTexts, ++ currMapInfo, "mapTextArea"); 
	document.getElementById("mapTextArea").style.color = mapInfoColors[currMapInfo % mapInfoTexts.length]; 
	swapImg(backgroundMapImageURLs, currMapInfo, "map"); 
}
function swapImg(arr, i, id) {
	document.getElementById(id).style.backgroundImage = "url(" + arr[i % arr.length] + ")"; 
}
function swapText(arr, i, id) {
	document.getElementById(id).innerHTML = arr[i % arr.length]; 
}
