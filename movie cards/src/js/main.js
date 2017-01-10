import '../sass/style.scss';
import $ from 'jquery';

$(document).ready(function(){

    $('ul.tabs li').click(function(){
		var tabID = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
		$('.block').removeClass('current');
        $(this).addClass('current');
        $("#"+tabID).addClass('current');
        $('.container').css("background-image", "url('assets/"+tabID+"-bg.jpg')");
    })

    function ratingSystem(name){
        this.stars = $('#' + name + ' #user-rating span');
        this.rating = null;
        this.stars.each(function(i, star){
            $(star).attr("data-count", i);
            $(star).on('mouseenter', this.starsEntered.bind(this));
            $(star).on('mouseleave', this.starsExited.bind(this));
            $(star).on('click', this.starsClicked.bind(this));
        }.bind(this))
        // $('#user-rating').on('mouseleave', this.starsExited.bind(this));
    };

    ratingSystem.prototype.starsEntered = function(e){
        this.fillStars(e.target);
    };

    ratingSystem.prototype.starsExited = function(e){
        this.fillStars(this.rating);
    };

    ratingSystem.prototype.starsClicked = function(e){
        this.rating = e.target;
    };

    ratingSystem.prototype.fillStars = function(el){
        this.stars.each(function(i, star){
            if (el == null || $(star).attr('data-count') > $(el).attr('data-count')){
                $(star).removeClass('hover');
            } else {
                $(star).addClass('hover');
            }
        });
    };

    var starWarsRating = new ratingSystem("star-wars");
    var starTrekRating = new ratingSystem("pulp-fiction");
    var starTrekRating = new ratingSystem("chopper");
});
