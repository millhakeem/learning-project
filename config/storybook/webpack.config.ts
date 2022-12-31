/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };
    config!.resolve!.modules!.unshift(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        '@': path.resolve(__dirname, '..', '..', 'src'),
    };

    const rules = config.module!.rules as RuleSetRule[];
    config!.module!.rules = rules!.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('http://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
