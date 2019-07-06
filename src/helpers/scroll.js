export const getScrollDownPercentage = (window) => {
    let pageHeight = window.document.documentElement.scrollHeight;
    let clientHeight = window.document.documentElement.clientHeight;
    let scrollPos = window.pageYOffset;
    let currentPosition = scrollPos + clientHeight;
    let percentageScrolled = currentPosition / pageHeight;
    
    return percentageScrolled;
}