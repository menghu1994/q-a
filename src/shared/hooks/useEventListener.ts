import {onMounted, onUnmounted} from 'vue';

export const useEventListener = (target: any, event: string, callback: any) => {

    onMounted(() => target.addEventListener(event, callback))

    onUnmounted(() => target.removeEventListener(event, callback))

};
