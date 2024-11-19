import { ArticlePrestation } from "./article-prestation";

export interface Article {
    id: number;
    libelle: string;
    image: string;
    articlePrestations: ArticlePrestation[];
}
