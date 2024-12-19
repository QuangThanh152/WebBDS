import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: "http://localhost:8010/api",
});

export const getAllProperties = async () => {
    try {
        const respone = await api.get("/residency/allresd", {
            timeout: 10 * 1000,
        });

        if (respone.status === 400 || respone.status === 500) {
            throw respone.data;
        }
        return respone.data;
    } catch (error) {
        toast.error("Đã xảy ra lỗi");
        throw error;
    }
};

export const getProperty = async (id) => {
    try {
        const respone = await api.get(`/residency/${id}`, {
            timeout: 10 * 1000,
        });

        if (respone.status === 400 || respone.status === 500) {
            throw respone.data;
        }
        return respone.data;
    } catch (error) {
        toast.error("Đã xảy ra lỗi");
        throw error;
    }
};

export const createUser = async (email, token) => {
    try {
        await api.post(
            `/user/register`,
            { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        toast.error("Sai cú pháp, hãy thử lại");
        throw error;
    }
};

export const bookVisit = async (date, propertyId, email, token) => {
    try {
        await api.post(
            `/user/bookVisit/${propertyId}`,
            {
                email,
                id: propertyId,
                date: dayjs(date).format("DD/MM/YYYY"),
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        toast.error("Đặt lịch bị lỗi, vui lòng thử lại");
        throw error;
    }
};
export const removeBooking = async (id, email, token) => {
    try {
        await api.post(
            `/user/removeBooking/${id}`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        toast.error("Hủy đặt lịch bị lỗi, vui lòng thử lại");
        throw error;
    }
};
export const toFav = async (id, email, token) => {
    try {
        await api.post(
            `/user/toFav/${id}`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        toast.error("Lỗi Hủy Thích");
        throw error;
    }
};

export const getAllFav = async (email, token) => {
    if (!token) return;
    try {
        const res = await api.post(
            `/user/allFav`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return res.data["favResidenciesID"];
    } catch (e) {
        toast.error("Something went wrong while fetching favs");
        throw e;
    }
};

export const getAllBookings = async (email, token) => {
    if (!token) return;
    try {
        const res = await api.post(
            `/user/allBookings`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return res.data["bookedVisits"];
    } catch (error) {
        toast.error("Something went wrong while fetching bookings");
        throw error;
    }
};
