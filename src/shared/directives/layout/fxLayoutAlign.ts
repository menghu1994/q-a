export default {
    mounted(el: HTMLElement, binding: any) {
        const flexLayout = binding.value.split(' ')
        const justifyContent = flexLayout[0];
        const alignItems = flexLayout[1];
        Object.assign(el.style, {
            display: 'flex',
            justifyContent: justifyContent ?? 'flex-start',
            alignItems: alignItems ?? 'flex-start'
        })
    }
}
