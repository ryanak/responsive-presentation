function Byte() {

    var menu = document.querySelectorAll("#main-accordion .mobile-menu, .desktop-menu-item");
    var actives = [];

    menu.forEach(function (elem) {
        elem.addEventListener("click", function () {
            actives = document.querySelectorAll(".active");

            if (!elem.classList.contains("active")) {
                // Hide current actives
                if (actives.length) {
                    actives.forEach(function (active) {
                        active.classList.remove("active");
                    });
                }
                // Set new active
                elem.classList.add("active");
                // Get current actives
            } else { 
                elem.classList.remove("active");
            }

        });
    });

}

onload = function () {
    var start = new Byte;
}


