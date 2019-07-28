// Smooth Scrolling
$('.navbar a').on('click', function(event) {
    if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
        {
        scrollTop: $(hash).offset().top - $('.navbar').height()
        },
        800,
        function() {
        // window.location.hash = hash;
        window.history.pushState(null, null, hash);
        }
    );
    }
});
