AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Winners - January 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners Slides - January 2024",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "https://online.fliphtml5.com/xmvex/lnkz/index.html",
  },
  {
    title: "Winners - February 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners Slides - February 2024",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "https://online.fliphtml5.com/xmvex/euwn/index.html",
  },
  {
    title: "Winners - March 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners Slides - March 2024",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "https://online.fliphtml5.com/xmvex/nuys/index.html",
  },
  {
    title: "Winners - April 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners Slides - April 2024",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "https://online.fliphtml5.com/xmvex/rixw/index.html",
  },
  {
    title: "Winners - May 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners Slides - May 2024",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "https://online.fliphtml5.com/xmvex/pxih/index.html",
  },
  {
    title: "Winners -  June 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners - Team 2024",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "",
  },
  {
    title: "Winners - July 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners - Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "",
  },
  {
    title: "Winners -  August 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners - Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "",
  },
  {
    title: "Winners - September 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners - Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "",
  },
  {
    title: "Winners -  October 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners - Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "",
  },
  {
    title: "Winners -  November 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners - Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "",
  },
  {
    title: "Winners - December 2024",
    cardImage:"assets/images/project-page/rnr.png",
    description: "Winners - Team",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    href: "",
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, href }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
          
            <div class="header">
            </div>
            <div class="data">
              <div class="content" style="text-align: center">
              <div class="title-div">
                <h1 class="title" style="font-size:22px"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
            <a href=${href} class="external-link" target="_blank">${description}</a>
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
