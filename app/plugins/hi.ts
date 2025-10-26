export default defineNuxtPlugin(() => {
    return {
        provide: {
            hi: (msg: string) => `Hi! ${msg}!`,
        },
    }
})