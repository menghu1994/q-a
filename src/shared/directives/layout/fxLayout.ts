export default {
    mounted(el: HTMLElement, binding: any) {
        const flexLayout = binding.value.split(' ')
        const flexDirection = flexLayout[0];
        const justifyContent = flexLayout[1] ?? 'nowrap';
        // el.style.display = 'flex';
        Object.assign(el.style, {
            display: 'flex',
            flexFlow: `${flexDirection} ${justifyContent}`
        })
    }
}
