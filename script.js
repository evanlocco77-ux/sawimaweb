// 1. Fungsi Navigasi Mobile (Hamburger Menu)
// Pastikan di HTML ada button dengan id "menu-btn" dan nav dengan id "menu-items"
const toggleMobileMenu = () => {
    const menuBtn = document.getElementById('menu-btn');
    const menuItems = document.getElementById('menu-items');
    
    if (menuBtn && menuItems) {
        menuBtn.addEventListener('click', () => {
            menuItems.classList.toggle('hidden');
        });
    }
}

// 2. Logika Pengiriman Form Kontak ke Google Apps Script
const handleContactForm = () => {
    const form = document.getElementById('contactForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxQVKbyERO9iHVAnrxrguFuzQ9SaXnNJpxKyaI9sT_9HPrVTaBz1cJevtmNBdTH7Qg/exec'; // Ganti dengan URL dari Deploy Google Apps Script

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerText = "Mengirim...";

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    alert("Terima kasih! Pesan Anda telah terkirim.");
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerText = "Kirim Pesan";
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert("Gagal mengirim pesan. Silakan coba lagi.");
                    submitBtn.disabled = false;
                    submitBtn.innerText = "Kirim Pesan";
                });
        });
    }
}

// 3. Efek Navbar Berubah Warna Saat Scroll
const handleNavbarScroll = () => {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-opacity-90', 'backdrop-blur-md', 'shadow-xl');
        } else {
            nav.classList.remove('bg-opacity-90', 'backdrop-blur-md', 'shadow-xl');
        }
    });
}

// Jalankan semua fungsi saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    toggleMobileMenu();
    handleContactForm();
    handleNavbarScroll();
});