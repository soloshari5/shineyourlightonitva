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
     LIVE WORKSHOP (30 min, Zoom) ─ ends with the 1:1 Bottleneck Audit ──┐
                          │                                               │
                          ▼                                               ▼
  workshop-replay.html (replay + Scorecard + offer)    Calendly: free 1:1 Bottleneck Audit
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
| `workshop-replay.html` | The page you send attendees afterwards: replay, interactive Bottleneck Scorecard, and the 1:1 offer. Hidden from search engines (`noindex`). |
| `funnel-config.js` | **The only file you need to edit:** Eventbrite link, event date, replay video and Calendly link. |
| `index.html`, `landing-linkedin*.html` | The existing site and LinkedIn ad pages. Keep sending traffic to them, and link them to the workshop. |

**Positioning:** the workshop is deliberately **open to any overwhelmed owner** and speaks in their words: *drowning, stuck in the weeds, capacity limit, friction, chaos, bottleneck*. Healthcare leaders are still the ideal client. The workshop covers HIPAA-safe delegation as one segment, and the registration questions flag healthcare leads so you can follow up with them first. Services and the 1:1 call stay healthcare-first.

**Why 30 minutes:** your best clients are the busiest people. A short session they can join on a lunch break, plus a replay sent to everyone who registers, means "too busy" stops being a reason to skip it. **Treat every registration as a lead, even if they never show up.**

---

## 1. Create the Eventbrite event (≈20 min)

1. Eventbrite → **Create event**. Choose **Online event** and **Free** ticket.
2. **Title:** `Out of the Weeds: A Free 30-Minute Workshop for Business Owners Who Are Drowning in the Day-to-Day`
3. **Summary (140 chars):** `Stuck in the weeds? Find your bottleneck, cut the friction, and get past your capacity limit. Live, 30 min, free. Replay included.`
4. **Category:** Business → Startups & Small Business. **Tags:** overwhelm, burnout, productivity, delegation, small business, business owner, operations, virtual assistant, time management, private practice
5. **Online event page:** paste your Zoom link there. Eventbrite only shows it to registered attendees and puts it in their confirmation and reminder emails.
6. **Description:** paste the block below.
7. **Order form → Custom questions.** These are how you qualify leads, so make all of them required:
   - *Which best describes your business?* Healthcare practice or treatment program · Legal / compliance · Consulting / agency · Coaching · Other service business · Other
   - *Your role?* Owner / founder · Executive director / administrator · Manager · Other
   - *Where do you feel most stuck right now?* Drowning in email & messages · Scheduling & follow-up chaos · I'm the bottleneck on every decision · No systems or documentation · Compliance & admin · All of it
   - *Would you like a free 1:1 Bottleneck Audit after the workshop?* Yes, please reach out · Maybe later · No thanks
   - Checkbox: *Yes, send me the replay and occasional practice-operations tips by email. Unsubscribe any time.* (This gives you clear permission to email them after the event.)
8. **Confirmation page / message:** "You're in! Add it to your calendar now. Can't make it live? No problem. The replay will be emailed to you. Want a head start? Take the Bottleneck Scorecard: [link to workshop-replay.html#checklist]"
9. Publish, then copy the event URL and the number at the end of it into `funnel-config.js`:
   ```js
   eventbriteUrl: "https://www.eventbrite.com/e/out-of-the-weeds-tickets-1234567890",
   eventbriteEventId: "1234567890",
   workshopDate: "Thursday, November 12",
   workshopTime: "12:00 PM ET · 30 minutes · Live on Zoom",
   workshopStartsAt: "2026-11-12T12:00:00-05:00",
   ```
   With `eventbriteEventId` set, people register in a pop-up on your own page without leaving it.

> Run it at the **same time every 2–4 weeks** (for example, every other Thursday at 12pm ET, a lunch break for clinicians). Eventbrite lets you make it a recurring series. Every session feeds new people into the 1:1 calendar.

### Eventbrite description (paste in)

> **Drowning in the day-to-day? Stuck in the weeds when you should be leading?**
>
> You built the business, and now it runs on you. Every email, every follow-up, every decision goes through you. You've hit a capacity limit, and working harder isn't fixing it.
>
> In this free 30-minute live workshop you'll learn:
> - **Are you the bottleneck?** The 5 signs you've hit your capacity limit
> - **Find the friction:** see where your hours really go
> - **Get out of the weeds:** the simple filter for what to hand off first
> - **Delegate without dropping the ball:** keep quality, confidentiality and control (including HIPAA basics for healthcare practices)
> - **A 30-day handoff plan**, plus live Q&A
>
> **Too busy to attend live?** Register anyway. Everyone gets the replay.
>
> **Bonus:** the Bottleneck Scorecard, plus priority access to a free 1:1 Bottleneck Audit of your business.
>
> *Hosted by Shine Your Light On It, a US-based operations and virtual-assistant team with a specialty in healthcare practices.*

