
function check(){
    document.getElementById("myCheck").checked = true;
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}

function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "roxywilcoxproducts@gmail.com", 
      Password: "Sahar*1999", 
      To: "roxywilcoxproducts@gmail.com", 
      From: "roxywilcoxproducts@gmail.com", 
      Subject: "Inquiry", 
      Body: ["name:", document.getElementById("name").value, "org:", document.getElementById("organization").value, "email:", document.getElementById("email").value, "date:", document.getElementById("date").value, "web dev:", document.getElementById("web-dev").checked, "full-stack:", document.getElementById("full-stack").checked, "ui/ux:", document.getElementById("ui-ux").checked, "theatre:", document.getElementById("theatre").checked, "job description:", document.getElementById("job-description").value]
    }) 
      .then(function (message) { 
        alert("Inquiry Sent Successfully") 
      }); 
  } 
