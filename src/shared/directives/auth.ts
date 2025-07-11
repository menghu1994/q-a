// 使用方式
// 目录权限 `v-auth="'目录'"` 或者 `v-auth="['目录']"`
// 菜单权限 `v-auth="'目录:菜单'"` 或者 `v-auth="['目录', '菜单']"`
// 按钮权限 `v-auth="'目录:菜单:按钮'"` 或者 `v-auth="['目录', '菜单', '按钮']"`

const getValueType = (auth: any): string[] | undefined => {
	if(typeof auth === 'string') {
		return auth.split(':') ;
	} else if (auth instanceof Array) {
		return auth
	}
}

// 查看当前权限 1:目录, 2:菜单, 3:按钮
const getPermission = (permissions: any[], authArray: string[]): boolean | undefined => {
	const directoryAuth = permissions.some(permission => {
		return permission.type=== 'directory' && permission.name === authArray[0]
	})
	if(authArray.length === 1) { return directoryAuth }
	const menuAuth = directoryAuth && permissions.some(permission => {
		return permission.type=== 'menu' && permission.name === authArray[1]
	});
	if(authArray.length === 2) { return menuAuth }
	const buttonAuth = menuAuth && permissions.some(permission => {
		return permission.type=== 'button' && permission.name === authArray[2]
	});
	if(authArray.length === 3) { return buttonAuth }
}

export default {
	mounted(el: HTMLElement, binding: Record<string, any>) {
		const { value } = binding;
		// 所有的权限列表
		const permissions: any[] = [];
		if(!value) { return }
		const typeValue = getValueType(value)!;
		const hasPermission = getPermission(permissions, typeValue);
		console.error(typeValue, '权限')
		if(!hasPermission) {
			el.parentNode?.removeChild(el)
		}
	}
}
