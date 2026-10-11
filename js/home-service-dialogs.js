(function () {
    "use strict";

    var triggers = document.querySelectorAll(".home-service-popup-trigger");

    Array.prototype.forEach.call(triggers, function (trigger) {
        trigger.addEventListener("click", function () {
            var dialog = document.getElementById(trigger.getAttribute("aria-controls"));
            if (dialog && typeof dialog.showModal === "function") {
                dialog.showModal();
            }
        });
    });

    Array.prototype.forEach.call(document.querySelectorAll(".home-service-dialog"), function (dialog) {
        dialog.addEventListener("click", function (event) {
            if (event.target === dialog) {
                dialog.close();
            }
        });
    });
}());
