<template>
    <div class="home">
        <TopBar/>
        <router-view></router-view>
        <TabBar/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import TopBar from '../components/TopBar'
    import PhoneList from '../components/PhoneList'
    import TabBar from '../components/TabBar'

    export default {
        name: 'home',
        components: {TopBar, PhoneList,TabBar}
    }
</script>
