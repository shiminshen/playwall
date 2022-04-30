const path = require('path')

// next.config.js
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.components = path.join(__dirname, 'src/components')
    config.resolve.alias.lib = path.join(__dirname, 'src/lib')
    config.resolve.alias.gql = path.join(__dirname, 'src/gql')
    // Important: return the modified config
    return config
  },
}
