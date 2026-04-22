/* ========== KONSTANTA & DATA ========== */
const BULAN_NAMA = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

const signers = {
    'Ketua': { nama: 'H. Abdul Haris FY, S.IP., M.Si.', nip: 'NIDN. 0624086802' },
    'a.n. Ketua': { nama: 'Nanang Gesang Wahyudi, M.Pd.', nip: 'NIDN. 2103069003' },
    'Wakil Ketua I': { nama: 'Nanang Gesang Wahyudi, M.Pd.', nip: 'NIDN. 2103069003' },
    'Wakil Ketua II': { nama: 'Elyvia Widyaswarani, M.Pd.', nip: 'NIDN. 2110088705' },
    'Wakil Ketua III': { nama: 'Andri Sungkowo, M.Pd.I', nip: 'NIDN. 2124078803' },
    'Wakil Ketua': { nama: '', nip: 'NIDN. ' },
    'Sekretaris': { nama: '', nip: 'NIDN. ' },
    'Kepala': { nama: '', nip: 'NIDN. ' },
    'Dosen': { nama: '', nip: 'NIDN. ' },
    'Mahasiswa': { nama: '', nip: 'NIM. ' }
};

const letterTypes = [
    { id:'sk-mahasiswa-aktif', name:'Keterangan Mahasiswa Aktif', icon:'fa-user-graduate', color:'emerald', code:'SK-MA', desc:'Status mahasiswa aktif', noHeaderKepada:true, judulSurat:'SURAT KETERANGAN MAHASISWA AKTIF', subjekFields:['nama','nim','prodi','angkatan','semesterAktif','tahunAkademik','semesterBejalan'], template: (d) => `<div style="padding:0 40px;margin-bottom:20px;font-size:11pt;line-height:1.5;text-align:justify;"><p style="margin-bottom:8px;">Yang bertanda tangan di bawah ini Ketua STIT Tunas Bangsa Banjarnegara, menerangkan dengan sebenarnya bahwa:</p>
    <table style="margin-left:1.5em;margin-bottom:10px;font-size:11pt;border-collapse:collapse;text-align:left;"><tr><td style="padding:3px 16px 3px 0;vertical-align:top;width:140px;">Nama</td><td style="padding:3px 0;vertical-align:top;font-weight:bold;text-transform:capitalize;">: ${d.subjek.nama||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">NIM</td><td style="padding:3px 0;vertical-align:top;text-transform:uppercase">: ${d.subjek.nim||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Program Studi</td><td style="padding:3px 0;vertical-align:top;">: S1 - ${d.subjek.prodi||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Angkatan</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.angkatan||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Semester</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.semesterBejalan||'-'}</td></tr></table>
    <p style="margin-bottom:8px;">Adalah benar-benar mahasiswa STIT Tunas Bangsa Banjarnegara yang sedang menempuh pendidikan pada Semester ${d.subjek.semesterAktif||'Ganjil'} Tahun Akademik ${d.subjek.tahunAkademik||'2024/2025'}.</p><p style="margin-top:8px;">Demikian surat keterangan ini dibuat agar dapat digunakan sebagaimana mestinya.</p></div>` },
    
    { id:'izin-penelitian', name:'Izin Penelitian', icon:'fa-flask', color:'blue', code:'IP', desc:'Izin Penelitian', subjekFields:['nama','nim','prodi','perguruanTinggi','judulPenelitian','waktu','tempatPenelitian'], template: (d) => `<div style="margin-bottom:20px; margin-left: 6em;font-size:11pt;line-height:1.5;text-align:justify;"><p style="margin-bottom:8px; text-indent: 3em;">Sehubungan dengan pelaksanaan penelitian mahasiswa dalam rangka memenuhi salah satu persyaratan penyelesaian tugas akhir Program Sarjana (S1), bersama ini kami memohon kepada Bapak/Ibu untuk berkenan memberikan izin kepada mahasiswa kami dalam melaksanakan penelitian pada instansi yang Bapak/Ibu pimpin.</p><p style="margin-bottom:8px;">Adapun data mahasiswa tersebut adalah sebagai berikut:</p><table style="margin-bottom:10px; margin-left:1.5em; font-size:11pt;border-collapse:collapse;text-align:left;"><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Nama</td><td style="padding:3px 0;vertical-align:top;font-weight:bold;text-transform:capitalize;">: ${d.subjek.nama||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">NIM</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.nim||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Program Studi</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.prodi||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Perguruan Tinggi</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.perguruanTinggi||'STIT Tunas Bangsa Banjarnegara'}</td></tr></table><p style="margin-bottom:8px;">Dengan Judul Penelitian:</p><p style="font-style:italic;font-weight:bold;margin-bottom:10px; margin-left:1.5em;">${d.subjek.judulPenelitian||'-'}</p><p style="margin-bottom:8px;">Adapun rencana pelaksanaan penelitian:</p>
    <table style="margin-bottom:10px; margin-left:1.5em; font-size:11pt;border-collapse:collapse;text-align:left;"><tr><td style="padding:3px;vertical-align:top;">Waktu</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.waktu||'-'}</td></tr><tr><td style="padding:3px;vertical-align:top;">Tempat</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.tempatPenelitian||'-'}</td></tr></table>Demikian surat permohonan ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu, kami ucapkan terima kasih.</p></div>` },
    

    {
    id:'izin-observasi',
    name:'Surat Izin Observasi',
    icon:'fa-eye',
    color:'teal',
    code:'IS-OBS',
    desc:'Observasi di sekolah/instansi',

    subjekFields:[
        'jenisObservasi','nama','nim','prodi','noHp','hariTanggal',
        'anggotaObservasi',
        'tempatObservasi','namaDosenPengampu','nidnDosenPengampu'
    ],

    hiddenFields:['fSifat','fInstansiTtd','fJabatanTtd','fBidangTtd'],

    // =========================
    // ON CHANGE
    // =========================
    onSubjekChange: function(d) {
        const j = (d.subjek && d.subjek.jenisObservasi) || 'Personal';

        const elAnggota = document.getElementById('anggotaObservasi');
        const elMk = document.getElementById('mataKuliah');
        const elNama = document.getElementById('nama');
        const elNim = document.getElementById('nim');

        if (elAnggota) elAnggota.closest('div').style.display = j === 'Kelompok' ? '' : 'none';
        if (elMk) elMk.closest('div').style.display = j === 'Kelompok' ? '' : 'none';
        if (elNama) elNama.closest('div').style.display = j === 'Kelompok' ? 'none' : '';
        if (elNim) elNim.closest('div').style.display = j === 'Kelompok' ? 'none' : '';
    },

    // noGlobalTtd:true,

    // customTtd: function(d) {
    //     const namaKaprodi = d.namaTtd || '-';
    //     const nipKaprodi = d.nipTtd || '';
    //     const namaDosenPengampu = (d.subjek && d.subjek.namaDosenPengampu) ? d.subjek.namaDosenPengampu : '-';
    //     const nidnDosenPengampu = (d.subjek && d.subjek.nidnDosenPengampu) ? d.subjek.nidnDosenPengampu : '';
    //     const prodiKaprodi = (d.subjek && d.subjek.prodi) ? d.subjek.prodi : '-';
    //     return `<div style="margin-left:6em;margin-top:24px;font-size:11pt;"><table style="width:100%;border-collapse:collapse;"><tr><td style="width:60%;text-align:left;vertical-align:top;padding-right:16px;"><p style="margin:0 0 3px 0;">Mengetahui,</p><p style="margin:0 0 3px 0;">Ketua Program Studi</p><p style="margin:0 0 66px 0;">${prodiKaprodi}</p><p style="margin:0;font-weight:800;text-decoration:underline;text-transform:capitalize;">${namaKaprodi}</p>${nipKaprodi ? `<p style="margin:2px 0 0 0;font-size:9pt;">NIDN. ${nipKaprodi}</p>` : ''}</td><td style="width:40%;text-align:left;vertical-align:top;padding-left:16px;"><p style="margin:0 0 3px 0;">&nbsp;</p><p style="margin:0 0 3px 0;">Dosen Pengampu</p><p style="margin:0 0 66px 0;">&nbsp;</p><p style="margin:0;font-weight:800;text-decoration:underline;text-transform:capitalize;">${namaDosenPengampu}</p>${nidnDosenPengampu ? `<p style="margin:2px 0 0 0;font-size:9pt;">NIDN. ${nidnDosenPengampu}</p>` : ''}</td></tr></table><div style="margin-top:10px;font-size:10pt;"><p style="margin:0 0 2px 0;font-weight:bold;">Tembusan :</p><p style="margin:0 0 2px 0;">1. Wakil Ketua Bidang Akademik</p><p style="margin:0;">2. Arsip</p></div></div>`;},

    // =========================
    // TEMPLATE ISI
    // =========================
    template: (d) => {
        const j = (d.subjek?.jenisObservasi || 'Personal');

        // ======================
        // MODE KELOMPOK
        // ======================
        if (j === 'Kelompok') {
            const anggota = (d.subjek?.anggotaObservasi || '')
                .split('\n')
                .filter(l => l.trim());

            const rows = anggota.map((l, i) => {
                const p = l.split(';').map(s => s.trim());
                return `
                <tr>
                    <td style="padding:2px 4px;vertical-align:top; text-align:center;">${i+1}.</td>
                    <td style="text-transform:capitalize;padding:2px 4px;vertical-align:top;margin-right:10px;">${p[0]||'-'}</td>
                    <td style="padding:2px 4px;vertical-align:top;text-align:center;">${p[1]||'-'}</td>
                    <td style="padding:2px 4px;vertical-align:top;text-align:center;">${p[2]||'-'}</td>
                </tr>`;
            }).join('');

            return `
            <div style="margin-left:6em;font-size:11pt;line-height:1.5;text-align:justify;">
                <p style="text-indent:3em;">
                    Sehubungan dengan kegiatan akademik mahasiswa dalam rangka Pelaksanaan Tugas Perkuliahan, mahasiswa dipandang perlu untuk melakukan Observasi/Penelitian. Oleh karena itu, kami mengharap Bapak/Ibu agar berkenan memberikan izin kepada mahasiswa kami untuk melaksanakan observasi di lembaga yang Bapak/Ibu Pimpin.
                </p>
                <p>Adapun data mahasiswa sebagai berikut:</p>
                <div style="margin-top:16px;">Anggota Kelompok:
                    <table style="width:100%; font-size:11pt; border-collapse:collapse; margin:8px 0;">
                        <thead>
                            <tr>
                                <th style="padding:2px 4px; font-weight:normal; width:10%; text-align:center;">No</th>
                                <th style="padding:2px 4px; font-weight:normal; vertical-align:top; width:40%;">Nama Mahasiswa</th>
                                <th style="padding:2px 4px; font-weight:normal; width:25%; text-align:center;text-align:center;">NIM</th>
                                <th style="padding:2px 4px; font-weight:normal; width:25%; text-align:center;text-align:center;">Semester</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
                
                <p>Waktu pelaksanaan:</p>

                <table style="margin-left:2em;">
                    <tr><td style="padding:1px;vertical-align:top;width:120px;">Hari/Tanggal</td><td> : ${d.subjek?.hariTanggal ? formatTgl(d.subjek.hariTanggal) : '-'}</td></tr>
                    <tr><td>Tempat</td><td> : ${d.subjek?.tempatObservasi || '-'}</td></tr>
                </table>

                <p style="text-indent:3em;">
                    Demikian surat permohonan ini disampaikan. Atas perhatian dan kerjasamanya, kami ucapkan terima kasih.

                </p>
            </div>`;
        }

        // ======================
        // MODE PERSONAL
        // ======================
        return `
        <div style="margin-left:6em;font-size:11pt;line-height:1.5;text-align:justify;">
            
            <p style="text-indent:3em;">
                Sehubungan dengan kegiatan akademik mahasiswa dalam rangka Pelaksanaan Tugas Perkuliahan, mahasiswa dipandang perlu untuk melakukan Observasi/Penelitian. Oleh karena itu, kami mengharap Bapak/Ibu agar berkenan memberikan izin kepada mahasiswa kami untuk melaksanakan observasi di lembaga yang Bapak/Ibu Pimpin.
            </p>

            <p>Adapun data mahasiswa sebagai berikut:</p>

            <table style="margin-left:2em;">
                <tr><td style="padding:1px;vertical-align:top;width:120px;">Nama</td><td> : ${d.subjek?.nama || '-'}</td></tr>
                <tr><td>NIM</td><td> : ${d.subjek?.nim || '-'}</td></tr>
                <tr><td>Program Studi</td><td> : ${d.subjek?.prodi || '-'}</td></tr>
                <tr><td>No. HP</td><td> : ${d.subjek?.noHp || '-'}</td></tr>
            </table>

            <p>Waktu pelaksanaan:</p>

            <table style="margin-left:2em;">
                <tr><td style="padding:1px;vertical-align:top;width:120px;">Hari/Tanggal</td><td> : ${d.subjek?.hariTanggal ? formatTgl(d.subjek.hariTanggal) : '-'}</td></tr>
                <tr><td>Tempat</td><td> : ${d.subjek?.tempatObservasi || '-'}</td></tr>
            </table>

            <p style="text-indent:3em;">
                Demikian surat permohonan ini disampaikan. Atas perhatian dan kerjasamanya, kami ucapkan terima kasih.

            </p>

        </div>`;
    }
},
    
    { id:'pengajuan-judul', name:'Pengajuan Judul Skripsi', icon:'fa-book-bookmark', color:'purple', code:'PJS', desc:'Pengajuan judul skripsi', noHeaderKepada:true, judulSurat:'PENGAJUAN JUDUL SKRIPSI', subjekFields:['nama','nim','prodi','semester','judulUsulan1','judulUsulan2'], template: (d) => `<div style="margin-bottom:20px; margin-left: 6em;font-size:11pt;line-height:1.5;text-align:justify;"><p style="margin-bottom:8px; ">Yang bertanda tangan di bawah ini:</p><table style="margin-bottom:10px; margin-left:2em; font-size:11pt;border-collapse:collapse;text-align:left;"><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Nama</td><td style="padding:3px 0;vertical-align:top;font-weight:bold;text-transform:capitalize;">: ${d.subjek.nama||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">NIM</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.nim||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Program Studi</td><td style="padding:3px 0;vertical-align:top;">: ${d.subjek.prodi||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Semester</td><td style="padding:3px 0;vertical-align:top;font-weight:bold;">: ${d.subjek.semester||'-'}</td></tr></table><p style="margin-bottom:8px;">Dengan hormat mengajukan <strong>USULAN JUDUL SKRIPSI/TUGAS AKHIR</strong>:</p><table style="margin-bottom:10px; margin-left:2em; font-size:11pt;border-collapse:collapse;text-align:left;"><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Judul Usulan 1</td><td style="padding:3px 0;vertical-align:top;font-style:italic;font-weight:bold;">: ${d.subjek.judulUsulan1||'-'}</td></tr><tr><td style="padding:3px 16px 3px 0;vertical-align:top;">Judul Usulan 2</td><td style="padding:3px 0;vertical-align:top;font-style:italic;">: ${d.subjek.judulUsulan2||'-'}</td></tr></table><p>Demikian pengajuan judul ini saya sampaikan untuk mendapat pertimbangan.</p></div>` }
];

