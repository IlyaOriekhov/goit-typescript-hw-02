import axios from "axios";
import { Data } from "../types/data";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: { "Accept-Version": "v1" },
});

export function getData(query: string | number, page = 1): Promise<Data> {
  if (!query) {
    return Promise.reject(new Error("Query parameter is required"));
  }

  const params = {
    per_page: 18,
    client_id: "_dgtqKacS13Z3sTa1FPbkEU5V5PSmRDivUVipDXV20Y",
    query,
    page,
    orientation: "landscape",
  };

  return Promise.resolve(instance.get<Data>("/search/photos", { params })).then(
    (response) => response.data
  );
}
