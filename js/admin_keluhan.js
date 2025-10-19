// js/admin_keluhan.js

// 1. Variabel Global untuk Modal
const modalDetail = document.getElementById('detailModal');
const closeBtn = document.querySelector('.close-btn-notif');
const statusSelect = document.getElementById('statusKeluhan');
const formSolusi = document.getElementById('formSolusi');
let currentKeluhanId = null; // Untuk menyimpan ID keluhan yang sedang dilihat/diedit

// 2. Fungsi Membuka Modal
function openDetailModal(id) {
    // Simulasi: Mengambil data keluhan dari ID (di dunia nyata, ini pakai AJAX/Fetch API)
    const dataKeluhan = {
        '1': { judul: 'Birokrasi Lambat', kategori: 'Pelayanan', status: 'Baru', detail: 'Petugas A selalu meminta dokumen tambahan yang tidak tercantum di syarat resmi.' },
        '2': { judul: 'Lampu Jalan Mati', kategori: 'Infrastruktur', status: 'Diproses', detail: 'Sudah 2 minggu lampu di jalan protokol mati total, sangat gelap dan berbahaya.' }
    };

    const keluhan = dataKeluhan[id] || { judul: 'Data Tidak Ditemukan', kategori: '-', status: 'Baru', detail: 'Detail keluhan ini tidak tersedia.' };

    // Update konten Modal
    document.getElementById('modalTitle').textContent = `Detail Keluhan #${id}: ${keluhan.judul}`;
    document.getElementById('detailKategori').textContent = keluhan.kategori;
    document.getElementById('detailStatus').textContent = keluhan.status;
    document.getElementById('detailDeskripsi').textContent = keluhan.detail;
    
    // Set status select sesuai data
    statusSelect.value = keluhan.status;
    currentKeluhanId = id; // Simpan ID saat ini

    modalDetail.classList.remove('hidden');
}

// 3. Fungsi Menutup Modal
function closeDetailModal() {
    modalDetail.classList.add('hidden');
    currentKeluhanId = null;
}

// Event Listener untuk tombol tutup
closeBtn.addEventListener('click', closeDetailModal);

// Tutup modal jika mengklik di luar area modal
window.addEventListener('click', (event) => {
    if (event.target === modalDetail) {
        closeDetailModal();
    }
});


// 4. Fungsi Mengubah Status dan Memberi Solusi (Simulasi)
formSolusi.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const solusiText = document.getElementById('solusiTextarea').value;
    const newStatus = statusSelect.value;

    if (!currentKeluhanId) {
        alert("Kesalahan: Tidak ada ID Keluhan yang dipilih.");
        return;
    }

    if (!solusiText.trim()) {
        alert("Tolong masukkan teks solusi sebelum disimpan.");
        return;
    }

    // --- LOGIKA NYATA: Kirim data ke Server (AJAX/Fetch) ---

    console.log(`Keluhan ID #${currentKeluhanId} diperbarui.`);
    console.log(`Status Baru: ${newStatus}`);
    console.log(`Solusi Diberikan: ${solusiText.trim()}`);
    
    alert(`Keluhan #${currentKeluhanId} berhasil diperbarui dengan status ${newStatus} dan Solusi telah disimpan.`);
    
    // Setelah sukses, tutup modal dan refresh tampilan (simulasi)
    closeDetailModal();
    
    // Di dunia nyata: Anda akan memanggil fungsi untuk me-refresh card keluhan di halaman
});

// 5. Fungsi Hapus Keluhan (Simulasi)
function hapusKeluhan(id) {
    if (confirm(`Yakin ingin menghapus Keluhan ID #${id} secara permanen? Aksi ini tidak bisa dibatalkan.`)) {
        
        // --- LOGIKA NYATA: Kirim request hapus ke Server ---
        
        alert(`Keluhan ID #${id} berhasil dihapus.`);
        
        // Di dunia nyata: Hapus elemen card dari DOM atau refresh halaman
    }
}