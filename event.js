const swiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
