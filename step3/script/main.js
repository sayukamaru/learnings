class PhotoViewer {
    init(){
        const rootElm = document.getElementById('photoViewer');
        const frameElm = document.querySelector('.frame');
        // console.log(frameElm);
        const image = 'https://placehold.jp/300x150.png';

        frameElm.innerHTML = `
        <div class="currentImage">
            <img src="${image}">
        </div>
        `;
    }
}

console.log('aaa');
// const pv = new PhotoViewer();
// pv.init();
new PhotoViewer().init();