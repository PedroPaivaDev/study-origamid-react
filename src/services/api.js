export default async function buscarProduto(url) {
    const resposta = await fetch(url);
    const json = await resposta.json();
    return json
}