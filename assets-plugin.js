class AssetsPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('AssetPlugin', compilation => {
      compilation.hooks.chunkAsset.tap("AssetPlugin", (chunk, filename) => {
        console.log(chunk.id || chunk.name, filename)
      });
    })
  }
}

module.exports = AssetsPlugin