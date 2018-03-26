import request from '../utils/request' 

export async function blogList(params) {
    return request(`/api/essay/lists`,{
        method: 'POST',
        body: params
    });
}

export async function essayDetail(params) {
    return request(`/api/essay/detail/${params.id}`);
}