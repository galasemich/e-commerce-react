export const uploadImage = async (image) => {
    const API_KEY = "da33083baaffcaffcc575bc7970af474"
    const ENDPOINT = "https://api.imgbb.com/1/upload"

    const productFormData = new FormData()
    productFormData.append("image", image)

    try {
        const response = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
            method: "POST",
            body: productFormData 
        })

        const image = await response.json()

        if (!image.success) {
           throw new Error("No se pudo completar la subida de la imagen.")
        }

        return image.data.url
    } catch (error) {
        console.log(error)
    }
}