document.addEventListener("DOMContentLoaded", function() {
    let currentDate = new Date();
    
    let week1Start = new Date('2024-01-27');
    let week1End = new Date('2024-02-02');
    let week2Start = new Date('2024-02-03');
    let week2End = new Date('2024-02-09');
    let week3Start = new Date('2024-02-10');
    let week3End = new Date('2024-02-16');
    let week4Start = new Date('2024-02-16');
    let week4End = new Date('2024-02-23');
    let week5Start = new Date('2024-02-23');
    let week5End = new Date('2024-03-01');
    let week6Start = new Date('2024-03-01');
    let week6End = new Date('2024-03-08');
    let week7Start = new Date('2024-03-08');
    let week7End = new Date('2024-03-15');
    let week8Start = new Date('2024-03-15');
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
    if (currentDate >= week1Start && currentDate <= week1End) {
        imageSource = "week5.jpg";
    } else if (currentDate >= week2Start && currentDate < week2End) {
        imageSource = "week1.jpg";
    } else if (currentDate >= week3Start && currentDate < week3End) {
        imageSource = "week2.jpg";
    } else if (currentDate >= week4Start && currentDate < week4End) {
        imageSource = "week3.jpg";
    } else if (currentDate >= week5Start && currentDate < week5End) {
        imageSource = "week4.jpg";
    } else if (currentDate >= week6Start && currentDate < week6End) {
        imageSource = "week5.jpg";
    } else if (currentDate >= week7Start && currentDate < week7End) {
        imageSource = "week2.jpg";
    } else if (currentDate >= week8Start && currentDate < week8End) {
        imageSource = "week3.jpg";
    } else if (currentDate >= week9Start && currentDate < week9End) {
        imageSource = "week4.jpg";
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
