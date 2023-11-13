import { TypeAction } from "../actionsType";

interface SearchRepositoriesAction{
 type: TypeAction.SEARCH_REPOSITORIES
}
interface SearchRepositoriesSuccessAction{
 type: TypeAction.SEARCH_REPOSITORIES_SUCCESS,
 payload: string[]
}
interface SearchRepositoriesErrorAction{
 type: TypeAction.SEARCH_REPOSITORIES_ERROR,
 payload:string
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;