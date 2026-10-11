# Workshop → 1:1 Funnel Playbook

How a stranger becomes a 1:1 client:

```
LinkedIn posts / landing-linkedin pages / Eventbrite search / email / referrals
                          │
                          ▼
          workshop.html  (or the Eventbrite page itself)
                          │  "Save My Free Seat"
                          ▼
      Eventbrite free registration  ← captures name, email + qualifying answers
                          │
          confirmation + reminder emails (Eventbrite)
                          │
                          ▼
     LIVE WORKSHOP (45 min, Zoom) ── ends with the 1:1 Ops Audit offer ──┐
                          │                                               │
                          ▼                                               ▼
  workshop-replay.html (replay + Leak Checklist + offer)   Calendly: free 1:1 Ops Audit
                          │                                               │
              5-email follow-up sequence  ─────────────────────────────────┤
                                                                          ▼
                                                    Bespoke proposal → $3,500+/mo partnership
```

**Pages in this repo**

| Page | Job |
|---|---|
| `services.html` | Lists every service and sells the partnership. Two calls to action: book a 1:1 now, or join the workshop if not ready yet. |
| `workshop.html` | Landing page for the free event. Every button opens Eventbrite registration. |
| `workshop-replay.html` | The page you send attendees afterwards: replay, interactive Leak Checklist, and the 1:1 offer. Hidden from search engines (`noindex`). |
| `funnel-config.js` | **The only file you need to edit:** Eventbrite link, event date, replay video and Calendly link. |
| `index.html`, `landing-linkedin*.html` | The existing site and LinkedIn ad pages. Keep sending traffic to them, and link them to the workshop. |

---

## 1. Create the Eventbrite event (≈20 min)

1. Eventbrite → **Create event**. Choose **Online event** and **Free** ticket.
2. **Title:** `Get Out of the Back Office: A Free Workshop for Practice Owners`
3. **Summary (140 chars):** `The 5 back-office leaks costing your practice, what to delegate first, and how to do it without HIPAA risk. Live, 45 min.`
4. **Category:** Health → Medical, or Business → Startups & Small Business. **Tags:** practice management, dental practice, behavioral health, healthcare operations, HIPAA, virtual assistant, private practice
5. **Online event page:** paste your Zoom link there. Eventbrite only shows it to registered attendees and puts it in their confirmation and reminder emails.
6. **Description:** paste the block below.
7. **Order form → Custom questions.** These are how you qualify leads, so make all of them required:
   - *Which best describes your practice?* Behavioral health / addiction treatment · Dental · Physician / internal medicine · Other healthcare · Not in healthcare
   - *Your role?* Owner / founder · Executive director / administrator · Practice manager · Other
   - *Biggest back-office headache right now?* Patient inbox · Scheduling & no-shows · Staff compliance / credentials · Policies & procedures · Admissions · All of it
   - *Would you like a free 1:1 Ops Audit after the workshop?* Yes, please reach out · Maybe later · No thanks
   - Checkbox: *Yes, send me the replay and occasional practice-operations tips by email. Unsubscribe any time.* (This gives you clear permission to email them after the event.)
8. **Confirmation page / message:** "You're in! Add it to your calendar now. Before the session, take 10 minutes to score your practice: [link to workshop-replay.html#checklist]"
9. Publish, then copy the event URL and the number at the end of it into `funnel-config.js`:
   ```js
   eventbriteUrl: "https://www.eventbrite.com/e/get-out-of-the-back-office-tickets-1234567890",
   eventbriteEventId: "1234567890",
   workshopDate: "Thursday, November 12",
   workshopTime: "12:00 PM ET · 45 minutes · Live on Zoom",
   workshopStartsAt: "2026-11-12T12:00:00-05:00",
   ```
   With `eventbriteEventId` set, people register in a pop-up on your own page without leaving it.

> Run it at the **same time every 2–4 weeks** (for example, every other Thursday at 12pm ET, a lunch break for clinicians). Eventbrite lets you make it a recurring series. Every session feeds new people into the 1:1 calendar.

### Eventbrite description (paste in)

