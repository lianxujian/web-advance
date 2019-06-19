!function (modules) {
    // 缓存
    const installModules = {}

    function __kkbpack_require__(moduleId) {
        // 是否缓存
        if (installModules[moduleId]) {
            return installModules[moduleId].exports
        }
        let module = installModules[moduleId] = {
            exports: {}
        }
        modules[moduleId].call(modules.exports, module, module.exports, __kkbpack_require__)
        console.log(module.exports)
        return module.exports
    }

    // 入口
    return __kkbpack_require__("./src/index.js")
}({
    "./src/index.js": function (module, exports, __kkbpack_require__) {
        const sayHi = __kkbpack_require__("./src/a.js")

        sayHi('开课吧')
    }
    , "./src/a.js": function (module, exports, __kkbpack_require__) {
        console.log('hello world')
    }

})