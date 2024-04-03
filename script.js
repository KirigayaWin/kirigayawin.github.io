document.addEventListener("DOMContentLoaded", function() {
    let currentDate = new Date();
    
    let week8End = new Date('2024-03-22');
    let week9Start = new Date('2024-03-22');
    let week9End = new Date('2024-03-29');
    let week10Start = new Date('2024-03-29');
    let week10End = new Date('2024-04-05');
    let week11Start = new Date('2024-04-05');
    let week11End = new Date('2024-04-12');
    let week12Start = new Date('2024-04-12');
    let week12End = new Date('2024-04-19');
    let week13Start = new Date('2024-04-19');
    let week13End = new Date('2024-04-26');
    let week13Start = new Date('2024-04-26');
    let week13End = new Date('2024-05-03');

    let defaultImage = "default.jpg";

    let imageSource;
    if (currentDate >= week9Start && currentDate <= week9End) {
        imageSource = "week5.jpg";
    } else if (currentDate >= week10Start && currentDate < week10End) {
        imageSource = "week3.jpg";
    } else if (currentDate >= week11Start && currentDate < week11End) {
        imageSource = "week4.jpg";    
    } else if (currentDate >= week12Start && currentDate < week12End) {
        imageSource = "week5.jpg";
    } else if (currentDate >= week13Start && currentDate < week13End) {
        imageSource = "week2.jpg";
    } else if (currentDate >= week14Start && currentDate < week14End) {
        imageSource = "week3.jpg";
    } else {
        imageSource = defaultImage;
    }

    document.getElementById("weekImage").src = imageSource;
});
