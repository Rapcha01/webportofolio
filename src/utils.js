export const getImgaeUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
};