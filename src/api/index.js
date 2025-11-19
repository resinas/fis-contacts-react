const API_URL = "/api/v1";

async function request(path, options = {}) {
    const res = await fetch(API_URL + path, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {})
        },
        ...options,
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log("API error response:", error);
        throw new Error(error.message || error.error || `Error ${res.status}`);
    }

    return await res.json().catch(() => null);
}

export const api = {
    get: (path) => request(path),
    post: (path, body) => request(path, { method: "POST", body: JSON.stringify(body) }),
    put: (path, body) => request(path, { method: "PUT", body: JSON.stringify(body) }),
    delete: (path) => request(path, { method: "DELETE" }),
};