const colorMap = { emerald:{ bg:'bg-emerald-50', text:'text-emerald-600' }, blue:{ bg:'bg-blue-50', text:'text-blue-600' }, violet:{ bg:'bg-violet-50', text:'text-violet-600' }, amber:{ bg:'bg-amber-50', text:'text-amber-600' }, rose:{ bg:'bg-rose-50', text:'text-rose-600' }, teal:{ bg:'bg-teal-50', text:'text-teal-600' }, cyan:{ bg:'bg-cyan-50', text:'text-cyan-600' }, lime:{ bg:'bg-lime-50', text:'text-lime-600' }, orange:{ bg:'bg-orange-50', text:'text-orange-600' }, indigo:{ bg:'bg-indigo-50', text:'text-indigo-600' }, pink:{ bg:'bg-pink-50', text:'text-pink-600' }, fuchsia:{ bg:'bg-fuchsia-50', text:'text-fuchsia-600' }, purple:{ bg:'bg-purple-50', text:'text-purple-600' } };

/* ========== STATE ========== */
let currentType = null;
let history = JSON.parse(localStorage.getItem('suratHistory') || '[]');
let riwayatViewData = null;

/* ========== UTILITAS ========== */
function $(id) { try { return document.getElementById(id); } catch(e) { return null; } }
function todayStr() { return new Date().toISOString().split('T')[0]; }
function formatTgl(dateStr) { if (!dateStr) return '........................'; const d = new Date(dateStr); if (isNaN(d.getTime())) return '........................'; return `${d.getDate()} ${BULAN_NAMA[d.getMonth()]} ${d.getFullYear()}`; }
function genId() { return 'surat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5); }
function capitalizeText(str) { return (str || '').replace(/\b\w/g, c => c.toUpperCase()); }

/* ========== TOAST ========== */
function toast(msg, type = 'success') {
    const container = $('toastContainer');
    if (!container) return;
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    const icons = { success:'fa-circle-check', error:'fa-circle-xmark', warning:'fa-triangle-exclamation', info:'fa-circle-info' };
    el.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i><span>${msg}</span>`;
    container.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 3200);
}

/* ========== VALIDASI ========== */
function showErr(id) { const f = $(id); if(f) f.classList.add('field-error'); const e = $('err-'+id); if(e) e.classList.add('visible'); }
function clearErr(id) { const f = $(id); if(f) f.classList.remove('field-error'); const e = $('err-'+id); if(e) e.classList.remove('visible'); }
function validate() {
    let ok = true;
    const isNoHK = currentType && currentType.noHeaderKepada;
    if (!$('fNomor') || !$('fNomor').value.trim()) { showErr('fNomor'); ok = false; }
    if (!isNoHK && (!$('fPerihal') || !$('fPerihal').value.trim())) { showErr('fPerihal'); ok = false; }
    if (!isNoHK && (!$('fKepada') || !$('fKepada').value.trim())) { showErr('fKepada'); ok = false; }
    if (!$('fNamaTtd') || !$('fNamaTtd').value.trim()) { showErr('fNamaTtd'); ok = false; }
    return ok;
}

/* ========== TAB ========== */
function switchTab(tab) {
    $('panelBuat').classList.toggle('hidden', tab !== 'buat');
    $('panelRiwayat').classList.toggle('hidden', tab !== 'riwayat');
    $('tabBuat').classList.toggle('active', tab === 'buat');
    $('tabRiwayat').classList.toggle('active', tab === 'riwayat');
    if (tab === 'riwayat') renderRiwayat();
}

/* ========== RENDER JENIS SURAT ========== */
function renderTypeGrid() {
    const grid = $('typeGrid');
    if (!grid) return;
    let html = '';
    letterTypes.forEach(t => {
        const c = colorMap[t.color] || colorMap.emerald;
        html += `<button type="button" class="type-card ${c.bg} rounded-2xl p-4 group" data-type="${t.id}" onclick="selectType('${t.id}')"><div class="tc-icon w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center mb-3"><i class="fa-solid ${t.icon} ${c.text} text-lg"></i></div><p class="font-bold text-[13px] text-slate-800 leading-snug mb-1">${t.name}</p><p class="text-[10px] text-slate-400 font-medium leading-snug">${t.desc}</p></button>`;
    });
    grid.innerHTML = html;
}

/* ========== SELECT TYPE ========== */
function selectType(id) {
    currentType = letterTypes.find(t => t.id === id);
    if (!currentType) return;
    document.querySelectorAll('.type-card').forEach(el => el.classList.toggle('selected', el.dataset.type === id));
    $('secDataSurat').classList.remove('hidden');
    $('secDataSubjek').classList.remove('hidden');
    $('secTtd').classList.remove('hidden');
    if (!$('fTanggal').value) $('fTanggal').value = todayStr();
    const defPerihal = { 'sk-mahasiswa-aktif':'Keterangan Mahasiswa Aktif', 'izin-penelitian':'Izin Penelitian', 'izin-observasi':'Izin Observasi', 'pengajuan-judul':'Pengajuan Judul Skripsi/Tugas Akhir' };
    $('fPerihal').value = defPerihal[id] || '';
    const isNoHK = currentType.noHeaderKepada;
    const wrap = $('wrapHeaderKepada');
    if (wrap) wrap.style.display = isNoHK ? 'none' : '';
    const hiddenIds = currentType.hiddenFields || [];
    ['wrapSifat','wrapInstansiTtd','wrapJabatanBidang'].forEach(id => {
        const el = $(id);
        if (el) el.style.display = hiddenIds.some(h => h.includes(id.replace('wrap','f'))) ? 'none' : '';
    });
    onJabatanChange();
    renderSubjekFields();
    syncPreview();
}

/* ========== SUBJEK FIELDS ========== */
function getFieldConfig(f) {
    const map = { nama:{ label:'Nama Lengkap', ph:'Nama Lengkap' }, nim:{ label:'NIM', ph:'220101001' }, prodi:{ label:'Program Studi', type:'select', options:['Pendidikan Guru Madrasah Ibtidaiyah','Manajemen Pendidikan Islam'], def:'Pendidikan Guru Madrasah Ibtidaiyah' }, semester:{ label:'Semester', ph:'7', oninput:"this.value=this.value.replace(/[^0-9]/g,'').slice(0,2);syncPreview()" }, angkatan:{ label:'Tahun Angkatan', ph:'2017', oninput: "this.value = this.value.replace(/\\D/g,'').slice(0,4); syncPreview()" }, judulPenelitian:{ label:'Judul Penelitian', type:'textarea', rows:3, ph:'Judul penelitian lengkap' }, perguruanTinggi:{ label:'Perguruan Tinggi', ph:'STIT Tunas Bangsa Banjarnegara', def:'STIT Tunas Bangsa Banjarnegara' }, waktu:{ label:'Waktu Pelaksanaan', ph:'1 Januari - 28 Februari 2025' }, tempatPenelitian:{ label:'Tempat Penelitian', ph:'SD Negeri 1 Banjarnegara'}, durasi:{ label:'Durasi', ph:'2 bulan (1 Jan - 28 Feb 2025)'}, tanggalWisuda:{ label:'Tanggal Wisuda / Yudisium', inputType:'date' }, ipk:{ label:'IPK', inputType:'number', step:'0.01', ph:'3.85'}, predikat:{ label:'Predikat', type:'select', options:['Cum Laude','Sangat Memuaskan','Memuaskan'], def:'Memuaskan' }, namaPelaksana:{ label:'Nama Pelaksana', ph:'Nama Lengkap & Gelar'}, nidn:{ label:'NIDN', ph:'............'}, jabatanPelaksana:{ label:'Jabatan', ph:'Dosen'}, tugasDetail:{ label:'Rincian Tugas', type:'textarea', rows:3, ph:'Melaksanakan supervisi akademik di program studi...'}, tempatTugas:{ label:'Tempat Tugas', ph:'Kampus STIT Tunas Bangsa Banjarnegara'}, durasiTugas:{ label:'Durasi Tugas', ph:'3 hari (10-12 Maret 2025)'}, lamaCuti:{ label:'Lama Cuti', ph:'1 semester'}, mulaiCuti:{ label:'Mulai Cuti', inputType:'date' }, akhirCuti:{ label:'Akhir Cuti', inputType:'date' }, semesterAktif:{ label:'Semester Aktif', ph:'Ganjil 2024/2025'}, jenisBebas:{ label:'Jenis Bebas Tanggungan', type:'select', options:['Bebas Perpustakaan','Bebas Administrasi Keuangan','Bebas Laboratorium','Bebas Seluruh Tanggungan'], def:'Bebas Seluruh Tanggungan' }, jenisPermohonan:{ label:'Jenis Permohonan', type:'select', options:['Permohonan Dispensasi','Permohonan Perubahan Data','Perbaikan Nilai KHS','Permohonan Seminar Proposal'], def:'Permohonan Dispensasi' }, detailPermohonan:{ label:'Detail Permohonan', type:'textarea', rows:4, ph:'Mengajukan permohonan dispensasi untuk tidak mengikuti perkuliahan selama 1 minggu...'}, alasan:{ label:'Alasan', type:'textarea', rows:3, ph:'Sedang melaksanakan kegiatan di luar kota...'}, kelompok:{ label:'Kelompok', ph:'Kelompok 15', type:'select', options:['SD/MI','SMP/MTs','SMA/SMK/MA'], def:'SD/MI' }, namaPeneliti:{ label:'Nama Peneliti', ph:'Nama lengkap & gelar'}, jabatanPeneliti:{ label:'Jabatan Peneliti', ph:'Dosen'}, danaPenelitian:{ label:'Sumber Dana', ph:'Mandiri / Dikti'}, durasiPenelitian:{ label:'Durasi Penelitian', ph:'6 bulan'}, judulSkripsi:{ label:'Judul Skripsi/Tugas Akhir', type:'textarea', rows:3, ph:'Judul skripsi lengkap' }, pembimbing1:{ label:'Pembimbing I', ph:'Nama lengkap & gelar'}, pembimbing2:{ label:'Pembimbing II (jika ada)', ph:'Nama Lengkap & Gelar'}, tanggalUjian:{ label:'Tanggal Rencana Ujian', inputType:'date' }, tempatObservasi:{ label:'Tempat Observasi', ph:'SD Negeri 1 Banjarnegara/ Kelas IV'}, alamatObservasi:{ label:'Alamat Lengkap', ph:'Jl. Pendidikan No. 1, Banjarnegara'}, durasiObservasi:{ label:'Durasi Observasi', ph:'3 hari'}, jenisObservasi:{ label:'Jenis Observasi', type:'select', options:['Personal','Kelompok'], def:'Personal', oninput:"syncPreview()" }, mataKuliah:{ label:'Mata Kuliah', ph:'Strategi Pembelajaran', oninput:"syncPreview()" }, anggotaObservasi:{ label:'Anggota Kelompok (Maks. 4)', type:'textarea', rows:5, ph:'Format per baris (Titik Koma):\nNama Lengkap; NIM; Semester\nContoh:\nBudi Utomo; NIM12345; 5', oninput:"syncPreview()" }, noHp:{ label:'No. HP', ph:'081234567890' }, hariTanggal:{ label:'Hari/Tanggal Observasi', inputType:'date' }, namaDosenPengampu:{ label:'Nama Dosen Pengampu', ph:'Nama Lengkap & Gelar' }, nidnDosenPengampu:{ label:'NIDN Dosen Pengampu', ph:'198002152006041005' }, tahunAkademik:{ label:'Tahun Akademik', ph:'2024/2025',oninput:"if(this.value.length>9)this.value=this.value.slice(0,9);syncPreview()" }, semesterBejalan:{ label:'Semester Berjalan', ph:'I (Satu)'}, judulUsulan1:{ label:'Judul Usulan 1', type:'textarea', rows:2, ph:'Pengaruh Metode Pembelajaran Terhadap Motivasi Belajar...'}, judulUsulan2:{ label:'Judul Usulan 2 (Alternatif)', type:'textarea', rows:2, ph:'Implementasi Model Pembelajaran Kooperatif Dalam...'}, latarBelakang:{ label:'Latar Belakang', type:'textarea', rows:4, ph:'Berdasarkan hasil observasi di lapangan, ditemukan bahwa...'} };
    return map[f] || null;
}

/* ========== RENDER SUBJEK FIELDS ========== */
function renderSubjekFields() {
    const container = $('subjekFields');
    if (!currentType || !container) return;
    let html = '';
    currentType.subjekFields.forEach(f => {
        const cfg = getFieldConfig(f);
        if (!cfg) return;
        if (cfg.type === 'textarea') {
            const onInput = cfg.oninput || 'syncPreview()';
            html += `<div><label class="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 ml-1">${cfg.label}</label><textarea id="${f}" rows="${cfg.rows||3}" oninput="${onInput}" class="w-full rounded-2xl border-slate-200 bg-slate-50 text-sm p-3 border resize-none" placeholder="${cfg.ph||''}">${cfg.def||''}</textarea></div>`;
        } else if (cfg.type === 'select') {
            html += `<div><label class="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 ml-1">${cfg.label}</label><select id="${f}" onchange="onSubjekFieldChange()" class="w-full rounded-2xl border-slate-200 bg-slate-50 text-sm p-3 border appearance-none">${cfg.options.map(o => `<option value="${o}"${o===cfg.def?' selected':''}>${o}</option>`).join('')}</select></div>`;
        } else {
            html += `<div><label class="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 ml-1">${cfg.label}</label><input type="${cfg.inputType||'text'}" id="${f}" oninput="${cfg.oninput||'syncPreview()'}" class="w-full rounded-2xl border-slate-200 bg-slate-50 text-sm p-3 border" placeholder="${cfg.ph||''}" value="${cfg.def||''}"></div>`;
        }
    });
    container.innerHTML = html;
    if (currentType.onSubjekChange) {
        setTimeout(() => currentType.onSubjekChange(gatherData()), 50);
    }
}

function onSubjekFieldChange() {
    syncPreview();
    if (currentType && currentType.onSubjekChange) {
        setTimeout(() => currentType.onSubjekChange(gatherData()), 50);
    }
}

/* ========== PENANDATANGAN ========== */
function onJabatanChange() {
    const v = $('fJabatanTtd');
    if (!v) return;
    const val = v.value;
    if (signers[val] && signers[val].nama) {
        if ($('fNamaTtd')) $('fNamaTtd').value = signers[val].nama;
        if ($('fNipTtd')) $('fNipTtd').value = signers[val].nip;
    } else {
        if ($('fNamaTtd')) $('fNamaTtd').value = '';
        if ($('fNipTtd')) $('fNipTtd').value = '';
    }
    if (val === 'Mahasiswa') {
        if ($('fNamaTtd')) $('fNamaTtd').placeholder = 'Nama Lengkap Mahasiswa';
        if ($('fNipTtd')) $('fNipTtd').placeholder = 'NIM mahasiswa';$('fNipTtd').value = 'NIM. ';
    } else if (val === 'Dosen') {
        if ($('fNamaTtd')) $('fNamaTtd').placeholder = 'Nama Lengkap & Gelar)';
        if ($('fNipTtd')) $('fNipTtd').placeholder = 'NIDN Dosen';$('fNipTtd').value = 'NIDN. ';
    } else if (val === 'Kepala') {
        if ($('fNamaTtd')) $('fNamaTtd').placeholder = 'Nama Lengkap & Gelar';
        if ($('fNipTtd')) $('fNipTtd').placeholder = 'NIP/NIDN';$('fNipTtd').value = 'NIDN. ';
    } else if (val === 'Sekretaris') {
        if ($('fNamaTtd')) $('fNamaTtd').placeholder = 'Nama Lengkap & Gelar';
        if ($('fNipTtd')) $('fNipTtd').placeholder = 'NIP/NIDN';$('fNipTtd').value = 'NIDN. ';
    } else {
        if ($('fNamaTtd')) $('fNamaTtd').placeholder = 'Nama Lengkap & Gelar';
        if ($('fNipTtd')) $('fNipTtd').placeholder = 'NIP/NIDN/NIM';
    }
}

/* ========== GATHER DATA ========== */
function gatherData() {
    const d = { type: currentType ? currentType.id : '', nomor: $('fNomor')?.value || '', tanggal: $('fTanggal')?.value || '', lampiran: $('fLampiran')?.value || '-', sifat: $('fSifat')?.value || 'Biasa', perihal: $('fPerihal')?.value || '', kepada: $('fKepada')?.value || '', salam: $('fSalam')?.value || '', instansiTtd: $('fInstansiTtd')?.value || 'STIT Tunas Bangsa Banjarnegara', jabatanTtd: $('fJabatanTtd')?.value || '', bidangTtd: $('fBidangTtd')?.value || '', namaTtd: $('fNamaTtd')?.value || '', nipTtd: $('fNipTtd')?.value || '', subjek: {} };
    if (currentType) { currentType.subjekFields.forEach(f => { const el = $(f); d.subjek[f] = el ? el.value : ''; }); }
    return d;
}

/* ========== SYNC PREVIEW ========== */
function syncPreview() {
    if (!currentType) return;
    $('preview-empty')?.classList.add('hidden');
    $('preview-content')?.classList.remove('hidden');
    $('previewActions').style.display = 'flex';
    const d = gatherData();
    $('preview-content').innerHTML = buildLetterHTML(d);
}

/* ========== BUILD LETTER HTML (PREVIEW) ========== */
function buildLetterHTML(d) {
    const kop = buildKop();
    const isNoHK = currentType && currentType.noHeaderKepada;
    const judulBlock = (isNoHK && currentType.judulSurat) ? buildJudulSurat(d, currentType.judulSurat) : '';
    const header = isNoHK ? '' : (typeof currentType.customHeader === 'function' ? currentType.customHeader(d) : buildHeader(d));
    const kepadaBlock = isNoHK ? '' : buildKepada(d);
    const body = buildBodyNew(d);
    let ttd = '';
    if (currentType) {
        if (typeof currentType.customTtd === 'function') {
            ttd = currentType.customTtd(d);
        } else if (!currentType.noGlobalTtd) {
            ttd = buildTtd(d);
        }
    }
    return `${kop}${judulBlock}${header}${kepadaBlock}${body}${ttd}`;
}

function buildJudulSurat(d, judul) {
    return `<div style="text-align:center;margin-bottom:24px;font-size:13pt;line-height:1.4;"><p style="font-weight:800;text-transform:uppercase;margin:0;">${judul}</p>
            <p style="margin:0; font-size:11pt;">Nomor: ${d.nomor || '-'}</p></div>`;
}



function buildKop() {
    return `
    <div style="margin-bottom:20px;">
        <div style="display:flex;align-items:center;gap:16px;padding-bottom:6px;">
            <img src="https://portal.stitusa.ac.id/asset/logo-stit.png" style="width:70px;height:70px;object-fit:contain;flex-shrink:0;" />
            <div style="flex:1;text-align:center;">
                <div style="font-size:18px;font-weight:800;text-transform:uppercase;line-height:1.2;">Sekolah Tinggi Ilmu Tarbiyah</div>
                <div style="font-size:18px;font-weight:800;text-transform:uppercase;line-height:1.2;">STIT Tunas Bangsa Banjarnegara</div>
                <div style="font-size:10px;margin-top:4px;">Jl. Lapangan Kalisemi Indah No. 1-5 Parakancanggah, Banjarnegara, Jawa Tengah</div>
                <div style="font-size:10px;">Telp. (0286) 5985903 | Email: stittunasbangsa@gmail.com | Website: www.stitusa.ac.id</div>
            </div>
        </div>
        <div style="border-bottom:3px solid black;"></div>
        <div style="border-bottom:1px solid black;margin-top:2px;"></div>
    </div>`;
}

function buildHeader(d) {
    let html = `<div style="margin-bottom:24px;font-size:11pt;">`;
    html += `<div class="letter-header-row"><span class="letter-header-label">Nomor</span><span class="letter-header-value">: ${d.nomor || '-'}</span></div>`;
    html += `<div class="letter-header-row"><span class="letter-header-label">Lampiran</span><span>: ${d.lampiran || '-'}</span></div>`;
    html += `<div class="letter-header-row"><span class="letter-header-label">Perihal</span><span class="letter-header-value" style="text-transform:capitalize;">: ${d.perihal || '-'}</span></div>`;
    if (d.sifat && d.sifat !== 'Biasa') { html += `<div class="letter-header-row"><span class="letter-header-label">Sifat</span><span style="font-weight:bold;">: ${d.sifat}</span></div>`; }
    html += '</div>'; return html;
}

function buildKepada(d) {
    const lines = (d.kepada || '').split('\n').filter(l => l.trim());
    const salamLines = (d.salam || '').split('\n');
    let kepadaHTML = `<div style="display:flex; align-items:flex-start; margin-bottom:20px;"><div style="width:80px;">Kepada</div><div style="width:10px;">:</div><div>`;
    lines.forEach((l, i) => { kepadaHTML += `<div style="${i === 0 ? 'font-weight:bold;' : ''}">${l.trim()}</div>`; });
    kepadaHTML += `</div></div>`;
    const salamHTML = salamLines.map(l => `<p style="margin:0.3em 6em; font-size:11pt;">${l.trim() || '&nbsp;'}</p>`).join('');
    return kepadaHTML + salamHTML;
}

function buildBodyNew(d) {
    if (!currentType) return '<p style="margin-bottom:24px;font-size:11pt;">[Pilih jenis surat]</p>';
    if (typeof currentType.template === 'function') {
        try { return currentType.template(d); } catch(err) { return `<p style="margin-bottom:24px;font-size:11pt;color:red;">Error: ${err.message}</p>`; }
    } else { return '<p style="margin-bottom:10px;font-size:11pt;">[Template tidak tersedia]</p>'; }
}

function buildTtd(d) {
    const instansi = d.instansiTtd || 'STIT Tunas Bangsa Banjarnegara';
    const jabatan = d.jabatanTtd || '';
    const bidang = d.bidangTtd || '';
    const nama = d.namaTtd || '-';
    const nip = d.nipTtd || '';
    const bidangLine = bidang ? `<p style="margin:0 0 4px 0;">${bidang}</p>` : '';
    return `<div style="margin-top:16px;font-size:11pt; padding-right:40px;"><table style="width:100%;border-collapse:collapse;"><tr><td style="width:60%;vertical-align:top;"></td>
    <td style="width:40%;text-align:left;vertical-align:top;"><p style="margin:0 0 3px 0;">Banjarnegara, ${formatTgl(d.tanggal)}</p><p style="margin:0 0 3px 0;">${jabatan}</p>${bidangLine}<p style="margin:0 0 36px 0;">&nbsp;</p><p style="margin:0;font-weight:800;text-decoration:underline;">${nama}</p>${nip ? `<p style="margin:2px 0 0 0;font-size:10pt;">${nip}</p>` : ''}</td></tr></table></div>`;
}

/* ========== SIMPAN SURAT ========== */
function simpanSurat() {
    if (!currentType) { toast('Pilih jenis surat terlebih dahulu', 'warning'); return; }
    if (!validate()) { toast('Lengkapi field yang wajib diisi', 'error'); return; }
    const d = gatherData();
    d.id = genId();
    d.savedAt = new Date().toISOString();
    d.typeName = currentType.name;
    d.typeCode = currentType.code;
    history.unshift(d);
    localStorage.setItem('suratHistory', JSON.stringify(history));
    updateBadge();
    toast('Surat berhasil disimpan', 'success');
}

/* =========================================
   PDF EXPORT — v3.4 (Style Synced)
   Pendekatan: data-driven (bukan parse DOM)
   ========================================= */

// function _parseTableToRows(tableEl) {
//     const rows = [];
//     tableEl.querySelectorAll('tr').forEach(tr => {
//         const cells = tr.querySelectorAll('td');
//         if (cells.length >= 2) {
//             const styleAttr = (cells[1].getAttribute('style') || '');
//             const labelStyleAttr = (cells[0].getAttribute('style') || '');
//             rows.push([
//                 (cells[0].textContent || '').trim().replace(/:\s*$/, ''),
//                 (cells[1].textContent || '').trim(),
//                 {
//                     isUpper: styleAttr.includes('text-transform:uppercase'),
//                     isBold: styleAttr.includes('font-weight:bold') || labelStyleAttr.includes('font-weight:bold'),
//                     isItalic: styleAttr.includes('font-style:italic') || styleAttr.includes('italic'),
//                     color: (styleAttr.match(/color:(#[0-9a-fA-F]{3,8})/) || [])[1] || null
//                 }
//             ]);
//         }
//     });
//     return rows;
// }

function _parseTableToRows(tableEl) {
    // Cek jumlah kolom dari baris pertama (th atau td)
    let colCount = 0;
    const firstRow = tableEl.querySelector('tr');
    if (firstRow) {
        colCount = firstRow.querySelectorAll('th, td').length;
    }
    // Jika tidak ada, cek baris data pertama di tbody
    if (colCount === 0) {
        const firstDataRow = tableEl.querySelector('tbody tr, tr');
        if (firstDataRow) colCount = firstDataRow.querySelectorAll('td').length;
    }

    const isMultiCol = colCount > 2;  // true untuk tabel anggota kelompok (4 kolom)

    const rows = [];
    const tbody = tableEl.querySelector('tbody');
    const trs = tbody ? tbody.querySelectorAll('tr') : tableEl.querySelectorAll('tr');

    trs.forEach(tr => {
        const cells = tr.querySelectorAll('td');
        if (cells.length === 0) return;

        if (isMultiCol) {
            // Tabel multi kolom: ambil semua teks dari setiap td
            const rowData = Array.from(cells).map(cell => cell.textContent.trim());
            rows.push(rowData);
        } else {
            // Format label-value (2 kolom) seperti surat biasa
            if (cells.length < 2) return;
            const label = (cells[0].textContent || '').trim().replace(/:\s*$/, '');
            const value = (cells[1].textContent || '').trim();
            const styleAttr = (cells[1].getAttribute('style') || '');
            const labelStyleAttr = (cells[0].getAttribute('style') || '');
            rows.push([
                label,
                value,
                {
                    isUpper: styleAttr.includes('text-transform:uppercase'),
                    isBold: styleAttr.includes('font-weight:bold') || labelStyleAttr.includes('font-weight:bold'),
                    isItalic: styleAttr.includes('font-style:italic') || styleAttr.includes('italic'),
                    color: (styleAttr.match(/color:(#[0-9a-fA-F]{3,8})/) || [])[1] || null
                }
            ]);
        }
    });

    return { rows, isMultiCol, colCount };
}


function capitalizeText(str) {
    return (str || '')
        .toLowerCase()
        .replace(/\b\w/g, c => c.toUpperCase());
}

function _renderJustifiedLine(doc, line, x, y, maxWidth) {
    const words = line.split(/\s+/);
    if (words.length <= 1) { doc.text(line, x, y); return; }
    let totalWidth = 0;
    const widths = [];
    for (const w of words) { const ww = doc.getTextWidth(w); widths.push(ww); totalWidth += ww; }
    const gap = (maxWidth - totalWidth) / (words.length - 1);
    let cx = x;
    for (let i = 0; i < words.length; i++) { doc.text(words[i], cx, y); cx += widths[i] + gap; }
}

function _renderBodyPDF(doc, templateHTML, y, ml, mr, cw) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString('<body>' + templateHTML + '</body>', 'text/html');
    const nodes = Array.from(parsed.body.childNodes);
    let justify = false;
    for (const node of nodes) {
        if (node.nodeType === 1 && node.tagName === 'DIV') {
            const style = (node.getAttribute('style') || '');
            if (style.includes('text-align:justify') || style.includes('text-align: justify')) { justify = true; }
            break;
        }
    }
    for (const node of nodes) { y = _renderNodePDF(doc, node, y, ml, mr, cw, justify); }
    return y;
}

function _renderNodePDF(doc, node, y, ml, mr, cw, justify = false) {
    if (node.nodeType !== 1) return y;
    const tag = node.tagName;
    const PAGE_BOTTOM = 260;
    const PAGE_TOP = 20;
    const LINE_HEIGHT = 6; //JARAK line 1 paragraphs

    if (tag === 'P') {
        const pChildren = Array.from(node.childNodes);
        const hasInlineElements = pChildren.some(c => c.nodeType === 1 && (c.tagName === 'STRONG' || c.tagName === 'B'));
        const styleAttr = (node.getAttribute('style') || '');
        const pIsItalic = styleAttr.includes('italic');
        const pIsBold = styleAttr.includes('bold');
        let baseStyle = 'normal';
        if (pIsItalic && pIsBold) baseStyle = 'bolditalic';
        else if (pIsItalic) baseStyle = 'italic';
        else if (pIsBold) baseStyle = 'bold';
        
        const textIndentMatch = styleAttr.match(/text-indent:\s*([\d.]+)(em|px|mm)?/);
        let textIndentMm = 0;
        
        if (textIndentMatch) {
            const val = parseFloat(textIndentMatch[1]);
            const unit = textIndentMatch[2] || 'px';
        
            if (unit === 'em') textIndentMm = val * 3.528;
            else if (unit === 'px') textIndentMm = val * 0.264583;
            else if (unit === 'mm') textIndentMm = val;
        }
        doc.setFontSize(11);

        if (hasInlineElements) {
            const segments = [];
            for (const child of pChildren) {
                if (child.nodeType === 3) {
                    const parts = child.textContent.split(/(\s+)/);
                    parts.forEach(p => { if (p) segments.push({ text: p, bold: false }); });
                } else if (child.nodeType === 1 && (child.tagName === 'STRONG' || child.tagName === 'B')) {
                    const parts = child.textContent.split(/(\s+)/);
                    parts.forEach(p => { if (p) segments.push({ text: p, bold: true }); });
                } else if (child.nodeType === 1) {
                    const parts = child.textContent.split(/(\s+)/);
                    parts.forEach(p => { if (p) segments.push({ text: p, bold: false }); });
                }
            }
            const lines = [];
            
            let currentLine = [];
            let lineWordsWidth = 0;
            const spaceWidth = doc.getTextWidth(' ');
            let _isFirstLine = true;
            const firstLineCw = cw - textIndentMm;
            for (const seg of segments) {
                if (seg.text === ' ' || seg.text === '\t') continue;
                let effectiveStyle;
                if (baseStyle === 'italic' && seg.bold) effectiveStyle = 'bolditalic';
                else if (seg.bold) effectiveStyle = 'bold';
                else effectiveStyle = baseStyle;
                doc.setFont('helvetica', effectiveStyle);
                const wordWidth = doc.getTextWidth(seg.text);
                const threshold = _isFirstLine ? firstLineCw : cw;
                if (currentLine.length > 0 && lineWordsWidth + spaceWidth + wordWidth > threshold) {
                    lines.push({ words: currentLine, isFirst: _isFirstLine }); currentLine = []; lineWordsWidth = 0;
                    _isFirstLine = false;
                }
                currentLine.push({ text: seg.text, style: effectiveStyle, width: wordWidth });
                if (currentLine.length > 1) lineWordsWidth += spaceWidth;
                lineWordsWidth += wordWidth;
            }
            
            if (currentLine.length > 0) lines.push({ words: currentLine, isFirst: _isFirstLine });
            let cy = y;
            for (let li = 0; li < lines.length; li++) {
                if (cy > 260) { doc.addPage(); cy = 20; }
                const line = lines[li];
                const isLastLine = (li === lines.length - 1);
                const lineMl = line.isFirst ? ml + textIndentMm : ml;
                const lineCw = line.isFirst ? firstLineCw : cw;
                if (!justify || isLastLine || line.words.length === 1) {
                    let cx = lineMl;
                    for (const word of line.words) { doc.setFont('helvetica', word.style); doc.text(word.text, cx, cy); cx += word.width + spaceWidth; }
                } else {
                    const totalWordWidth = line.words.reduce((sum, w) => sum + w.width, 0);

                    let gap = 0;
                    if (line.words.length > 1) {
                        gap = (lineCw - totalWordWidth) / (line.words.length - 1);
                    }
                    
                    let cx = lineMl;
                    for (const word of line.words) {
                        doc.setFont('helvetica', word.style);
                        doc.text(word.text, cx, cy);
                        cx += word.width + gap;
                    }
                }
                cy += LINE_HEIGHT;
            }
            y = cy + 4;
        } else {
            const txt = (node.textContent || '').trim();
            
            if (!txt) return y;
            
            const lines = doc.splitTextToSize(txt, cw);
            const estimatedHeight = lines.length * 5;
            // CEK SEBELUM RENDER
            if (y + estimatedHeight > PAGE_BOTTOM) {
                doc.addPage();
                y = PAGE_TOP;
            }
            
            doc.setFont('helvetica', baseStyle);
            if (textIndentMm > 0) {
                const firstLines = doc.splitTextToSize(txt, cw - textIndentMm);
                if (firstLines.length > 0) {
                    if (y > 260) { doc.addPage(); y = PAGE_TOP; }
                    if (justify && firstLines.length > 1 && firstLines[0].includes(' ')) { _renderJustifiedLine(doc, firstLines[0], ml + textIndentMm, y, cw - textIndentMm); }
                    else { doc.text(firstLines[0], ml + textIndentMm, y); }
                    y += 5;
                }
                if (firstLines.length > 1) {
                    const restText = firstLines.slice(1).join(' ');
                    const restLines = doc.splitTextToSize(restText, cw);
                    for (let i = 0; i < restLines.length; i++) {
                        if (y > 260) { doc.addPage(); y = PAGE_TOP; }
                        if (justify && i < restLines.length - 1 && restLines[i].includes(' ')) { _renderJustifiedLine(doc, restLines[i], ml, y, cw); }
                        else { doc.text(restLines[i], ml, y); }
                        y += 5;
                    }
                }
            } else {
                for (let i = 0; i < lines.length; i++) {
                    if (y > 260) { doc.addPage(); y = PAGE_TOP; }
                    if (justify && i < lines.length - 1 && lines[i].includes(' ')) { _renderJustifiedLine(doc, lines[i], ml, y, cw); }
                    else { doc.text(lines[i], ml, y); }
                    y += 5;
                }
            }
            y += 2;
        }
    } 
    else if (tag === 'TABLE') {
    
        const tableInfo = _parseTableToRows(node);
        const { rows: tbody, isMultiCol, colCount } = tableInfo;
        const tbodyClean = tbody.filter(row => row && row.length > 0);
    
        if (tbodyClean.length === 0) return y;
    
        if (y > 240) { doc.addPage(); y = PAGE_TOP; }
    
        // ========== MULTI KOLOM (contoh: tabel anggota kelompok) ==========
        if (isMultiCol && colCount >= 3) {
            // Ambil header dari <thead> atau buat default
            let headers = [];
            const thead = node.querySelector('thead');
            if (thead) {
                const ths = thead.querySelectorAll('th');
                headers = Array.from(ths).map(th => th.textContent.trim());
            } else {
                headers = Array.from({ length: colCount }, (_, i) => `Kolom ${i+1}`);
            }
    
            // Data body (semua baris)
            let bodyRows = tbodyClean;
            
    
            // Estimasi tinggi
            const estimatedTableHeight = bodyRows.length * 8;
            if (y + estimatedTableHeight > PAGE_BOTTOM) {
                doc.addPage();
                y = PAGE_TOP;
            }
            
            // --- Atur lebar kolom (dalam mm) berdasarkan proporsi ---
            const tableWidth = cw - 20; // lebar tersedia (cw = lebar konten)
            let colWidths = [];
        
            if (colCount === 4) {
                // Proporsi untuk tabel anggota kelompok: No (10%), Nama (40%), NIM (25%), Semester (25%)
                colWidths.push(tableWidth * 0.10);
                colWidths.push(tableWidth * 0.40);
                colWidths.push(tableWidth * 0.25);
                colWidths.push(tableWidth * 0.25);
            } else if (colCount === 3) {
                // Contoh proporsi 3 kolom
                colWidths.push(tableWidth * 0.20);
                colWidths.push(tableWidth * 0.40);
                colWidths.push(tableWidth * 0.40);
            } else {
                // Fallback: semua kolom sama lebar
                const each = tableWidth / colCount;
                for (let i = 0; i < colCount; i++) colWidths.push(each);
            }
        
            // Konversi ke object columnStyles yang diperlukan autoTable
            const columnStyles = {};
            colWidths.forEach((w, idx) => {
                columnStyles[idx] = { cellWidth: w, halign: 'left' };
            });
    
            doc.autoTable({
                head: [headers],
                body: bodyRows.map(row => {
                    return row.map((cell, i) => {
                        // contoh: kolom ke-1 = Nama
                        if (i === 1) return capitalizeText(cell);
                        return cell;
                    });
                }),
                startY: y - 5,
                theme: 'plain', // penting: hilangkan semua background

                styles: {
                    fontSize: 11,
                    textColor: [0, 0, 0], // semua teks hitam
                    fillColor: false,     // no background
                    // lineWidth: 0.1        // opsional: garis tipis
                },
            
                headStyles: {
                    textColor: [0, 0, 0],
                    fillColor: false, // header tanpa background
                    fontStyle: 'bold'
                },
            
                bodyStyles: {
                    textColor: [0, 0, 0],
                    fillColor: false
                },
            
                columnStyles: columnStyles,
                
                margin: { left: ml + 5, right: mr + 1 }
            });
    
            y = doc.lastAutoTable.finalY + LINE_HEIGHT;
            if (y > PAGE_BOTTOM) {
                doc.addPage();
                y = PAGE_TOP;
            }
            return y;
        }
    
        // ========== 2 KOLOM (label - value) untuk surat biasa ==========
        let hasColored = false;
        tbodyClean.forEach(row => {
            if (row[2] && row[2].color) hasColored = true;
        });
    
        const estimatedTableHeight = tbodyClean.length * 8;
        if (y + estimatedTableHeight > PAGE_BOTTOM) {
            doc.addPage();
            y = PAGE_TOP;
        }
    
        doc.autoTable({
            body: tbodyClean.map(row => {
                let label = row[0] || '';
                let val = row[1] || '';
            
                if (row[2]?.isUpper) val = val.toUpperCase();
            
                if (/nama/i.test(label)) {
                    val = capitalizeText(val);
                }
            
                return [label, val];
            }),
            startY: y - 5,
            theme: 'plain',
            styles: {
                fontSize: 11,
                cellPadding: [1, 0],
                textColor: [0, 0, 0],
                fillColor: false
            },
            columnStyles: {
                0: { cellWidth: 34 },
                1: { cellWidth: 'auto', fontStyle: 'bold', textColor: hasColored ? [0, 0, 0] : undefined }
            },
            margin: { left: ml + 5, right: mr + 1 },
            didParseCell: function(data) {
                const row = tbodyClean[data.row.index];
                if (!row || data.column.index !== 1) return;
                const meta = row[2];
                if (!meta) return;
                if (meta.isBold) {
                    data.cell.styles.fontStyle = meta.isItalic ? 'bolditalic' : 'bold';
                } else {
                    data.cell.styles.fontStyle = meta.isItalic ? 'italic' : 'normal';
                }
                data.cell.styles.textColor = [0, 0, 0];
            }
        });
    
        y = doc.lastAutoTable.finalY + LINE_HEIGHT;
        if (y > PAGE_BOTTOM - 5) {
            doc.addPage();
            y = PAGE_TOP;
        }
        
    }
    else if (tag === 'DIV') {
        const children = Array.from(node.childNodes);
        const elementChildren = children.filter(c => c.nodeType === 1);
        const textChildren = children.filter(c => c.nodeType === 3 && (c.textContent || '').trim());
        if (elementChildren.length > 0) {
            for (const child of children) { y = _renderNodePDF(doc, child, y, ml, mr, cw, justify); }
        } else if (textChildren.length > 0) {
            const styleAttr = (node.getAttribute('style') || '');
            const isItalic = styleAttr.includes('italic');
            const isBold = styleAttr.includes('bold');
            let fontStyle = 'normal';
            if (isItalic && isBold) fontStyle = 'bolditalic';
            else if (isItalic) fontStyle = 'italic';
            else if (isBold) fontStyle = 'bold';
            doc.setFontSize(11);
            doc.setFont('helvetica', fontStyle);
            const paragraphs = (node.textContent || '').split('\n');
            for (const para of paragraphs) {
                const trimmed = para.trim();
                if (!trimmed) { y += 2; continue; }
                const lines = doc.splitTextToSize(trimmed, cw);
                for (let i = 0; i < lines.length; i++) {
                    if (y > 260) { doc.addPage(); y = PAGE_TOP; }
                    if (justify && i < lines.length - 1 && lines[i].includes(' ')) { _renderJustifiedLine(doc, lines[i], ml, y, cw); }
                    else { doc.text(lines[i], ml, y); }
                    y += 2;
                }
            }
            y += 2;
        }
    }
    return y;
}

async function generatePDF(elementId, filename) {
    const { jsPDF } = window.jspdf;
    if (!jsPDF) return alert('Library jsPDF belum dimuat.');
    const doc = new jsPDF('p', 'mm', 'a4');
    const pw = 210, ml = 15, mr = 15;
    const cw = pw - ml - mr;
    const bodyMl = ml + 22, bodyMr = mr + 5, bodyCw = pw - bodyMl - bodyMr;
    let y = 10;

    const d = riwayatViewData || gatherData();
    const activeType = riwayatViewData ? letterTypes.find(t => t.id === riwayatViewData.type) : currentType;

    let logoData = null;
    try {
        const resp = await fetch('https://portal.stitusa.ac.id/asset/logo-stit.png');
        const blob = await resp.blob();
        logoData = await new Promise(resolve => { const fr = new FileReader(); fr.onloadend = () => resolve(fr.result); fr.readAsDataURL(blob); });
    } catch (e) { console.warn('Logo fetch error (kemungkinan CORS):', e); }

    if (logoData) { doc.addImage(logoData, 'PNG', ml, y + 2, 20, 20); }
    const kopLeft = logoData ? ml + 24 : ml;
    const kopW = pw - mr - kopLeft;
    const kopCx = kopLeft + kopW / 2;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SEKOLAH TINGGI ILMU TARBIYAH', kopCx, y + 7, { align: 'center' });
    doc.setFontSize(14);
    doc.text('STIT TUNAS BANGSA BANJARNEGARA', kopCx, y + 13, { align: 'center' });
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Jl. Lapangan Kalisemi Indah No. 1-5 Parakancanggah, Banjarnegara, Jawa Tengah', kopCx, y + 18, { align: 'center' });
    doc.text('Telp. (0286) 5985903 | Email: stittunasbangsa@gmail.com | Website: www.stititusa.ac.id', kopCx, y + 22, { align: 'center' });
    y += 24;
    doc.setDrawColor(0);
    doc.setLineWidth(0.6);
    doc.line(ml, y, pw - mr, y);
    doc.setLineWidth(0.2);
    doc.line(ml, y + 0.8, pw - mr, y + 0.8);
    y += 10;

    const skipHK = activeType && activeType.noHeaderKepada;
    const hasCustomHeader = activeType && typeof activeType.customHeader === 'function';
    const rightMargin = 5; // bisa 5–15 sesuai kebutuhan Banjarnegara, [date]

    if (skipHK && activeType.judulSurat) {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        const judulText = activeType.judulSurat.toUpperCase();
        const judulW = doc.getTextWidth(judulText);
        doc.text(judulText, (pw - judulW) / 2, y);
        y += 5;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        const nomorText = 'Nomor: ' + (d.nomor || '-');
        const nomorW = doc.getTextWidth(nomorText);
        doc.text(nomorText, (pw - nomorW) / 2, y);
        y += 15;
    }
    if (!skipHK) {
        if (hasCustomHeader) {
            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            doc.text('Nomor', ml+2, y);
            doc.text(': ' + (d.nomor || '-'), ml + 20, y);
            doc.text('Banjarnegara, ' + formatTgl(d.tanggal), pw - mr - rightMargin, y, { align: 'right' });
            y += 6;
            doc.text('Lampiran', ml+2, y);
            doc.text(': ' + (d.lampiran || '-'), ml + 20, y);
            y += 6;
            doc.text('Perihal', ml+2, y);
            doc.text(': ' + capitalizeText(d.perihal || '-'), ml + 20, y);
            y += 10;
        } else {
            doc.setFontSize(11);
            const headerRows = [
                ['Nomor', ': ' + (d.nomor || '-')],
                ['Lampiran', ': ' + (d.lampiran || '-')],
                ['Perihal', ': ' + capitalizeText(d.perihal || '-')]
            ];
            if (d.sifat && d.sifat !== 'Biasa') { headerRows.push(['Sifat', ': ' + d.sifat]); }
            for (let ri = 0; ri < headerRows.length; ri++) {
                const [label, value] = headerRows[ri];
                doc.setFont('helvetica', 'normal');
                doc.text(label, ml, y);
                if (label === 'Sifat') { doc.setFont('helvetica', 'bold'); } else { doc.setFont('helvetica', 'normal'); }
                const vLines = doc.splitTextToSize(value, cw - 20);
                for (let i = 0; i < vLines.length; i++) {
                    if (i === 0) { doc.text(vLines[i], ml + 20, y); } else { doc.text('  ' + vLines[i], ml + 20, y); }
                    if (i < vLines.length - 1) y += 6;
                }
                y += 5;
            }
            y += 3;
        }

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        const kpLines = (d.kepada || '').split('\n').filter(l => l.trim());
        if (y > 270) { doc.addPage(); y = PAGE_TOP; }
        doc.text('Kepada', ml+2, y);
        if (kpLines.length > 0) {
            doc.setFont('helvetica', 'bold');
            const kpFirstLines = doc.splitTextToSize(': ' + kpLines[0], cw - 20);
            for (let i = 0; i < kpFirstLines.length; i++) {
                if (y > 260) { doc.addPage(); y = PAGE_TOP; }
                doc.text(i === 0 ? kpFirstLines[i] : '  ' + kpFirstLines[i], ml + 20, y);
                y += 6;
            }
            if (kpLines.length > 1) {
                doc.setFont('helvetica', 'bold');
                const vLines2 = doc.splitTextToSize(kpLines[1].trim(), cw - 20);
                for (let i = 0; i < vLines2.length; i++) {
                    if (y > 260) { doc.addPage(); y = PAGE_TOP; }
                    doc.text(i === 0 ? vLines2[i] : '  ' + vLines2[i], ml + 25, y);
                    y += 6;
                }
            }
            if (kpLines.length > 2) {
                doc.setFont('helvetica', 'normal');
                for (let li = 2; li < kpLines.length; li++) {
                    const vLines = doc.splitTextToSize(kpLines[li].trim(), cw - 20);
                    for (let i = 0; i < vLines.length; i++) {
                        if (y > 260) { doc.addPage(); y = PAGE_TOP; }
                        doc.text(i === 0 ? vLines[i] : '  ' + vLines[i], ml + 22, y);
                        y += 10;
                    }
                }
            }
        } else {
            doc.text(': -', ml + 20, y);
            y += 6;
        }
        doc.setFont('helvetica', 'normal');
        y += 2;
        const salamLines = (d.salam || 'Dengan hormat,').split('\n');
        for (let si = 0; si < salamLines.length; si++) {
            const sl = salamLines[si].trim();
            if (!sl) continue;
            if (y > 260) { doc.addPage(); y = PAGE_TOP; }
            doc.setFont('helvetica', 'normal');
            doc.text(sl, bodyMl, y);
            y += 5;
        }
        y += 3;
    }

    if (activeType && typeof activeType.template === 'function') {
        try {
            const bodyHTML = activeType.template(d);
            y = _renderBodyPDF(doc, bodyHTML, y, bodyMl, bodyMr, bodyCw);
        } catch (err) { console.error('Body render error:', err); }
    }

    if (activeType && typeof activeType.customTtd === 'function') {
        if (y > 245) { doc.addPage(); y = PAGE_TOP; } else { y = Math.max(y + 3, 190); }
        const namaKaprodi = d.namaTtd || '-';
        const nipKaprodi = d.nipTtd || '';
        const namaDosenPengampu = (d.subjek && d.subjek.namaDosenPengampu) ? d.subjek.namaDosenPengampu : '-';
        const nidnDosenPengampu = (d.subjek && d.subjek.nidnDosenPengampu) ? d.subjek.nidnDosenPengampu : '-';
        const prodiKaprodi = (d.subjek && d.subjek.prodi) ? d.subjek.prodi : '-';
        const leftX = ml + 22;
        const rightX = ml + Math.floor(cw / 2) + 35;
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');
        doc.text('Mengetahui,', leftX, y); y += 5;
        doc.text('Kepala Program Studi', leftX, y);
        doc.text('Dosen Pengampu', rightX, y); y += 5;
        doc.text(prodiKaprodi, leftX, y); y += 20;
        doc.setFont('helvetica', 'bold');
        const kapW = doc.getTextWidth(namaKaprodi);
        doc.text(namaKaprodi, leftX, y);
        doc.setLineWidth(0.3);
        doc.line(leftX, y + 0.5, leftX + kapW, y + 0.5);
        const dosW = doc.getTextWidth(namaDosenPengampu);
        doc.text(namaDosenPengampu, rightX, y);
        doc.line(rightX, y + 0.5, rightX + dosW, y + 0.5);
        y += 5;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        if (nipKaprodi) doc.text( nipKaprodi, leftX, y);
        if (nidnDosenPengampu) doc.text('NIDN. ' + nidnDosenPengampu, rightX, y);
        y += 25;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text('Tembusan :', ml+22, y); y += 5;
        doc.setFont('helvetica', 'normal');
        doc.text('- Wakil Ketua Bidang Akademik', ml+23, y); y += 5;
        doc.text('- Arsip', ml+23, y);
    } else if (!(activeType && activeType.noGlobalTtd)) {
        if (y > 220) { doc.addPage(); y = PAGE_TOP; } 
        else { 
            if (y < 150) y = 150;
            else y += 2; }
        // const instansi = d.instansiTtd || 'STIT Tunas Bangsa Banjarnegara';
        const jabatan = d.jabatanTtd || '';
        const bidang = d.bidangTtd || '';
        const nama = d.namaTtd || '-';
        const nip = d.nipTtd || '';
        const tglStr = 'Banjarnegara, ' + formatTgl(d.tanggal);
        const ttdX = pw - mr - 70;
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');
        doc.text(tglStr, ttdX, y); y += 5;
        // doc.text(instansi, ttdX, y); y += 5;
        doc.text(jabatan, ttdX, y); y += 5;
        if (bidang) { doc.text(bidang, ttdX, y); y += 5; }
        y += 18;
        doc.setFont('helvetica', 'bold');
        const namaWidth = doc.getTextWidth(nama);
        doc.text(nama, ttdX, y);
        doc.setLineWidth(0.3);
        doc.line(ttdX, y + 0.5, ttdX + namaWidth, y + 0.5);
        y += 5;
        if (nip) {
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(nip, ttdX, y);
        }
    }

    doc.save(filename);
    toast('PDF berhasil dibuat', 'success');
}

function downloadPDFPreview() { riwayatViewData = null; generatePDF('preview-content', 'Surat_' + ($('fNomor')?.value || 'document') + '_A4.pdf'); }
function downloadPDF() { generatePDF('modalContent', 'Surat_' + ((riwayatViewData?.typeCode) || (currentType?.code) || 'document') + '_A4.pdf'); }
function printPreview() { riwayatViewData = null; window.print(); }
function printModal() { window.print(); }

/* ========== RIWAYAT ========== */
function updateBadge() {
    const badge = $('riwayatBadge');
    if (!badge) return;
    if (history.length > 0) { badge.classList.remove('hidden'); badge.textContent = history.length; }
    else { badge.classList.add('hidden'); }
}

function renderRiwayat() {
    const container = $('riwayatContent');
    if (!container) return;
    const q = ($('searchRiwayat')?.value || '').toLowerCase();
    const filtered = history.filter(h => (h.nomor||'').toLowerCase().includes(q) || (h.perihal||'').toLowerCase().includes(q) || (h.typeName||'').toLowerCase().includes(q));
    if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:64px 0;"><i class="fa-solid fa-folder-open" style="font-size:48px;color:#e2e8f0;margin-bottom:10px;"></i><p style="color:#94a3b8;font-weight:bold;">${q ? 'Tidak ditemukan' : 'Belum ada surat tersimpan'}</p></div>`;
        return;
    }
    container.innerHTML = `<div style="overflow-x:auto;" class="custom-scrollbar"><table style="width:100%;font-size:14px;"><thead><tr style="border-bottom:2px solid #e2e8f0;"><th style="text-align:left;padding:12px 16px;font-size:10px;font-weight:800;color:#94a3b8;text-transform:uppercase;">No</th><th style="text-align:left;padding:12px 16px;font-size:10px;font-weight:800;color:#94a3b8;text-transform:uppercase;">Nomor</th><th style="text-align:left;padding:12px 16px;font-size:10px;font-weight:800;color:#94a3b8;text-transform:uppercase;">Jenis</th><th style="text-align:left;padding:12px 16px;font-size:10px;font-weight:800;color:#94a3b8;text-transform:uppercase;">Perihal</th><th style="text-align:left;padding:12px 16px;font-size:10px;font-weight:800;color:#94a3b8;text-transform:uppercase;">Tanggal</th><th style="text-align:center;padding:12px 16px;font-size:10px;font-weight:800;color:#94a3b8;text-transform:uppercase;">Aksi</th></tr></thead><tbody>${filtered.map((h, i) => `<tr class="hist-row" style="border-bottom:1px solid #f1f5f9;"><td style="padding:12px 16px;color:#94a3b8;font-weight:bold;font-size:12px;">${i+1}</td><td style="padding:12px 16px;font-family:monospace;font-weight:bold;font-size:12px;color:#334155;">${h.nomor}</td><td style="padding:12px 16px;"><span style="display:inline-block;background:#ecfdf5;color:#047857;font-size:10px;font-weight:bold;padding:4px 10px;border-radius:8px;">${h.typeName}</span></td><td style="padding:12px 16px;color:#475569;font-weight:500;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${h.perihal}</td><td style="padding:12px 16px;color:#94a3b8;font-size:12px;">${formatTgl(h.tanggal)}</td><td style="padding:12px 16px;text-align:center;"><button onclick="lihatSurat('${h.id}')" style="padding:6px 12px;font-size:10px;font-weight:bold;color:#059697;background:#ecfdf5;border-radius:8px;border:none;cursor:pointer;margin-right:4px;"><i class="fa-solid fa-eye" style="margin-right:4px;"></i>Lihat</button><button onclick="hapusSurat('${h.id}')" style="padding:6px 12px;font-size:10px;font-weight:bold;color:#dc2626;background:#fef2f2;border-radius:8px;border:none;cursor:pointer;"><i class="fa-solid fa-trash-can" style="margin-right:4px;"></i>Hapus</button></td></tr>`).join('')}</tbody></table></div></div>`;
}

