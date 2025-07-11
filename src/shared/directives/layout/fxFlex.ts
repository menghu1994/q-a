export default {
    mounted(el: HTMLElement, binding: any) {
        const space = binding.value
        // el.style.display = 'flex';
        Object.assign(el.style, {
            display: 'flex',
            flex: '1 1 100%',
            boxSizing: 'border-box',
            maxWidth: `${space}%`
        })
    }
}
