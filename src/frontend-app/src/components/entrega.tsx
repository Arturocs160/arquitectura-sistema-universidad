import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Entrega() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("document", selectedFile);
  };

  return (
    <div className="registro">
      <h1>Entrega de documentos</h1>

      <div className="basic">
        <h4>Documento 1: Sube un documento</h4>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.png,.jpg"
        />
        <button onClick={handleUpload}>Subir documento</button>
      </div>
    </div>
  );
}
