document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().getDay();
    switch (today) {
        case 1:
            document.getElementById('monday').style.display = 'block';
            break;
        case 2:
            document.getElementById('tuesday').style.display = 'block';
            break;
        case 3:
            document.getElementById('wednesday').style.display = 'block';
            break;
        case 4:
            document.getElementById('thursday').style.display = 'block';
            break;
        case 5:
            document.getElementById('friday').style.display = 'block';
            break;
        case 6:
            document.getElementById('saturday').style.display = 'block';
            break;
        case 0:
            document.getElementById('sunday').style.display = 'block';
            break;
    }
});
