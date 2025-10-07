// Proporciona una interfaz para crear objetos

import axios, { AxiosInstance } from "axios";

const interceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        const message =
          error.response?.data?.message ||
          "Error al desconocido realizar la acción";

        let customMessage = "";

        switch (status) {
          case 400:
            customMessage =
              "Solicitud incorrecta. Verificar los datos enviados.";
            break;
          case 404:
            customMessage = "Recurso no encontrado.";
            break;
          case 500:
            customMessage = "Error interno del servidor.";
            break;
          default:
            customMessage = message;
        }
        return Promise.reject({
          isAxiosError: true,
          status,
          message: customMessage,
          original: error,
        });
      }

      return Promise.reject({
        isAxiosError: false,
        message: "Error no relacionado con Axios.",
        original: error,
      });
    }
  );
};
export const factoryMethod = (type: "auth" | "upload"): AxiosInstance => {
  let instance: AxiosInstance;
  switch (type) {
    case "auth":
      instance = axios.create({
        baseURL: "http://localhost:3000",
      });
      break;

    case "upload":
      instance = axios.create({
        baseURL: "http://localhost:3000/upload",
        headers: { "Content-Type": "multipart/form-data" },
      });
      break;
  }
  interceptors(instance);
  return instance;
};
