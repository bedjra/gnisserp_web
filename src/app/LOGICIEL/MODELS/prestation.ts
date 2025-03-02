import { ArticlePrestation } from "./article-prestation";

export interface Prestation {
    id: number;
    libelle: string;
    description: string;
    articlePrestations: ArticlePrestation[];
}
