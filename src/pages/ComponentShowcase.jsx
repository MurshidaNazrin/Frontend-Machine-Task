import Stack from "../components/layout/Stack";
import Box from "../components/layout/Box";
import Card from "../components/ui/Card";
import Text from "../components/ui/Text";
import Table from "../components/ui/Table";
import Button from "../components/ui/Button";

function ComponentShowcase() {
    const sampleHead = ["Customer_Name", "Invoice_ID", "Date", "Amount", "Status"];
    const sampleData = [
        { Customer_Name: "John Doe", Invoice_ID: "INV-001", Date: "2025-01-15", Amount: "150.00", Status: "Paid" },
        { Customer_Name: "Jane Smith", Invoice_ID: "INV-002", Date: "2025-01-16", Amount: "255.50", Status: "unpaid" },
        { Customer_Name: "Acme Corp", Invoice_ID: "INV-003", Date: "2025-01-17", Amount: "1200.00", Status: "Pending" },
    ];

    return (
        <Box padding="lg" background="white" rounded="lg">
            <Stack gap="xl">
                <Card>
                    <Stack gap="md">
                        <Text as="h2" size="lg" weight="bold">Box + Stack Layouts</Text>
                        <Stack direction="horizontal" gap="md">
                            <Box background="muted" padding="md">Box 1</Box>
                            <Box background="muted" padding="md">Box 2</Box>
                            <Box background="muted" padding="md">Box 3</Box>
                        </Stack>
                    </Stack>
                </Card>

                <Card>
                    <Stack gap="sm">
                        <Text as="h2" size="lg" weight="bold">Text Variants</Text>
                        <Text size="sm">Small Text</Text>
                        <Text size="base">Base Text</Text>
                        <Text size="lg" weight="semibold">Large semibold text</Text>
                        <Text size="xl" weight="bold">XL bold text</Text>
                        <Text muted>Muted Text</Text>
                        <Text color="success">Success Text</Text>
                        <Text color="danger">Danger Text</Text>
                        <Text color="primary">Primary Text</Text>
                    </Stack>
                </Card>


                <Card>
                    <Stack gap="sm">
                        <Text as="h2" size="lg" weight="bold">Button States</Text>
                        <Stack direction="horizontal" gap="sm">
                            <Button>Default</Button>
                            <Button disabled>Disabled</Button>
                            <Button loading>Loading</Button>

                            <Button variant="danger">Button</Button>
                            <Button variant="secondary">Button</Button>
                        </Stack>
                    </Stack>
                </Card>

                <Card>
                    <Table
                        title="Mock Data Table"
                        titleProps={{ size: "lg", weight: "bold", color: "primary" }}
                        headers={sampleHead}
                        rows={sampleData}
                    />
                </Card>

            </Stack>
        </Box>
    )
}

export default ComponentShowcase
