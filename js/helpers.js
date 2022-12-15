import { TIMEOUT_SEC } from "./config";

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took to long"));
    }, s * 1000);
  });
}

export async function getJSON(url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
}
