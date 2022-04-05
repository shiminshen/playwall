import path from 'path'
// next.config.js
module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack  }) => {
    config.resolve.alias.components = path.join(__dirname, 'src/components')
    config.resolve.alias.gql= path.join(__dirname, 'src/gql')
    // Important: return the modified config
    return config
  },
}
