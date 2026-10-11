/* ─────────────────────────────────────────────────────────────
   FUNNEL SETTINGS — edit this one file, every funnel page updates.
   Used by: services.html, workshop.html, workshop-replay.html
   ───────────────────────────────────────────────────────────── */
window.FUNNEL = {
  // 1:1 call booking (already your live Calendly link)
  calendlyUrl: "https://calendly.com/soloshari/60min",

  // Eventbrite — paste your event page URL once the event is created.
  // e.g. "https://www.eventbrite.com/e/get-out-of-the-back-office-tickets-123456789012"
  eventbriteUrl: "",

  // Optional: the number at the end of the Eventbrite URL above.
  // When set, "Save My Seat" opens Eventbrite's checkout in a pop-up
  // on your own page instead of sending people away.
  eventbriteEventId: "",

  // What visitors see for the next live session.
  workshopDate: "Thursday · Date announced soon",
  workshopTime: "12:00 PM ET · 45 minutes · Live on Zoom",
  // ISO date-time for the countdown (leave "" to hide the countdown).
  // e.g. "2026-11-12T12:00:00-05:00"
  workshopStartsAt: "",

  // Replay video embed URL for workshop-replay.html (YouTube/Vimeo/Loom *embed* link).
  // e.g. "https://www.youtube.com/embed/VIDEO_ID" or "https://www.loom.com/embed/ID"
  replayEmbedUrl: "",

  contactEmail: "soloshari5@gmail.com"
};

/* ── wiring (no need to edit below) ── */
(function () {
  var F = window.FUNNEL;

  function openEventbrite(e) {
    if (!F.eventbriteUrl && !F.eventbriteEventId) {
      e.preventDefault();
      alert("Registration opens soon — the Eventbrite link hasn't been added yet.");
      return;
    }
    // When the embedded widget is ready it handles the click itself.
    if (F.eventbriteEventId && window.EBWidgets) { e.preventDefault(); return; }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-calendly]").forEach(function (a) {
      a.href = F.calendlyUrl; a.target = "_blank"; a.rel = "noopener";
    });

    var ebLinks = document.querySelectorAll("[data-eventbrite]");
    ebLinks.forEach(function (a, i) {
      a.href = F.eventbriteUrl || (F.eventbriteEventId ? "https://www.eventbrite.com/e/" + F.eventbriteEventId : "#");
      a.target = "_blank"; a.rel = "noopener";
      if (!a.id) a.id = "eb-trigger-" + i;
      a.addEventListener("click", openEventbrite);
    });

    document.querySelectorAll("[data-workshop-date]").forEach(function (el) { el.textContent = F.workshopDate; });
    document.querySelectorAll("[data-workshop-time]").forEach(function (el) { el.textContent = F.workshopTime; });
    document.querySelectorAll("[data-contact-email]").forEach(function (el) {
      el.textContent = F.contactEmail; if (el.tagName === "A") el.href = "mailto:" + F.contactEmail;
    });

    // Eventbrite embedded checkout (modal) — only when an event ID is set.
    if (F.eventbriteEventId && ebLinks.length) {
      var s = document.createElement("script");
      s.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      s.onload = function () {
        ebLinks.forEach(function (a) {
          window.EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: F.eventbriteEventId,
            modal: true,
            modalTriggerElementId: a.id,
            onOrderComplete: function () {
              window.location.href = "workshop.html?registered=1#registered";
            }
          });
        });
      };
      document.head.appendChild(s);
    }

    // Countdown
    var cd = document.querySelector("[data-countdown]");
    if (cd && F.workshopStartsAt) {
      var target = new Date(F.workshopStartsAt).getTime();
      var tick = function () {
        var d = target - Date.now();
        if (isNaN(d) || d <= 0) { cd.hidden = true; return; }
        var days = Math.floor(d / 864e5), h = Math.floor(d / 36e5) % 24,
            m = Math.floor(d / 6e4) % 60, sec = Math.floor(d / 1e3) % 60;
        cd.hidden = false;
        cd.querySelector("[data-d]").textContent = days;
        cd.querySelector("[data-h]").textContent = String(h).padStart(2, "0");
        cd.querySelector("[data-m]").textContent = String(m).padStart(2, "0");
        cd.querySelector("[data-s]").textContent = String(sec).padStart(2, "0");
      };
      tick(); setInterval(tick, 1000);
    }

    // Mobile menu
    var t = document.querySelector(".menu-toggle"), n = document.querySelector(".nav-links");
    if (t && n) t.addEventListener("click", function () {
      var open = n.classList.toggle("open"); t.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { n && n.classList.remove("open"); });
    });

    // Reveal on scroll
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    }
  });
})();
