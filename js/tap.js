function ltap()
{
    var a = document.getElementById("droptext").value;
    var h = parseFloat(a) * 720 * 0.00005;
    var d = h * 24;
    var w = d * 7;
    var y = d * 364;
    if(isNaN(h))
    {
        alert("Enter a valid Input");
    }
    else{
        document.getElementById("onscreen").style.display = "none";
    document.getElementById("secscreen").style.display = "block";
    document.getElementById("h").innerHTML = h.toFixed(4);
    document.getElementById("d").innerHTML = d.toFixed(4);
    document.getElementById("w").innerHTML = w.toFixed(4);
    document.getElementById("y").innerHTML = y.toFixed(4);
    }
}

function goback()
{
    document.getElementById("onscreen").style.display = "block";
    document.getElementById("secscreen").style.display = "none";
}