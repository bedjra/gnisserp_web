import { Prestation } from "./prestation";

export interface ArticlePrestation {
    id: number;
    prix: number;
    prestation: Prestation; // ← NON nullable
}