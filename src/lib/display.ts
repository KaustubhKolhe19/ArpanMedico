export function displayCategory(name: string): string {
  return name.replace(/\s*-\s*$/, "").trim();
}

export function phoneHref(phoneNumber: string): string {
  return `tel:+91${phoneNumber.replace(/\s/g, "")}`;
}
