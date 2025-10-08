import Entrega from "../views/entrega";
import Inicio from "../views/inicio";
import Registro from "../views/registro";
import entregaContainer from "./entregaContainer";
import inicioContainer from "./inicioContainer";
import registroContainer from "./registroContainer";

const decorateEntrega = entregaContainer(Entrega);
const decorateInicio = inicioContainer(Inicio);
const decorateRegistro = registroContainer(Registro);

export default { decorateEntrega, decorateInicio, decorateRegistro };
