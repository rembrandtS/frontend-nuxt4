export interface tokenVo {
    grant_type: string;
    appkey: string;
    secretkey: string;
}

export interface tokenDto {
    expires_dt:string;
    token_type:string;
    token:string;
    return_code:number;
    return_msg:string;
}

export const defaultTokenVo: tokenVo = {
    grant_type:'client_credentials',
    appkey:'TUsqLLpCj1muFhi3AaeEnNrtnJz-N9cOKtrBLzf1W2g',
    secretkey:'oSKUNVNd2DzIyJA5eOniSbczAjjvlHfl__WSBre7yK4',
}