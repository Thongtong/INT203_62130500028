const app = {
    data() {
        return {
            firstname: 'Thongtong',
            lastname: 'Tangsiripaisan',
            status: 'second years IT Student KMUTT ',
            img : 'images/user.jpg'
        }
    },
}

var mountedApp = Vue.createApp(app).mount('#app')
