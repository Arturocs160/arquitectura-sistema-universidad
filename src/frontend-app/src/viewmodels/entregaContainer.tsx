import React, { useState } from "react";
import { factoryMethod } from "../services/factoryMethod";

export default function entregaContainer(Component: any) {
  return function entregaDecorate(props: any) {
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
        const factory = factoryMethod("upload");
        const response = await factory.post(
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
        if (error.isAxiosError) {
          return { error: error.message, status: error.status };
        }
      }
    };

    return (
      <Component
        {...props}
        handleFileChange={handleFileChange}
        handleUpload={handleUpload}
        message={message}
      />
    );
  };
}
