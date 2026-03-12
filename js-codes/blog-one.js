// navbar toggle
let toggleBtn = document.querySelector(".toggle-btn");
let navLinks = document.querySelector(".nav-links");
let icon = document.querySelector(".toggle-btn i");
let links = document.querySelectorAll(".nav-links a");

toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  // نغير شكل الأيقونة
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});
// يقفل المنيو لما أضغط على لينك
links.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    // يرجع الأيقونة Bars
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});
/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        })
    })
})
// sidebar
// اختيار كل العناصر اللي جوه قائمة محتويات المقال
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
    // 1. إزالة كلاسات الـ Active من كل العناصر
    navLinks.forEach(el => {
        el.classList.remove('text-blue-600', 'font-bold');
        el.classList.add('text-slate-600'); // اللون العادي
    });
    // 2. إضافة كلاسات الـ Active للعنصر اللي ضغطنا عليه
    item.classList.add('text-blue-600', 'font-bold');
    item.classList.remove('text-slate-600');
    });
});
// 1. تحديد الروابط في السايدبار والسيكشنز المقابلة لها
// const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]'); // بيفترض إن كل سيكشن واخد id
// 2. وظيفة تغيير الكلاس (Active)
function changeActiveLink() {
    let index = sections.length;
    // بنحسب إحنا في أنهي سيكشن بناءً على الـ Scroll
    while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
    navItems.forEach((link) => {
        link.classList.remove('text-blue-600', 'font-bold', 'border-r-2', 'border-blue-600');
        link.classList.add('text-slate-600');
    });
    // إضافة كلاس النشاط للعنصر المناسب
    if (navItems[index]) {
        navItems[index].classList.add('text-blue-600', 'font-bold', 'border-r-2', 'border-blue-600');
        navItems[index].classList.remove('text-slate-600');
    }
}
// 3. تفعيل الوظيفة مع السكرول
window.addEventListener('scroll', changeActiveLink);
// 4. وظيفة الضغط (Click) للتنقل السلس
navItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
        top: targetSection.offsetTop - 80, // مسافة بسيطة عشان الهيدر
        behavior: 'smooth'
        });
    });
});