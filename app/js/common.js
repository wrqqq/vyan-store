$(function() {
var theToggle = document.getElementById('toggle');
var menu = document.querySelector('nav');

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass

function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}
	$(theToggle).click(function() {
		$(".header_menu").slideToggle();
		return false;
	});
theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}
    $('.search-block input[type="text"]')
    .focus(function() {
    	$(this).toggleClass('active_search');
    	$(this).attr("placeholder", "");
    }).focusout(function() {
    	$(this).toggleClass('active_search');
    	$(this).attr("placeholder", "Search");
    });


	var View = function () {
	    this.initEvents();
	  };
	View.prototype = {
	    initEvents: function () {
	      var _this = this;
	      $(document).on('mouseover', '.top_section_nav_social_item', function(e){return _this.changeImage(e)});
	      $(document).on('focus', '.header_search input', function(e){return _this.inputTrigger(e)});
	      $(document).on('focusout', '.header_search input', function(e){return _this.inputTriggerOff(e)});
	      $(document).on('click', '#toggle', function(e){return _this.toggleMenu(e)});


	    },
	    inputTrigger: function(e) {
	    	$(e.currentTarget).toggleClass('active_search');
	    	$(e.currentTarget).attr("placeholder", "");
    	},
    	inputTriggerOff: function(e) {
    		$(e.currentTarget).toggleClass('active_search');
    		$(e.currentTarget).attr("placeholder", "Поиск по каталогу");
    	},
    	toggleMenu: function(e) {
    		$('.header_menu').toggle('visible');
    	}

	}

	window.currentView = new View();
});
