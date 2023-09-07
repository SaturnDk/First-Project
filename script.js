


// Assuming you have an input field with the id "planetInput" in your HTML
const inputFieldSaturn = document.getElementById("SaturnSubmit");

const saturnBillede = document.querySelector(".saturn") 

let elementsWithClass = document.querySelectorAll (".is-guessed")

let count = 0

function updateCounter(inputField) {
  inputField.classList.add("is-guessed");

  elementsWithClass = document.querySelectorAll (".is-guessed");
  count = elementsWithClass.length;
  console.log(count);
  if (count === 8) {
    setTimeout(() => {
      if (window.confirm('Tillykke, du er med i konkurrencen om at vinde et årskort til Planetariet, tryk OK for at fortsætte')) 
{ window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
};
    }, 1000);
  } 
}


// Add an event listener to the input field to detect changes
inputFieldSaturn.addEventListener("input", function() {
  const inputValueSaturn = inputFieldSaturn.value; // Convert input value to lowercase for case-insensitive comparison

  if (inputValueSaturn === "saturn" || inputValueSaturn === "Saturn") {
    console.log("Input value is 'saturn'");
    inputFieldSaturn.style.backgroundColor="rgb(120, 200, 40)";
    saturnBillede.style.opacity ="1";
    updateCounter(inputFieldSaturn);
    
  } else if (inputValueSaturn === "") {
    inputFieldSaturn.style.backgroundColor="black";
  } else {
    console.log("Input value is not 'saturn'");
    
    inputFieldSaturn.style.backgroundColor="red";
    saturnBillede.style.opacity ="0";
    
  }
});


// Jupiter
const inputFieldJupiter = document.getElementById("JupiterSubmit");
const jupiterBillede = document.querySelector(".jupiter")

inputFieldJupiter.addEventListener("input", function() {
  const inputValueJupiter = inputFieldJupiter.value;
  
  if (inputValueJupiter === "jupiter" || inputValueJupiter === "Jupiter")
  {console.log("input value is 'jupiter");
  inputFieldJupiter.style.backgroundColor="rgb(120,200,40)";
  jupiterBillede.style.opacity ="1";
  updateCounter(inputFieldJupiter);


  } else if (inputValueJupiter === "") {
    inputFieldJupiter.style.backgroundColor="black";
  } else{
    console.log("input value is not 'jupiter")

    inputFieldJupiter.style.backgroundColor="red";
    jupiterBillede.style.opacity="0";
  }
  });

  // Mercury

  const inputFieldMercury = document.getElementById("MercurySubmit")
  const mercuryBillede = document.querySelector(".mercury")

  inputFieldMercury.addEventListener("input", function() {
    const inputValueMercury = inputFieldMercury.value;

    if (inputValueMercury === "mercury" || inputValueMercury === "Mercury")
    {console.log("input value is 'mercury'");
    inputFieldMercury.style.backgroundColor="rgb(120,200,40)";
    mercuryBillede.style.opacity="1";
    updateCounter(inputFieldMercury);


  } else if (inputValueMercury === "") {
    inputFieldMercury.style.backgroundColor="black";
  }  else {
    console.log("input value is not 'mercury")

    inputFieldMercury.style.backgroundColor="red";
    mercuryBillede.style.opacity="0";
  }
  });


// venus

const inputFieldVenus = document.getElementById("VenusSubmit")
const venusBillede = document.querySelector(".venus")

inputFieldVenus.addEventListener("input", function() {
  const inputValueVenus = inputFieldVenus.value;

if (inputValueVenus === "venus" || inputValueVenus === "Venus")
{console.log("input value is 'venus'");
inputFieldVenus.style.backgroundColor="rgb(120,200,40)";
venusBillede.style.opacity="1";
updateCounter(inputFieldVenus);

}else if (inputValueVenus === "") {
  inputFieldVenus.style.backgroundColor="black";
  venusBillede.style.opacity="0";
}else {
  console.log("input value is not 'venus'");

  inputFieldVenus.style.backgroundColor="red";
  venusBillede.style.opacity="0";
}


});


// Earth
const inputFieldEarth = document.getElementById("EarthSubmit")
const earthBillede = document.querySelector(".earth")

inputFieldEarth.addEventListener("input", function() {
  const inputValueEarth = inputFieldEarth.value;

  if (inputValueEarth === "earth" || inputValueEarth === "Earth")
  {console.log("input value is 'earth"); 
  inputFieldEarth.style.backgroundColor="rgb(120,200,40)";
  earthBillede.style.opacity="1";
  updateCounter(inputFieldEarth);
  

}else if (inputValueEarth === "") {
  inputFieldEarth.style.backgroundColor="black";
  earthBillede.style.opacity="0";
}else {
  console.log("input value is not 'earth'");

  inputFieldEarth.style.backgroundColor="red";
  earthBillede.style.opacity="0";

}
}); 

// // Mars
const inputFieldMars = document.getElementById("MarsSubmit")
const marsBillede = document.querySelector(".mars")

inputFieldMars.addEventListener("input", function() {
  const inputValueMars = inputFieldMars.value;

  if (inputValueMars === "mars" || inputValueMars === "Mars")
  {console.log("input value is 'mars"); 
  inputFieldMars.style.backgroundColor="rgb(120,200,40)";
  marsBillede.style.opacity="1";
  updateCounter(inputFieldMars);
  

}else if (inputValueMars === "") {
  inputFieldMars.style.backgroundColor="black";
  marsBillede.style.opacity="0";
}else {
  console.log("input value is not 'mars'");

  inputFieldMars.style.backgroundColor="red";
  marsBillede.style.opacity="0";

}
}); 

//Neptune

const inputFieldNeptune = document.getElementById("NeptuneSubmit")
const neptuneBillede = document.querySelector(".neptune")

inputFieldNeptune.addEventListener("input", function() {
  const inputValueNeptune = inputFieldNeptune.value;

  if (inputValueNeptune === "neptune" || inputValueNeptune === "Neptune")
  {console.log("input value is 'neptune"); 
  inputFieldNeptune.style.backgroundColor="rgb(120,200,40)";
  neptuneBillede.style.opacity="1";
  updateCounter(inputFieldNeptune);

}else if (inputValueNeptune === "") {
  inputFieldNeptune.style.backgroundColor="black";
  neptuneBillede.style.opacity="0";
}else {
  console.log("input value is not 'neptune'");

  inputFieldNeptune.style.backgroundColor="red";
  neptuneBillede.style.opacity="0";

}
}); 


//Uranus

const inputFieldUranus = document.getElementById("UranusSubmit")
const uranusBillede = document.querySelector(".uranus")

inputFieldUranus.addEventListener("input", function() {
  const inputValueUranus = inputFieldUranus.value;

  if (inputValueUranus === "uranus" || inputValueUranus === "Uranus")
  {console.log("input value is 'uranus"); 
  inputFieldUranus.style.backgroundColor="rgb(120,200,40)";
  uranusBillede.style.opacity="1";
  updateCounter(inputFieldUranus);

}else if (inputValueUranus === "") {
  inputFieldUranus.style.backgroundColor="black";
  uranusBillede.style.opacity="0";
}else {
  console.log("input value is not 'uranus'");

  inputFieldUranus.style.backgroundColor="red";
  uranusBillede.style.opacity="0";

}
}); 

