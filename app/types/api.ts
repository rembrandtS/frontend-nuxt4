export interface ApiStructure {
    articles: Article[];
    status: string;
    totalResults: number;
}

export interface Article {
    author: string;
    title: string;
    description: string;
    source: {
        id: string;
        name: string;
    };
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}