function lihatSurat(id) {
    const h = history.find(x => x.id === id);
    if (!h) return;
    riwayatViewData = h;
    const modalPreview = $('modalPreview');
    if (!modalPreview) return;
    const type = letterTypes.find(t => t.id === h.type);
    let contentHTML = '';
    if (type && typeof type.template === 'function') {
        const skipHK = type.noHeaderKepada;
        const judulHTML = (skipHK && type.judulSurat) ? buildJudulSurat(h, type.judulSurat) : '';
        const headerHTML = skipHK ? '' : (typeof type.customHeader === 'function' ? type.customHeader(h) : buildHeader(h));
        const kepadaHTML = skipHK ? '' : buildKepada(h);
        const ttdHTML = (typeof type.customTtd === 'function') ? type.customTtd(h) : (!type.noGlobalTtd ? buildTtd(h) : '');
        contentHTML = buildKop() + judulHTML + headerHTML + kepadaHTML + type.template(h) + ttdHTML;
    } else { contentHTML = '<p>Error</p>'; }
    modalPreview.innerHTML = `<div class="preview-paper letter-content print-area-active" id="modalContent" style="width:794px; padding:40px; font-size:11pt; color:black; background:white; margin:auto;">${contentHTML}</div>`;
    $('modalSurat')?.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() { $('modalSurat')?.classList.remove('show'); document.body.style.overflow = ''; riwayatViewData = null; }
function hapusSurat(id) {
    if(confirm('Yakin ingin menghapus surat ini?')) {
        history = history.filter(x => x.id !== id);
        localStorage.setItem('suratHistory', JSON.stringify(history));
        updateBadge();
        renderRiwayat();
        toast('Surat berhasil dihapus', 'info');
    }
}

/* ========== RESET ========== */
function resetForm() {
    currentType = null;
    document.querySelectorAll('.type-card').forEach(el => el.classList.remove('selected'));
    $('secDataSurat')?.classList.add('hidden');
    $('secDataSubjek')?.classList.add('hidden');
    $('secTtd')?.classList.add('hidden');
    ['fNomor','fTanggal','fLampiran','fPerihal','fKepada','fNamaTtd','fNipTtd','fInstansiTtd','fBidangTtd'].forEach(id => { const el = $(id); if (el) el.value = id === 'fLampiran' ? '-' : (id === 'fInstansiTtd' ? 'STIT Tunas Bangsa Banjarnegara' : ''); });
    if ($('fSalam')) $('fSalam').value = 'Dengan hormat,';
    if ($('fSifat')) $('fSifat').value = 'Biasa';
    if ($('fJabatanTtd')) $('fJabatanTtd').value = 'Ketua';
    const wrap = $('wrapHeaderKepada');
    if (wrap) wrap.style.display = '';
    ['wrapSifat','wrapInstansiTtd','wrapJabatanBidang'].forEach(id => {
        const el = $(id);
        if (el) el.style.display = '';
    });
    $('preview-empty')?.classList.remove('hidden');
    $('preview-content')?.classList.add('hidden');
    $('previewActions').style.display = 'none';
    document.querySelectorAll('.error-msg').forEach(e => e.classList.remove('visible'));
    document.querySelectorAll('.field-error').forEach(e => e.classList.remove('field-error'));
    toast('Form telah dibersihkan', 'info');
}

/* ========== INIT ========== */
function init() {
    if ($('footerYear')) $('footerYear').textContent = new Date().getFullYear();
    renderTypeGrid();
    updateBadge();
}
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
