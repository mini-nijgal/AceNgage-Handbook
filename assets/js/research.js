/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "AceNgage Employee Handbook",
    authors:"Our Employee Handbook is like the playbook of a winning team. It's the guide to our game, outlining the rules, strategies, and expectations that help us maintain a healthy workplace environment with an organized culture. It's not just a document; it's the foundation of our team's success.",
    citebox: "popup1",
    image:
      "https://connectresources.ae/wp-content/uploads/2020/10/maintain-an-employee-handbook.jpg",
    citation: {},
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox:
      "https://drive.google.com/drive/folders/1n23t2VeLa_fydM_NKJMQx0uJDvhKkMwN",
    href: "https://online.fliphtml5.com/dqvvm/rqgb/index.html",
  },
  {
    title: "AceNgage InfoServices BYOD Policy",
    authors:"Our Bring Your Own Device (BYOD) Policy is all about balancing flexibility and security. It's like allowing players to bring their lucky charms to the game while ensuring they don't compromise the team's overall performance. This policy is part of our corporate Information Security Program, ensuring that we play smart and safe.",

    citebox: "popup1",
    image:
      "https://cdn.elearningindustry.com/wp-content/uploads/2015/02/shutterstock_214293535.jpg",
    citation: {},
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox:
      "https://drive.google.com/drive/folders/1n23t2VeLa_fydM_NKJMQx0uJDvhKkMwN",
    href: "https://online.fliphtml5.com/dqvvm/lnio/index.html",
  },

  {
    title: "AceNgage Email Handling process ",
    authors:"To prevent any accidental slips like sending confidential information to the wrong recipient, we have a strict email handling process. It's like having a goalie to guard our net, ensuring that our communications stay within the team and don't end up in the opponent's hands.",
    citebox: "popup2",
    image:
      "https://jatheon.com/wp-content/uploads/2018/08/680-x-360-20-reasons-why-every-company-should-archive-email.png",
    citation: {},
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
    href: "https://online.fliphtml5.com/dqvvm/xslm/index.html",
  },

  {
    title: "AceNgage Remote Work Policy ",
    authors: "A remote work policy is an agreement that outlines expectations and guidelines for working outside the office. This includes who can work from home, what is expected of them, and how performance will be measured. A remote work policy should also define what tools and support are available to employees.",
    citebox: "popup3",
    image:"https://wowitinc.com/wp-content/uploads/2020/04/work-from-home-policy.png",
    citation: {},
    abstract: "Add content",
    absbox: "absPopup3",
    href: "https://online.fliphtml5.com/dqvvm/nsbg/index.html",
  },

  {
    title: "NDA",
    authors: "A non-disclosure agreement (NDA) is a legally binding contract that establishes a confidential relationship. The party or parties signing the agreement agree that sensitive information they may obtain will not be made available to others. An NDA may also be referred to as a confidentiality agreement.",
    citebox: "popup4",
    image:
      "https://assets-global.website-files.com/633c023b7f94fe5eb2e65d62/63b745b6857b45f63cf94843_624f77e8d76374256e9a8387_AdobeStock_225001591%2520Large.jpeg",
    citation: {},
    abstract: "Add content",
    absbox: "absPopup4",
    href: "https://online.fliphtml5.com/dqvvm/tvcu/index.html",
  },
  {
    title: "AceNgage InfoServices End Point Security Policy",
    authors: "The Endpoint Security policy must protect all potential threats that could interfere with the internal network. Therefore, the security policy must provide for constant updating, to always be aware of new threats.",
    citebox: "popup4",
    image:"https://www.swiftsystems.com/guides-tips/wp-content/uploads/2019/09/Endpoint-Security-696x464.jpg",
    citation: {},
    abstract: "Add content",
    absbox: "absPopup4",
    href: "https://online.fliphtml5.com/xmvex/mcia/index.html",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      href,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                    <a href="${href}" target="_blank" class="button button-accent button-small text-right button-abstract">
        LINK
    </a>
</div>
                
                
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
