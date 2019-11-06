function changeImage()
{
    document.getElementById("league").src = "images/mikey.jpg";
}

function changeImage2()
{
    document.getElementById("wedstrijd").src = "images/meneertje.jpg";

    if(document.getElementById("wedstrijd").src == "images/meneertje.jpg")
    {
        document.getElementById("wedstrijd").src = "images/.jpg";
    }
    else
    {
        document.getElementById("wedstrijd").src = "images/wedstrijd.jpg"
    }

}

function changeImage3()
{
    document.getElementById("website").src = "images/top5gamesindex.jpg";

    if(document.getElementById("website").src == "images/top5gamesindex.jpg")
    {
        document.getElementById("website").src = "images/top5gamescss.jpg";
    }
    else
    {
        document.getElementById("website").src = "images/top5games.jpg";
    }
    
}

var d = new Date("datum");
new Date()
new Date(year, month, day, hours, minutes, seconds)
new Date(seconds)
new Date(date string)
