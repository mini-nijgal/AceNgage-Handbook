AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Krish Hanumanthu",
    cardImage: "assets/images/experience-page/krish.jpeg",
    // place: "Flipkart",
    time: "Reach Krish at krish@acengage.com",
    desp: "As the CoFounder of AceNgage (an award winning HR organisation working with companies to improve employee engagement and retention) Krish covers a wide arc of People Operations and Human Resource and Process Consulting apart from being the key sales and marketing role that he accomplishes at AceNgage. As a company with a decade long vintage, Krish spearheads client relationships as well. Clients look to him and the team at AceNgage for guidance and help on some of their most vexing ‘people problems’ that face them. He has been advising clients on a variety of subjects ranging from recruitment, vendor management, induction quality, training effectiveness and has helped evolve creative processes to strengthen these areas. His days at hospitality taught him that ‘Customer is King’ and it continues to be a philosophy at AceNgage. He enjoys playing Squash, reading comics and blogging. Counts running the full marathon among his major achievements.  ",
  },
  {
    title: "Ashana K",
    cardImage: "assets/images/experience-page/ashana.png",
    // place: "IIT, Bombay",
    time: "Reach Ashana at ashana@acengage.com",
    desp: "Ashana is a Post Graduate in Management with over 16 years experience in the Telecom industry, Outsourcing and HR. She has handled all facets of Delivery including Recruitment, Training, Quality, Client Relationship and Account Management.Teaching has always been her passion and she conducts regular sessions as a Guest Faculty for MBA/PGDBM students. She is now involved in Coaching managers to improve their People Management Skills.Her dream is to make AceNgage the Numero Uno among companies specializing in Employee Engagement.She enjoys trekking, travelling and reading.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
            </p>
            
              ${desp}
              <p style="color:#3386ce;" >${time}</p>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Mission",
    cardImage: "assets/images/experience-page/acemission.png",
    description:
      "To be the best HR Intelligence partner by providing better feedback across various stages of the employee lifecyclet",
  },
  {
    title: "Vision",
    cardImage: "assets/images/experience-page/Vision.png",
    description:
      "To make our clients more competitive by becomingthe leading provider ofsuperios HR (people) Intelligence.",
  },
  {
    title: "Value",
    cardImage: "assets/images/experience-page/Values.png",
    description:"<li> Sincerity</li><li>Enthusiasm</li><li>Innovation</li>",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p>${description}</p></div>
         
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Tessa",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "Nikhila",
    subtitle: "HR",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "Mahendra",
    subtitle: "MIS Lead",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Sultana",
    subtitle: "NC lead",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "Sonal",
    subtitle: "HR ",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Amjad",
    subtitle: "IT services",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "XYZ",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div> 
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
