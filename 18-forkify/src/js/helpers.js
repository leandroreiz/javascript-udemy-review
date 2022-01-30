import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchArgs = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const response = await Promise.race([fetchArgs, timeout(TIMEOUT_SEC)]);
    const data = await response.json();

    if (!response.ok)
      throw new Error(`Recipe not found! ${data.message} (${data.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
