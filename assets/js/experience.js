AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Krish Hanumanthu",
    cardImage: "assets/images/experience-page/krish.jpeg",
    // place: "Flipkart",
    time: "Reach Krish at krish@acengage.com",
    desp: "As the Co-Founder of AceNgage, Krish wears many hats. From revolutionizing People Operations to mastering Human Resource Consulting, he's the go-to guy for all things HR. With a decade-long journey at AceNgage, Krish is not just a consultant; he's a problem-solver, a visionary, and a marathon runner (literally!). ",
  },
  {
    title: "Ashana K",
    cardImage: "assets/images/experience-page/ashana.png",
    // place: "IIT, Bombay",
    time: "Reach Ashana at ashana@acengage.com",
    desp: "With over 16 years of experience in Telecom, Outsourcing, and HR, Ashana is the powerhouse behind AceNgage's success. Her passion for teaching reflects in her role as a Guest Faculty for MBA students. Ashana's dream is to make AceNgage the top player in Employee Engagement. When she's not coaching managers or managing accounts, she's trekking, traveling, and reading.",
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
    description:"<ul> <li> Sincerity</li><li>Enthusiasm</li><li>Innovation</li> </ul>",
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
    title: "Ditti",
    subtitle: "Senior Engagement Specialist",
    image: "assets/images/experience-page/ditti.png",
    desp:"My experience as a Senior Engagement Specialist at AceNgage has been truly remarkable. From the moment I joined, I've been entrusted with meaningful opportunities that have accelerated my growth both personally and professionally. The company's mission to revolutionize HR practices and create better workplaces has deeply resonated with me, fueling my passion for impactful work. Despite the challenges of remote collaboration, the sense of unity and innovation within our teams and with our leaders has been palpable",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "Mayank M",
    subtitle: "HR Counselor",
    image: "assets/images/experience-page/mayank.jpg",
    desp: "I feel incredibly fortunate to be part of the Acengage family. Working here has been an amazing journey filled with growth, collaboration, and a sense of belonging. The company's commitment to innovation and employee well-being creates an empowering environment that encourages creativity and excellence.Acengage isn't just a job for me; it's a community where I thrive and contribute to something meaningful every day. Grateful to be a part of this amazing team!",
    href: "https://ulhacks.com/",
  },
  {
    title: "Siddi",
    subtitle: "Exit SME",
    image: "assets/images/experience-page/siddi.jpg",
    desp: "I have been associated with AceNgage for close to three years and it has been an incredibly rewarding experience. During my time here, I have had the opportunity to learn and grow both personally and professionally. I have been fortunate to work alongside great managers who have provided me with guidance and support, and I have also had the pleasure of making lasting friendships with my colleagues. ",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Kajal",
    subtitle: "Client Relationship Manager",
    image: "assets/images/experience-page/kajal.png",
    desp: "I’m Kajal Khanna, joined AceNgage as an HR Counsellor in July 2022 and currently serving the role of a Client Relationship Manager. The journey with Acengage has been upwards and onwards. While I look back, I have immense gratitude for my co-founders who always have been appreciative of my hard work and recognized the same professionally. ",
    href: "https://elevatetech.codes/",
  },
  {
    title: "Feba A",
    subtitle: "CE SME ",
    image: "assets/images/experience-page/feba.png",
    desp: "AceNgage has been a stepping stone in my career. I have learnt and grown so much here, since I joined. I will always be grateful for all the opportunities I have been given and for the trust that the leaders have shown toward me!",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: " Nikhila Kalapurackal George",
    subtitle: "Lead – HR Operations",
    image: "assets/images/experience-page/nikhillla.png",
    desp:"Working with AceNgage has been a wonderful experience. I was given a lot of challenging new opportunities which helped me on the technical front as well as it enhanced me to demonstrate my strong commitment and contribution.The thing I love in AceNgage is I always get to see a sense of company loyalty in most members of the team. Every employee is always given a chance to share his/her problems which helps to establish a healthy relationship. ",
    href: "https://hackasolution.devpost.com/",
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
