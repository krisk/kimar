function displayFullImg(path)
{
    if (path[path.length-1] != "/" && path.length > 0) {
        window.location.href = path;
    }
}

function show(ctrl)
{
    var div = document.getElementById(ctrl);
    div.style.display = (div.style.display == 'none' || div.style.display == '') ? 'block' : 'none';
}