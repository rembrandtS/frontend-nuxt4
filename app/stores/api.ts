import { defineStore } from 'pinia';
import axios from 'axios';
import type {Article} from "@/types/api";

// composition(setup) 방식
export const useStore  = defineStore('api', () => {
    // state
    const searchValue = ref<string>('korea');
    const articles = ref<Article[]>([]);

    // actions & mutations
    const changeSearchValue = (payload: string) => {
        searchValue.value = payload;
        getNews();
    }

    const getNews = async () => {
        const API_KEY = '92aa591865bb4714a83748f2de28d938';
        const API_URL = `https://newsapi.org/v2/everything?q=${searchValue.value}&from=2025-10-10&sortBy=popularity&apiKey=${API_KEY}`;

        try{
            articles.value = await axios.get(API_URL).then((res) => { return res.data.articles; });
        }catch(e){
            console.log(e);
        }
    }

    return { searchValue, articles: articles, changeSearchValue, getNews };
});