---

## 2. Run the workshop (30 min)

| Min | Segment | Notes |
|---|---|---|
| 0–2 | Welcome + "one word for how your week feels?" in the chat | You'll hear drowning, chaos, stuck. Reflect those words back throughout |
| 2–8 | Are you the bottleneck? | The 5 signs. Tell one real (anonymized) story |
| 8–14 | Find the friction | Have them list everything they did yesterday and circle what only they could do |
| 14–19 | Get out of the weeds | The "only me vs. anyone trained" filter |
| 19–23 | Delegate without dropping the ball | Trust, confidentiality, and 60 seconds on HIPAA/BAA for healthcare. This is what sets you apart |
| 23–26 | **The offer** | "If you want help finding your bottleneck, book a free 1:1 Bottleneck Audit. Attendees get first pick of this week's spots." Drop the Calendly link in the chat **twice** |
| 26–30 | Q&A + 30-day plan recap | Drop the link one final time |

---

## 3. Follow-up emails

Eventbrite → **Marketing → Email campaigns** (or export attendees as CSV and send from Gmail or your email tool). Send emails 2–5 **only to people who checked the consent box**.

**Email 1 — Right after the event (everyone registered, including no-shows)**
> Subject: Your replay (30 min) + the Bottleneck Scorecard
>
> Hi {first name},
> Whether you made it live or got pulled into the weeds (it happens!), here's everything in one place:
> → Replay + Bottleneck Scorecard: [workshop-replay.html]
> It takes 10 minutes. If you score under 10 out of 15, a free 1:1 Bottleneck Audit will be worth your time: [Calendly]
> — {Your name}

**Email 2 — Day 2**
> Subject: You're not lazy. You're at capacity.
> Why working harder doesn't get you past a capacity limit, with one short story. → Book your Bottleneck Audit.

**Email 3 — Day 4**
> Subject: The friction you stopped noticing
> The "yesterday list" exercise from the workshop, written up in 3 steps. → Book your Bottleneck Audit.

**Email 4 — Day 6**
> Subject: From chaos to calm in 30 days
> The 4-step handoff, plus a testimonial. Add one line for healthcare readers: "Yes, we sign a BAA." → Book your Bottleneck Audit.

**Email 5 — Day 8 (last call)**
> Subject: Still drowning? Last call for audit spots
> Attendee priority for this round of audits closes Friday. → [Calendly]. After that, you're welcome at the next workshop: [workshop.html].

**Healthcare leads who answered "Yes, please reach out"** on the registration form are your top priority. Email them **personally within 24 hours**. Then do the same for other "yes" answers.


---

## 4. Driving registrations

- **LinkedIn:** one post per week built on one pain word: *drowning*, *stuck in the weeds*, *capacity limit*, *friction*, *chaos*, *bottleneck*. Example hook: "If every decision in your business goes through you, you're not the boss. You're the bottleneck." Put the `workshop.html` link in the first comment. Update the CTA on the existing `landing-linkedin*.html` ad pages to offer the workshop as a softer second option.
- **Eventbrite discovery:** the tags and category above help practice owners find you through Eventbrite search.
- **Direct invites:** message 10–20 owners you know each week: "I'm running a free 30-min session for owners who feel stuck in the weeds. There's a replay if you're slammed. Thought of you."
- **Partners:** dental study clubs, behavioral-health associations, chambers of commerce, BNI chapters, women-in-business groups and practice-management consultants often share free educational events.
- **Email signature:** "Free workshop for practice owners → [link]"

---

## 5. Numbers to track (per session)

| Metric | Where to find it | Healthy starting target |
|---|---|---|
| Registrations | Eventbrite | 25+ |
| Show-up rate | Zoom attendees ÷ registrations | 30–45% for free online events (replay viewers count too) |
| Audits booked | Calendly | 10–20% of live attendees |
| Proposals sent | Your notes | Most qualified audits |
| Clients signed | — | 1 per 1–2 sessions is a great early result |

Look for the step with the biggest drop: low registrations means more promotion; low show-up means better reminders; few bookings means a stronger offer or more time on the offer segment. Also track **how many leads are healthcare**. If it's too few, put more promotion into the healthcare partner channels.

---

## 6. HIPAA note

The workshop and the Bottleneck Audit are about **workflows only**. Remind people at the start not to share any patient information in the chat or on the call. Don't collect PHI on Eventbrite or Calendly forms. A BAA comes later, once a partnership begins.
