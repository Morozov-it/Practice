//BildSlider
var sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (var _index24 = 0; _index24 < sliders.length; _index24++) {
		var slider = sliders[_index24];

		if (!slider.classList.contains('swiper-bild')) {
			var slider_items = slider.children;

			if (slider_items) {
				for (var _index25 = 0; _index25 < slider_items.length; _index25++) {
					var _el12 = slider_items[_index25];

					_el12.classList.add('swiper-slide');
				}
			}

			var slider_content = slider.innerHTML;
			var slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}

		if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

var main_slider = new Swiper('.main-slider__body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	///autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.control-main-slider__arrow-next',
		prevEl: '.control-main-slider__arrow-prev'
	},
	// breakpoints: {
	// 	320: {
	// 		autoHeight: true
	// 	},
	// 	768: {
	// 		autoHeight: false
	// 	}
	// },
	on: {
		lazyImageReady: function lazyImageReady() {
			ibg();
		}
	} // And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},

});

var lots_slider = new Swiper('.slider-lots__body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 0,
	///autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.control-slider-lots__arrow-next',
		prevEl: '.control-slider-lots__arrow-prev'
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		}
	},
	on: {
		lazyImageReady: function lazyImageReady() {
			ibg();
		}
	} // And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},

});