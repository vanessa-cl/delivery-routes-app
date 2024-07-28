import { ORDER_STATUS } from "./orderStatus";

export default function getStyleVariant(verifier) {
  return verifier === ORDER_STATUS.delivering.id ? "secondary" : "primary";
}
