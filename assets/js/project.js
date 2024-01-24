AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Tessa",
    cardImage: "https://www.accesspsych.com.au/wp-content/uploads/2022/06/Why-employers-should-use-an-EAP-to-look-after-their-employees-mental-health-1.jpg",
    description: "Winner Best Team 2023",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  },
  {
    title: "Tessa",
    cardImage: "https://www.accesspsych.com.au/wp-content/uploads/2022/06/Why-employers-should-use-an-EAP-to-look-after-their-employees-mental-health-1.jpg",
    description: "Winner Best Team 2022",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  },
  {
    title: "Tessa",
    cardImage: "https://www.accesspsych.com.au/wp-content/uploads/2022/06/Why-employers-should-use-an-EAP-to-look-after-their-employees-mental-health-1.jpg",
    description: "Winner Best Team 2020",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  },
  {
    title: "Tessa",
    cardImage: "https://www.accesspsych.com.au/wp-content/uploads/2022/06/Why-employers-should-use-an-EAP-to-look-after-their-employees-mental-health-1.jpg",
    description: "Winner Best Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  },
  {
    title: "Tessa",
    cardImage: "https://www.accesspsych.com.au/wp-content/uploads/2022/06/Why-employers-should-use-an-EAP-to-look-after-their-employees-mental-health-1.jpg",
    description: "Winner Best Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  },
  {
    title: "Tessa",
    cardImage: "https://www.accesspsych.com.au/wp-content/uploads/2022/06/Why-employers-should-use-an-EAP-to-look-after-their-employees-mental-health-1.jpg",
    description: "Winner Best Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  },
  {
    title: "Tessa",
    cardImage: "https://www.accesspsych.com.au/wp-content/uploads/2022/06/Why-employers-should-use-an-EAP-to-look-after-their-employees-mental-health-1.jpg",
    description: "Winner Best Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage,description }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
          
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
            ${description}
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