> **Still answering the patient inbox at 10pm? This one's for you.**
>
> If you own or run a behavioral health program, dental practice or physician practice, you probably spend too much of your week running the back office: patient messages, no-shows, staff certifications, policies nobody's touched in years.
>
> In this free 45-minute live workshop you'll learn:
> - **The 5 back-office leaks** costing practices time, revenue and compliance risk, and how to spot yours
> - **What to delegate first** and what only you should keep
> - **How to delegate without HIPAA risk**: BAAs, minimum-necessary access, and the offshoring red flags to avoid
> - **A 30-day handoff plan** you can start the same week
> - **Live Q&A** about your own operational problems
>
> **Bonus for attendees:** the Back-Office Leak Checklist, plus priority access to a free 1:1 Ops Audit of your practice.
>
> Can't make it live? Register anyway and the replay will be emailed to you.
>
> *Hosted by Shine Your Light On It, a US-based, HIPAA-aware operations team for healthcare practices.*

---

## 2. Run the workshop (45 min)

| Min | Segment | Notes |
|---|---|---|
| 0–3 | Welcome + "type your specialty in the chat" | Gets them engaged immediately |
| 3–15 | The 5 leaks | Tell one real (anonymized) story for each |
| 15–23 | Delegate-first framework | Sort tasks into "only me" and "a trained team" |
| 23–31 | HIPAA-safe delegation | BAA, minimum-necessary access, offshoring risks. This is what sets you apart |
| 31–36 | 30-day handoff plan | Walk through your own 4-step process |
| 36–40 | **The offer** | "If you want help doing this in your practice, book a free 1:1 Ops Audit. Attendees get first pick of this week's spots." Drop the Calendly link in the chat **twice** |
| 40–45 | Q&A | Answer questions, then drop the link a final time |

---

## 3. Follow-up emails

Eventbrite → **Marketing → Email campaigns** (or export attendees as CSV and send from Gmail or your email tool). Send emails 2–5 **only to people who checked the consent box**.

**Email 1 — Right after the event (everyone registered, including no-shows)**
> Subject: Your replay + the Leak Checklist
>
> Hi {first name},
> Thanks for registering for *Get Out of the Back Office*. Here's everything in one place:
> → Replay + Back-Office Leak Checklist: [workshop-replay.html]
> Score your practice (10 min). If you land under 10 out of 15, a 1:1 Ops Audit will pay for itself: [Calendly]
> — {Your name}

**Email 2 — Day 2**
> Subject: The leak most practices miss
> One story about staff certifications lapsing quietly, and what it cost. → Book your Ops Audit.

**Email 3 — Day 4**
> Subject: "Can a VA even touch PHI?"
> Explain BAAs and minimum-necessary access in plain English, with the 3 questions to ask any VA. → Book your Ops Audit.

**Email 4 — Day 6**
> Subject: What a 30-day handoff actually looks like
> The 4 steps, plus a testimonial. → Book your Ops Audit.

**Email 5 — Day 8 (last call)**
> Subject: Last call for attendee audit spots
> Attendee priority for this round of audits closes Friday. → [Calendly]. After that, you're still welcome at the next workshop: [workshop.html].

**People who answered "Yes, please reach out"** on the registration form are your warmest leads. Email them **personally within 24 hours**, without waiting for the sequence.

---

## 4. Driving registrations

- **LinkedIn:** one post per week about one "leak", with a link to `workshop.html` in the first comment. Update the CTA on the existing `landing-linkedin*.html` ad pages to offer the workshop as a softer second option.
- **Eventbrite discovery:** the tags and category above help practice owners find you through Eventbrite search.
- **Direct invites:** message 10–20 practice owners or managers you know each week: "I'm running a free 45-min session on getting out of the back office. Thought of you."
- **Partners:** dental study clubs, behavioral-health associations and practice-management consultants often share free educational events.
- **Email signature:** "Free workshop for practice owners → [link]"

---

## 5. Numbers to track (per session)

| Metric | Where to find it | Healthy starting target |
|---|---|---|
| Registrations | Eventbrite | 25+ |
| Show-up rate | Zoom attendees ÷ registrations | 30–45% for free online events |
| Audits booked | Calendly | 10–20% of live attendees |
| Proposals sent | Your notes | Most qualified audits |
| Clients signed | — | 1 per 1–2 sessions is a great early result |

Look for the step with the biggest drop: low registrations means more promotion; low show-up means better reminders; few bookings means a stronger offer or more time on the offer segment.

---

## 6. HIPAA note

The workshop and the Ops Audit are about **workflows only**. Remind people at the start not to share any patient information in the chat or on the call. Don't collect PHI on Eventbrite or Calendly forms. A BAA comes later, once a partnership begins.
