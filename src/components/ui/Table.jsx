import Box from "../layout/Box";
import Text from "./Text";

function Table({ title, titleProps = {}, headers = [], rows = [] }) {
  if (headers.length === 0) {
    return (
      <Text muted>
        No data available
      </Text>
    )
  }
  return (
    <Box padding="none" overflow="auto">
      {title && (
        <Box padding="md">
          <Text {...titleProps}>{title}</Text>
        </Box>
      )}

      <Box background="white" rounded="md" border="default" overflow="auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr className="border-b">
              {headers.map((header) => (
                <th key={header} className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-blue-50 hover:bg-blue-100 border-b last:border-b-0">
                {headers.map((header) => (
                  <td key={header}
                    className="px-4 py-2 text-sm text-gray-800">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  )
}

export default Table
