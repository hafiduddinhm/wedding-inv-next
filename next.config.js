/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {disableStaticImages: true},
  compiler: {styledComponents: true},
  eslint: {ignoreDuringBuilds: true},
  webpack(config) {
    // `disableStaticImages` above turns off Next's built-in image loader (which
    // would otherwise wrap imports in a {src,width,height} object instead of a
    // plain string, breaking every `<img src={importedImage}>` in the legacy
    // code). This rule replaces it with a plain webpack asset/resource loader,
    // matching how CRA resolved these same imports to URL strings.
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      type: 'asset/resource',
    });
    // SVGs use CRA's dual-export scheme: default import is a URL string
    // (some legacy components use `import x from './x.svg'` as a plain
    // background/mask URL), while `import {ReactComponent} from './x.svg'`
    // (used in johando_windi/Pengantin.js) needs an inline React component.
    // Chaining @svgr/webpack after file-loader replicates both at once.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {ref: true},
        },
        {loader: require.resolve('file-loader')},
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
