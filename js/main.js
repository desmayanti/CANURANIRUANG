/**
 * js/main.js
 * Fungsionalitas JavaScript Global dan Dasar untuk Dashboard.
 * Termasuk: Sidebar Toggle, Logout Handler, dan Notifikasi Otomatis.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("main.js: Script Global Aktif!");

    // ======================================
    // 1. PENGATURAN SIDEBAR (Toggle untuk Mobile View)
    // ======================================
    const sidebar = document.querySelector('.sidebar');
    const layout = document.querySelector('.dashboard-layout');
    
    // --- Membuat Tombol Toggle (Hamburger Menu) secara Programmatis ---
    // Karena tombol ini biasanya tidak ada di HTML Anda, kita buat di sini
    if (!document.querySelector('.sidebar-toggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.classList.add('sidebar-toggle');
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Coba masukkan tombol di dekat logo atau header
        const header = document.querySelector('.header');
        if (header) {
            header.prepend(toggleBtn);
        } else {
            // Jika tidak ada header, tambahkan ke body
            document.body.appendChild(toggleBtn); 
        }

        // Listener untuk tombol toggle
        toggleBtn.addEventListener('click', () => {
            if (sidebar) {
                sidebar.classList.toggle('active');
            }
            if (layout) {
                layout.classList.toggle('sidebar-open');
            }
        });
    }

    // ======================================
    // 2. HANDLER LOGOUT GLOBAL
    // ======================================
    const logoutButtons = document.querySelectorAll('.logout-btn');
    logoutButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Mencegah navigasi default ke index.html sementara
            e.preventDefault(); 
            
            if (confirm('Anda yakin ingin keluar (Logout) dari sistem?')) {
                // Di sini Anda akan memasukkan logika AJAX/Fetch ke server untuk sesi logout
                console.log("Melakukan proses logout...");
                
                // SIMULASI: Arahkan ke halaman login setelah konfirmasi
                window.location.href = e.currentTarget.href || '../index.html'; 
            }
        });
    });

    // ======================================
    // 3. PENGATURAN NOTIFIKASI OTOMATIS (Jika ada)
    // ======================================
    const autoCloseAlerts = document.querySelectorAll('.alert-auto-close');
    autoCloseAlerts.forEach(alert => {
        setTimeout(() => {
            // Menggunakan class fade-out jika Anda punya CSS transisi
            alert.classList.add('fade-out'); 
            
            // Hapus elemen setelah transisi selesai
            setTimeout(() => {
                alert.remove();
            }, 500); 
        }, 5000); // Notifikasi hilang setelah 5 detik
    });

    // ======================================
    // 4. MEMBUAT RESPONSIVITAS SIDEBAR OTOMATIS (Hanya CSS Tambahan)
    // ======================================
    
    // Tambahkan gaya CSS ini ke file dashboard.css Anda agar toggle bekerja di mobile:
    /* .sidebar-toggle { 
            display: none; 
            position: fixed; 
            top: 20px; 
            left: 20px; 
            z-index: 1000; 
            background: var(--maroon); 
            color: white; 
            padding: 10px 15px; 
            border-radius: 5px; 
            border: none;
        }

        @media (max-width: 900px) {
            .sidebar {
                transform: translateX(-100%);
                position: fixed;
                z-index: 999;
                transition: transform 0.3s;
            }
            .sidebar-toggle {
                display: block; 
            }
            .sidebar.active {
                transform: translateX(0);
            }
        }
    */
});