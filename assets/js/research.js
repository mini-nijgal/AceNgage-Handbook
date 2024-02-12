/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "AceNgage Employee Handbook",
    authors:
      "In order to build a healthy environment in the workplace with an organized culture, every employer needs to build and maintain an employee handbook with clear norms and processes written in it. Writing a handbook might not as easy as it sounds, but it is fundamental for every company to have it.",
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
    title: "AceNgage InfoServices BYOD Policy ISP-01",
    authors:
      "The BYOD and Acceptable Use Policy are part of the corporate Information Security Program. Information security policies are the principles that direct managerial decision-making and facilitate secure business operations.",

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
    authors:
      "As a mitigation step to ensure we don’t send emails (containing confidential information) to the wrong recipient, the below process should be followed on an immediate basis by all acengage.com email id users.There is two parts to this process: 1. Users using ZOHO webmail 2. Users using Microsoft Outlook",
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
    authors: "add content",
    citebox: "popup3",
    image:
      "https://amtrustfinancial.com/getattachment/ANA-Blog/Blog/Small-Business/March-2020/Coronavirus-Best-Practices-Work-From-Home-Policy/ANA_AmTrust_Remote_Worker_Best_Practices_Social_736X385-min.jpg",
    citation: {},
    abstract: "Add content",
    absbox: "absPopup3",
    href: "https://online.fliphtml5.com/dqvvm/nsbg/index.html",
  },

  {
    title: "NDA",
    authors: "add content",
    citebox: "popup4",
    image:
      "https://assets-global.website-files.com/633c023b7f94fe5eb2e65d62/63b745b6857b45f63cf94843_624f77e8d76374256e9a8387_AdobeStock_225001591%2520Large.jpeg",
    citation: {},
    abstract: "Add content",
    absbox: "absPopup4",
    href: "https://online.fliphtml5.com/dqvvm/tvcu/index.html",
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
