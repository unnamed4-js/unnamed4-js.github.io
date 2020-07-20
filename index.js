//index.js 
function sendEmail() { 	
Email.send({ 	
Host: "smtp.mailtrap.io", 	
Username : "2afdfbf79a4d1f", 	
Password : "e9c7aa9d16e4ea", 	
To : 'helium@mailnesia.com', 	
From : "02a0b0fb8f-986fde@inbox.mailtrap.io", 	
Subject : "IX", 	
Body : "BODY TEXT", 	}).then( 		message => alert("mail sent successfully") 	
  ); 
}
