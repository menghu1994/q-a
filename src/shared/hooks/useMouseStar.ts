import {onMounted, onUnmounted} from 'vue';

export const useMouseStar = () => {

    let x1 = 0, y1 = 0;
    // window.client
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const dist_to_draw = 50;
    const delay = 1000;
    const fsize = ['1.1rem', '1.4rem', '.8rem', '1.7rem'];
    const colors = ['#E23636', '#F9F3EE', '#E1F8DC', '#B8AFE6', '#AEE1CD', '#5EB0E5'];
    const rand = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min + 1)) + min;
    const selRand = (o: string[]) => o[rand(0, o.length -1)];
    const distanceTo =  (x1: number, y1: number, x2: number, y2: number) =>
            Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2)));
    const shouldDraw = (x: number, y: number) => (distanceTo(x1, y1, x, y) >= dist_to_draw);
    const addStr = (x:number, y: number) => {
            const str = document.createElement("div");
            str.innerHTML = '&#10022;';
            str.className = 'star';
            str.style.top = `${y + rand(-20,20)}px`;
            str.style.left = `${x}px`;
            str.style.color = selRand(colors);
            str.style.fontSize = selRand(fsize);
            document.body.appendChild(str);
            const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
            str.animate({
                translate: `0 ${(y+fs)>vh?vh-y:fs}px`,
                opacity: 0,
                transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
            }, {
                duration: delay,
                fill: 'forwards',
            });
            //could add a animation terminate listener, but why add the additional load
            setTimeout(() => {
                str.remove();
            }, delay);
        }

    onMounted(() => {
        addEventListener("mousemove", (e) => {
            const {clientX, clientY} = e;
            if(shouldDraw(clientX, clientY)){
                addStr(clientX, clientY);
                x1 = clientX;
                y1 = clientY;
            }
        });
    })


    onUnmounted(() => {
        removeEventListener("mousemove", () => {})
    })
};
