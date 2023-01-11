console.log("Hello Back to School!");
let viz;
//1. Create a variable to store the vizContainer
//2. Create a variable to store the dashboard options
//3. Create a variable to store the URL - if it doesn't load we might need to specify height and width
//let viz changes viz from a constant in to a variable and allows the viz to exist outside of the function where it is defined so it can be
//referenced elsewhere

const containerDiv = document.getElementById("vizContainer");
//referencing our div ID from index, containerDIV is just the name of our constant (can be whatever)
const options = {
  device: "desktop",
  height: "900px",
  width: "1100px",
};
const url =
  "https://public.tableau.com/views/EmebddingExample/Embeddingexample?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
function initViz() {
  viz = new tableau.Viz(containerDiv, url, options);
}
//const = constant, after the equals, communcating with Javascript API

//currently init Viz is a constant
//adding event listener below javascript for webpage
document.addEventListener("DOMContentLoaded", initViz);
//DOM= document object model, list of contents, links back to html once all of viz is loaded, so viz only loaded once all the other coded loaded in the page useful for when you
//make buttons

const exportpdfbutton = document.getElementById("exportPDF");
//linked button in javascript
exportpdfbutton.addEventListener("click", exportPDFfunction);
function exportPDFfunction() {
  viz.showExportPDFDialog();
}
//referencing just the button before used document because was referencing the entire page
//click acknowledged as an event that can happen - add event listener
//lastly definied the function for the pdf button - communicating with java script API

const exportpptbutton = document.getElementById("exportPowerPoint");
exportpptbutton.addEventListener("click", exportPowerPointfunction);
function exportPowerPointfunction() {
  viz.showExportPowerPointDialog();
}
//first want to get the button so reference that
//then want to tell the button what the action will be (it will be clicked)
//what the button will do once clicked (what is the function) this is when we have to communicate and link back to
//then javascript API

function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  //inspect the sheets you need to filter
  console.log(sheets);
  //index of the sheets you want to filter
  const sheetToFilter = sheets[1];
  //do the actual filtering
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered"));
}
//take the value from that element
document
  .getElementById("FilterButton")
  .addEventListener("click", getRangeValues);
