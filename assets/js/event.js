$(document).ready(function () {
  AOS.init();
  const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
    // eslint-disable-next-line linebreak-style
    {
      title: "Talk on ABC",
      image: "https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.webp?s=2048x2048&w=is&k=20&c=baHCg849TJFcyLJ8noAmST59EPTQ217u1m_PQ99B6TY=",
    },
    {
      title: "Keynote on XYZ",
      image: "https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.webp?s=2048x2048&w=is&k=20&c=baHCg849TJFcyLJ8noAmST59EPTQ217u1m_PQ99B6TY=",
    },
    { title: "Group Picture", image: "https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.webp?s=2048x2048&w=is&k=20&c=baHCg849TJFcyLJ8noAmST59EPTQ217u1m_PQ99B6TY=" },
    {
      title: "Presentation",
      image: "https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.webp?s=2048x2048&w=is&k=20&c=9hnolLHaRciS6aJtEGTP1rdFjD2ccFt8PwtdH0E8IK4=",
    },
    {
      title: "Note on XYZ",
      image: "https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=612x612&w=is&k=20&c=HYwuJmIim5Fr9xlm0ebEQtA_VuXxPhUixcYPkmRf2SU=",
    },
    {
      title: "Keytopics",
      image: "https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=612x612&w=is&k=20&c=HYwuJmIim5Fr9xlm0ebEQtA_VuXxPhUixcYPkmRf2SU=",
    },
    {
      title: "The Gist",
      image: "https://media.istockphoto.com/id/1342270584/photo/confident-business-team-having-meeting.webp?s=2048x2048&w=is&k=20&c=cbnUHL96Ytj-iWrt5kjGegEh38SsXtiFh1P_NiTP2L4=",
    },
    {
      title: "Thank You",
      image: "https://media.istockphoto.com/id/1342270584/photo/confident-business-team-having-meeting.webp?s=2048x2048&w=is&k=20&c=cbnUHL96Ytj-iWrt5kjGegEh38SsXtiFh1P_NiTP2L4=",
    },
  ];
  // Filling the details from the object array event
  function fillData() {
    let output = "";
    for (let x = 0; x < event.length; x++) {
      output += `
    <div class="swiper-slide">
    <div class="img-container">
      <img src=${event[x].image} alt="" class="img-fluid" />
    </div>
    <div class="container arrow_contain">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="wrapper">
            <div class="content">
              <div class="title">
                <div class="text-wrapper">
                  <div class="text-inner">
                  ${event[x].title}
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div> 
          <!-- wraper freee -->
      </div>
    </div>
  </div>`;
    }
    eventswiper.innerHTML = output;
  }


  
  document.addEventListener("DOMContentLoaded", fillData());
  const parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      depth: 20,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    // parallax effect
    on: {
      init: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        const swiper = this;
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".image-slider .next-ctrl",
      prevEl: ".image-slider .prev-ctrl",
    },
  };
  // initializing swiper
  const slider = new Swiper(".image-slider", parallaxSliderOptions);
});


