import axios from 'axios';

export const callAPI = async page => {
    const path = "https://api.flickr.com/services/rest/"
    const method = "flickr.interestingness.getList"
    const api_key = "7253fa798ef2e7731b0873e1f4f4522f"
    const extras = "owner_name%2C+views%2C+url_t%2C+url_l"
    const per_page = "20"
    const format = "json&nojsoncallback=1"
    const url = path+"?method="+method+"&api_key="+api_key+"&extras="+extras+"&per_page="+per_page+"&page="+page+"&format="+format
    let images
    await axios.get(url).then(res => {
        images = res.data.photos.photo.map(item => {
            return {
                src: item.url_l,
                caption: item.title,
                ownername: item.ownername,
                views: item.views,
                width: item.width_t,
                height: item.height_t
            }
        })
    })
    return images
}