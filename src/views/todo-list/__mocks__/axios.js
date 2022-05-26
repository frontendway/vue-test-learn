export default {
  get (url) {
    if (url === '/getList.json') {
      return new Promise((resolve, reject) => {
        resolve({
          data: [
            { status: 'div', value: 1 },
            { status: 'div', value: 2 }
          ]
        })
      })
    }
  }
}
