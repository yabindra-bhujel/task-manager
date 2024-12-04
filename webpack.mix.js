import mix from 'laravel-mix';

mix.js('resources/js/app.js', 'public/js')
   .ts('resources/js/app.tsx', 'public/js') // For TypeScript
   .react() // Tells Mix to use React
   .webpackConfig({
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)$/, // Apply loader to js/ts/tsx files
            loader: 'esbuild-loader',  // Use esbuild for JS/TS files
            options: {
              loader: 'jsx', // Tell esbuild to handle JSX
            },
          },
        ],
      },
   })
   .sass('resources/sass/app.scss', 'public/css')
   .version();
