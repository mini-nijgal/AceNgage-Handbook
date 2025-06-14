AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "AceNgage ISMS Information Classification Policy",
    cardImage: "assets/images/education-page/info1.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/cyuw/",
  },
  {
    title: "AceNgage ISMS Access Control Policy",
    cardImage: "assets/images/education-page/info2.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/elog/",
  },
  {
    title: "AceNgage ISMS Password Policy",
    cardImage: "assets/images/education-page/info3.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/gwom/",
  },
  {
    title: "AceNgage ISMS Cloud Services InfoSec Policy-ISP-29",
    cardImage: "assets/images/education-page/info4.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/lmqo/",
  },
  {
    title: "AceNgage ISMS Secure Coding Policy-ISP-23",
    cardImage: "assets/images/education-page/info5.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/idhp/",
  },
  {
    title: "AceNgage ISMS Laptop Policy-ISP-25",
    cardImage: "assets/images/education-page/info6.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/wsoj/",
  },
  {
    title: "AceNgage ISMS Log Monitoring Policy-ISP-27",
    cardImage: "assets/images/education-page/info7.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/lgcl/",
  },
  {
    title: "AceNgage ISMS Audit Vulnerability Scanning Policy-ISP-26",
    cardImage: "assets/images/education-page/info8.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/ared/",
  },
  {
    title: "AceNgage ISMS Threat Intelligencel Policy-ISP-28",
    cardImage: "assets/images/education-page/info9.png",
    moocLink: "https://online.fliphtml5.com/tiwlx/wwts/",
  },
];



let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink,description }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">                  
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/


const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
