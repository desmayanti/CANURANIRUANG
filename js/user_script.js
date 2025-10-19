/* ==================================== */
/* js/user_script.js - SKRIP DASAR & LOGIKA UNEG-UNEG USER */
/* ==================================== */

document.addEventListener('DOMContentLoaded', function() {
    console.log('User Script Loaded: Sistem Aspirasi Warga');

    const unegUnegForm = document.getElementById('uneg-uneg-form');
    const commentsContainer = document.querySelector('.comments-container');
    
    // ... (Fungsi addCommentToDOM dan deleteComment tetap sama) ...
    // ... (Pasang event listener ke tombol hapus tetap sama) ...

    // --- FUNGSI UTAMA: KIRIM UNEG-UNEG (DENGAN FEEDBACK VISUAL) ---

    if (unegUnegForm && commentsContainer) {
        unegUnegForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const submitButton = unegUnegForm.querySelector('button[type="submit"]');
            const messageInput = document.getElementById('pesan');
            const authorInput = document.getElementById('nama_pengirim');
            const anonimCheckbox = document.getElementById('anonim_uneg');

            const message = messageInput.value.trim();
            const author = authorInput.value.trim() || 'Warga Aspirasi';
            const isAnonymous = anonimCheckbox.checked;

            if (message === "") {
                alert("Pesan uneg-uneg tidak boleh kosong!");
                return;
            }
            
            // 1. TAMPILKAN LOADING & NONAKTIFKAN TOMBOL
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            submitButton.disabled = true;
            submitButton.style.opacity = 0.7;

            const dataToSend = {
                message: message,
                author: author,
                isAnonymous: isAnonymous,
                timestamp: new Date().toISOString()
            };

            console.log('Mencoba mengirim Uneg-Uneg ke Admin...', dataToSend);

            // SIMULASI PENGIRIMAN DATA KE BACKEND (1.5 detik)
            setTimeout(() => {
                
                // SIMULASI JAWABAN DARI SERVER
                const isSuccess = Math.random() > 0.1; // 90% sukses

                // 2. KEMBALIKAN TOMBOL KE NORMAL
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                submitButton.style.opacity = 1.0;

                if (isSuccess) {
                    // JIKA PENGIRIMAN BERHASIL (Admin telah menerima)
                    
                    // Tambahkan ke tampilan frontend (Simulasi sudah diterima Admin)
                    addCommentToDOM(author, message, isAnonymous);
                    
                    // Tampilkan notifikasi
                    alert("✅ Uneg-Uneg berhasil dikirim! Sudah tercatat di keluhan Admin.");
                    
                    // Kosongkan form
                    messageInput.value = '';
                    anonimCheckbox.checked = false;

                } else {
                    // JIKA PENGIRIMAN GAGAL
                    alert("❌ Gagal mengirim Uneg-Uneg. Terjadi gangguan, silakan coba lagi.");
                }

                console.log(`Simulasi Pengiriman Selesai. Status: ${isSuccess ? 'Sukses' : 'Gagal'}`);
            }, 1500); // Tunggu 1.5 detik simulasi kirim

        });
    }

    // ... (Logika Umum Lainnya di sini) ...

});