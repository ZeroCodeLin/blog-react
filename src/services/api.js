import request from '../utils/request' 

export async function blogList(params) {
    return request(`/api/blog/lists`,{
        method: 'POST',
        body: {
            page: 1,
            num: 2
        }
    });
}

export async function essayDetail(params) {
    return request(`/api/blog/detail/${params.id}`);
}