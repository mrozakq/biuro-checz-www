// Polska typografia: twarda spacja po jednoliterowych spójnikach i przyimkach
// oraz po skrótach „ul.” i „tel.”, żeby nie zostawały na końcu wiersza.
const NB = ' '
const RE = /(^|[\s(„])([aiouwzAIOUWZ]|ul\.|tel\.)\s+/g

export function t(text: string): string {
  return text.replace(RE, `$1$2${NB}`).replace(RE, `$1$2${NB}`)
}
