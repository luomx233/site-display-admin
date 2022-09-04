import net from "../axios/index";
export default async function (image) {
  return await net.request({
    method: "post",
    url: "/upload",
    data: image,
  });
}
