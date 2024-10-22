module.exports = {
    siteUrl: process.env.SITE_URL || 'https://best-lviv.org.ua', // правильний домен вашого сайту
    generateRobotsTxt: true, // опціонально генерувати robots.txt
    changefreq: 'daily', // частота перевірки змін сторінки
    priority: 0.7, // пріоритет індексації сторінок
    additionalPaths: async (config) => [
        await config.transform(config, '/about-us'), // Додає сторінку /about-us
        await config.transform(config, '/apply-to-best'), // Додає сторінку /apply-to-best
        await config.transform(config, '/become-a-partner'), // Додає сторінку /become-a-partner
        await config.transform(config, '/events'), // Додає сторінку /events
        await config.transform(config, '/gallery'), // Додає сторінку /gallery
        await config.transform(config, '/opportunities'), // Додає сторінку /opportunities
        await config.transform(config, '/qa'), // Додає сторінку /qa
    ],
};
