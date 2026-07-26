// Single source of truth for every product signboard on the site.
// status: "live" -> flagship template with full detail + demo request
// status: "early" -> early-access template with waitlist capture

export const products = [
  {
    slug: 'me-and-mech',
    name: 'Me & Mech',
    system: 'Workshop OS',
    tagline: 'பேசு, bill போடு, மறக்காதே.',
    status: 'live',
    accent: 'brick',
    forWhom: 'Two-wheeler & auto mechanics',
    problem:
      'Most workshops run on memory and WhatsApp. Jobs get forgotten, payments get missed, and there is no record when a customer asks "how much did I pay last time?"',
    solution:
      'Me & Mech runs your workshop in Tamil, by voice. Speak a job into existence, bill it, and never lose track of a pending payment again — from day one of your free trial, with zero features held back.',
    features: [
      { title: 'Voice-first billing', detail: 'Speak the job in Tamil. The bill writes itself.' },
      { title: 'Pending payments, tracked', detail: 'Every due amount visible on one screen, no more mental math.' },
      { title: 'Share as image', detail: 'Send a clean invoice over WhatsApp in seconds, Tamil font and all.' },
      { title: 'Full trial, no catch', detail: 'Every paid feature, from the first day — free trial is not a stripped demo.' },
    ],
    demoCta: 'Request a Demo',
  },
  {
    slug: 'me-and-vakil',
    name: 'Me & Vakil',
    system: 'Advocate OS',
    tagline: 'Your practice, organised — even offline.',
    status: 'early',
    accent: 'gold',
    forWhom: 'Advocates & legal practices in Tamil Nadu',
    problem:
      'Case files, hearing dates, and client documents scattered across registers, phones, and memory — with no system built for how Tamil Nadu advocates actually work.',
    solution:
      'Me & Vakil is being built Tamil-first and offline-first, with AI as a drafting assistant that always stays under your review — never a black box making decisions on your case.',
    features: [
      { title: 'Offline-first', detail: 'Works in courtrooms and chambers with patchy connectivity.' },
      { title: 'AI drafting assistant', detail: 'Speeds up drafts. You review and approve every line.' },
      { title: 'Case & hearing tracking', detail: 'Every date, every file, in one place.' },
    ],
    demoCta: 'Join Early Access',
  },
  {
    slug: 'me-and-doctor',
    name: 'Me & Doctor',
    system: 'Clinic OS',
    tagline: 'Run your clinic without the paperwork pile-up.',
    status: 'early',
    accent: 'teal',
    forWhom: 'Independent clinics & small practices',
    problem:
      'Patient records, appointment slots, and billing living in three different notebooks — and no easy way to look up a patient\'s history when they walk back in.',
    solution:
      'Me & Doctor gives independent clinics a simple, Tamil-friendly system for patients, appointments, and billing — built for practices that don\'t have an IT department.',
    features: [
      { title: 'Patient records', detail: 'Look up any patient\'s history in seconds.' },
      { title: 'Appointment slots', detail: 'No more double-booked chairs.' },
      { title: 'Simple billing', detail: 'Clear bills, clear records, every visit.' },
    ],
    demoCta: 'Join Early Access',
  },
  {
    slug: 'me-and-voter',
    name: 'Me & Voter',
    system: 'Leader OS',
    tagline: 'Party-neutral. Built for the local body candidate.',
    status: 'early',
    accent: 'gold',
    forWhom: 'Local body candidates & their campaign teams',
    problem:
      'Campaigns run on scattered spreadsheets and word of mouth — no shared system for volunteers, voter outreach, or tracking what\'s actually working on the ground.',
    solution:
      'Me & Voter is a party-neutral campaign operating system for local body candidates — organising volunteers, outreach, and ground data in one place, for any candidate, any party.',
    features: [
      { title: 'Party-neutral by design', detail: 'Built for the candidate, not any political affiliation.' },
      { title: 'Volunteer coordination', detail: 'Assign booths and beats without the WhatsApp chaos.' },
      { title: 'Ground data, centralised', detail: 'See outreach progress in one dashboard.' },
    ],
    demoCta: 'Join Early Access',
  },
  {
    slug: 'me-and-eseva',
    name: 'Me & Eseva',
    system: 'Seva Centre OS',
    tagline: 'Every application, every applicant, tracked.',
    status: 'early',
    accent: 'teal',
    forWhom: 'e-Seva / Common Service Centre operators',
    problem:
      'Seva centres handle dozens of government applications a day with no system to track status, follow-ups, or which applicant is owed a callback.',
    solution:
      'Me & Eseva keeps every application, every applicant, and every pending follow-up organised — so nothing falls through the cracks at the counter.',
    features: [
      { title: 'Application tracking', detail: 'Know the status of every submission at a glance.' },
      { title: 'Applicant records', detail: 'Full history, searchable in seconds.' },
      { title: 'Follow-up reminders', detail: 'Never miss a callback or a re-submission deadline.' },
    ],
    demoCta: 'Join Early Access',
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
