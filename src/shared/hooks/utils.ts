import {ref, reactive, shallowRef, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import type {ActionEvent, ActionList, ITableColumn} from "@/components/model/table-model";
import type CRUDService from "@/utils/CRUDService";
import request from "@/utils/request";
import {ElMessage} from "element-plus";
import {tools} from "@/utils/tools";

interface State {
    columns?: ITableColumn[]
    totalCount?: number
    // 数据正在请求
    loading?: boolean
    // 显示加载动画
    showLoader?: boolean
    filters?: Object
    listData?: any[]
    selectItems?: any[]
}

export const useTable = (apiInterface: CRUDService, queryParams: any) => {
    const route = useRoute();
    const router = useRouter();

    const triggerEdit = async (actionEvent: any): Promise<any> => {
        await router.push({
            path: `${route.path}/${actionEvent.row._id}/edit`,
            params: { isEdit: 1 }
        })
    };

    const triggerView = async (actionEvent: any): Promise<any> => {
        await router.push({
            path: `${route.path}/${actionEvent.row._id}/view`,
            params: { isView: 1 }
        })
    };

    const triggerDelete = async (actionEvent: any): Promise<any> => {
        await apiInterface.delete(actionEvent.row._id);
        await loadAll()
    };

    const state = reactive<State>({
        columns: [],
        totalCount: 0,
        loading: false,
        showLoader: false,
        filters: {},
        listData: [],
        selectItems: []
    });
    const tableActionList = ref<ActionList>({
        edit: triggerEdit,
        delete: triggerDelete,
        view: triggerView,
    })

    const loadColumns = async (service: string) => {
        const { data: moduleColumns } = await request({ url: '/modules', method: 'GET', params: { service }});
        if(!moduleColumns?.length) {
            ElMessage.error('未查询到数据');
            return
        }
        const moduleColumn = moduleColumns[0].columns;
        state.columns = tools(moduleColumn)
        await loadAll()
    }

    const loadAll = async () => {
        try {
            state.loading = true;
            setTimeout(() => {
                // 如果请求数据时间不超过400ms,则不显示加载动画
                if(state.loading) {
                    state.showLoader = true
                }
            }, 400)
            const response = await apiInterface.query(queryParams.value);
            state.loading = false;
            state.showLoader = false;
            state.listData = response.data;
            state.totalCount = +response.headers['total-count'] ?? 0;
        } finally {
            state.loading = false;
        }
    };

    const columnSelect = <T extends any[]>($event: T) => {
        state.selectItems = $event;
    }

    const pageChange = async ($event: any) => {
      Object.assign(queryParams.value, $event);
      await loadAll()
    }

    const filterChange = async (filters: any) => {
        Object.assign(queryParams.value, { page: 0 }, filters)
        await loadAll();
    };

    const sortChange = ($event: any) => {
        // Implement the logic for the sortChange function
    };

    const sort = () => {
        // Implement the logic for the sort function
    };

    const editColumn = () => {
        // Implement the logic for the editColumn function
    };

    const getColumns = () => {
        // Implement the logic for the getColumns function
    };

    const reset = () => {
        // Implement the logic for the reset function
    };

    const action = (actionEvent: ActionEvent) => {
        if(Object.keys(tableActionList.value).includes(actionEvent.actionName)) {
            tableActionList.value[actionEvent.actionName](actionEvent.row)
        }
    };

    return {
        state,
        loadAll,
        tableActionList,
        filterChange,
        pageChange,
        sortChange,
        columnSelect,
        sort,
        triggerEdit,
        triggerView,
        triggerDelete,
        editColumn,
        getColumns,
        loadColumns,
        reset,
        action
    };
};
