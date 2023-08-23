// Tidak perlu melakukan impor setTimeout(), sebab fungsi ini bersifat global

// Ref: https://nodejs.org/docs/latest-v12.x/api/globals.html

setTimeout(() => {
  console.info('Hello Globals')
}, 2000)
