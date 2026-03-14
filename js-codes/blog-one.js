// ============================================
// 1. NAVBAR TOGGLE
// ============================================
let toggleBtn = document.querySelector(".toggle-btn");
let navLinksContainer = document.querySelector(".nav-links");
let icon = document.querySelector(".toggle-btn i");
let links = document.querySelectorAll(".nav-links a");

toggleBtn.addEventListener("click", function () {
    navLinksContainer.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

links.forEach(link => {
    link.addEventListener("click", function () {
        navLinksContainer.classList.remove("active");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});
// ============================================
// 2. SIDEBAR — كل المتغيرات الأول ✅
// ============================================
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]'); // ✅ اتعرّفت الأول
let isScrollingFromClick = false;
// وظيفة تفعيل اللينك النشط
function setActiveLink(id) {
    navItems.forEach(link => {
        link.classList.remove('text-blue-600', 'font-bold', 'border-r-2', 'border-blue-600');
        link.classList.add('text-slate-600');
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-blue-600', 'font-bold', 'border-r-2', 'border-blue-600');
            link.classList.remove('text-slate-600');
            // ✅ السطر الجديد - بيعمل scroll للينك النشط عشان يبان في السايدبار
            link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}
// الـ scroll event
window.addEventListener('scroll', function () {
    if (isScrollingFromClick) return;
    let currentId = '';
    sections.forEach(section => {
        // ✅ بنستخدم getBoundingClientRect بدل offsetTop
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
            currentId = section.getAttribute('id');
        }
    });
    setActiveLink(currentId);
});
// الـ click event
navItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;
        setActiveLink(targetId.replace('#', ''));
        isScrollingFromClick = true;
        // ✅ بنستخدم getBoundingClientRect بدل offsetTop
        const rect = targetSection.getBoundingClientRect();
        window.scrollTo({
            top: rect.top + window.scrollY - 80,
            behavior: 'smooth'
        });
        setTimeout(() => {
            isScrollingFromClick = false;
        }, 800);
    });
});
