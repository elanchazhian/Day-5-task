const resume =
{
   "name": "Elanchazhian",
   "contact": {
     "email": "elanchazhian21@gmail.com",
     "phone": 8190923525,
     "address": "No: 19/8, elaikkara streert, karaikal"
   },
   "summary": "Seeking employment with a company where I can use my talents and skills to grow the company.",
   "education": [
     {
       "degree": "Bachelor of Science in Mathematics",
       "graduation_year": 2018,
       "school": "SRVS National Higher Secondary School",
       "pssed out": 2015
     }
   ],
   
  
   "skills": [
     "JavaScript",
     "Git",
     "Problem Solving",
     "Communication"
   ],
   "languages": [
       "Tamil (Fluent)",
       "English (Fluent)"
     
   ],
   "Declaration": "I hereby declare that all the above information is true to best of my knowledge"
 }
 
 // Using "for" loop:

for (let i = 0; i < resume.education.length; i++) {
   const educationItem = resume.education[i];
   console.log("Education Degree:", educationItem.degree);
}

 // Using "for" in loop:
for (const key in resume.contact) {
   console.log(`${key}: ${resume.contact[key]}`);
 }

 // Using "for of" loop:
for (const educationitem of resume.education) {
     console.log("Education Degree:", educationitem.school);

 }
 
 // Using "forEach" loop:
resume.skills.forEach(skill => {
   console.log("Skill:", skill);
 });