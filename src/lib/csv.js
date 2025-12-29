/**
 * Parse CSV text into headers + rows
 * @param {string} csvText
 * @returns {{ headers: string[], rows: object[] }}
 */
export function parseCsv(csvText) {
  if (!csvText) {
    return { headers: [], rows: [] }
  }

  const lines = csvText
    .trim()
    .split("\n")
    .filter(Boolean)

  if (lines.length === 0) {
    return { headers: [], rows: [] }
  }

  const headers = lines[0]
    .split(",")
    .map(h => h.trim())

  const rows = lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim())
    const row = {}

    headers.forEach((header, index) => {
      row[header] = values[index] ?? ""
    })

    return row
  })

  return { headers, rows }
}
