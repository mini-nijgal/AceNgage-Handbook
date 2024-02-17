/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Full-Time",
        designation1 : "Data Analytics Developer - Power BI Specialist",
        image1 : "https://avatars.githubusercontent.com/u/46641503?v=4",
        message1 : "What We Look For Passion: We look for individuals who are passionate about their work and are committed to excellence Team Player: We value teamwork and collaboration. We're looking for team players who can work effectively with others.  Innovative Thinkers: We're looking for individuals who can think outside the box and come up with creative solutions to challenges. Continuous Learners: We value continuous learning and development. We're looking for individuals who are eager to learn and grow. Click on the ",
        href1: "https://online.fliphtml5.com/xmvex/zihn/index.html",
        

        sl2:2,
        name2 : "Full-Time",
        designation2 : "Engagement Specialists Exit Process", 
        image2: "https://avatars.githubusercontent.com/u/46641503?v=4",
        message2 : "What We Look For Passion: We look for individuals who are passionate about their work and are committed to excellence Team Player: We value teamwork and collaboration. We're looking for team players who can work effectively with others.  Innovative Thinkers: We're looking for individuals who can think outside the box and come up with creative solutions to challenges. Continuous Learners: We value continuous learning and development. We're looking for individuals who are eager to learn and grow. Click on the ",
        href2: "https://online.fliphtml5.com/xmvex/dmhb/index.html",
        
    },

    {
        sl1:3,
        name1 : "Full time",
        designation1 : "Technical Analyst",
        image1 : "https://avatars.githubusercontent.com/u/46641503?v=4",
        message1 : " and I have worked on several projects. Apart from techni he also has good soft skills. He has good experience with debugging and has excellent leadership qualities.",
        href3: "",

        sl2:4,
        name2 : "Part - Time",
        designation2 : "Data Scientist",
        image2 : "https://avatars.githubusercontent.com/u/46641503?v=4",
        message2 : "deets",
        href4: "",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      href1,
      href2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}
                        <a href="${href1}" target="_blank" > LINK </a>
                    </div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                                <a href="${href2}" target="_blank" > LINK </a>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
