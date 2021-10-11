import config from "../../assets/js/conf/config";
import { request } from "../../assets/js/utils/request";

//热门搜索
export function getHotKeywordData(){
return request(config.baseApi+"/home/public/hotwords?token="+config.token)
}

//搜索商品结果
export function getSearchData(data){
    let kwords=data.keyword?data.keyword:"";
    let page=data.page?data.page:1;
    let otype=data.otype?data.otype:"all";
    let url=config.baseApi+"/home/goods/search?kwords="+kwords+"&param=&page="+page+"&price1=&price2=&otype="+otype+"&cid=&token="+config.token
    console.log(url);
    return request(url)
}