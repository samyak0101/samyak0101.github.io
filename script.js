document.addEventListener('DOMContentLoaded', function() {
	// Apply a parallax effect to the hero image
	var hero = document.querySelector('.hero');
	window.addEventListener('scroll', function() {
			var scrolledHeight = window.pageYOffset,
					limit = hero.offsetTop + hero.offsetHeight;
			if (scrolledHeight > hero.offsetTop && scrolledHeight <= limit) {
					hero.style.backgroundPositionY = (scrolledHeight - hero.offsetTop) / 1.5 + 'px';
			} else {
					hero.style.backgroundPositionY = '0';
			}
	});

	// Initialize the Bootstrap tooltips
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	// Make project card images move slightly when mouse moves over them
	var projectCards = document.querySelectorAll('.project-card');
	projectCards.forEach(function(card) {
			card.addEventListener('mousemove', function(e) {
					var x = e.pageX - e.target.offsetLeft;
					var y = e.pageY - e.target.offsetTop;
					e.target.style.transform = 'rotateX(' + (y - 50) / 50 + 'deg) rotateY(' + -(x - 50) / 50 + 'deg)';
			});
			card.addEventListener('mouseout', function(e) {
					e.target.style.transform = 'rotateX(0) rotateY(0)';
			});
	});

	// Expanding 'Read More' button
	var expandBtn = document.querySelector('.btn-expand');
	var aboutText = document.querySelector('.about-text p');
	expandBtn.addEventListener('click', function() {
			aboutText.classList.toggle('expanded');
			expandBtn.textContent = expandBtn.textContent == 'Read More' ? 'Read Less' : 'Read More';
	});
});
