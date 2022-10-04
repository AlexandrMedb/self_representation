import { fetchWrapper } from "../../utils/apiUtils";

import { postWish, wish } from "./wishListSlice";

export class wishListApi {
  static async getWishList<T = wish[]>() {
    return fetchWrapper<T>("/posts");
  }

  static async postWish<T = wish>(body: postWish) {
    return fetchWrapper<T>("/posts", body);
  }

  static async putWish<T = wish>(id: string | number, wish: postWish) {
    return fetchWrapper<T>(`/posts/${id}`, wish, "PUT");
  }

  static async deleteWish<T>(id: string | number) {
    return fetchWrapper<T>(`/posts/${id}`, {}, "DELETE");
  }
}
