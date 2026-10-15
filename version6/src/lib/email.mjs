/** Build a mailto URI without letting user-entered text become mail headers. */
export function prepareEmail(recipient, fields) {
  const subject = (fields.topic || "SV Solutions — Technical enquiry").replace(/[\r\n]+/g, " ");
  const body = `Name: ${fields.name}\nOrganization: ${fields.organization}\nEmail: ${fields.email}\n\n${fields.message}`;
  return `${recipient.split("?")[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
