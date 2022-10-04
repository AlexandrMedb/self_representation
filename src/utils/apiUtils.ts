type reqMethod = "POST" | "PUT" | "DELETE";

export const reqInit = (body: any = {}, method: reqMethod = "POST") => ({
  method: method,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    accept: "application/json",
  },
  body: JSON.stringify(body),
});

type resSuccses<T> = {
  body: T;
  err?: never;
  status?: never;
};

type resFault = {
  body?: never;
  err: string;
  status: number;
};

type a<T> = resSuccses<T> | resFault;

export const resHandler = async <T>(res: Response): Promise<a<T>> => {
  if (res.ok || res.status >= 300) {
    const body = (await res.json()) as T;
    return { body };
  }

  const err = await res.json();
  return {
    err: err.message,
    status: res.status,
  };
};

// obj {[key: string]: any} to string ?key=query&key=query...
export const paramsToQueries = (data?: { [key: string]: any }): string => {
  if (!data) return "";
  const entries = Object.entries(data).filter(
    (el) => typeof el[1] !== "undefined"
  );
  return entries.reduce((prev, cur, i) => {
    if (i === 0) return `?${cur[0]}=${cur[1].toString()}`;
    return `${prev}&${cur[0]}=${cur[1].toString()}`;
  }, "");
};

// GET is default;
// if body POST is default
export const fetchWrapper = async <T>(
  url: string,
  body?: any,
  method: reqMethod = "POST"
) => {
  const res = await fetch(url, body && reqInit(body, method));
  return resHandler<T>(res);
};
