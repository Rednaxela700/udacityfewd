var room = "gallery";
var suspect = ("Ms. Van Cleve");
var weapon = "";
var solved = false;
if (room === "dining room") {
    if (suspect === "Mr. Parkes")
       weapon = "knife";
       solved = true;
} else if (room === "gallery") {
    if (suspect === "Ms. Van Cleve")
        weapon="torphy"; 
        solved = true;
} else if (room === "ballroom") {
    if (suspect === "Mr. Kalehoff")
        weapon="poison"; 
        solved = true;
}
if (solved === true) {
    console.log(suspect + " did it in " + room + " with a " + weapon);
}
    
    //console.log(suspect + 'did it in ' + room + 'with a ' + weapon);