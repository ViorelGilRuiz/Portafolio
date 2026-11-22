const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); }), { threshold: 0.12 });
document.querySelectorAll('.project-card,.cap-column,.profile-copy,.facts').forEach((el) => observer.observe(el));
