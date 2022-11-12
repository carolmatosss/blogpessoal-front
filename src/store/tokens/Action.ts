export type Action = {type: "ADD_TOKEN"; payload: string}
//Tipo da action e a payload é a informação que a ação gera nesse caso, armazerar o token

export const addToken = (token: string): Action=>({
 type: "ADD_TOKEN",
 payload: token
});