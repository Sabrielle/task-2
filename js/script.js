/*$(".radial-control input[type='range']").on("input", function () {
	debugger;
	var angle = $(this).val() * 3;
	$("img.radial").css("transform", "rotate(" + (angle - 150) + "deg)");
});*/

$(document).ready( function() {
	$("#radial-control").roundSlider({
    sliderType: "min-range",
    editableTooltip: false,
    radius: 105,
    width: 16,
    value: 23,
    min: 5,
    max: 27,
    handleSize: 0,
    handleShape: "square",
    circleShape: "pie",
    startAngle: 315,
    tooltipFormat: "changeTooltip"
});

function changeTooltip(e) {
    var val = e.value, speed;
    if (val < 20) speed = "Slow";
    else if (val < 40) speed = "Normal";
    else if (val < 70) speed = "Speed";
    else speed = "Very Speed";

    return val + " km/h" + "<div>" + speed + "<div>";
}
});