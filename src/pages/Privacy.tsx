import { site } from '../content/site'
import { useSeo } from '../lib/hooks'
import PageHero from '../components/PageHero'

const sections: [string, string[]][] = [
  [
    'What we collect',
    [
      'When you send a project enquiry we collect the details you enter: your name, organisation, email address, service of interest and project description, plus an optional telephone number, budget range and timeline.',
      'We do not ask for sensitive personal information and ask that you do not include any in your message.',
    ],
  ],
  [
    'Why we collect it',
    [
      'To read and respond to your enquiry and, where relevant, to scope a project with you. We do not use your details for unrelated marketing without your agreement.',
    ],
  ],
  [
    'Where it goes',
    [
      'Enquiries are delivered to Sennexa by email. The delivery service used is to be confirmed and will be named here before the form is switched on.',
      'If you email us or message us on WhatsApp instead, those providers process your message under their own terms.',
    ],
  ],
  [
    'Analytics and cookies',
    [
      'This website does not currently load third-party analytics or advertising scripts. If analytics is added, this notice will be updated and consent obtained where required.',
    ],
  ],
  [
    'How long we keep it',
    ['Retention period to be confirmed by Sennexa. We will keep enquiry details only as long as needed to respond and manage the resulting relationship.'],
  ],
  [
    'Your rights',
    [
      `You can ask to see, correct or delete the personal data we hold about you by emailing ${site.email}.`,
    ],
  ],
]

export default function Privacy() {
  useSeo('Privacy policy', 'How Sennexa Technologies collects, uses and protects personal information from project enquiries.', '/privacy')
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lead="What we collect through this website, why, and what you can ask us to do with it."
      />
      <section className="surface-light section">
        <div className="container-x max-w-3xl">
          <p className="rounded-[12px] border border-warning/40 bg-warning/[0.07] p-4 text-sm text-ink">
            <strong className="text-warning">Draft for review.</strong> This notice describes the intended
            processing and must be finalised once the enquiry delivery service, retention period and legal entity details
            are confirmed.
          </p>
          <div className="mt-10 space-y-10">
            {sections.map(([title, paras]) => (
              <section key={title}>
                <h2 className="t-h3">{title}</h2>
                {paras.map((p) => (
                  <p key={p} className="mt-3 text-ink-muted">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
          <p className="mt-12 text-sm text-ink-muted">Last updated: October 2026 (draft).</p>
        </div>
      </section>
    </>
  )
}
