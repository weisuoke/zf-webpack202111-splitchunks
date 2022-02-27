document.getElementById('play').addEventListener('click', () => {
  import(
    /* webpackChunkName: 'vedio' */
    /* webpackPrefetch: true */
    './video'
    ).then(result => {
    console.log(result.default)
  })
})