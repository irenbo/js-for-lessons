<template>
    <div class="task-list">
        <h2 v-if="(tasks.length > 0)">Ваши задачи</h2>
        <h2 v-else>Список задач пуст</h2>

        <div class="task"
             v-bind:class="{checked:task.isDel}"
             v-on:click="task.isDel = !task.isDel"
             v-for="task in tasks">
            <h3>{{task.title}}</h3>
            <p>{{task.description}}</p>
        </div>

        <button v-if="(tasks.length > 0)"
                v-on:click="deleteTasks">
            Удалить</button>
    </div>
</template>

<script>
    import {tasksFromStorage} from "./tasks";

    export default {
        name: "ShowTasks",
        data: function () {
            return {
                tasks: tasksFromStorage
            }
        },
        methods: {
            deleteTasks: function () {
                for (let i = 0; i < this.tasks.length; i++){
                    if(this.tasks[i].isDel) {
                        this.tasks.splice(i, 1);
                        i--;
                    }
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    $black: black;
    $gray: #ccc;

    .task-list {
        flex: 1;

        .task:nth-child(odd) {
            background: $gray;
            color: $black;
            padding: 10px;
        }

        .task:nth-child(even) {
            background: $black;
            color: $gray;
            padding: 10px;
        }

        .task:nth-child(odd).checked,
        .task:nth-child(even).checked {
            background: orangered;
            color: whitesmoke;
            text-decoration: line-through;
        }

    }

</style>