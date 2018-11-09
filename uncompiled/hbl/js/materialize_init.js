document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {
        edge: "right",
        draggable: true
    });

    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems, {
        alignment: "right",
        hover: true,
        coverTrigger: false
    });

    var elems = document.querySelectorAll(".tooltipped");
    var instances = M.Tooltip.init(elems, {});
});
