import AxiosSingleton from '../network/AxiosSingleton'

export const getData = async (categoryToFetch = 'movie', page = 1, state) => {
    let url = `https://api.themoviedb.org/3/discover/${categoryToFetch}?language=en&sort_by=popularity.desc&page=${page}`;
    try {
        let response = await AxiosSingleton.getInstance().get(url);
        if (response.status === 200 && response?.data?.results)
            return [...state.data, ...response?.data?.results]
    } catch (error) {
        throw error
    }
};
