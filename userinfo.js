let user_name = sessionstorage.gotItem("name");
let user_points = sessionstorage.getItem("points");

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span_points").innerHTML = user_points;
