/*
This is empty on purpose! Your code to build the resume will go here.
 $("#main").append("joe");
 */
 var awesomeThoughts = "I am Joe and I am AWESOME!";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");
 console.log(funThoughts);
 $("#main").append(funThoughts);
 var formattedName = HTMLheaderName.replace("%data%", "Joachim Zink");
 $("#header").append(formattedName);
 var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
 $("#header").append(formattedRole);