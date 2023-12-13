import axios from "axios";

const axClient = axios.create({
  baseURL: "https://staging17.o9solutions.com/wp-json/o9/v1",
});

export function getPostData(post_id: string) {
  return axClient.post("/page", { post_id: post_id });
}
