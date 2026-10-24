// Analytics-ready event hook. No third-party script is loaded and nothing is sent anywhere
// until a provider (and a consent approach) is configured. Events are pushed to window.dataLayer
// only if one already exists, so a tag manager can pick them up later.
type EventName =
  | 'whatsapp_click'
  | 'email_click'
  | 'enquiry_submitted'
  | 'enquiry_delivered'
  | 'enquiry_failed'
  | 'service_view'

export function track(event: EventName, params: Record<string, string> = {}) {
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer?.push({ event, ...params })
}
