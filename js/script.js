let currentIndex = 0;

function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex += direction;

    // تحقق من حدود الفهرس
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // إذا كان الفهرس أقل من 0، عيّنه إلى آخر صورة
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // إذا كان الفهرس أكبر من عدد الصور، عيّنه إلى أول صورة
    }

    // حساب الإزاحة
    const offset = -currentIndex * 100;
    // استخدم Backticks هنا لتضمين التعبير
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
};

// ملاحظة: يجب عليك إضافة وظائف الزر "prev" و "next" لاستدعاء هذه الوظيفة
function animateImage(card) {
    const img = card.querySelector('.card-img-top');
    img.classList.toggle('zoom'); // إضافة أو إزالة الكلاس عند النقر
}
function animateImage(card) {
    card.classList.toggle('zoom'); // إضافة أو إزالة كلاس التكبير على الكارد
}

function toggleDetails(button) {
    const cardBody = button.closest('.card-body');
    const moreText = cardBody.querySelector('.more-text');
    const shortText = cardBody.querySelector('.short-text');

    moreText.classList.toggle('d-none'); // إظهار أو إخفاء النص الكامل
    shortText.classList.toggle('d-none'); // إظهار أو إخفاء النص المختصر
    button.textContent = moreText.classList.contains('d-none') ? 'Show More' : 'Show Less'; // تحديث النص
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});
