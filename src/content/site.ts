// Single source of truth for copy, contact details and structured content.
// Anything unverified is flagged here so it is easy to find and complete.

export const site = {
  name: 'Sennexa Technologies',
  slogan: 'Revenue Engineering. Always On.',
  email: 'sennexatechnologies@gmail.com',
  whatsappNumber: '+254795451238',
  whatsappMessage: "Hello Sennexa, I'd like to talk about a project.",
  // PENDING: confirmed social profiles. Nothing is shown until populated.
  socials: [] as { label: string; href: string }[],
  // PENDING: production domain, used for canonical URLs and sitemap.
  siteUrl: '',
}

export const nav = [
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export type Service = {
  slug: string
  title: string
  short: string
  benefit: string
  status: string
  problem: string
  deliver: string[]
  approach: { title: string; text: string }[]
  goodFit: string[]
  notFit: string[]
  caveat: string
  seoTitle: string
  seoDescription: string
}

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Websites & Software Development',
    short:
      'Fast, maintainable websites and web applications built around the enquiries, bookings or workflows your organisation depends on.',
    benefit: 'Be easier to find, trust and buy from.',
    status: 'Core offering',
    problem:
      'A site that looks acceptable but loads slowly, buries your offer or cannot be updated without a developer quietly costs you enquiries every week. We build for the commercial job the site has to do, then make it fast, accessible and easy to maintain.',
    deliver: [
      'Business and institutional websites',
      'Enquiry, booking and lead-capture flows',
      'Custom web applications and internal tools',
      'Content management your own team can use',
      'Performance, accessibility and SEO foundations built in',
      'Launch support, hosting guidance and handover documentation',
    ],
    approach: [
      { title: 'Scope around an outcome', text: 'We agree what the site must achieve before we agree what it contains.' },
      { title: 'Design system first', text: 'Reusable components keep the build consistent and future changes cheap.' },
      { title: 'Build in reviewable steps', text: 'You see working pages early, not a big reveal at the end.' },
      { title: 'Test before launch', text: 'Devices, keyboard use, speed and forms are checked, then deployed and handed over.' },
    ],
    goodFit: [
      'You need a site that supports enquiries, bookings or procurement checks',
      'Your current site is slow, dated or hard to update',
      'You want a custom tool instead of a patchwork of spreadsheets',
    ],
    notFit: [
      'You need a throwaway page with no maintenance in mind',
      'You want a fixed price before any scope has been discussed',
    ],
    caveat:
      'Cost and timeline depend on scope. We confirm both in writing after discovery rather than quoting from a menu.',
    seoTitle: 'Website & Software Development',
    seoDescription:
      'Fast, accessible, maintainable websites and web applications from Sennexa Technologies, built around enquiries, bookings and workflows.',
  },
  {
    slug: 'digital-marketing-seo',
    title: 'Digital Marketing & Search Visibility',
    short:
      'Search-led visibility and measurable campaigns that help the right customers find you, and show you which enquiries they produce.',
    benefit: 'Reach more of the customers already looking for you.',
    status: 'Core offering',
    problem:
      'Traffic is easy to buy and hard to turn into business. We focus on being found for what customers actually search, on pages that convert, and on reporting enquiries rather than just visits.',
    deliver: [
      'Technical SEO audit and prioritised fixes',
      'Search-intent page structure and content planning',
      'Local visibility guidance, including business profiles',
      'Analytics and conversion tracking set-up',
      'Landing pages for specific campaigns',
      'Plain-language reporting on enquiries, not vanity metrics',
    ],
    approach: [
      { title: 'Audit what exists', text: 'We start with how the site is currently found, crawled and measured.' },
      { title: 'Map search intent', text: 'Pages are planned around real customer questions, not keyword lists.' },
      { title: 'Fix, publish, measure', text: 'Technical fixes and content ship in priority order with tracking in place.' },
      { title: 'Report honestly', text: 'You see what moved, what did not, and what we would change next.' },
    ],
    goodFit: [
      'You have a service customers search for but do not rank for',
      'You are spending on marketing without knowing what it returns',
      'You want search visibility that compounds rather than a one-off boost',
    ],
    notFit: [
      'You need a guaranteed ranking or a guaranteed revenue figure',
      'You expect results in days rather than a measured build-up',
    ],
    caveat:
      'Nobody can honestly guarantee search rankings. We commit to the work, the measurement and straightforward reporting.',
    seoTitle: 'Digital Marketing & SEO',
    seoDescription:
      'Search visibility, technical SEO and measurable digital marketing from Sennexa Technologies, reported in enquiries rather than vanity metrics.',
  },
  {
    slug: 'design-branding',
    title: 'Design & Brand Experiences',
    short:
      'Interface and brand design that makes an organisation look as capable as it is, and makes the next step obvious to the people visiting.',
    benefit: 'Look credible before you say a word.',
    status: 'Core offering',
    problem:
      'Buyers judge credibility in seconds. Inconsistent visuals, unclear layouts and unclear next steps make strong organisations look uncertain. We design systems that stay consistent across web, documents and campaigns.',
    deliver: [
      'UI and UX design with clickable prototypes',
      'Brand systems: colour, type, tone and usage guidelines',
      'Marketing collateral and social templates',
      'Proposal, pitch and presentation design',
      'Design systems that development teams can build from',
    ],
    approach: [
      { title: 'Understand the audience', text: 'Who is deciding, what do they need to see, and what makes them hesitate?' },
      { title: 'Define the system', text: 'Type, colour, spacing and components are set once and reused everywhere.' },
      { title: 'Prototype and review', text: 'Key journeys are tested as prototypes before they are built.' },
      { title: 'Hand over cleanly', text: 'Guidelines and assets are delivered in forms your team can actually use.' },
    ],
    goodFit: [
      'Your materials look different on every channel',
      'You are preparing for a launch, tender or investor conversation',
      'You want design and build handled by one connected team',
    ],
    notFit: [
      'You want decoration without a commercial purpose',
      'You need a full-scale advertising campaign production',
    ],
    caveat:
      'Design work is scoped per engagement. We agree deliverables and review rounds up front.',
    seoTitle: 'Design & Branding',
    seoDescription:
      'UI/UX design, brand systems and collateral from Sennexa Technologies, built to look credible and make the next step obvious.',
  },
  {
    slug: 'digital-systems',
    title: 'Digital Systems & Automation',
    short:
      'Connected tools, automated workflows and reporting that remove repetitive work and give you a clearer view of the business.',
    benefit: 'Spend less time chasing, more time serving.',
    status: 'Scoped per project',
    problem:
      'Enquiries in one inbox, bookings in another, reports in a spreadsheet someone updates on Fridays. Where it makes sense, we connect these into systems that keep working without constant attention.',
    deliver: [
      'Workflow automation between the tools you already use',
      'Lead and enquiry pipelines with CRM connection',
      'Dashboards and reporting',
      'Internal portals and staff-facing tools',
      'Process documentation so the system is understood, not mysterious',
    ],
    approach: [
      { title: 'Map the workflow', text: 'We document how work moves today, including the awkward manual parts.' },
      { title: 'Decide what to automate', text: 'Not everything should be. We tell you where a simple tool is enough.' },
      { title: 'Build and connect', text: 'Integrations are built with logging and failure handling, not just the happy path.' },
      { title: 'Document and hand over', text: 'You receive clear documentation and an agreed support arrangement.' },
    ],
    goodFit: [
      'Your team repeats the same manual steps every day',
      'Information is scattered across tools that do not talk to each other',
      'You need reporting that does not depend on one person',
    ],
    notFit: [
      'An off-the-shelf tool already does the job (we will say so)',
      'You want automation without any change to the process behind it',
    ],
    caveat:
      'This is offered as custom engagements after discovery, not a packaged product. Scope and support are agreed per project.',
    seoTitle: 'Digital Systems & Automation',
    seoDescription:
      'Workflow automation, integrations and reporting from Sennexa Technologies, scoped as custom engagements after discovery.',
  },
]

