import fetch from 'isomorphic-unfetch';

// Fecth API
const fecthApi = async endpoint => {
    const res = await fetch(endpoint);
    const json = await res.json();
    return json;
};
export { fecthApi };
