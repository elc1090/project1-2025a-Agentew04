const btnGroupSuplementos = {
    ids: [
        "btn-supl-massa",
        "btn-supl-magro",
        "btn-supl-energia",
        "btn-supl-saude"
    ],
    links: [
        {
            // left ad
            id: "suplementos-ad",
            type: "img",
            value: {
                "btn-supl-massa": "https://www.gsuplementos.com.br/upload/menu/objetivos-tabs/9c19096b622442cd28252ed702581a3b.jpg",
                "btn-supl-magro": "https://www.gsuplementos.com.br/upload/menu/objetivos-tabs/9f9b1baba711fa57802181396b968b5e.jpg",
                "btn-supl-energia": "https://www.gsuplementos.com.br/upload/menu/objetivos-tabs/1ce3c7cd0f540daaa325235b5d8c4cc9.jpg",
                "btn-supl-saude": "https://www.gsuplementos.com.br/upload/menu/objetivos-tabs/d3c759f30f6fde0b0e0217fd80307019.jpg"
            }
        },
        {
            // prod1 title
            id: "supl-prod1-title",
            type: "text",
            value: {
                "btn-supl-massa": "(TOP) Whey Protein Concentrado (1KG) - Growth Supplements",
                "btn-supl-magro": "Xilitol 250gr - Growth Supplements",
                "btn-supl-energia": "Pré-treino Insanity 300g - Growth Supplements",
                "btn-supl-saude": "ZMA (120 caps) - Growth Supplements"
            }
        },
        {
            // prod2 title
            id: "supl-prod2-title",
            type: "text",
            value: {
                "btn-supl-massa": "DOSE WHEY PROTEIN CONCENTRADO 30GR - GROWTH SUPPLEMENTS",
                "btn-supl-magro": "HOT Termogênico (60 Comprimidos) - Growth Supplements",
                "btn-supl-energia": "Pré-Treino Haze Hardcore 300g - Growth Supplements",
                "btn-supl-saude": "Multivitamínico (120 cáps) (nova fórmula) - Growth Supplements"
            }
        },
        {
            // prod3 title
            id: "supl-prod3-title",
            type: "text",
            value: {
                "btn-supl-massa": "Creatina (250g) (Creapure®) - Growth Supplements",
                "btn-supl-magro": "Cafeína (200MG) 120 caps - Growth Supplements (termogênico)",
                "btn-supl-energia": "Pasta de Amendoim Integral Torrado 1kg - Growth Supplements",
                "btn-supl-saude": "Vitamina D ULTRA (2000UI) 120 caps - Growth Supplements"
            }
        },
        {
            // prod1 price
            id: "supl-prod1-price",
            type: "text",
            value: {
                "btn-supl-massa": "R$ 119,70",
                "btn-supl-magro": "R$ 18,90",
                "btn-supl-energia": "R$ 108,90",
                "btn-supl-saude": "R$ 22,90"
            }
        },
        {
            // prod2 price
            id: "supl-prod2-price",
            type: "text",
            value: {
                "btn-supl-massa": "R$ 5,00",
                "btn-supl-magro": "R$ 41,90",
                "btn-supl-energia": "R$ 103,90",
                "btn-supl-saude": "R$ 44,90"
            }
        },
        {
            // prod3 price
            id: "supl-prod3-price",
            type: "text",
            value: {
                "btn-supl-massa": "R$ 109,90",
                "btn-supl-magro": "R$ 54,90",
                "btn-supl-energia": "R$ 27,90",
                "btn-supl-saude": "R$ 29,90"
            }
        },
        {
            // prod1 img
            id: "supl-prod1-img",
            type: "img",
            value: {
                "btn-supl-massa": "https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements-19.webp",
                "btn-supl-magro": "https://www.gsuplementos.com.br/upload/produto/imagem/m_xilitol-250gr-growth-supplements.webp",
                "btn-supl-energia": "https://www.gsuplementos.com.br/upload/produto/imagem/m_pr-treino-insanity-300g-growth-supplements-4.webp",
                "btn-supl-saude": "https://www.gsuplementos.com.br/upload/produto/imagem/m_melatonina-0-21mg-200-comprimidos-growth-supplements.png"
            }
        },
        {
            // prod2 img
            id: "supl-prod2-img",
            type: "img",
            value: {
                "btn-supl-massa": "https://www.gsuplementos.com.br/upload/produto/imagem/m_dose-whey-protein-concentrado-30gr-growth-supplements-6.webp",
                "btn-supl-magro": "https://www.gsuplementos.com.br/upload/produto/imagem/m_hot-termog-nico-60-comprimidos-growth-supplements.webp",
                "btn-supl-energia": "https://www.gsuplementos.com.br/upload/produto/imagem/m_pr-treino-haze-hardcore-300g-growth-supplements-6.webp",
                "btn-supl-saude": "https://www.gsuplementos.com.br/upload/produto/imagem/m_zma-120-caps-growth-supplements.webp"
            }
        },
        {
            // prod3 img
            id: "supl-prod3-img",
            type: "img",
            value: {
                "btn-supl-massa": "https://www.gsuplementos.com.br/upload/produto/imagem/m_creatina-250g-creapure-growth-supplements.webp",
                "btn-supl-magro": "https://www.gsuplementos.com.br/upload/produto/imagem/m_cafe-na-200mg-120-caps-growth-supplements-termog-nico.webp",
                "btn-supl-energia": "https://www.gsuplementos.com.br/upload/produto/imagem/m_pasta-de-amendoim-integral-torrado-1kg-growth-supplements.webp",
                "btn-supl-saude": "https://www.gsuplementos.com.br/upload/produto/imagem/m_multivitam-nico-120-c-ps-nova-f-rmula-growth-supplements.webp"
            }
        }
    ],
    current: 0
}

