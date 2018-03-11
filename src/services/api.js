import request from '../utils/request' 

export async function blogList(params) {
    return request(`/api/blog/lists`,{
        method: 'POST',
        body: params
    });
}

export async function essayDetail(params) {
    return request(`/api/blog/detail/${params.id}`);
}