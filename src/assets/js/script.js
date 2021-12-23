function onOffSidebar() {
    var element = document.getElementById('sidebar');
    if (element.classList.contains('toggled')) {
        element.classList.remove('toggled');
    } else {
        element.classList.add('toggled');
    }
}
