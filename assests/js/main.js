// this works on hover.
//(function(x) {
//$('.dropdown').hover(function(e) {
//  $('.dropdown-menu').addClass('open');
//});
//})();

(function(x) {
$('.dropdown').on('click', function(e) {
    $('.dropdown-menu').toggleClass('open');
});
})(0);
