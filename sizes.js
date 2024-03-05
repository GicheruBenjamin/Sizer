
//Copy this code and u will see the height and width if everything in your html document.
document.querySelectorAll('*').forEach(element => {
    const { tagName, offsetWidth, offsetHeight } = element;
    console.log(`${tagName}: ${offsetWidth}px x ${offsetHeight}px`);
});
