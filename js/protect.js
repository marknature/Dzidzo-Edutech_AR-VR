// Pages that require authentication
const restrictedPages = [
  { page: 'business_lobby.html', level: null},
  { page: 'class-coming-soon.html', level: null },
  { page: 'classroom_1.html', level: null },
  { page: 'classroom_2.html', level: null },
  { page: 'classroom_fw.html', level: null },
  { page: 'detail.html', level: null },
  { page: 'course.html', level: null },
  { page: 'logo_page.html', level: null },
  { page: 'library.html', level: null }
];

const currentPage = window.location.pathname.split('/').pop();
const user = JSON.parse(localStorage.getItem('dzidzoUser'));

// Check if current page is restricted
const pageRestricted = restrictedPages.find(p => p.page === currentPage);

if (pageRestricted && !user) {
  // Not logged in → redirect to sign in
  window.location.href = 'signin.html';
}
