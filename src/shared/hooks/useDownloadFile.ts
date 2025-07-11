import { createVNode, ref, onBeforeUnmount } from 'vue';

export function useDownloadFile() {
    let xhr: any = null;
    // 限制同一文件同时触发多次下载
    let downloading = false;
    // let infoModal;

    onBeforeUnmount(() => {
        xhr && xhr.abort();
    });

    const downloadFile = (options: { url: string, fileName: string }) => {
        try {
            if (downloading || !options.url || !options.fileName) return;
            downloading = true;
            options.url = options.url.replace('http://', 'https://');
            const progress = ref(0);
            const fileType = options.url.split('.').pop();
            xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.open('get', options.url, true);
            // infoModal = Modal.info({
            //     title: '文件下载',
            //     okText: '取消下载',
            //     content: () => {
            //         return createVNode('div', {}, [
            //             createVNode('div', {}, ['文件下载过程中请勿关闭当前页面']),
            //             createVNode('div', { className: 'mt-2' }, [`当前下载进度 ${progress.value}%`]),
            //         ]);
            //     },
            //     onOk() {
            //         xhr.abort();
            //         return Promise.resolve();
            //     },
            // });
            xhr.onprogress = function (e: any) {
                progress.value = Math.floor((e.loaded / e.total) * 100);
                if (progress.value === 100) {
                    downloading = false;
                    // infoModal.destroy();
                }
            };
            xhr.onloadend = function (e: any) {
                if (e.target.status === 200 || e.target.status === 304) {
                    const aElement = document.createElement('a');
                    const blob = e.target.response;
                    const url = window.URL.createObjectURL(blob);
                    aElement.style.display = 'none';
                    aElement.href = url;
                    aElement.download = `${options.fileName}.${fileType}`;
                    document.body.appendChild(aElement);
                    aElement.click();
                    if (window.URL) {
                        window.URL.revokeObjectURL(url);
                    } else {
                        window.webkitURL.revokeObjectURL(url);
                    }
                    document.body.removeChild(aElement);
                }
            };
            xhr.send();
        } catch (e) {
            downloading = false;
            // infoModal && infoModal.destroy();
            // Modal.error({
            //     title: '提示',
            //     content: '下载发生异常，请重试',
            // });
        }
    };

    return {
        downloadFile,
    };
}
