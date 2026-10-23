// Single source of truth for the inspection-request form (CRM form: "Website - Free Inspection Request").
export const FORM_ID = '7fAmdkAAanZYUdxB5jK6';
export const FORM_URL = `https://api.nexum23.com/widget/form/${FORM_ID}`;
export const PHONE_TEL = 'tel:+16063091978';

// Any "Book" button calls this; BookingModal listens for the event.
export const openBooking = (source = 'button') => {
  window.dispatchEvent(new CustomEvent('ginnova:open-booking', { detail: { source } }));
};

// Opens the CRM chat widget if it is loaded; otherwise falls back to the booking form.
export const openChat = () => {
  const widget = window.leadConnector?.chatWidget;
  if (widget && typeof widget.openWidget === 'function') {
    widget.openWidget();
  } else {
    openBooking('chat-fallback');
  }
};
