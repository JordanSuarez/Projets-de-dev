export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';

// Sending a message from the contact form
export const submitContact = (message) => ({
  type: SUBMIT_CONTACT,
  message,
});
