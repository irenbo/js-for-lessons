<template>
    <div class="task-manager">
        <!--неизменный контент-->
        <div class="menu">
            <img :src="src">
            <div class="title">
                <h3>Задачи</h3>
                <p>Всего задач: {{tasks.length}}</p>
            </div>

            <nav>
                <router-link to="/addTask">Создать задчу</router-link>
                <router-link to="/showTasks">Просмотр задач</router-link>
            </nav>
        </div>

        <!--изменяемая часть-->
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {tasksFromStorage} from "./components/tasks";

    export default {
        name: "App",
        data: function () {
            return {
                tasks: tasksFromStorage,
                src: "/src/img/cat.png"
            }
        }
    }
</script>

<style scoped>

</style>