import { business } from "../../data/business";

function AddressLines() {
  const { address } = business;
  const lines = [
    address.line1,
    address.line2,
    address.landmark,
    address.street,
    `${address.city} - ${address.postalCode}`,
    `Dist. ${address.district}`,
    `${address.state}, ${address.country}`,
  ].reduce<string[]>((unique, line) => {
    const value = line.trim();
    if (!value) {
      return unique;
    }

    const normalized = value.toLowerCase();
    const alreadyShown = unique.some((existing) => {
      const current = existing.toLowerCase();
      return current === normalized || current.includes(normalized);
    });

    return alreadyShown ? unique : [...unique, value];
  }, []);

  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </>
  );
}

export default AddressLines;
