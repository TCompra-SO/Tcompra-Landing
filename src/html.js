import React from 'react';
import PropTypes from 'prop-types';
import icono from './images/logo/favicon.svg';
import font from './utils/fonts/rubik/Rubik-VariableFont_wght.ttf'
export default function HTML(props) {
    return (
        <html lang="es" {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="TCompra - Facilitamos la Compra y Venta de Bienes y Servicios. Encuentra productos, servicios y más en TCompra.com." />
                <link rel="icon" href={icono} type="image/svg+xml" />
                <link rel="preload" href={font} as="font" type="font/ttf" crossOrigin="anonymous" />

                <title>TCompra.com</title>
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        "name": "TCompra",
                        "url": "https://www.tcompra.com",
                        "description": "Facilitamos la Compra y Venta de Bienes y Servicios. Encuentra productos, servicios y más en TCompra.com.",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.tcompra.com/search?query={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    }
                    `}
                </script>
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
