// Модификация компонента Document из Next.js
// Используется для того, чтобы подключить css файл
//
// Подробнее: https://github.com/zeit/next-plugins/tree/master/packages/next-css

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
