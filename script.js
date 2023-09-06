


// Assuming you have an input field with the id "planetInput" in your HTML
const inputField = document.getElementById("SaturnSubmit");

const saturnBillede = document.querySelector(".saturn") 


// Add an event listener to the input field to detect changes
inputField.addEventListener("input", function() {
  const inputValue = inputField.value.toLowerCase(); // Convert input value to lowercase for case-insensitive comparison

  if (inputValue === "saturn" || inputValue === "Saturn") {
    console.log("Input value is 'saturn'");
    inputField.style.backgroundColor="green";
    saturnBillede.style.opacity ="1";
    
    
} else if (inputValue === "") {
inputField.style.backgroundColor="aqua";
} else {
    console.log("Input value is not 'saturn'");
    
    inputField.style.backgroundColor="red";
    saturnBillede.style.opacity ="0";
    


  }
});
