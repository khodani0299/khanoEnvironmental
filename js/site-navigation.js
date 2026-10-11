(function ($) {
    "use strict";

    var pages = [
        { name: "Home", file: "index.html", icon: "fa-home" },
        { name: "About Us", file: "about-1.html", icon: "fa-info-circle" },
        { name: "Services", file: "service.html", icon: "fa-leaf" },
        { name: "Environmental Impact", file: "environmental-impact.html", icon: "fa-globe" },
        { name: "Contact", file: "contact-page.html", icon: "fa-envelope" }
    ];
    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    var isAllowedPage = pages.some(function (page) {
        return page.file === currentPage;
    });

    if (!isAllowedPage) {
        window.location.replace("index.html");
        return;
    }

    function populateMenu(menu, isDesktop) {
        if (!menu) {
            return;
        }

        menu.textContent = "";
        pages.forEach(function (page) {
            var entry = document.createElement("li");
            var link = document.createElement("a");

            entry.className = "menu-item" + (isDesktop ? " greennature-normal-menu" : "");
            link.href = page.file;
            if (page.file === currentPage) {
                entry.className += " current-menu-item";
                link.setAttribute("aria-current", "page");
            }
            if (isDesktop) {
                var icon = document.createElement("i");
                icon.className = "fa " + page.icon;
                icon.setAttribute("aria-hidden", "true");
                link.appendChild(icon);
            }
            link.appendChild(document.createTextNode(page.name));
            entry.appendChild(link);
            menu.appendChild(entry);
        });
    }

    populateMenu(document.querySelector("#greennature-main-navigation > ul"), true);
    populateMenu(document.querySelector("#greennature-responsive-navigation > ul"), false);

    var contactButton = document.querySelector("#greennature-main-navigation .greennature-donate-button");
    if (contactButton) {
        contactButton.parentNode.removeChild(contactButton);
    }
}(jQuery));
