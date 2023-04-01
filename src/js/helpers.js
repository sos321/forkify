import { TIMEOUT_SECONDS } from './config';

export async function getJSON(url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
    const data = res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
}

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
