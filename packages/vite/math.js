function add(a, b) {
  if (a === 1) {
    return 1
  }
  if (a === 2) {
    return 2
  }
  if (a === 3) {
    return 3
  }
  return a + b
}
Object.defineProperty(__vite_ssr_exports__, 'add', {
  enumerable: true,
  configurable: true,
  get() {
    return add
  },
})
function multiply(a, b) {
  return a * b
}
Object.defineProperty(__vite_ssr_exports__, 'multiply', {
  enumerable: true,
  configurable: true,
  get() {
    return multiply
  },
})
let count = 1
Object.defineProperty(__vite_ssr_exports__, 'count', {
  enumerable: true,
  configurable: true,
  get() {
    return count
  },
})
function increment() {
  ++count
}
Object.defineProperty(__vite_ssr_exports__, 'increment', {
  enumerable: true,
  configurable: true,
  get() {
    return increment
  },
})

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQU8sU0FBUyxJQUFJLEdBQVcsR0FBbUI7QUFDaEQsTUFBSSxNQUFNLEdBQUc7QUFDWCxXQUFPO0FBQUEsRUFDVDtBQUVBLE1BQUksTUFBTSxHQUFHO0FBQ1gsV0FBTztBQUFBLEVBQ1Q7QUFFQSxNQUFJLE1BQU0sR0FBRztBQUNYLFdBQU87QUFBQSxFQUNUO0FBRUEsU0FBTyxJQUFJO0FBQ2I7aUhBQUE7QUFFTyxTQUFTLFNBQVMsR0FBVyxHQUFtQjtBQUNyRCxTQUFPLElBQUk7QUFDYjsySEFBQTtBQUVPLElBQUksUUFBUTtxSEFBQTtBQUVaLFNBQVMsWUFBa0I7QUFDaEMsSUFBRTtBQUNKOzZIQUFBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhZGQoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoYSA9PT0gMSkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBpZiAoYSA9PT0gMikge1xuICAgIHJldHVybiAyXG4gIH1cblxuICBpZiAoYSA9PT0gMykge1xuICAgIHJldHVybiAzXG4gIH1cblxuICByZXR1cm4gYSArIGJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGEgKiBiXG59XG5cbmV4cG9ydCBsZXQgY291bnQgPSAxXG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnQoKTogdm9pZCB7XG4gICsrY291bnRcbn1cbiJdLCJmaWxlIjoiLi9tYXRoLnRzIn0=
