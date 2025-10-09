import "../components/styles.css";
import entregaContainer from "../viewmodels/entregaContainer";

function Entrega({
  handleFileChange,
  handleUpload,
  message,
}: any) {
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

export default entregaContainer(Entrega);