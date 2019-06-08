var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/router', (req, res, next) => {
        const rr = {
            path: '/home',
            name: 'homes',
            component: Home,
            redirect: {
                name: 'content'
            },
            children: [
                {
                    path: '',
                    name: 'content',
                    component: () => import('../components/Main.vue'),
                    meta: {
                        title: '数据报表',
                        icon: 'md-document',
                    }
                },
                {
                    path: 'news',
                    component: () => import('../components/news.vue'),
                    meta: {
                        title: '新闻管理',
                        icon: 'ios-paper',
                    },
                    children: [
                        {
                            path: 'newsPublish',
                            name: '1-1',
                            meta: {
                                title: '发布新闻'
                            },
                            component: () => import('../views/news/newsPublish.vue'),
                        },
                        {
                            path: 'auditNews',
                            name: '1-2',
                            meta: {
                                title: '审核新闻'
                            },
                            component: () => import('../views/news/auditNews.vue')
                        },
                        {
                            path: 'newsUpdate',
                            name: '1-3',
                            meta: {
                                title: '修改新闻'
                            },
                            component: () => import('../views/news/newsUpdate.vue')
                        },
                        {
                            path: 'newsDel',
                            name: '1-4',
                            meta: {
                                title: '删除新闻'
                            },
                            component: () => import('../views/news/newsDel.vue')
                        },
                        {
                            path: 'DismissedNews',
                            name: '1-5',
                            meta: {
                                title: '驳回管理'
                            },
                            component: () => import('../views/news/DismissedNews.vue')
                        },
                    ]
                },
                {
                    path: 'site',
                    component: () => import('../components/site.vue'),
                    meta: {
                        title: '网站维护',
                        icon: 'md-build'
                    },
                    children: [
                        {
                            path: 'unionInfo',
                            name: '2-1',
                            meta: {
                                title: '联盟介绍维护'
                            },
                            component: () => import('../views/MaintenWebsite/unionInfo.vue')
                        },
                    ]
                },
                {
                    path: 'equipment',
                    component: () => import('../components/equipment.vue'),
                    meta: {
                        title: '设备管理',
                        icon: 'ios-aperture',
                    },
                    children: [
                        {
                            path: 'CategoryManage',
                            name: '3-1',
                            meta: {
                                title: "类别管理"
                            },
                            component: () => import('../views/EquipManage/CategoryManage.vue')
                        },
                        {
                            path: 'DeviceDetailsManagement',
                            name: '3-2',
                            meta: {
                                title: "设备添加"
                            },
                            component: () => import('../views/EquipManage/DeviceDetailsManagement.vue')
                        },
                        {
                            path: 'DelEquipment',
                            meta: {
                                title: "删除设备"
                            },
                            name: '3-3',
                            component: () => import('../views/EquipManage/DelEquipment.vue')
                        },
                        {
                            path: 'UpdateEquipmentInfo',
                            name: '3-4',
                            meta: {
                                title: "修改设备"
                            },
                            component: () => import('../views/EquipManage/UpdateEquipmentInfo.vue')
                        },
                        {
                            path: 'OpenProjectAdd',
                            name: '3-5',
                            meta: {
                                title: "开放项目添加"
                            },
                            component: () => import('../views/EquipManage/OpenProjectAdd.vue')
                        },
                        {
                            path: 'OpenProjectDel',
                            name: '3-6',
                            meta: {
                                title: "开放项目删除"
                            },
                            component: () => import('../views/EquipManage/OpenProjectDel.vue')
                        },
                        {
                            path: 'OpenProjectManagement',
                            name: '3-7',
                            meta: {
                                title: "开放项目修改"
                            },
                            component: () => import('../views/EquipManage/OpenProjectManagement.vue')
                        },
                        {
                            path: 'AppointmentRecordDel',
                            name: '3-8',
                            meta: {
                                title: "预约记录管理"
                            },
                            component: () => import('../views/EquipManage/AppointmentRecordDel.vue')
                        },
                    ]
                },
                {
                    path: 'pioneer',
                    component: () => import('../components/pioneer.vue'),
                    meta: {
                        title: '创业指导',
                        icon: 'ios-chatbubbles',
                    },
                    children: [
                        {
                            path: 'ContentAdd',
                            name: '4-1',
                            meta: {
                                title: '文章添加'
                            },
                            component: () => import('../views/BusinessGuidance/ContentAdd.vue')
                        },
                        {
                            path: 'ContentCheck',
                            name: '4-2',
                            meta: {
                                title: '文章修改'
                            },
                            component: () => import('../views/BusinessGuidance/ContentUpdate.vue')
                        },
                        {
                            path: 'ContentDel',
                            name: '4-3',
                            meta: {
                                title: '文章删除'
                            },
                            component: () => import('../views/BusinessGuidance/ContentDel.vue')
                        },
                    ]
                },
                {
                    path: 'law',
                    component: () => import('../components/law.vue'),
                    meta: {
                        title: '法律法规',
                        icon: 'ios-pricetags',
                    },
                    children: [
                        {
                            path: 'LawsAdd',
                            name: '5-1',
                            meta: {
                                title: '法律法规添加'
                            },
                            component: () => import('../views/LawsAndRegulations/LawsAdd.vue')
                        },
                        {
                            path: 'LawsUpdate',
                            name: '5-2',
                            meta: {
                                title: '法律法规修改'
                            },
                            component: () => import('../views/LawsAndRegulations/LawsUpdate.vue')
                        },
                        {
                            path: 'LawsDel',
                            name: '5-3',
                            meta: {
                                title: '法律法规删除'
                            },
                            component: () => import('../views/LawsAndRegulations/LawsDel.vue')
                        }
                    ]
                },
            ]
        };
        res.send('请求成功');
        //
    });

module.exports = router;
