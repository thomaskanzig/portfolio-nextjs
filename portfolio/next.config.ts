import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    devIndicators: false
};

export default nextConfig;
