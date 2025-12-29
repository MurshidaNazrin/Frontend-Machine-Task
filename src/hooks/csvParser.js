import { useState } from "react";
import { parseCsv } from "../lib/csv";

function csvParser() {
    const [file, setFile] = useState(null);
    const [headers, setHeaders] = useState([]);
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    function selectFile(selectedFile) {
        if (!selectedFile) return
        setFile(selectedFile);
    }

    function uploadCsv() {
        if (!file) return
        setLoading(true);
        setSuccess(false);

        const reader = new FileReader();

        reader.onload = () => {
            const csvText = reader.result;
            const { headers, rows } = parseCsv(csvText);


            setTimeout(() => {
                setHeaders(headers);
                setRows(rows);
                setLoading(false);
                setSuccess(true);
            }, 1000)
        }

        reader.readAsText(file);
    }
    return {
        file, headers, rows, loading, success, selectFile, uploadCsv
    }
}

export default csvParser
