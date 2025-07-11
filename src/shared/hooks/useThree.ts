import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";
import {Font, FontLoader} from "three/examples/jsm/loaders/FontLoader";

export const useThree = (container: HTMLElement, sizes: {width: number, height: number}) => {
    const scene = new THREE.Scene()
    let camera = new THREE.PerspectiveCamera()
    let renderer = new THREE.WebGLRenderer({ antialias: true });
    const fontLoader = new FontLoader();
    let mixer!: THREE.AnimationMixer

    const initCamera = () => {
        camera = new THREE.PerspectiveCamera(8, sizes.width / sizes.height, 0.1, 1000)
        camera.position.x = 30
        camera.position.y = 30
        camera.position.z = 30
        scene.add(camera)
    }

    const initAmbient = () => {
      const ambientLight = new THREE.AmbientLight(0x404040); // 设置环境光的颜色
      scene.add(ambientLight);
    }

    const initRender = () => {
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.shadowMap.enabled = true;
        renderer.setClearColor( 0x000000, 0 )
        container.appendChild(renderer.domElement);
    }

    const initAxesHelp = () => {
        const axesHelper = new THREE.AxesHelper(100);
        scene.add(axesHelper);
    }

    const initGridHelp = () => {
        const gridHelper = new THREE.GridHelper(100, 100);
        scene.add(gridHelper);
    }

    const initController = () => {
        const controller = new OrbitControls(camera, container);
        controller.enableDamping = true
        controller.enableZoom = true
        controller.enablePan = true
        controller.minDistance = 30
        controller.maxDistance = 80
        controller.minPolarAngle = Math.PI / 5
        controller.maxPolarAngle = Math.PI / 2

        controller.addEventListener("change", function () {
            renderer.render(scene, camera);
        });

    }

    const loadFbxModel = () => {
        const loader = new FBXLoader();
        loader.load('/public/three/StandardWalk.fbx', (fbx) => {
            fbx.scale.set(0.02, 0.02, 0.02);
            fbx.position.set(-0.8, -1, 0)
            scene.add(fbx);
            // 获取动画混合器
            mixer = new THREE.AnimationMixer(fbx);
            // 获取FBX文件中的动画
            const animation = fbx.animations[0];
            // 添加动画到混合器
            const action = mixer.clipAction(animation);
            action.play();
        });
    }

    const initLight = () => {
        const directionLight = new THREE.DirectionalLight(0xFFFFFF, 3.4);
        directionLight.position.set(-3, 3, 3)

        const directionLight2 = new THREE.DirectionalLight(0xFFFFFF, 1);
        directionLight2.position.set(3, 3, -3)
        scene.add(directionLight)
        scene.add(directionLight2)
    }

    const render = () => {
        requestAnimationFrame( render );
        if (mixer) {
            mixer.update(0.016); // 0.016 表示每帧的时间间隔
        }
        renderer.render(scene, camera);
    }

    // 添加字体
    const loadFont = (url: string): Promise<Font> => {
        return new Promise((resolve, reject) => {
            fontLoader.load(url, resolve, undefined, reject);
        });
    }

    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const init = () => {
        initCamera()
        initAmbient()
        initRender()
        initLight()
        initController()
        loadFbxModel()
    }

    return {
        scene,
        init,
        initCamera,
        initRender,
        initAxesHelp,
        initGridHelp,
        initController,
        loadFont,
        render
    };
};
