import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Entrega() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Por favor selecciona un archivo antes de subirlo.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message || "Archivo subido correctamente");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setMessage(
          error.response?.data?.message || "Error al subir el archivo"
        );
      } else {
        setMessage("Error desconocido al subir el archivo");
      }
    }
  };

  return (
    <div className="registro">
      <h1>Entrega de documentos</h1>

      <div className="basic">
        <h4>Documento: Sube tu archivo (PDF, DOC, PNG, etc.)</h4>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.png,.jpg"
          className="docs"
        />

        <button onClick={handleUpload}>Subir documento</button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
