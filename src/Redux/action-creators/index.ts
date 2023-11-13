import axios from "axios";
import { Dispatch } from "react";
import { Action } from "../actions";
import { TypeAction } from "../actionsType";

export const SearchRepositories = (term: any) =>{
return async (dispach: Dispatch<Action>) => {
  dispach({
    type: TypeAction.SEARCH_REPOSITORIES
  });
try {
    const {data} = await axios.get('https://registry.npmjs.org/-/v1/search',{
        params:{
            text: term
        }
    })
 const names = data.objects.map((result: any)=>{
    return result.package.name;
 })

 dispach({
 type: TypeAction.SEARCH_REPOSITORIES_SUCCESS,
 payload: names
 });
} catch (error: any) {
 dispach({
 type: TypeAction.SEARCH_REPOSITORIES_ERROR,
 payload: error.message
 });
}

}

}