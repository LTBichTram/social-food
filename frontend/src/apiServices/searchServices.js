import * as request from "~/utils/request";

export const search = async (q, type = "less") => {
  try {
    const res = await request.get("api/users/search", {
      params: {
        q,
        type,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
