document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.item');
    const boxes = document.querySelectorAll('.box');

    // Get the video element after the DOM is loaded
    let video; 
    window.onload = () => { //VD cho phần 2 ;D
        video = document.querySelector('video');

        // Handle the video 'loadedmetadata' event for safe playback
        video.addEventListener('loadedmetadata', () => {
            video.play();
        });
    };

    function showItems() {
        console.log('Showing items...');
        items.forEach(item => {
            item.classList.remove('items-hidden');
            item.style.opacity = 0;
            item.style.transition = 'opacity 0.7s ease-in-out';
            setTimeout(() => {
                item.style.opacity = 1;
            }, 100);
        });
    }

    function hideItems() {
        console.log('Hiding items...');
        items.forEach(item => {
            item.classList.add('items-hidden'); //VD cho phần 1 ;D
            item.style.opacity = 0;
        });
    }

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log('Item clicked...');
            hideItems(); //Gọi VD phần 1
            setTimeout(() => {
                const box = boxes[index];
                box.classList.add('show');

                setTimeout(() => {
                    // Check if video is available and not already paused
                    if (video && !video.paused) {
                        video.pause();
                    }
                }, 500);
            }, 700);
        });
    });

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            console.log('Box clicked...');
            box.classList.remove('show');

            if (video) {
                video.play();
            }

            console.log('Calling showItems...');
            setTimeout(() => {
                showItems();
            }, 500);
        });
    });
});