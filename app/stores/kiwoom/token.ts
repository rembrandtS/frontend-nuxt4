import { defineStore } from 'pinia';
import axios from 'axios';
import type { tokenVo, tokenDto} from "~/types/kiwoom/token";

// composition(setup) 방식
export const useKiwoomAuthStore  = defineStore('kiwoom-auth', () => {
    // state
    const HOST="https://api.kiwoom.com";
    const accessToken  = ref<tokenDto>();

    const getToken = async () => {
        const req = ref<tokenVo>({
            grant_type : 'client_credentials',
            appkey : 'TUsqLLpCj1muFhi3AaeEnNrtnJz-N9cOKtrBLzf1W2g',
            secretkey: 'oSKUNVNd2DzIyJA5eOniSbczAjjvlHfl__WSBre7yK4'
        });
        const endpoint = "/oauth2/token";
        const url = HOST + endpoint;

        try{
            accessToken.value = await axios.post(url,req.value).then((result) => { return result.data; });
            console.log(accessToken.value);
        }catch(e){
            console.log(e);
        }
    }

    return {host: HOST, res: accessToken, getToken};
}, {persist: true
},);