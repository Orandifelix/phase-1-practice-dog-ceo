console.log('%c HI', 'color: firebrick')




let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImages();
    fetchDogBreeds();
});


function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(function (response) {
      return response.json();
    }).then(function (imageResults) {
      return imageResults.message.forEach(image => RenderImages(image))
    });
}


function RenderImages(dogImages) {
    const dogContainer = document.getElementById("dog-image-container");
    const img = document.createElement("img");
    img.src = dogImages;
    dogContainer.appendChild(img);
};


function fetchDogBreeds () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(function (response) {
        return response.json();
    })
    .then(breedResults => {
        breeds = Object.keys(breedResults.message);
        RenderBreeds(breeds);
        addBreedSelectListener();
    });
}

function RenderBreeds (breeds) {
    let breedList = document.getElementById("dog-breeds");
    removeChildren(breedList);
    breeds.forEach(breed => addDogBreed(breed))
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}

function filterDogBreedsUsingLetter(startingLetter) {
    RenderBreeds(breeds.filter(breed => breed.startsWith(startingLetter)));
}

function addBreedSelectListener () {
    let dogBreedDropdown = document.getElementById("breed-dropdown");
    dogBreedDropdown.addEventListener("change", function (evemt) {
        filterDogBreedsUsingLetter(evemt.target.value);
    });
}

function addDogBreed (breed) {
    let breedList = document.getElementById("dog-breeds");
    let list =  document.createElement("li");
    list.innerText = breed;
    list.style.cursor = "pointer";
    breedList.appendChild(list);
    list.addEventListener("click", updateColor);
}

function updateColor (event) {
    event.target.style.color = "blue";
}










// ---------------------------------------------------------------------------------------------------




// function loadDogInformation() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//     const breedUrl = "https://dog.ceo/api/breeds/list/all";
//     const breedDropdown = document.querySelector("#breed-dropdown");
//     const breedList = document.querySelector("#dog-breeds");
  
//     fetch(imgUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         for (let i = 0; i < data.message.length; i++) {
//           const img = document.createElement("img");
//           img.src = data.message[i];
//           document.querySelector("#dog-image-container").appendChild(img);
//         }
//       });
  
//     fetch(breedUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         for (let i = 0; i > 4; i++) {
//             const options = querySelector('#breed-dropdown value')
//             options.innerText = data.message[i];
//             document.querySelector("#breed-dropdown").appendChild(options);}
  
//         breedDropdown.addEventListener("change", () => {
//           const selectedValue = breedDropdown.value;
//           const filteredBreeds = breeds.filter((breed) =>
//             breed.startsWith(selectedValue)
//           );
//           breedList.innerHTML = "";
//           filteredBreeds.forEach((breed) => {
//             const li = document.createElement("li");
//             li.innerText = breed;
//             breedList.appendChild(li);
//           });
//         });
  
//         breeds.forEach((breed) => {
//           const li = document.createElement("li");
//           li.innerText = breed;
//           breedList.appendChild(li);
//         });
//       });
//   }
  
//   document.addEventListener("DOMContentLoaded", loadDogInformation);





  

// -----------------------------------------------------------------------------------------------------




// const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// fetch(imgUrl)
//   .then(response => response.json())
//   .then(data => {
//     const imageContainer = document.querySelector("#image-container");
//     data.message.forEach(imageUrl => {
//       const imgElement = document.createElement("img");
//       imgElement.src = imageUrl;
//       imageContainer.appendChild(imgElement);
//     });
//   });

//   function loadDogBreeds(selectedLetter) {
//     const breedList = document.querySelector("#dog-breeds");
//     breedList.innerHTML = "";
  
//     fetch("https://dog.ceo/api/breeds/list/all")
//       .then((response) => response.json())
//       .then((data) => {
//         const breedsObject = data.message;
//         const breedsArray = Object.keys(breedsObject);
  
//         for (let i = 0; i < breedsArray.length; i++) {
//           const breedName = breedsArray[i];
//           if (breedName.startsWith(selectedLetter)) {
//             const newBreed = document.createElement("li");
//             newBreed.innerText = breedName;
//             breedList.appendChild(newBreed);
//           }
//         }
//       });
//   }
  


// document.addEventListener('DOMContentLoaded', loadDogInformation)
// ------------------------------------------------------------------------------------------------------







//   function loadDogInformation() {
//     Promise.all([dogName(), dogPicture()])
//     .then(([name, picture]) => {
//       let dogInfo = `${name} ${picture}`;
//       let breedDropdown = document.querySelector('#breed-dropdown');
//       breedDropdown.addEventListener("change", () => {
//         console.log(dogInfo);
//       });
//     });
//   }
//   function dogPicture() {
//     return fetch("https://dog.ceo/api/breeds/image/random/4")
//       .then((resp) => resp.json())
//       .then((data) => data.message[1]);
//   }
  
//   function dogName() {
//     return fetch("https://dog.ceo/api/breeds/list/all")
//       .then((resp) => resp.json())
//       .then((data) => Object.keys(data.message)[0]);
//   }


// function loadDogInformation() {
//     Promise.all([dogName(), dogPicture()])
//     .then(([name, picture]) => {
//       let dogInfo = `${name} ${picture}`;
//       let breedDropdown = document.querySelector('#breed-dropdown');
//       dogInfo.split(" ").forEach((info) => {
//         let option = document.createElement("option");
//         option.value = info;
//         breedDropdown.add(option);
//       });
//       breedDropdown.addEventListener("change", () => {
//         let selectedDog = breedDropdown.value;
//         fetch(`https://dog.ceo/api/breed/${selectedDog}/images/random`)
//           .then((resp) => resp.json())
//           .then((data) => {
//             let dogImage = document.querySelector('#dog-image');
//             dogImage.src = data.message;
//             dogImage.alt = `${selectedDog} image`;
//           });
//       });
//     });
//   }
  // document.addEventListener('DOMContentLoaded', loadDogInformation)
  
  


