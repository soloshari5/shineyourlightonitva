/* ─────────────────────────────────────────────────────────────────────
   Shine Your Light On It: tracking + attribution
   Paste your IDs below. Anything left blank stays switched off, so the
   page is safe to publish before the accounts exist.
   See LAUNCH-TRACKING-CHECKLIST.md for where each ID comes from.
   ───────────────────────────────────────────────────────────────────── */
(function () {
  var CONFIG = {
    GA4_ID: '',               // Google Analytics 4 Measurement ID, looks like G-XXXXXXXXXX
    ADS_ID: '',               // Google Ads conversion ID, looks like AW-XXXXXXXXXX
    ADS_LEAD_LABEL: '',       // Google Ads conversion label for the "qualified lead" action
    LINKEDIN_PARTNER_ID: '',  // LinkedIn Insight Tag partner ID (digits only)
    LINKEDIN_CONVERSION_ID: ''// LinkedIn conversion ID for qualified leads (digits only)
  };

  /* ── gtag is always defined so calls elsewhere never throw ── */
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  var gtag = window.gtag;

  /* ── Attribution: remember where the visitor came from this session ── */
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid', 'li_fat_id'];
  var STORE = 'syl_attr';

  function readStore() {
    try { return JSON.parse(sessionStorage.getItem(STORE) || '{}'); } catch (e) { return {}; }
  }
  function writeStore(obj) {
    try { sessionStorage.setItem(STORE, JSON.stringify(obj)); } catch (e) { /* storage blocked: fine */ }
  }

  var attr = readStore();
  try {
    var qs = new URLSearchParams(window.location.search);
    var fresh = {};
    KEYS.forEach(function (k) { if (qs.get(k)) fresh[k] = qs.get(k); });
    if (Object.keys(fresh).length) { attr = fresh; }
    if (!attr.landing) { attr.landing = window.location.pathname; }
    if (!attr.referrer && document.referrer) { attr.referrer = document.referrer; }
    writeStore(attr);
  } catch (e) { /* ignore */ }

  /* One readable line for the lead email's {{source}} field */
  window.sylSource = function () {
    var parts = [];
    Object.keys(attr).forEach(function (k) { parts.push(k + '=' + attr[k]); });
    return parts.length ? parts.join(' | ') : 'direct';
  };

  /* ── Google tag (GA4 and Ads share one gtag.js) ── */
  var firstId = CONFIG.GA4_ID || CONFIG.ADS_ID;
  if (firstId) {
    // Visitors in the EEA, UK and Switzerland get no analytics or ad cookies by default.
    gtag('consent', 'default', {
      ad_storage: 'denied', analytics_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
      region: ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI',
               'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'CH', 'GB']
    });
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(firstId);
    document.head.appendChild(g);
    gtag('js', new Date());
    if (CONFIG.GA4_ID) gtag('config', CONFIG.GA4_ID);
    if (CONFIG.ADS_ID) gtag('config', CONFIG.ADS_ID);
  }

  /* ── LinkedIn Insight Tag ── */
  if (CONFIG.LINKEDIN_PARTNER_ID) {
    window._linkedin_partner_id = CONFIG.LINKEDIN_PARTNER_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(CONFIG.LINKEDIN_PARTNER_ID);
    if (!window.lintrk) {
      window.lintrk = function (a, b) { window.lintrk.q.push([a, b]); };
      window.lintrk.q = [];
    }
    var l = document.createElement('script');
    l.async = true;
    l.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(l);
  }

  /* ── Events ── */
  window.sylTrack = function (name, params) {
    try { gtag('event', name, params || {}); } catch (e) { /* ignore */ }
  };

  // A submitted fit check. GA4 counts every lead; Google Ads and LinkedIn only
  // count the ones that scored as a fit, so the ad platforms learn from good leads.
  window.sylLead = function (params) {
    params = params || {};
    window.sylTrack('generate_lead', params);
    if (params.fit !== 'fit') return;
    try {
      if (CONFIG.ADS_ID && CONFIG.ADS_LEAD_LABEL) {
        gtag('event', 'conversion', { send_to: CONFIG.ADS_ID + '/' + CONFIG.ADS_LEAD_LABEL });
      }
      if (CONFIG.LINKEDIN_CONVERSION_ID && window.lintrk) {
        window.lintrk('track', { conversion_id: CONFIG.LINKEDIN_CONVERSION_ID });
      }
    } catch (e) { /* ignore */ }
  };

  /* Click tracking by delegation, so no markup changes are needed.
     Only non-identifying details are ever sent (never names, emails, or phone numbers). */
  var quizStarted = false;
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    if (t.closest('a[href*="calendly.com"]')) {
      window.sylTrack('book_call_click', { page: window.location.pathname });
    }
    if (!quizStarted && t.closest('.quiz-option')) {
      quizStarted = true;
      window.sylTrack('quiz_start', { page: window.location.pathname });
    }
  });
})();
