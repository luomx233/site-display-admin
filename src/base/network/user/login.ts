import net from "../axios/index";
export default async function (user) {
  return await net.request({
    method: "post",
    url: "/user/login",
    data: user,
  });
}
