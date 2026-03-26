// ============================================================
//  BUDGET BARBER — Shared JS
//  shared.js  |  All apps include this
// ============================================================

// ── SUPABASE ─────────────────────────────────────────────────
// Replace these with your actual Supabase project credentials
const SUPABASE_URL  = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_KEY  = 'YOUR_ANON_KEY';

let _sb = null;
function getSupabase() {
  if (_sb) return _sb;
  try {
    if (typeof supabase !== 'undefined') {
      _sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
  } catch (e) { console.warn('Supabase not available — demo mode'); }
  return _sb;
}

// ── DEMO DATA STORE ───────────────────────────────────────────
// In production this would be read from Supabase.
// Using localStorage so data persists across the separate pages.

function getStylests() {
  try {
    return JSON.parse(localStorage.getItem('bb_stylists') || 'null') || _defaultStylests();
  } catch { return _defaultStylests(); }
}
function saveStylests(arr) {
  localStorage.setItem('bb_stylists', JSON.stringify(arr));
}
function getRecruiters() {
  try {
    return JSON.parse(localStorage.getItem('bb_recruiters') || 'null') || _defaultRecruiters();
  } catch { return _defaultRecruiters(); }
}
function saveRecruiters(arr) {
  localStorage.setItem('bb_recruiters', JSON.stringify(arr));
}

function _defaultStylests() {
  return [
    { id:'BB-2024-0001', name:'Rahul Sharma', phone:'9876543210', age:24, home_location:'Guntur, AP', address:'Flat 5, MG Road, Hyderabad', experience:'2-3 years', max_billing:55000, prev_fixed:15000, prev_incentive:10, prev_food:'provided', prev_room:'not_provided', exp_fixed:20000, exp_incentive:12, exp_food:'required', exp_room:'not_provided', prev_location:'Hyderabad', all_locations:'StyleX Hyderabad, TrimKing Guntur', instagram:'https://instagram.com/rahul.cuts', available:true, join_timeline:'immediate', ref_name:'Suresh Kumar', ref_phone:'9811223344', no_gutka:true, no_weed:true, no_alcohol:true, wear_uniform:true, stay_neat:true, follow_timing:true, respect_customers:true, keep_clean:true, no_nuisance:true, performance_target:true, follow_metrics:true, status:'verified', created_at:'2024-11-10T09:00:00Z' },
    { id:'BB-2024-0002', name:'Aakash Reddy', phone:'9876543211', age:27, home_location:'Vijayawada, AP', address:'12 Main St, Vijayawada', experience:'3-5 years', max_billing:72000, prev_fixed:18000, prev_incentive:12, prev_food:'provided', prev_room:'provided', exp_fixed:25000, exp_incentive:15, exp_food:'required', exp_room:'required', prev_location:'Bangalore', all_locations:'Grand Salon Bangalore, Trim Masters Vijayawada', instagram:'https://instagram.com/aakash.styles', available:true, join_timeline:'1month', ref_name:'Ravi Teja', ref_phone:'9822334455', no_gutka:true, no_weed:true, no_alcohol:true, wear_uniform:true, stay_neat:true, follow_timing:true, respect_customers:true, keep_clean:true, no_nuisance:true, performance_target:true, follow_metrics:true, status:'verified', created_at:'2024-11-12T10:30:00Z' },
    { id:'BB-2024-0003', name:'Pradeep Singh', phone:'9876543212', age:22, home_location:'Delhi', address:'Sector 15, Noida', experience:'1-2 years', max_billing:38000, prev_fixed:12000, prev_incentive:8, prev_food:'not_provided', prev_room:'not_provided', exp_fixed:16000, exp_incentive:10, exp_food:'required', exp_room:'required', prev_location:'Delhi', all_locations:'Quick Cuts Delhi', instagram:'', available:false, join_timeline:'2months', ref_name:'', ref_phone:'', no_gutka:true, no_weed:false, no_alcohol:true, wear_uniform:true, stay_neat:true, follow_timing:false, respect_customers:true, keep_clean:true, no_nuisance:true, performance_target:true, follow_metrics:true, status:'pending', created_at:'2024-11-15T11:00:00Z' },
    { id:'BB-2024-0004', name:'Kiran Kumar', phone:'9876543213', age:30, home_location:'Mumbai', address:'Andheri West, Mumbai', experience:'5+ years', max_billing:95000, prev_fixed:25000, prev_incentive:15, prev_food:'provided', prev_room:'provided', exp_fixed:30000, exp_incentive:18, exp_food:'provided', exp_room:'required', prev_location:'Mumbai', all_locations:'Elite Salon Mumbai, StyleMax Pune, TopCuts Nashik', instagram:'https://instagram.com/kiran.mastercuts', available:true, join_timeline:'immediate', ref_name:'Master Ramesh', ref_phone:'9833445566', no_gutka:true, no_weed:true, no_alcohol:true, wear_uniform:true, stay_neat:true, follow_timing:true, respect_customers:true, keep_clean:true, no_nuisance:true, performance_target:true, follow_metrics:true, status:'verified', created_at:'2024-11-18T08:15:00Z' },
    { id:'BB-2024-0005', name:'Venkat Rao', phone:'9876543214', age:26, home_location:'Chennai', address:'Anna Nagar, Chennai', experience:'2-3 years', max_billing:48000, prev_fixed:14000, prev_incentive:10, prev_food:'not_provided', prev_room:'not_provided', exp_fixed:18000, exp_incentive:12, exp_food:'required', exp_room:'not_required', prev_location:'Chennai', all_locations:'City Salon Chennai, Prestige Barbers', instagram:'', available:true, join_timeline:'1month', ref_name:'', ref_phone:'', no_gutka:true, no_weed:true, no_alcohol:false, wear_uniform:true, stay_neat:true, follow_timing:true, respect_customers:true, keep_clean:true, no_nuisance:true, performance_target:true, follow_metrics:true, status:'pending', created_at:'2024-11-20T14:00:00Z' },
  ];
}
function _defaultRecruiters() {
  const thirtyDays = new Date(Date.now() + 30*86400000).toISOString();
  return [
    { id:'REC-001', salon_name:'Style King Salon', phone:'9876543000', pin:'123456', email:'recruiter@demo.com', location:'Hyderabad', franchise:'yes', address:'Banjara Hills, Hyderabad', plan:'premium', plan_expiry: thirtyDays, plan_requested:false, created_at:'2024-10-01T09:00:00Z' },
    { id:'REC-002', salon_name:'Trim Masters', phone:'9876543001', pin:'123456', email:'trim@demo.com', location:'Bangalore', franchise:'no', address:'Koramangala, Bangalore', plan:'basic', plan_expiry:null, plan_requested:false, created_at:'2024-10-05T11:00:00Z' },
  ];
}

// ── AUTH HELPERS ──────────────────────────────────────────────
function setRecruiterSession(rec) {
  sessionStorage.setItem('bb_recruiter', JSON.stringify(rec));
}
function getRecruiterSession() {
  try { return JSON.parse(sessionStorage.getItem('bb_recruiter')); } catch { return null; }
}
function clearRecruiterSession() { sessionStorage.removeItem('bb_recruiter'); }
function isAdminLoggedIn() { return sessionStorage.getItem('bb_admin') === '1'; }
function setAdminSession()  { sessionStorage.setItem('bb_admin', '1'); }
function clearAdminSession(){ sessionStorage.removeItem('bb_admin'); }

// ── TOAST ─────────────────────────────────────────────────────
let _toastTimer = null;
function showToast(msg, type = 'info') {
  let el = document.getElementById('_toast');
  if (!el) {
    el = document.createElement('div');
    el.id = '_toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = `toast toast-${type} show`;
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
}

// ── MODAL HELPERS ─────────────────────────────────────────────
function openModal(id)  { const m = document.getElementById(id); if(m) m.classList.add('open'); }
function closeModal(id) { const m = document.getElementById(id); if(m) m.classList.remove('open'); }

// ── GENERATE REG ID ───────────────────────────────────────────
function genRegId() {
  const yr  = new Date().getFullYear();
  const num = String(Math.floor(Math.random() * 9000) + 1000);
  return `BB-${yr}-${num}`;
}

// ── FORMAT CURRENCY ───────────────────────────────────────────
function rupee(v) {
  if (!v || isNaN(v)) return '—';
  return '₹' + Number(v).toLocaleString('en-IN');
}

// ── AGREE ITEM TOGGLE ─────────────────────────────────────────
function toggleAgree(el) {
  if (el.classList.contains('agree-item')) {
    const cb = el.querySelector('input[type=checkbox]');
    if (cb) { cb.checked = !cb.checked; el.classList.toggle('checked', cb.checked); }
  }
}

// ── TAB SWITCHER ──────────────────────────────────────────────
function switchTab(groupId, tabName) {
  const root = groupId ? document.getElementById(groupId) : document;
  root.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabName);
  });
  root.querySelectorAll('.tab-pane').forEach(p => {
    p.classList.toggle('active', p.id === tabName);
  });
}

