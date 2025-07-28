const blueBtn = document.getElementById('show-blue');
const redBtn = document.getElementById('show-red');
const blueCourses = document.getElementById('blue-courses');
const redCourses = document.getElementById('red-courses');
const sectionTitle = document.querySelector('#buttons h2');

blueBtn.addEventListener('click', () => {
    blueCourses.classList.toggle('hidden');
    redCourses.classList.add('hidden');
    sectionTitle.textContent = blueCourses.classList.contains('hidden')
        ? "🎯 اختر فريقك لاستكشاف الكورسات المجانية"
        : "🛡️ أنت الآن تستعرض كورسات الفريق الأزرق (Blue Team)";
});

redBtn.addEventListener('click', () => {
    redCourses.classList.toggle('hidden');
    blueCourses.classList.add('hidden');
    sectionTitle.textContent = redCourses.classList.contains('hidden')
        ? "🎯 اختر فريقك لاستكشاف الكورسات المجانية"
        : "⚔️ أنت الآن تستعرض كورسات الفريق الأحمر (Red Team)";
});

const fadeElements = document.querySelectorAll('.fade-in, .animate');

window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (pos < windowHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'opacity 1s ease, transform 1s ease';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });
});
