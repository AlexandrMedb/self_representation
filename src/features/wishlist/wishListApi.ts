import { fetchWrapper } from "../../utils/apiUtils";

import { postWish } from "./wishListSlice";

export class wishListApi {
  static async getWishList<T>() {
    return fetchWrapper<T>("/posts");
  }

  static async postWish<T>(body: postWish) {
    return fetchWrapper<T>("/posts", body);
  }
}
