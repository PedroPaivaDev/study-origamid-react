export default async function getProducts(url) {
    const response = await fetch(url);
    const json = response.json();
    return json;
}