// ── UPLOAD HELPER ─────────────────────────────────────────────
const _uploads = {};
function handleUpload(key, input) {
  const files = Array.from(input.files);
  _uploads[key] = (_uploads[key] || []).concat(files);
  const prev = document.getElementById('prev-' + key);
  if (!prev) return;
  prev.innerHTML = '';
  _uploads[key].forEach(f => {
    const r = new FileReader();
    r.onload = e => {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.className = 'preview-thumb';
      prev.appendChild(img);
    };
    r.readAsDataURL(f);
  });
  const c = document.createElement('div');
  c.className = 'upload-count';
  c.textContent = `✓ ${_uploads[key].length} file(s) ready`;
  prev.appendChild(c);
}

// ── SUPABASE UPLOAD ───────────────────────────────────────────
async function uploadPhotos(regId) {
  const sb = getSupabase();
  if (!sb) return;
  for (const [key, files] of Object.entries(_uploads)) {
    for (const file of files) {
      try {
        await sb.storage.from('hairstylist-photos')
          .upload(`${regId}/${key}/${file.name}`, file, { upsert: true });
      } catch (e) { console.warn('Upload failed:', e); }
    }
  }
}

// ── CSV EXPORT ────────────────────────────────────────────────
function exportCSV(stylists) {
  const h = ['ID','Name','Phone','Age','Home Location','Experience','Max Billing','Exp Fixed','Exp Incentive%','Available','Join Timeline','Status','Instagram','Ref Name'];
  const rows = stylists.map(s => [
    s.id, s.name, s.phone, s.age, s.home_location,
    s.experience, s.max_billing, s.exp_fixed, s.exp_incentive,
    s.available ? 'Yes':'No', s.join_timeline, s.status,
    s.instagram||'', s.ref_name||''
  ]);
  const csv = [h, ...rows].map(r => r.map(v => `"${v||''}"`).join(',')).join('\n');
  const a   = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([csv], {type:'text/csv'})),
    download: `bb-hairstylists-${new Date().toISOString().slice(0,10)}.csv`
  });
  a.click();
  showToast('CSV exported / CSV डाउनलोड हो गई', 'success');
}
