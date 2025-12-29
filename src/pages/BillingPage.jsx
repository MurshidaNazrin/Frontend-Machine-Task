import Stack from "../components/layout/Stack";
import Box from "../components/layout/Box";
import Card from "../components/ui/Card";
import Text from "../components/ui/Text";
import Table from "../components/ui/Table";
import Button from "../components/ui/Button";
import csvParser from "../hooks/csvParser";

function BillingPage() {
    const { file, headers, rows, loading, success, selectFile, uploadCsv } = csvParser()
    return (
        <Box padding="lg" background="white" rounded="lg">
            <Stack gap="xl">
                {/* Header */}
                <Stack gap="lg">
                    <Text as="h1" size="xl" weight="bold">
                        Import Billing Data
                    </Text>

                    <Text size="sm" muted>
                        Upload a csv file to import billing or invoice data.
                    </Text>
                </Stack>

                {/*upload */}
                <Card>
                    <Stack gap="md">
                        <Stack direction="horizontal" gap="sm" align="center">
                            <Box padding="sm">
                                <input type="file" accept=".csv" onChange={(e) => selectFile(e.target.files[0])} />
                            </Box>
                            <Button onClick={uploadCsv}
                                disabled={!file || loading}
                                loading={loading}
                            >
                                Upload
                            </Button>
                        </Stack>

                        {file && (
                            <Text size="sm" muted>
                                Selected file: {file.name}
                            </Text>
                        )}

                        {success && (
                            <Text size="sm" weight="medium" color="success">
                                CSV uploaded successfully...
                            </Text>
                        )}
                    </Stack>
                </Card>

                {/* Table  */}
                {headers.length > 0 && (
                    <Box marginTop="lg" overflow="auto">
                        <Card>
                            <Table
                                title={file.name}
                                titleProps={{ size: "xl", weight: "bold", color: "primary" }}
                                headers={headers}
                                rows={rows}
                            />
                        </Card>
                    </Box>
                )}
            </Stack>
        </Box >
    );
}

export default BillingPage
