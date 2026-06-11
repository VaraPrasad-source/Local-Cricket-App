// ============================================
// MAIN APP ENTRY
// ============================================
import { store } from './store.js';
import { initFirebase } from './firebase.js';
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderWorkspace } from './pages/workspace.js';
import { renderRoleSelection } from './pages/roleSelection.js';
import { renderProfile } from './pages/profile.js';

const app = document.getElementById('app');

// Simple SPA router
let currentParams = {};

function navigate(page, params = {}) {
  currentParams = params;
  window.location.hash = page;
}

function route() {
  const hash = window.location.hash.slice(1) || 'select-role';
  const user = store.getCurrentUser();

  // Clear modal on navigation
  document.getElementById('modal-root').innerHTML = '';

  // Auth guard
  if (!user && hash !== 'login' && hash !== 'register' && hash !== 'select-role') {
    navigate('select-role');
    return;
  }

  switch (hash) {
    case 'select-role':
      if (user) { navigate('dashboard'); return; }
      renderRoleSelection(app, navigate);
      break;
    case 'login':
      if (user) { navigate('dashboard'); return; }
      renderLogin(app, navigate, currentParams);
      break;
    case 'register':
      renderRegister(app, navigate, currentParams);
      break;
    case 'dashboard':
      renderDashboard(app, navigate);
      break;
    case 'profile':
      renderProfile(app, navigate);
      break;
    case 'workspace':
      renderWorkspace(app, navigate, currentParams);
      break;
    default:
      navigate('select-role');
  }
}

// Listen for hash changes
window.addEventListener('hashchange', route);

// Init
async function init() {
  await initFirebase();
  await store.syncFromFirebase();
  
  // Check if user is logged in
  const user = store.getCurrentUser();
  if (user) {
    navigate('dashboard');
  } else {
    navigate('select-role');
  }
}

init();
