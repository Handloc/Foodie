import { TIMEOUT_SEC } from "./config";
import { RES_PER_PAGE, RES_PER_PAGE_650, RES_PER_PAGE_950 } from "./config";

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

export function setResultsPerPage() {
  let resultsPerPage = RES_PER_PAGE;
  if (window.matchMedia("(min-width: 650px").matches)
    resultsPerPage = RES_PER_PAGE_650;
  if (window.matchMedia("(min-width: 950px").matches)
    resultsPerPage = RES_PER_PAGE_950;
  return resultsPerPage;
}
