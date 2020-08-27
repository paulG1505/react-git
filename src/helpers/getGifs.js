export const getGifs = async (category) => {
    //mandamos la categoria encode para los espacios
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=u4saSS0yFqdAIug5USjANiDNNBkXAFAs`
    const resp = await fetch(url);
    const { data } = await resp.json()
    //mutamos el arreglo con solo los elementos que necesitamos
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}