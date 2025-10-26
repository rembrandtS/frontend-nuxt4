import { defineStore } from 'pinia';
import axios from 'axios';
import { useKiwoomAuthStore } from '@/stores/kiwoom/token';
import type {ka01690Vo, ka01690Dto} from '@/types/kiwoom/account/ka01690'

export const useKiwoomAccountStore  = defineStore('kiwoom-account', () => {
    const authStore = useKiwoomAuthStore();
    const req = ref<ka01690Vo>({qry_dt:'20251014'});
    const res = ref<ka01690Dto>();

    function getHttpHeader(contYn:string, nextKey:string) {
        return {
            'Content-Type': 'application/json;charset=UTF-8', // 컨텐츠 타입
            'authorization': `${authStore.res?.token_type} ${authStore.res?.token}`, // 접근 토큰
            'cont-yn': contYn, // 연속 조회 여부
            'next-key': nextKey, // 연속 조회 키
            'api-id': 'ka01690' //
        };
    }

    console.log("getHttpHeader:::",getHttpHeader("",""));
    const setParams = (params:ka01690Vo) => {
        req.value = params;
        getData();
    }

    const getData = async () => {
        try{
            res.value = await axios({
                url : `${authStore.host}/api/dostk/acnt`,
                method:'post',
                headers: getHttpHeader( "Y", ""),
                data: JSON.stringify({qry_dt: req.value.qry_dt}),
            }).then((result) => { return result.data; });
            console.log(res.value);
        }catch(e){
            console.log(e);
        }

        return null;
    }

    return {res, setParams, getData};
});