(function () {
    "use strict";

    const triggers = document.querySelectorAll(".service-detail-trigger");

    Array.prototype.forEach.call(triggers, function (trigger) {
        trigger.addEventListener("click", function () {
            const dialog = document.getElementById(trigger.getAttribute("aria-controls"));
            if (dialog && typeof dialog.showModal === "function") {
                dialog.showModal();
            }
        });
    });

    Array.prototype.forEach.call(document.querySelectorAll(".service-detail-dialog"), function (dialog) {
        dialog.addEventListener("click", function (event) {
            if (event.target === dialog) {
                dialog.close();
            }
        });
    });
}());
