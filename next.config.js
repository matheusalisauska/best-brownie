const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'melhor-brownie-files.s3.us-east-1.amazonaws.com',
            },
        ],
    },
};


module.exports = nextConfig