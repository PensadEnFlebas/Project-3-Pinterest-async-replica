import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
})

export const searchPhotos = async (keyword) => {
  try {
    const images = await unsplash.search.getPhotos({
      query: keyword,
      page: 1,
      perPage: 30
    })

    if (!images.response || !images.response.results.length) {
      throw new Error('No images found')
    }

    return images
  } catch (error) {
    console.error('Error fetching images:', error)
    throw error
  }
}
