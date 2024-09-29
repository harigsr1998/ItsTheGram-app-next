import fsPromises from "fs/promises";
import { unstable_cache } from "next/cache";

const controller = new AbortController();
const signal = controller.signal;

const getData = unstable_cache(async () => {
  const res = await fsPromises.readFile(process.cwd() + "/src/data/data.json", {
    encoding: "utf8",
    signal,
  });
  const data = JSON.parse(res);
  return data;
});

export default getData;
