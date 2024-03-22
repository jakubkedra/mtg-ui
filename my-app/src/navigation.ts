export function goto(path) {
    let urlObj;
    let urlOrigin;
    const currentURL = window.location.href;
    urlObj = new URL(currentURL);
    urlOrigin = urlObj.origin;
}