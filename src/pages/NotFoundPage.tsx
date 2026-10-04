import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const NotFoundPage =(): ReactElement => {
    useDocumentTitle("Page introuvable");
return(
  <div>
    <p>Page introuvable</p>
    <Link to="/">Retour à l'accueil</Link>
  </div>
);
};