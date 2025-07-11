export default {
    mounted(el: HTMLElement, binding: any) {
        const gapValue = binding.value.split(' ');
        const rowGap = Number(gapValue[0].split('px')[0])/2 + 'px';
        const colGap = gapValue[1] ?? '';
        Array.from(el.children).forEach((child: any) => {
            Object.assign(child.style, {
                padding: `0 ${rowGap} ${colGap ?? 0} ${rowGap} `
            })
        })
    }
}