export type Industry = {
  id: string
  title: string
  need: string
  blurb: string
  build: string[]
  measure: string[]
  services: string[]
}

export const industries: Industry[] = [
  {
    id: 'professional-firms',
    title: 'Professional firms',
    blurb: 'Law firms, consultancies and advisers',
    need: 'Clients check you online before they call. Your site has to look established, explain what you do plainly and make it easy to enquire privately.',
    build: [
      'Credibility-led websites with clear practice and service pages',
      'Confidential enquiry flows and consultation requests',
      'Search visibility for the specific services you offer',
      'Document and proposal templates that match your brand',
    ],
    measure: ['Qualified enquiries received', 'Pages that lead to contact', 'Search visibility for named services'],
    services: ['web-development', 'digital-marketing-seo', 'design-branding'],
  },
  {
    id: 'hospitality',
    title: 'Hospitality businesses',
    blurb: 'Restaurants, cafés, hotels and events',
    need: 'Guests decide on a phone, often in a hurry. Menus, location, availability and booking must be instantly clear and quick to load.',
    build: [
      'Mobile-first sites with menus, rooms or packages up front',
      'Booking and enquiry flows for tables, stays and events',
      'Local search and business-profile visibility',
      'Campaign pages for seasonal offers and events',
    ],
    measure: ['Booking and enquiry volume', 'Calls and direction requests', 'Visibility for local searches'],
    services: ['web-development', 'digital-marketing-seo', 'design-branding'],
  },
  {
    id: 'institutions',
    title: 'Institutions & organisations',
    blurb: 'Churches, community groups, corporates and public bodies',
    need: 'Many audiences, one site: members, donors, partners and procurement teams. Information must be organised, accessible and easy to keep current.',
    build: [
      'Accessible, well-structured information websites',
      'Events, giving and registration journeys',
      'Staff-managed content and internal portals',
      'Reporting and workflow systems for administrators',
    ],
    measure: ['Registrations and sign-ups', 'Time saved on routine admin', 'Accessibility and content freshness'],
    services: ['web-development', 'digital-systems', 'design-branding'],
  },
  {
    id: 'growing-businesses',
    title: 'Growing businesses',
    blurb: 'SMEs outgrowing spreadsheets and templates',
    need: 'What worked at ten customers strains at a hundred. You need a site that wins enquiries and back-office systems that keep pace.',
    build: [
      'Conversion-focused websites and landing pages',
      'Lead tracking from first click to closed enquiry',
      'Automation between sales, support and reporting tools',
      'Custom web applications where off-the-shelf tools fall short',
    ],
    measure: ['Cost and quality of enquiries', 'Lead response and follow-up consistency', 'Hours saved on repeat tasks'],
    services: ['digital-marketing-seo', 'digital-systems', 'web-development'],
  },
]

