import axios from "axios";
import { ProfileType } from "../types/generalTypes";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "150d914b-0c39-4e15-a6fc-98bf47f87328"
    }
});

export const usersAPI = {
    getUsers(currentPage = 5, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {

        return profileAPI.getProfile(userId);
    }
}

type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    }
    resultCode: number
    message: Array<string>
}

type LoginMeResponseType = {
    data: {
        userId: number,
    }
    resultCode: number
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<LoginMeResponseType>(`auth/login`, { email, password, rememberMe, })
        .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}



export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },

        })

    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
}