const btnGroupModa = {
    ids: [
        "btn-moda-fem",
        "btn-moda-masc",
        "btn-moda-uni",
    ],
    links: [
        {
            // left ad
            id: "moda-ad",
            type: "img",
            value: {
                "btn-moda-fem": "https://www.gsuplementos.com.br/upload/menu/moda-e-acessorios-tabs/56dd738cd587504ed9471331002105ca.jpg",
                "btn-moda-masc": "https://www.gsuplementos.com.br/upload/menu/moda-e-acessorios-tabs/2f2a3e9a9f78cfd36dab65efaf19ff88.jpg",
                "btn-moda-uni": "https://www.gsuplementos.com.br/upload/menu/moda-e-acessorios-tabs/28022f87147bfe0d1b8b7a8ac57b8e9c.jpg"
            }
        },
        {
            // prod1 title
            id: "moda-prod1-title",
            type: "text",
            value: {
                "btn-moda-fem": "SHORTINHO GROWTH FALS PRETO -  GROWTH SUPPLEMENTS",
                "btn-moda-masc": "REGATA GROWTH SPORTS 09 - GROWTH SUPPLEMENTS",
                "btn-moda-uni": "CHINELO SLIDE SOFT GROWTH MARFIM  - GROWTH SUPPLEMENTS",
            }
        },
        {
            // prod2 title
            id: "moda-prod2-title",
            type: "text",
            value: {
                "btn-moda-fem": "CROPPED SENSE MANUSCRITO MANGA LONGA PRETO - GROWTH SUPPLEMENTS",
                "btn-moda-masc": "CAMISETA GROWTH OVERSIZED BORN BRANCA - GROWTH SUPPLEMENTS",
                "btn-moda-uni": "TÊNIS JOGGER GROWTH - GROWTH SUPPLEMENTS",
            }
        },
        {
            // prod3 title
            id: "moda-prod3-title",
            type: "text",
            value: {
                "btn-moda-fem": "CROPPED GROWTH SHE ROSA BEBÊ - GROWTH SUPPLEMENTS",
                "btn-moda-masc": "CAMISETA GROWTH OVERSIZED ACHIEVEMENT ALL BLACK - GROWTH SUPPLEMENTS",
                "btn-moda-uni": "MEIA PREMIUM CANO ALTO  - GROWTH SUPPLEMENTS"
            }
        },
        {
            // prod1 price
            id: "moda-prod1-price",
            type: "text",
            value: {
                "btn-moda-fem": "R$ 129,90",
                "btn-moda-masc": "R$ 62,90",
                "btn-moda-uni": "R$ 89,90"
            }
        },
        {
            // prod2 price
            id: "moda-prod2-price",
            type: "text",
            value: {
                "btn-moda-fem": "R$ 71,90",
                "btn-moda-masc": "R$ 109,90",
                "btn-moda-uni": "R$ 269,90"
            }
        },
        {
            // prod3 price
            id: "supl-prod3-price",
            type: "text",
            value: {
                "btn-moda-fem": "R$ 49,90",
                "btn-moda-masc": "R$ 119,90",
                "btn-moda-uni": "R$ 29,90"
            }
        },
        {
            // prod1 img
            id: "moda-prod1-img",
            type: "img",
            value: {
                "btn-moda-fem": "https://www.gsuplementos.com.br/upload/produto/imagem/m_shortinho-growth-fals-preto-growth-supplements.webp",
                "btn-moda-masc": "https://www.gsuplementos.com.br/upload/produto/imagem/m_regata-growth-sports-09-growth-supplements.webp",
                "btn-moda-uni": "https://www.gsuplementos.com.br/upload/produto/imagem/m_chinelo-slide-soft-growth-marfim-growth-supplements-1.webp"
            }
        },
        {
            // prod2 img
            id: "moda-prod2-img",
            type: "img",
            value: {
                "btn-moda-fem": "https://www.gsuplementos.com.br/upload/produto/imagem/m_cropped-sense-manuscrito-manga-longa-preto-growth-supplements-1.webp",
                "btn-moda-masc": "https://www.gsuplementos.com.br/upload/produto/imagem/m_camiseta-growth-oversized-born-branca-growth-supplements-3.webp",
                "btn-moda-uni": "https://www.gsuplementos.com.br/upload/produto/imagem/m_t-nis-jogger-growth-growth-supplements.webp"
            }
        },
        {
            // prod3 img
            id: "moda-prod3-img",
            type: "img",
            value: {
                "btn-moda-fem": "https://www.gsuplementos.com.br/upload/produto/imagem/m_cropped-growth-she-rosa-beb-growth-supplements.webp",
                "btn-moda-masc": "https://www.gsuplementos.com.br/upload/produto/imagem/m_camiseta-growth-oversized-achievement-all-black-growth-supplements.webp",
                "btn-moda-uni": "https://www.gsuplementos.com.br/upload/produto/imagem/m_meia-premium-cano-alto-growth-supplements.webp"
            }
        }
    ],
    current: 0
}