export const process = [
  {
    n: '01',
    title: 'Discover',
    text: 'We learn how your organisation makes money or delivers value, who you need to reach, and what is getting in the way.',
    points: ['A working conversation, not a questionnaire', 'Review of existing site, tools and data', 'Written scope, timeline and cost for approval'],
  },
  {
    n: '02',
    title: 'Design',
    text: 'Structure, content hierarchy and interface are shaped around the actions you want visitors to take.',
    points: ['Page structure and key journeys', 'Visual direction and design system', 'Reviewable prototypes before build'],
  },
  {
    n: '03',
    title: 'Build',
    text: 'We build in increments you can review, then test properly before anything goes live.',
    points: ['Responsive, accessible implementation', 'Testing on devices, keyboard and speed', 'Deployment and launch checks'],
  },
  {
    n: '04',
    title: 'Improve',
    text: 'After launch we hand over cleanly, and where it is useful we agree a support or improvement arrangement.',
    points: ['Documentation and handover', 'Optional support, agreed in writing', 'Measurement to guide next changes'],
  },
]

export const reasons = [
  {
    title: 'Technology and design under one roof',
    text: 'The people designing the experience work alongside the people building and measuring it, so nothing is lost between hand-offs.',
  },
  {
    title: 'Scoped around business outcomes',
    text: 'We start from what the project must achieve, then decide what to build. Scope, timeline and cost are agreed in writing.',
  },
  {
    title: 'Built to be maintained',
    text: 'Clean, reusable components and documentation mean your site can change without starting again.',
  },
  {
    title: 'Plain communication',
    text: 'You get straight answers, including when something is not worth doing or an existing tool is enough.',
  },
  {
    title: 'Performance and accessibility from day one',
    text: 'Speed, keyboard use, contrast and semantic structure are part of the build, not a late patch.',
  },
  {
    title: 'A structured way of delivering',
    text: 'Four clear stages with defined outputs, so you always know where the project stands and what happens next.',
  },
]

export const faqs = [
  {
    q: 'What does Sennexa Technologies actually do?',
    a: 'We design and build websites, web applications and digital systems, and we help organisations be found online through search visibility and measured digital marketing. Design, engineering and marketing are handled together so they support one another.',
  },
  {
    q: 'Who do you work with?',
    a: 'Small and growing businesses, professional firms, hospitality businesses, and institutions such as churches, community organisations and corporates. If your need is about reaching customers, operating more smoothly or looking more credible online, we can usually help.',
  },
  {
    q: 'How is a project scoped and priced?',
    a: 'We begin with a discovery conversation, then send a written scope with deliverables, timeline and cost for your approval. We do not publish fixed prices because the right answer depends on what you need, and we would rather quote accurately than guess.',
  },
  {
    q: 'How long will a project take?',
    a: 'It depends on scope. A focused website takes a different time to a custom application. We give a realistic timeline in the written scope and tell you early if anything changes it.',
  },
  {
    q: 'Do you offer maintenance and ongoing support?',
    a: 'Where it is useful, yes. Support, maintenance and improvement work are agreed per project and written down, so you know exactly what is and is not included. We do not assume or promise open-ended support.',
  },
  {
    q: 'Can you guarantee search rankings or more revenue?',
    a: 'No, and be cautious of anyone who does. We can improve how well your site is built, found and measured, and report honestly on enquiries. Outcomes depend on your market, offer and competition.',
  },
  {
    q: 'Does "Always On" mean 24-hour support?',
    a: 'No. It describes how we build: systems, sites and tracking designed to keep working for you without constant manual effort. Any support hours are agreed per project.',
  },
  {
    q: 'What happens after I send an enquiry?',
    a: 'We review it, and if it looks like a fit we reply by email to arrange a discovery conversation. If it is not a fit, we will say so and point you in a useful direction where we can.',
  },
]
