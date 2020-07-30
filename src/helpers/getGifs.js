

export const getGifs = async( category ) => {        

    //Peticion Http para traer imagenes que corresponde a esa categoria
   const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&api_key=CLeduAh46qNY06ZrxUqt7OddMTSmgUBq`;
   const resp = await fetch( url );
   const { data } = await resp.json();

   //info resp gifts
   const gifs = data.map( img => {
       return{
           id: img.id,
           title: img.title,
           url: img.images?.downsized_medium.url,
       }
   })
   return gifs;
}