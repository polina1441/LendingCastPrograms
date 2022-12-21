// document.querySelectorAll('.slider').forEach((n, i) => {
// 	window[`slider${i+1}`] = new Swiper(n, {
// 		freeMode: true,
// 		centeredSlides: true,
// 		direction: 'horizontal',
// 		mousewheel: true,
// 		slidesPerView: 1.75,
// 		slidesOffsetBefore: -125
// 	})
// })
// bindSwipers(slider1, slider2, slider3, slider4)

slider1 = new Swiper('.slider1', {
	freeMode: true,
	// centeredSlides: true,
	direction: 'horizontal',
	mousewheel: true,
	slidesPerView: 2.75,
	slidesOffsetBefore: -90,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})
