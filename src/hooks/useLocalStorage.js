function useLocalStorage () {
    function get(item) {
        return localStorage.getItem(item)
    }
    function parse(item) {
        return JSON.parse(localStorage.getItem(item));
    }
    function set(item, value) {
        localStorage.setItem(item, JSON.stringify(value))
    }
    return {get, parse, set}
}
export { useLocalStorage }