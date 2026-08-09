export const FM_EQUIPAMENTOS_CATALOG_VERSION = 1;

export const FM_EQUIPAMENTOS_FOLDERS = [
  {
    "name": "Armas à Distância",
    "parent": null,
    "sort": 100000
  },
  {
    "name": "Complexas",
    "parent": "Armas à Distância",
    "sort": 100000
  },
  {
    "name": "Simples",
    "parent": "Armas à Distância",
    "sort": 200000
  },
  {
    "name": "Armas Corpo a Corpo",
    "parent": null,
    "sort": 200000
  },
  {
    "name": "Complexas",
    "parent": "Armas Corpo a Corpo",
    "sort": 100000
  },
  {
    "name": "Simples",
    "parent": "Armas Corpo a Corpo",
    "sort": 200000
  },
  {
    "name": "Armas de Arremesso",
    "parent": null,
    "sort": 300000
  },
  {
    "name": "Complexas",
    "parent": "Armas de Arremesso",
    "sort": 100000
  },
  {
    "name": "Simples",
    "parent": "Armas de Arremesso",
    "sort": 200000
  },
  {
    "name": "Ferramentas Amaldiçoadas",
    "parent": null,
    "sort": 400000
  },
  {
    "name": "Armas de Grau Especial",
    "parent": "Ferramentas Amaldiçoadas",
    "sort": 100000
  },
  {
    "name": "Proteções de Grau Especial",
    "parent": "Ferramentas Amaldiçoadas",
    "sort": 200000
  },
  {
    "name": "Itens Especiais",
    "parent": null,
    "sort": 500000
  },
  {
    "name": "Custo 1",
    "parent": "Itens Especiais",
    "sort": 100000
  },
  {
    "name": "Custo 2",
    "parent": "Itens Especiais",
    "sort": 200000
  },
  {
    "name": "Custo 3",
    "parent": "Itens Especiais",
    "sort": 300000
  },
  {
    "name": "Custo 4",
    "parent": "Itens Especiais",
    "sort": 400000
  },
  {
    "name": "Kits de Ferramentas",
    "parent": null,
    "sort": 600000
  },
  {
    "name": "Proteções",
    "parent": null,
    "sort": 700000
  },
  {
    "name": "Escudos",
    "parent": "Proteções",
    "sort": 100000
  },
  {
    "name": "Uniformes",
    "parent": "Proteções",
    "sort": 200000
  }
];

export const FM_EQUIPAMENTOS = [
  {
    "name": "Arco Longo",
    "folderPath": [
      "Armas à Distância",
      "Complexas"
    ],
    "img": "icons/weapons/bows/longbow-recurve-brown.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um arco reforçado e maior, sendo quase do tamanho de uma pessoa, assim permitindo disparos mais distantes. Não é necessário recarregar com um arco longo, mas você deve estar utilizando uma aljava carregada com flechas. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": "30/120",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Besta Pesada",
    "folderPath": [
      "Armas à Distância",
      "Complexas"
    ],
    "img": "icons/weapons/crossbows/crossbow-heavy-black.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma versão mais potente e pesada da besta, amplificando na sua potência em troca da agilidade. Uma besta pesada precisa recarregar a cada disparo. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d12",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": "45/180",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d12",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Canhão de Mão",
    "folderPath": [
      "Armas à Distância",
      "Complexas"
    ],
    "img": "icons/weapons/guns/gun-brown.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma arma de fogo compacta, mas devastadora, diminuindo um canhão até um tamanho fácil de se carregar. Um canhão de mão precisa recarregar a cada disparo, utilizando uma ação comum. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d10",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": "30/90",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d10",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Escopeta",
    "folderPath": [
      "Armas à Distância",
      "Complexas"
    ],
    "img": "icons/weapons/guns/gun-double-barrel.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma arma de fogo devastadora em curto alcance, capaz de atingir vários inimigos em troca de uma recarga lenta. Uma escopeta precisa recarregar a cada dois disparos, utilizando uma ação comum. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d8",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": "9/18",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d8",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Metralhadora",
    "folderPath": [
      "Armas à Distância",
      "Complexas"
    ],
    "img": "icons/weapons/guns/gun-purple.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma arma de fogo com disparo rápido e descarga potente, carregando várias balas. Uma metralhadora precisa recarregar a cada trinta disparos, utilizando uma ação comum. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d10",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": "30/90",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d10",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Rifle",
    "folderPath": [
      "Armas à Distância",
      "Complexas"
    ],
    "img": "icons/weapons/guns/rifle-white.webp",
    "sort": 6000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um rifle comum de ferrolho, com alcance considerável e potência grande. Um rifle deve recarregar a cada vinte disparos. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d8",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": "60/180",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d8",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Rifle de Precisão",
    "folderPath": [
      "Armas à Distância",
      "Complexas"
    ],
    "img": "icons/weapons/guns/gun-topbarrel.webp",
    "sort": 7000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um rifle munido com uma mira telescópica e capaz de realizar tiros a longa distância, preservando ainda a letalidade. Um rifle de precisão deve recarregar a cada cinco disparos. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d10",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": "180/360",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d10",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Arco Curto",
    "folderPath": [
      "Armas à Distância",
      "Simples"
    ],
    "img": "icons/weapons/bows/shortbow-recurve-red.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um arco curto e comum, normalmente feito de madeira. Não é necessário recarregar com um arco curto, mas você deve estar utilizando uma aljava carregada com flechas. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": "24/96",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Besta Leve",
    "folderPath": [
      "Armas à Distância",
      "Simples"
    ],
    "img": "icons/weapons/crossbows/crossbow-simple-purple.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um arco montado sobre uma coronha e com um gatilho embutido, disparando com maior potência. Uma besta leve precisa recarregar a cada disparo. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": "24/96",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Pistola",
    "folderPath": [
      "Armas à Distância",
      "Simples"
    ],
    "img": "icons/weapons/guns/gun-pistol-brown.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas à Distância",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">A mais simples arma de fogo, facilmente manuseada, mas ainda letal. Uma pistola precisa recarregar a cada doze disparos. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "a Distância",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d6",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": "30/90",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d6",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Adaga de Aparar",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/daggers/dagger-curved-guard-blue.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma pequena adaga feita para ser usada de maneira defensiva, pequena e leve, com uma guarda mais ampla e proteção para as mãos. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d3",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d3",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Adagas Duplas",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/daggers/dagger-twin-curved-black.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Duas adagas presas uma a outra através de correntes e ligadas ao portador, dificultando o desarme e permitindo golpes rápidos com ambas. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d4",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 18,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d4",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Alabarda",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/polearms/halberd-crescent-small-spiked.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma arma longa, composta de uma haste e uma lâmina semelhante à de um machado presa na ponta. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d10",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d10",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Chicote",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/misc/whip-red-yellow.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um chicote forte e reforçado, adaptado para combate. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d4",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 18,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d4",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Chicote de Corrente",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/misc/whip-red-yellow.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um chicote composto por correntes metálicas, tornando-se mais pesado e destruidor. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Chicote Espinhento",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/misc/whip-red-yellow.webp",
    "sort": 6000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um chicote, normalmente de couro, coberto com espinhos perfurantes. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d4",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d4",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Clava Pesada",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/clubs/club-banded-barbed-black.webp",
    "sort": 7000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma clava ainda maior e mais pesada, com madeira reforçada. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d6",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d6",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Corrente de Aço",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/skills/melee/strike-chain-whip-blue.webp",
    "sort": 8000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma corrente pesada de aço e longa, permitindo golpes mais distantes. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d4",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d4",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Espada Colossal",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "systems/tormenta20/icons/itens/equipamentos/montante.webp",
    "sort": 9000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma espada de tamanho enorme e surreal, mas que pode ser empunhada por aqueles com uma enorme força. Ocupa quatro espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 4,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d8",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d8",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Espada de Gancho",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/swords/sword-hooked-worn.webp",
    "sort": 10000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma espada com forma especial, tendo uma ponta em forma de gancho, o que permite prender duas para se criar uma arma mais longa. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Espada Grande",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/swords/greatsword-crossguard-steel.webp",
    "sort": 11000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma espada grande e pesada, precisando de duas mãos para se empunhar com efetividade. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d12",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d12",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Espada Longa",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/swords/sword-guard-blue.webp",
    "sort": 12000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma arma típica para guerreiros, com uma lâmina reta e longa. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Foice Grande",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/sickles/scythe-bone-green.webp",
    "sort": 13000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma foice maior, pensada realmente para o combate. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d10",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d10",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Kusarigama",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/sickles/sickle-hooked-purple.webp",
    "sort": 14000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma arma japonesa composta por uma foice e um peso, ambos ligados por uma corrente, sendo ótima para desarmar. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Especial"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Especial"
          }
        }
      }
    }
  },
  {
    "name": "Lança Grande",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/polearms/spear-flared-gray.webp",
    "sort": 15000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma lança ainda mais longa e potente, o que dificulta seu manuseio para ataques próximos. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d12",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d12",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Machado Grande",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "systems/tormenta20/icons/itens/equipamentos/machado-de-guerra.webp",
    "sort": 16000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um machado maior e com lâmina dupla. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d12",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d12",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Martelo Grande",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/hammers/hammer-drilling-spiked.webp",
    "sort": 17000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um martelo com haste estendida e cabeça ainda maior. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d12",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d12",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Nunchaku",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/clubs/club-baton-blue.webp",
    "sort": 18000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Dois bastões de madeira conectados por uma corda ou corrente. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Nunchaku Pesado",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/clubs/club-baton-brown.webp",
    "sort": 19000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Adicionando peso e potência, são dois bastões de metal conectados. Ocupa dois espaços.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d6",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d6",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Rapieira",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/swords/sword-guard.webp",
    "sort": 20000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma espada leve com lâmina fina e perfurante, favorecendo a agilidade. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Soco Inglês",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Complexas"
    ],
    "img": "icons/weapons/fist/fist-knuckles-brass.webp",
    "sort": 21000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma soqueira que se encaixa no dedo como anéis, amplificando o potencial de socos. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "-",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "-",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Adaga",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/daggers/dagger-black.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma faca leve e compacta, afiada e fácil de esconder, sendo uma favorita de pessoas furtivas por ser útil tanto para a força quanto para a agilidade. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d4",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 18,
          "multiplicador": 2
        },
        "alcance": "6/18",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d4",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Bastão",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/staves/staff-simple-gold.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um bastão, de madeira ou de aço, simples mas efetivo. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Clava",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/clubs/club-heavy-barbed-black.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma simples clava, comumente feita de madeira. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Espada Curta",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/swords/shortsword-guard-brass.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O tipo mais comum de espada, leve e rápida de se manusear. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Faixas",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/commodities/leather/leather-scraps-tan.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Faixas presas às mãos de um lutador desarmado, protegendo-as e podendo ser imbuídas com energia. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "-",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "-",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Foice",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/sickles/scythe-wrapped-yellow.webp",
    "sort": 6000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma pequena foice, normalmente usada como ferramenta, mas também servindo como arma. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Lança",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/polearms/spear-simple-engraved.webp",
    "sort": 7000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma arma composta por uma haste de madeira e uma ponta afiada, de variáveis materiais. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": "6/18",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Leque",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/thrown/shuriken-double-red.webp",
    "sort": 8000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um leque metálico e cortante, capaz de alternar entre ambos os danos. Tão gracioso quanto letal. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d4",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 18,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d4",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Machado",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/axes/axe-hammer-blackened.webp",
    "sort": 9000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma adaptação do que costumava ser uma ferramenta para se tornar uma arma. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Mangual",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/maces/flail-ball-grey.webp",
    "sort": 10000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma haste metálica ligada a uma corrente com uma esfera de aço na ponta. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Manopla",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/equipment/hand/gauntlet-armored-red-gold.webp",
    "sort": 11000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma manopla feita de aço, protegendo as mãos e as transformando em efetivas armas. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "-",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "-",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Martelo",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/hammers/hammer-simple-iron.webp",
    "sort": 12000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma haste de madeira resistente com uma cabeça de metal na ponta. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Tridente",
    "folderPath": [
      "Armas Corpo a Corpo",
      "Simples"
    ],
    "img": "icons/weapons/polearms/trident-curved-steel.webp",
    "sort": 13000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas Corpo a Corpo",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma arma antiga, semelhante a uma lança, mas com a sua ponta se dividindo em três. Ocupa um espaço.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": "6/18",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Chakram",
    "folderPath": [
      "Armas de Arremesso",
      "Complexas"
    ],
    "img": "icons/weapons/thrown/shuriken-triple-purple.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas de Arremesso",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Uma exótica arma de arremesso, com forma circular e bordas cortantes.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "de Arremesso",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "2d4",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": "18/36",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "2d4",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Kunai",
    "folderPath": [
      "Armas de Arremesso",
      "Complexas"
    ],
    "img": "icons/weapons/thrown/dagger-ringed-steel.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas de Arremesso",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Uma arma comumente associada aos ninjas, sendo uma lâmina de ferro com um furo na base, boa para arremesso.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "de Arremesso",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": "12/30",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Rede",
    "folderPath": [
      "Armas de Arremesso",
      "Complexas"
    ],
    "img": "systems/tormenta20/icons/itens/equipamentos/rede.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas de Arremesso",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Uma rede de material forte e duradouro, feita para prender inimigos.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "de Arremesso",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "-",
          "atributo": null,
          "tipo": "-"
        },
        "critico": {
          "margem": 0,
          "multiplicador": 2
        },
        "alcance": "9/27",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "-",
            "atributo": null,
            "tipo": "-"
          }
        }
      }
    }
  },
  {
    "name": "Shuriken",
    "folderPath": [
      "Armas de Arremesso",
      "Complexas"
    ],
    "img": "icons/weapons/thrown/shuriken-blue.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas de Arremesso",
        "subcategoria": "Complexas"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Uma arma de arremesso japonesa, sendo uma lâmina plana com várias pontas.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "de Arremesso",
        "proposito": "Complexa",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d4",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 18,
          "multiplicador": 2
        },
        "alcance": "12/30",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d4",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Azagaia",
    "folderPath": [
      "Armas de Arremesso",
      "Simples"
    ],
    "img": "systems/tormenta20/icons/itens/equipamentos/azagaia.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas de Arremesso",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Uma lança leve e flexível, própria para ser arremessada.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "de Arremesso",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d6",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": "12/30",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d6",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Dardo",
    "folderPath": [
      "Armas de Arremesso",
      "Simples"
    ],
    "img": "icons/weapons/thrown/dart-feathered.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Armas de Arremesso",
        "subcategoria": "Simples"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Um dardo leve e simples para arremessos rápidos.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Simples",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d4",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 18,
          "multiplicador": 2
        },
        "alcance": "12/30",
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d4",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Katana Divisora de Almas",
    "folderPath": [
      "Ferramentas Amaldiçoadas",
      "Armas de Grau Especial"
    ],
    "img": "icons/weapons/swords/sword-winged-pink.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Ferramentas Amaldiçoadas",
        "subcategoria": "Armas de Grau Especial"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma katana especial, a qual é capaz de ignorar o físico e partir a própria alma, dilacerando-a. Entretanto, para usá-la efetivamente é necessário ser <strong>capaz de perceber o traçado da alma</strong>. A Katana Divisora de Almas é uma Espada Longa, de grau especial, com as propriedades: Destruidora, Fidedigna, Infalível e Potente.</p>\n<p style=\"text-align: left;\"><br><em><strong>Arma Assinatura.</strong> Como uma arma icônica da obra, o Narrador pode optar por fazer com que tenha seu dano aumentado em dois níveis, refletindo seu poder.</em></p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Espada",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d12 + 4",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d12 + 4",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Lâmina da Totalidade",
    "folderPath": [
      "Ferramentas Amaldiçoadas",
      "Armas de Grau Especial"
    ],
    "img": "icons/weapons/swords/sword-broad-serrated-blue.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Ferramentas Amaldiçoadas",
        "subcategoria": "Armas de Grau Especial"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Uma espada cuja lâmina parece esbanjar todas as cores possíveis de se imaginar, estendendo-se para as receber. A Lâmina da Totalidade é uma espada longa de grau especial, com as seguintes propriedades: <strong>certeira, harmonizada, longa e sintonizada</strong>.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Espada",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 4,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Cortante"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Cortante"
          }
        }
      }
    }
  },
  {
    "name": "Lança Invertida Celeste",
    "folderPath": [
      "Ferramentas Amaldiçoadas",
      "Armas de Grau Especial"
    ],
    "img": "icons/weapons/daggers/dagger-crooked-ice-blue.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Ferramentas Amaldiçoadas",
        "subcategoria": "Armas de Grau Especial"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma adaga de formato exótico, com sua lâmina dividida em duas partes. Adicionalmente, a adaga possui no fim do seu cabo um anel que a permite ser conectada a correntes. A Lança Invertida Celeste é uma Adaga de grau especial, com as propriedades: Certeira, Fidedigna, Infalível e Otimizada.</p>\n<p style=\"text-align: left;\"><em><strong>Arma Assinatura.</strong> Como uma arma icônica da obra, o Narrador pode optar por fazer com que tenha seu dano aumentado em dois níveis, refletindo seu poder.</em></p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Faca",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "1d8",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 19,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d8",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Nuvem Brincalhona",
    "folderPath": [
      "Ferramentas Amaldiçoadas",
      "Armas de Grau Especial"
    ],
    "img": "systems/tormenta20/icons/itens/equipamentos/bordao.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Ferramentas Amaldiçoadas",
        "subcategoria": "Armas de Grau Especial"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um bastão dividido em três seções, conectadas por anéis entre as juntas. Surpreendentemente, essa é a única ferramenta amaldiçoada de grau especial que não tem uma técnica, mas sim depende completamente da força bruta do usuário. A Nuvem Brincalhona é um Nunchaku Pesado de grau especial, com as propriedades: Destruidora, Fidedigna, Infalível, Penetrante e Potente.</p>\n<p style=\"text-align: left;\"><em><strong>Arma Assinatura.</strong> Como uma arma icônica da obra, o Narrador pode optar por fazer com que tenha seu dano aumentado em dois níveis, refletindo seu poder.</em></p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Bastão",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Força",
          "bonus": 0,
          "treinado": true
        },
        "dano": {
          "formula": "4d6",
          "atributo": null,
          "tipo": "Impacto"
        },
        "critico": {
          "margem": 20,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "4d6",
            "atributo": null,
            "tipo": "Impacto"
          }
        }
      }
    }
  },
  {
    "name": "Véu da Noite",
    "folderPath": [
      "Ferramentas Amaldiçoadas",
      "Armas de Grau Especial"
    ],
    "img": "icons/weapons/daggers/dagger-simple-violet.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Ferramentas Amaldiçoadas",
        "subcategoria": "Armas de Grau Especial"
      }
    },
    "type": "arma",
    "system": {
      "descricao": "<p>Uma pequena adaga completamente negra como o céu noturno. A Véu da Noite é uma adaga de grau especial, com as seguintes propriedades: <strong>certeira, discreta, fidedigna e infalível.</strong><br><br></p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "arma": {
        "proficiencia": "Corpo a Corpo",
        "proposito": "Faca",
        "empunhadura": null,
        "consumivel": null,
        "propriedades": {
          "adaptavel": false,
          "agil": false,
          "alongada": false,
          "desbalanceada": false,
          "dupla": false,
          "versatil": false,
          "hibrida": false
        },
        "ataque": {
          "atributo": "Destreza",
          "bonus": 4,
          "treinado": true
        },
        "dano": {
          "formula": "1d4",
          "atributo": null,
          "tipo": "Perfurante"
        },
        "critico": {
          "margem": 17,
          "multiplicador": 2
        },
        "alcance": null,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        },
        "municaoAtual": 0,
        "danos": {
          "dano1": {
            "formula": "1d4",
            "atributo": null,
            "tipo": "Perfurante"
          }
        }
      }
    }
  },
  {
    "name": "Couraça do Guardião",
    "folderPath": [
      "Ferramentas Amaldiçoadas",
      "Proteções de Grau Especial"
    ],
    "img": "icons/equipment/chest/breastplate-layered-gilded-orange.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Ferramentas Amaldiçoadas",
        "subcategoria": "Proteções de Grau Especial"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 4,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Uniforme",
        "tipoUso": "",
        "defesa": 8,
        "penalidadeArmadura": -4,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Égide do Vigia",
    "folderPath": [
      "Ferramentas Amaldiçoadas",
      "Proteções de Grau Especial"
    ],
    "img": "icons/equipment/shield/heater-wooden-hourglass-purple.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Ferramentas Amaldiçoadas",
        "subcategoria": "Proteções de Grau Especial"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Escudo",
        "tipoUso": "",
        "defesa": 4,
        "penalidadeArmadura": -1,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Manto Célere",
    "folderPath": [
      "Ferramentas Amaldiçoadas",
      "Proteções de Grau Especial"
    ],
    "img": "icons/equipment/chest/vest-leather-pink.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Ferramentas Amaldiçoadas",
        "subcategoria": "Proteções de Grau Especial"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Uniforme",
        "tipoUso": "",
        "defesa": 3,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Antídoto Simples",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/vial-cork-blue.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um simples antídoto, capaz de neutralizar venenos mais leves. Como uma ação bônus, um personagem pode consumir um antídoto simples, sendo curado da condição envenenado e/ou qualquer veneno que provenha de uma maldição de terceiro grau ou inferior.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um simples antídoto, capaz de neutralizar venenos mais leves. Como uma ação bônus, um personagem pode consumir um antídoto simples, sendo curado da condição envenenado e/ou qualquer veneno que provenha de uma maldição de terceiro grau ou inferior.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Brinco de Comunicação",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/equipment/finger/ring-cabochon-spiral-gold-green.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um par de brincos imbuídos com uma técnica de comunicação. Usar um desses brincos permite que o usuário sintonize com até 10 outras pessoas que também estejam usando um. Todos sintonizados na mesma conexão conseguem se comunicar mentalmente desde que estejam dentro de 45 metros.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Chaveiro Canalizador",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/equipment/neck/necklace-simple-carved-wood-green.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um chaveiro que canaliza energia amaldiçoada, refinando-a e dificultando resistir. Um personagem com o chaveiro canalizador tem a CD dos seus testes de resistência aumentado em 1.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Injeção Estimulante",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/vial-ornet-silver-black.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma injeção criada a partir de uma mescla de medicina e controle de energia amaldiçoada. Ela tem uma única carga e a injetar faz com que você receba vantagem em toda rolagem usando um atributo a sua escolha, exceto Luta e Pontaria, durante 10 minutos. Dentro de combate, injetar é uma ação bônus.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Uma injeção criada a partir de uma mescla de medicina e controle de energia amaldiçoada. Ela tem uma única carga e a injetar faz com que você receba vantagem em toda rolagem usando um atributo a sua escolha, exceto Luta e Pontaria, durante 10 minutos. Dentro de combate, injetar é uma ação bônus.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Mix Energético Pequeno",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/potion-tube-corked-orange.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um conjunto de suplementos e substâncias que conseguem recuperar a energia e vigor físico, concentrados em uma cápsula. Como uma ação bônus, é possível consumir o mix, recuperando 3 pontos de vigor.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um conjunto de suplementos e substâncias que conseguem recuperar a energia e vigor físico, concentrados em uma cápsula. Como uma ação bônus, é possível consumir o mix, recuperando 3 pontos de vigor.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Óleo Amolador",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/bottle-ornate-bat-teal.webp",
    "sort": 6000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pequeno recipiente cheio de um óleo que aumenta o potencial de uma arma, amolando-a. Pode ser aplicado em duas armas antes de acabar; uma arma coberta com óleo amolador causa 2 de dano adicional do seu tipo. O óleo dura um dia.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Mistura",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pequeno recipiente cheio de um óleo que aumenta o potencial de uma arma, amolando-a. Pode ser aplicado em duas armas antes de acabar; uma arma coberta com óleo amolador causa 2 de dano adicional do seu tipo. O óleo dura um dia.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Óleo Flamejante",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/potion-vial-tube-yellow.webp",
    "sort": 7000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um óleo que deixa a arma extremamente inflamável, cobrindo-se de chamas com o menor dos esforços. Pode ser aplicado em duas armas antes de acabar; uma arma coberta com óleo flamejante causa 2 de dano queimante adicional. O óleo dura um dia.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Mistura",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um óleo que deixa a arma extremamente inflamável, cobrindo-se de chamas com o menor dos esforços. Pode ser aplicado em duas armas antes de acabar; uma arma coberta com óleo flamejante causa 2 de dano queimante adicional. O óleo dura um dia.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Pérola Carregada",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/commodities/gems/pearl-swirl-teal.webp",
    "sort": 8000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma pequena pérola carregada com energia amaldiçoada, usada para recuperar do próprio estoque. Como uma ação bônus, é possível consumir a pérola, recuperando 3 pontos de energia amaldiçoada.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Uma pequena pérola carregada com energia amaldiçoada, usada para recuperar do próprio estoque. Como uma ação bônus, é possível consumir a pérola, recuperando 3 pontos de energia amaldiçoada.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Pote de Espírito Curandeiro",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/drinks/wine-amphora-clay-red.webp",
    "sort": 9000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pote especial, preenchido com um pequeno espírito amaldiçoado com capacidades curativas, o qual foi domado para uso: como uma ação bônus, você pode liberar o espírito e o comandar a curar uma pessoa dentro de 9 metros de você. A cura é igual a 3d8+6 pontos de vida, e o espírito se esvai após curar uma criatura.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pote especial, preenchido com um pequeno espírito amaldiçoado com capacidades curativas, o qual foi domado para uso: como uma ação bônus, você pode liberar o espírito e o comandar a curar uma pessoa dentro de 9 metros de você. A cura é igual a 3d8+6 pontos de vida, e o espírito se esvai após curar uma criatura.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Remédio Simples",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/vial-cork-red.webp",
    "sort": 10000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um simples remédio, capaz de forçar uma reação regenerativa do corpo. Como uma ação comum, é possível consumir o remédio e gastar seus dados de vida para se curar, com um limite igual a quatro dados de vida.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um simples remédio, capaz de forçar uma reação regenerativa do corpo. Como uma ação comum, é possível consumir o remédio e gastar seus dados de vida para se curar, com um limite igual a quatro dados de vida.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Símbolo de Vida",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/equipment/neck/choker-rough-green.webp",
    "sort": 11000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma espécie de pequena ficha ou amuleto, encravado em madeira e imbuído com energia reversa. Como uma ação bônus, é possível o destruir para liberar energia em si mesmo, curando-se em 4d6+4 pontos de vida.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Talismã",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Uma espécie de pequena ficha ou amuleto, encravado em madeira e imbuído com energia reversa. Como uma ação bônus, é possível o destruir para liberar energia em si mesmo, curando-se em 4d6+4 pontos de vida.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Talismã de Barreira",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/equipment/neck/amulet-carved-runed-othila-fehu-grey.webp",
    "sort": 12000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pequeno talismã que armazena uma barreira amaldiçoada. Pode usá-lo como uma ação bônus, invocando uma barreira com 50 pontos de vida e quatro paredes, com até 1,5 metros cada uma. Após usado, o talismã se esvai.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Talismã",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pequeno talismã que armazena uma barreira amaldiçoada. Pode usá-lo como uma ação bônus, invocando uma barreira com 50 pontos de vida e quatro paredes, com até 1,5 metros cada uma. Após usado, o talismã se esvai.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Veneno Comum",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/vial-cork-green.webp",
    "sort": 13000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pote de veneno comum e simples, mas efetivo, o qual pode ser usado para cobrir armas. Um pote pode cobrir até duas armas; uma arma coberta com veneno comum causa 2 de dano venenoso adicional.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Mistura",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pote de veneno comum e simples, mas efetivo, o qual pode ser usado para cobrir armas. Um pote pode cobrir até duas armas; uma arma coberta com veneno comum causa 2 de dano venenoso adicional.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Veneno Debilitante",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/round-decorated-snake-green.webp",
    "sort": 14000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pote de veneno cujo foco é atingir o corpo, debilitando-o. Um pote pode cobrir até duas armas; quando um ataque com uma arma coberta com veneno debilitante acertar, o alvo do ataque deve realizar um teste de resistência de Fortitude com CD12 + bônus de maestria de quem o criou + bônus do atributo usado pelo portador da arma; caso falhe, a criatura tem o seu movimento reduzido pela metade. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual ao bônus de maestria de quem o criou.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Mistura",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pote de veneno cujo foco é atingir o corpo, debilitando-o. Um pote pode cobrir até duas armas; quando um ataque com uma arma coberta com veneno debilitante acertar, o alvo do ataque deve realizar um teste de resistência de Fortitude com CD12 + bônus de maestria de quem o criou + bônus do atributo usado pelo portador da arma; caso falhe, a criatura tem o seu movimento reduzido pela metade. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual ao bônus de maestria de quem o criou.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Veneno Intenso",
    "folderPath": [
      "Itens Especiais",
      "Custo 1"
    ],
    "img": "icons/consumables/potions/potion-round-stopped-yellow-green.webp",
    "sort": 15000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 1"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pote de veneno intenso e concentrado, com o propósito de invadir o corpo do alvo. Um pote pode cobrir até duas armas; quando um ataque com uma arma coberta com veneno intenso acertar, o alvo deve realizar um teste de resistência de Fortitude com CD12 + bônus de maestria de quem o criou + bônus do atributo usado pelo portador da arma; caso falhe, a criatura recebe a condição Envenenado, a qual dura uma rodada. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual ao bônus de maestria de quem o criou.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Mistura",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pote de veneno intenso e concentrado, com o propósito de invadir o corpo do alvo. Um pote pode cobrir até duas armas; quando um ataque com uma arma coberta com veneno intenso acertar, o alvo deve realizar um teste de resistência de Fortitude com CD12 + bônus de maestria de quem o criou + bônus do atributo usado pelo portador da arma; caso falhe, a criatura recebe a condição Envenenado, a qual dura uma rodada. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual ao bônus de maestria de quem o criou.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Amuleto do Vislumbre",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/equipment/neck/necklace-eye-orange.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um amuleto amaldiçoado, que fornece ao portador capacidade de vislumbrar tudo ao seu redor com perfeição, superando dificuldades. O usuário desse item recebe visão no escuro com alcance de 9 metros, além de um bônus de +3 em rolagens de Percepção. Além disso, uma vez ao dia, você pode, como uma ação bônus, se tornar capaz de enxergar com os olhos fechados por 1 minuto.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Antídoto Intermediário",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/consumables/potions/bottle-corked-blue.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um antídoto de complexidade mediana, que consegue neutralizar toxinas de maior nível. Como uma ação bônus, um personagem pode consumir um antídoto intermediário, sendo curado da condição envenenado e/ou qualquer veneno que provenha de uma maldição de primeiro grau ou inferior.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um antídoto de complexidade mediana, que consegue neutralizar toxinas de maior nível. Como uma ação bônus, um personagem pode consumir um antídoto intermediário, sendo curado da condição envenenado e/ou qualquer veneno que provenha de uma maldição de primeiro grau ou inferior.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Apanhador de Saúde",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/equipment/neck/pendant-runed-hagalz-blue.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pequeno amuleto com formato semelhante ao de um apanhador de sonhos, o qual atraí boas energias. Sempre que um portador do acessório for curado, recebe +1 de cura por dado, com um limite de cura adicional igual ao seu bônus de maestria.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Bracelete do Vigor",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/equipment/wrist/wrap-wide-cloth-gold-red.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um bracelete que entra em sintonia com o corpo e acentua o físico, concedendo um maior vigor para o seu portador. Enquanto estiver utilizando o bracelete do vigor, os seus pontos de vida máximos aumentam em 10.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Conjunto de Pérolas Carregadas",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/commodities/gems/pearl-water.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um conjunto de pérolas carregadas com energia amaldiçoada. Como uma ação bônus, é possível consumir o conjunto de pérolas, recuperando 6 pontos de energia amaldiçoada.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um conjunto de pérolas carregadas com energia amaldiçoada. Como uma ação bônus, é possível consumir o conjunto de pérolas, recuperando 6 pontos de energia amaldiçoada.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Faixa de Foco",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/commodities/cloth/ribbon-worn-pink.webp",
    "sort": 6000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma faixa que quando presa ao seu portador o permite focar e manter a concentração. Você recebe um bônus de +3 em testes para manter a concentração e, três vezes por dia, você pode escolher não perder a concentração ao invés de realizar um teste.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Mix Energético Médio",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/consumables/potions/potion-flask-corked-orange.webp",
    "sort": 7000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um conjunto reforçado de suplementos e substâncias que aumentam a recuperação do vigor físico. Como uma ação bônus, é possível consumir o mix, recuperando 6 pontos de vigor.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um conjunto reforçado de suplementos e substâncias que aumentam a recuperação do vigor físico. Como uma ação bônus, é possível consumir o mix, recuperando 6 pontos de vigor.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Pote de Espírito Curandeiro Elevado",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/consumables/drinks/wine-amphora-clay-gray.webp",
    "sort": 8000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pote com um espírito curandeiro de nível elevado, com capacidades amplificadas: como uma ação bônus, você pode liberar o espírito e o comandar a curar uma pessoa dentro de 12 metros de você. A cura é igual a 4d12+12,e o espírito se esvai após curar uma criatura.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pote com um espírito curandeiro de nível elevado, com capacidades amplificadas: como uma ação bônus, você pode liberar o espírito e o comandar a curar uma pessoa dentro de 12 metros de você. A cura é igual a 4d12+12,e o espírito se esvai após curar uma criatura.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Pulseira Magistral",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/equipment/wrist/bracer-studded-copper.webp",
    "sort": 9000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma pulseira cujas propriedades conseguem extrair mais as capacidades de quem a usar, melhorando uma perícia. Enquanto estiver usando a pulseira magistral, o usuário recebe Maestria em uma perícia a sua escolha.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Remédio Intermediário",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/consumables/potions/potion-flask-corked-shiny-red.webp",
    "sort": 10000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um remédio mais complexo, capaz de forçar uma reação regenerativa avançada no corpo. Como uma ação comum, é possível consumir o remédio e gastar seus dados de vida para se curar, com um limite igual a oito dados de vida.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um remédio mais complexo, capaz de forçar uma reação regenerativa avançada no corpo. Como uma ação comum, é possível consumir o remédio e gastar seus dados de vida para se curar, com um limite igual a oito dados de vida.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Revigorante",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/consumables/potions/potion-flask-corked-yellow.webp",
    "sort": 11000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um remédio que é capaz de retirar o cansaço excessivo do corpo daquele que o consome. Como uma ação bônus, pode tomar um revigorante, removendo um nível de exaustão e fazendo com que o remédio se desmanche.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um remédio que é capaz de retirar o cansaço excessivo do corpo daquele que o consome. Como uma ação bônus, pode tomar um revigorante, removendo um nível de exaustão e fazendo com que o remédio se desmanche.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Símbolo de Vida Florescente",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/equipment/neck/pendant-rough-green.webp",
    "sort": 12000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma ficha ou amuleto encravado em madeira e com quantidades modestas de energia reversa, o que dá um sutil brilho e calor. Como uma ação bônus, é possível o destruir para liberar energia em si mesmo, curando-se em 6d8+12 de vida.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Talismã",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Uma ficha ou amuleto encravado em madeira e com quantidades modestas de energia reversa, o que dá um sutil brilho e calor. Como uma ação bônus, é possível o destruir para liberar energia em si mesmo, curando-se em 6d8+12 de vida.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Talismã de Barreira Superior",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/equipment/neck/pendant-runed-hagalz-blue.webp",
    "sort": 13000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Melhorando no talismã de barreira, ela é tecida com mais cuidado e focando em uma maior agilidade. Pode usá-lo como uma ação bônus ou como uma reação, invocando uma barreira com 80 pontos de vida e quatro paredes, com até 1,5 metros cada uma. Após usado, o talismã se esvai.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Talismã",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Melhorando no talismã de barreira, ela é tecida com mais cuidado e focando em uma maior agilidade. Pode usá-lo como uma ação bônus ou como uma reação, invocando uma barreira com 80 pontos de vida e quatro paredes, com até 1,5 metros cada uma. Após usado, o talismã se esvai.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Talismã Protetivo",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/equipment/neck/amulet-round-engraved-blue.webp",
    "sort": 14000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um talismã confeccionado com foco na proteção contra uma fonte específica. Enquanto estiver usando o talismã protetivo, o usuário recebe resistência a um tipo de dano elemental a sua escolha. Só se pode utilizar um talismã por vez.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Talismã",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um talismã confeccionado com foco na proteção contra uma fonte específica. Enquanto estiver usando o talismã protetivo, o usuário recebe resistência a um tipo de dano elemental a sua escolha. Só se pode utilizar um talismã por vez.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Veneno Desnorteante",
    "folderPath": [
      "Itens Especiais",
      "Custo 2"
    ],
    "img": "icons/consumables/potions/bottle-pear-corked-labeled-green.webp",
    "sort": 15000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 2"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pote de veneno cuja composição foca em atingir o sistema nervoso de uma criatura. Um pote pode cobrir até duas armas; quando uma arma coberta com o veneno desnorteante acertar, o alvo deve realizar um teste de resistência de Fortitude com CD12 + bônus de maestria de quem o criou + bônus do atributo usado pelo portador da arma; caso falhe, a criatura recebe a condição Desprevenido, a qual dura uma rodada. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual ao bônus de maestria de quem o criou.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Mistura",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pote de veneno cuja composição foca em atingir o sistema nervoso de uma criatura. Um pote pode cobrir até duas armas; quando uma arma coberta com o veneno desnorteante acertar, o alvo deve realizar um teste de resistência de Fortitude com CD12 + bônus de maestria de quem o criou + bônus do atributo usado pelo portador da arma; caso falhe, a criatura recebe a condição Desprevenido, a qual dura uma rodada. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual ao bônus de maestria de quem o criou.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Anéis do Conhecimento",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/equipment/finger/ring-band-thin-silver-teal.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um conjunto de peculiares anéis, forjados e imbuídos com energia amaldiçoada e conhecimentos, prendendo-se na pele e se conectando ao usuário. Os anéis aumentam o valor de Sabedoria do usuário em 2, podendo superar o seu limite de atributo, até o máximo de 30.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Antídoto Absoluto",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/consumables/potions/flask-corked-blue-glow.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um antídoto absoluto, confeccionado com a mais refinada medicina, capaz de neutralizar qualquer veneno ou toxina. Como uma ação bônus, um personagem pode consumir um antídoto absoluto, sendo curado da condição envenenado e/ou qualquer veneno que provenha de uma maldição de qualquer grau, inclusive especial.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um antídoto absoluto, confeccionado com a mais refinada medicina, capaz de neutralizar qualquer veneno ou toxina. Como uma ação bônus, um personagem pode consumir um antídoto absoluto, sendo curado da condição envenenado e/ou qualquer veneno que provenha de uma maldição de qualquer grau, inclusive especial.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Bracelete da Força",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/equipment/wrist/bracer-red-silver.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Firme e forjado a partir do mais forte aço, esse bracelete aumenta o valor de Força do usuário em 2, podendo superar o seu limite de atributo, até o máximo de 30.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Bracelete do Vigor Superior",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/equipment/wrist/bracer-ornate-black-silver.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma versão superior do bracelete do vigor, concedendo ainda mais vitalidade e vigor ao portador. Enquanto estiver utilizando o bracelete do vigor superior, os seus pontos de vida máximos aumentam em 15.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Chaveiro Absorsor",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/commodities/treasure/token-gold-cross.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pequeno adereço espiritual, semelhante a um chaveiro, o qual é capaz de absorver energia amaldiçoada a partir de vestígios. Sempre que eliminar um inimigo que possua energia amaldiçoada ou seja formado por energia, você recupera 2 pontos de energia amaldiçoada.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Cinturão Inabalável",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/equipment/waist/belt-buckle-ornate-steel.webp",
    "sort": 6000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um robusto cinturão metálico, com uma correnteza de energia amaldiçoada que é transmitida e reforça o físico do usuário. O cinturão aumenta o valor de Constituição do usuário em 2, podendo superar o seu limite de atributo, até o máximo de 30.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Domínio Simples Contido",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/commodities/treasure/token-engraved-purple-glowing.webp",
    "sort": 7000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pequeno tubo com um domínio simples armazenado. Pode ser usado como uma ação comum, erguendo um domínio simples sem custo de energia, o qual se mantém por até 2 rodadas, protegendo apenas o portador do item. Após ser usado, o tubo se torna inútil, com a técnica armazenada se esvaindo.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Talismã",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pequeno tubo com um domínio simples armazenado. Pode ser usado como uma ação comum, erguendo um domínio simples sem custo de energia, o qual se mantém por até 2 rodadas, protegendo apenas o portador do item. Após ser usado, o tubo se torna inútil, com a técnica armazenada se esvaindo.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Faixas Céleres",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/equipment/wrist/wrap-wide-cloth-gold-red.webp",
    "sort": 8000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Várias faixas leves e quase transparentes, as quais quando amarradas em uma pessoa, usam da energia imbuída para estimular os reflexos e agilidade. As faixas aumentam o valor de Destreza do usuário em 2, podendo superar o seu limite de atributo, até o máximo de 30.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Laço da Vida",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/commodities/cloth/ribbon-red.webp",
    "sort": 9000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pequeno laço vermelho, imbuído com quantidades excessivas de energia reversa. Um feiticeiro que tenha o laço preso a si é capaz de se prender a vida: caso um personagem com um laço da vida vá morrer, tal morte é ignorada e o laço se desgasta, sumindo.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pequeno laço vermelho, imbuído com quantidades excessivas de energia reversa. Um feiticeiro que tenha o laço preso a si é capaz de se prender a vida: caso um personagem com um laço da vida vá morrer, tal morte é ignorada e o laço se desgasta, sumindo.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Mistura Profana",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/consumables/drinks/tea-jug-gourd-brown.webp",
    "sort": 10000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma mistura profana, composta a partir de energia amaldiçoada concentrada e em estado ativo, capaz de estimular o fluxo interno de energia de um feiticeiro, mas possuindo um preço. Como uma ação comum, pode-se consumir a mistura profana, reduzindo o custo de todas as habilidades que utilizem energia amaldiçoada em 1 ponto, durante uma cena. Após o fim da cena, você também recebe um nível de exaustão</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Mix Energético Grande",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/consumables/potions/bottle-round-corked-orange.webp",
    "sort": 11000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma pílula robusta e com concentrações extremas de substâncias que recuperam o físico e vigor. Como uma ação bônus, é possível consumir o mix, recuperando 10 pontos de vigor.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Uma pílula robusta e com concentrações extremas de substâncias que recuperam o físico e vigor. Como uma ação bônus, é possível consumir o mix, recuperando 10 pontos de vigor.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Ornamento Fascinante",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/equipment/neck/amulet-heart.webp",
    "sort": 12000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um ornamento com joias e uma beleza notável, além de um toque do jujutsu para o conceder um aspecto agradável que um acessório não poderia alcançar normalmente. O ornamento aumenta o valor de Carisma do usuário em 2, podendo superar o seu limite de atributo, até o máximo de 30.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Pingente do Intelecto",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/equipment/neck/pendant-round-blue.webp",
    "sort": 13000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Leve, sutil e coberto de inscrições anciãs, esse pingente aumenta o valor de Inteligência do usuário em 2, podendo superar o seu limite de atributo, até o máximo de 30.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Pomada Reforçadora",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/consumables/plants/leaf-veins-glowing-green.webp",
    "sort": 14000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma pomada especial capaz de reforçar o corpo contra danos específicos. Um recipiente de pomada por ser aplicado em até três pessoas. Uma pessoa que tenha a pomada aplicada, recebe resistência a dois tipos de dano a sua escolha até o próximo descanso. Caso a pessoa já tenha resistência, receberá imunidade. Dentro de combate, aplicar a pomada é uma ação comum.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Uma pomada especial capaz de reforçar o corpo contra danos específicos. Um recipiente de pomada por ser aplicado em até três pessoas. Uma pessoa que tenha a pomada aplicada, recebe resistência a dois tipos de dano a sua escolha até o próximo descanso. Caso a pessoa já tenha resistência, receberá imunidade. Dentro de combate, aplicar a pomada é uma ação comum.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Pote de Espírito Curandeiro Transcendido",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/consumables/drinks/clay-jar-glowing-orange-blue.webp",
    "sort": 15000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pote com um espírito curandeiro que transcende os limites, com capacidades quase máximas: como uma ação bônus, você pode liberar o espírito e o comandar a curar uma pessoa dentro de 18 metros de você. A cura é igual a 8d12+24 e pode se remover uma condição da criatura curada, e o espírito se esvai após curar uma criatura.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pote com um espírito curandeiro que transcende os limites, com capacidades quase máximas: como uma ação bônus, você pode liberar o espírito e o comandar a curar uma pessoa dentro de 18 metros de você. A cura é igual a 8d12+24 e pode se remover uma condição da criatura curada, e o espírito se esvai após curar uma criatura.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Pulseira Primacial",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/equipment/wrist/bracer-studded-copper.webp",
    "sort": 16000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Uma pulseira especial, a qual consegue levar além uma perícia do usuário. Enquanto estiver usando a pulseira primacial, o usuário se torna especialista em uma perícia a sua escolha, exceto Luta e Pontaria, desde que já possua maestria nela.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Acessório",
        "tipoUso": "",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Remédio Complexo",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/consumables/potions/bottle-round-corked-orante-red.webp",
    "sort": 17000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um remédio de criação complexa. Como uma ação comum, é possível consumir o remédio e gastar seus dados de vida para se curar, com um limite igual a doze dados de vida.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um remédio de criação complexa. Como uma ação comum, é possível consumir o remédio e gastar seus dados de vida para se curar, com um limite igual a doze dados de vida.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Terço de Pérolas Carregadas",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/commodities/gems/pearl-storm.webp",
    "sort": 18000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um terço criado a partir de pérolas carregadas com energia amaldiçoada. Como uma ação bônus, é possível consumir o terço, recuperando 10 pontos de energia amaldiçoada.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um terço criado a partir de pérolas carregadas com energia amaldiçoada. Como uma ação bônus, é possível consumir o terço, recuperando 10 pontos de energia amaldiçoada.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Veneno Maldito",
    "folderPath": [
      "Itens Especiais",
      "Custo 3"
    ],
    "img": "icons/consumables/potions/bottle-corked-green.webp",
    "sort": 19000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 3"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um veneno feito a partir de uma substância semelhante ao sangue de maldições, com propriedades extremamente nocivas. Um pote pode cobrir até duas armas; quando uma arma coberta com o veneno maldito acertar, o alvo deve realizar um teste de resistência de Fortitude com CD14 + bônus de maestria de quem o criou + bônus do atributo usado pelo portador da arma; caso falhe, a criatura recebe a condição Exposto, a qual dura duas rodadas, e fica condenado até o final da cena. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual ao bônus de maestria de quem o criou.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Mistura",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um veneno feito a partir de uma substância semelhante ao sangue de maldições, com propriedades extremamente nocivas. Um pote pode cobrir até duas armas; quando uma arma coberta com o veneno maldito acertar, o alvo deve realizar um teste de resistência de Fortitude com CD14 + bônus de maestria de quem o criou + bônus do atributo usado pelo portador da arma; caso falhe, a criatura recebe a condição Exposto, a qual dura duas rodadas, e fica condenado até o final da cena. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual ao bônus de maestria de quem o criou.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Elixir da Vida",
    "folderPath": [
      "Itens Especiais",
      "Custo 4"
    ],
    "img": "icons/consumables/potions/flask-corked-red-glow.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 4"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Sendo o suprassumo da medicina, o elixir da vida incita uma vitalidade sem precedentes naquele que o consumir. Como uma ação bônus, é possível consumir o elixir da vida, podendo usar todos os seus dados de vida para se curar, somando o dobro do seu modificador de constituição em cada um; você recebe vantagem e +10 em rolagens de Fortitude pelo resto da cena, assim como em Integridade.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 4,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Medicina",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Sendo o suprassumo da medicina, o elixir da vida incita uma vitalidade sem precedentes naquele que o consumir. Como uma ação bônus, é possível consumir o elixir da vida, podendo usar todos os seus dados de vida para se curar, somando o dobro do seu modificador de constituição em cada um; você recebe vantagem e +10 em rolagens de Fortitude pelo resto da cena, assim como em Integridade.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Lágrima de Shinigami",
    "folderPath": [
      "Itens Especiais",
      "Custo 4"
    ],
    "img": "icons/consumables/potions/flask-corked-green.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 4"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O mais letal veneno já conhecido, capaz de imbuir uma arma com tamanha letalidade que passou a ser conhecido como a lágrima de um shinigami. Devido a sua escassez, um pote de lágrima de shinigami pode cobrir apenas uma arma; quando uma arma coberta com a lágrima de shinigami acertar, o alvo deve realizar um teste de resistência de Fortitude com CD20 + bônus de maestria de quem o criou + o bônus do atributo usado pelo portador da arma; caso falhe, a criatura recebe a condição Amaldiçoado até o final da cena, se suceder, recebe apenas as condições Amedrontado e Exposto, as quais duram duas rodadas. Uma criatura amaldiçoada gasta 2 pontos de energia a mais sempre que usar energia amaldiçoada e tem a sua CA diminuída em 4. Enquanto o veneno durar, a arma também causa 3d10 de dano adicional Ácido ou Necrótico, a escolha do portador. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual a metade do bônus de maestria de quem o criou.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 4,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Mistura",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">O mais letal veneno já conhecido, capaz de imbuir uma arma com tamanha letalidade que passou a ser conhecido como a lágrima de um shinigami. Devido a sua escassez, um pote de lágrima de shinigami pode cobrir apenas uma arma; quando uma arma coberta com a lágrima de shinigami acertar, o alvo deve realizar um teste de resistência de Fortitude com CD20 + bônus de maestria de quem o criou + o bônus do atributo usado pelo portador da arma; caso falhe, a criatura recebe a condição Amaldiçoado até o final da cena, se suceder, recebe apenas as condições Amedrontado e Exposto, as quais duram duas rodadas. Uma criatura amaldiçoada gasta 2 pontos de energia a mais sempre que usar energia amaldiçoada e tem a sua CA diminuída em 4. Enquanto o veneno durar, a arma também causa 3d10 de dano adicional Ácido ou Necrótico, a escolha do portador. O veneno dura até que esse efeito seja aplicado uma quantidade de vezes igual a metade do bônus de maestria de quem o criou.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Pote de Espírito da Vida",
    "folderPath": [
      "Itens Especiais",
      "Custo 4"
    ],
    "img": "icons/containers/kitchenware/jug-bottle-clay-brown-gold-blue.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 4"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pote com um misterioso espírito que é constituído de pura energia reversa, ao invés de energia amaldiçoada, servindo como uma fonte de vida: como uma ação bônus, você pode liberar o espírito e o comandar a curar uma pessoa dentro de 36 metros de você. A cura restaura completamente os pontos de vida da criatura e remove qualquer condição e veneno que ele possua.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 4,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um pote com um misterioso espírito que é constituído de pura energia reversa, ao invés de energia amaldiçoada, servindo como uma fonte de vida: como uma ação bônus, você pode liberar o espírito e o comandar a curar uma pessoa dentro de 36 metros de você. A cura restaura completamente os pontos de vida da criatura e remove qualquer condição e veneno que ele possua.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Símbolo de Vida Absoluta",
    "folderPath": [
      "Itens Especiais",
      "Custo 4"
    ],
    "img": "icons/equipment/neck/pendant-rough-leaves-green.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 4"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Encravado e entalhado com os símbolos de absoluta saúde e vida, esse símbolo consegue canalizar em sua máxima a vida. Como uma ação livre, é possível o destruir para liberar energia em si mesmo, recuperando todos os seus pontos de vida, até o máximo, além de receber pontos de vida temporários igual ao triplo do seu nível de personagem.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 4,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Espiritual",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Encravado e entalhado com os símbolos de absoluta saúde e vida, esse símbolo consegue canalizar em sua máxima a vida. Como uma ação livre, é possível o destruir para liberar energia em si mesmo, recuperando todos os seus pontos de vida, até o máximo, além de receber pontos de vida temporários igual ao triplo do seu nível de personagem.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Talismã do Ápice",
    "folderPath": [
      "Itens Especiais",
      "Custo 4"
    ],
    "img": "icons/commodities/treasure/token-engraved-blue-glowing.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Itens Especiais",
        "subcategoria": "Custo 4"
      }
    },
    "type": "consumivel",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um talismã que quando destruído liberta uma quantidade excessiva de energia, a qual é direcionada a um atributo específico do usuário. Ao usar o talismã, o valor de um atributo a sua escolha se torna 30 durante uma hora e ele se quebra.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 0.5,
      "preco": 4,
      "fonte": "Feiticeiros & Maldições",
      "consumivel": {
        "tipo": "Talismã",
        "ativacao": {
          "consumivel": null,
          "execucao": null,
          "condicao": null,
          "alcance": null,
          "alvo": null,
          "area": null,
          "efeito": "<p style=\"text-align: left;\">Um talismã que quando destruído liberta uma quantidade excessiva de energia, a qual é direcionada a um atributo específico do usuário. Ao usar o talismã, o valor de um atributo a sua escolha se torna 30 durante uma hora e ele se quebra.</p>",
          "duracao": null,
          "testeResistencia": null
        },
        "rolagens": {
          "ataques": {},
          "danos": {},
          "resistencia": {
            "teste": "",
            "atributo": "",
            "bonus": 0,
            "total": 10
          }
        }
      }
    }
  },
  {
    "name": "Kit de Alfaiate",
    "folderPath": [
      "Kits de Ferramentas"
    ],
    "img": "icons/commodities/cloth/thread-and-needle.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Kits de Ferramentas",
        "subcategoria": null
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O kit de ferramentas de alfaiate é focado na criação de acessórios especiais, feitos sob medida com o uso da habilidade manual e do jujutsu. Entretanto, criar acessórios amaldiçoados é complexo e custoso: <strong>do nível 1 ao 9, você só pode criar 1 acessório por interlúdio; a partir do nível 10 você pode criar 2 acessórios por interlúdio.</strong></p>\n<p style=\"text-align: left;\">Ao se tentar criar um acessório, realiza-se um teste de Ofício (Alfaiate), cuja dificuldade é:<br>• 15 para acessórios de custo 1.<br>• 25 para acessórios de custo 2.<br>• 35 para acessórios de custo 3.<br>• 50 para acessórios de custo 4.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Kit de Ferramentas",
        "tipoUso": "Alfaiate",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Kit de Alquimia",
    "folderPath": [
      "Kits de Ferramentas"
    ],
    "img": "icons/tools/laboratory/vials-blue-pink.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Kits de Ferramentas",
        "subcategoria": null
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O kit de ferramentas de alquimia possibilita misturar elementos e substâncias para criar algo novo, podendo ser tanto venenos quanto misturas com efeitos diferenciados. <strong>Possuir maestria em ferramentas de alquimia permite criar itens especiais do tipo Mistura; não há um limite de quantas misturas podem ser criadas.</strong><br>Ao se tentar criar uma mistura, realiza-se um teste de Ofício (Alquimia), cuja dificuldade é:<br>• 15 para misturas de custo 1.<br>• 20 para misturas de custo 2.<br>• 25 para misturas de custo 3.<br>• 35 para misturas de custo 4.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Kit de Ferramentas",
        "tipoUso": "Alquimia",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Kit de Armeiro",
    "folderPath": [
      "Kits de Ferramentas"
    ],
    "img": "icons/tools/smithing/furnace-fire-metal-orange.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Kits de Ferramentas",
        "subcategoria": null
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O kit de ferramentas de armeiro é o principal para se manter os equipamentos em um bom estado, realizando a sua manutenção e otimização, permitindo assim que o máximo do seu potencial seja extraído.<br>Durante um descanso curto, um personagem com maestria em ferramentas de armeiro pode melhorar temporariamente uma quantidade de equipamentos igual ao seu bônus de maestria; em um descanso longo, essa quantidade é igual ao dobro. Uma arma melhorada adiciona o bônus de maestria do armeiro em rolagens de dano; uma armadura ou um escudo melhorado adiciona o bônus de maestria do armeiro no seu bônus na Classe de Armadura. As melhorias duram até o próximo descanso ou com algum desgaste extremo, definido pelo Narrador.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Kit de Ferramentas",
        "tipoUso": "Armeiro",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Kit de Canalizador",
    "folderPath": [
      "Kits de Ferramentas"
    ],
    "img": "icons/tools/fasteners/nails-worn-steel-grey.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Kits de Ferramentas",
        "subcategoria": null
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O kit de ferramentas de canalizador é um conjunto de peculiares amuletos, pérolas e outros itens espirituais, que permitem canalizar energia amaldiçoada e alguns espíritos amaldiçoados menores em itens. <strong>Possuir maestria em ferramentas de canalizador permite criar itens especiais do tipo Espiritual; não há um limite de quantos itens espirituais podem ser criados.</strong></p>\n<p style=\"text-align: left;\"><br>Ao se tentar criar um item espiritual, realiza-se um teste de Ofício (Canalização), cuja dificuldade é:<br>• 15 para itens espirituais de custo 1.<br>• 20 para itens espirituais de custo 2.<br>• 25 para itens espirituais de custo 3.<br>• 35 para itens espirituais de custo 4.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Kit de Ferramentas",
        "tipoUso": "Canalizador",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Kit de Cozinheiro",
    "folderPath": [
      "Kits de Ferramentas"
    ],
    "img": "icons/tools/cooking/bowl-steaming-brown.webp",
    "sort": 5000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Kits de Ferramentas",
        "subcategoria": null
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O kit de ferramentas de cozinheiro dá a capacidade de extrair ao máximo habilidades culinárias, criando refeições da maior qualidade, as quais passam a até mesmo conferir benefícios para aqueles que as consumirem.</p>\n<p style=\"text-align: left;\">Ter maestria em ferramentas de cozinheiro permite produzir refeições com propriedades especiais. Durante um descanso curto, um personagem com maestria nas ferramentas de cozinheiro pode criar uma refeição com uma quantidade de propriedades igual a metade do seu bônus de maestria; em um descanso longo, o valor é igual ao bônus de maestria. As propriedades são as seguintes:</p>\n<ul>\n<li style=\"text-align: left;\"><strong>Cativante:</strong> Consumir uma refeição cativante concede pontos de alma temporários igual a 5 multiplicado pelo bônus de maestria do cozinheiro.</li>\n<li style=\"text-align: left;\"><strong>Energética:</strong> Consumir uma refeição energética concede energia amaldiçoada temporária igual ao dobro do bônus de maestria do cozinheiro.</li>\n<li style=\"text-align: left;\"><strong>Leve:</strong> Consumir uma refeição leve concede um aumento na quantidade de movimento igual a 1,5 metros multiplicado pela metade bônus de maestria do cozinheiro. Esse efeito dura até o próximo descanso.</li>\n<li style=\"text-align: left;\"><strong>Nutritiva:</strong> Consumir uma refeição nutritiva concede um bônus de 2d3 em uma quantidade de testes de resistência igual ao dobro do bônus de maestria do cozinheiro.</li>\n<li style=\"text-align: left;\"><strong>Picante</strong>: Consumir uma refeição picante concede um bônus em rolagens de acerto igual a metade do bônus de maestria do cozinheiro. Esse bônus dura até o próximo descanso.</li>\n<li style=\"text-align: left;\"><strong>Reforçada:</strong> Consumir uma refeição reforçada concede um bônus na Classe de Armadura igual ao bônus de maestria do cozinheiro. Esse bônus dura até o próximo descanso.</li>\n<li style=\"text-align: left;\"><strong>Refrescante: </strong>Consumir uma refeição refrescante permite que quem a comeu faça as próximas rolagens de perícia com vantagem, uma quantidade de vezes igual ao bônus de maestria do cozinheiro.</li>\n<li style=\"text-align: left;\"><strong>Revigorante:</strong> Consumir uma refeição revigorante concede pontos de vida temporários igual a 5 multiplicado pelo bônus de maestria do cozinheiro.</li>\n</ul>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Kit de Ferramentas",
        "tipoUso": "Cozinheiro",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Kit de Entalhador",
    "folderPath": [
      "Kits de Ferramentas"
    ],
    "img": "icons/tools/instruments/bell-brass.webp",
    "sort": 6000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Kits de Ferramentas",
        "subcategoria": null
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O kit de ferramentas de entalhador junta instrumentos e utensílios utilizados na arte de se entalhar e encravar, a qual quando unida a energia amaldiçoada permite criar amuletos e talismãs. Possuir maestria em ferramentas de entalhador permite criar itens especiais do tipo Talismã; não há um limite de quantos talismãs podem ser criados.</p>\n<p style=\"text-align: left;\">Ao se tentar criar um talismã, realiza-se um teste de Ofício (Entalhe), cuja dificuldade é:</p>\n<ul>\n<li style=\"text-align: left;\">15 para talismãs de custo 1.</li>\n<li style=\"text-align: left;\">20 para talismãs de custo 2.</li>\n<li style=\"text-align: left;\">25 para talismãs de custo 3.</li>\n<li style=\"text-align: left;\">35 para talismãs de custo 4.</li>\n</ul>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Kit de Ferramentas",
        "tipoUso": "Entalhador",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Kit de Ferreiro",
    "folderPath": [
      "Kits de Ferramentas"
    ],
    "img": "icons/tools/smithing/anvil.webp",
    "sort": 7000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Kits de Ferramentas",
        "subcategoria": null
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O kit de ferramentas de ferreiro é utilizado na criação e melhoria de armas, armaduras e escudos, eventualmente utilizando do jujutsu para as transformar em ferramentas amaldiçoadas. <strong>Possuir maestria nas ferramentas de ferreiro permite criar tanto equipamentos comuns quanto ferramentas amaldiçoadas.</strong></p>\n<p style=\"text-align: left;\">Ao se tentar criar um equipamento comum, realiza-se um teste de ofício (Ferreiro), cuja dificuldade é:</p>\n<ul style=\"text-align: left;\">\n<li>15 para equipamentos de custo 1.</li>\n<li>20 equipamentos de custo 2.</li>\n<li>25 para equipamentos de custo 3.</li>\n<li>30 para equipamentos de custo 4.</li>\n</ul>\n<p style=\"text-align: left;\">Ao se tentar criar ou melhorar uma ferramenta amaldiçoada, segue-se o guia e as dificuldades especificadas no Capítulo 6: Itens e Ferramentas Amaldiçoadas.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Kit de Ferramentas",
        "tipoUso": "Ferreiro",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Kit de Médico",
    "folderPath": [
      "Kits de Ferramentas"
    ],
    "img": "icons/containers/bags/case-simple-brown.webp",
    "sort": 8000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Kits de Ferramentas",
        "subcategoria": null
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O kit de ferramentas de médico permite cuidar efetivamente da saúde, além de sintetizar substâncias medicinais refinadas, criando antídotos ou remédios. Possuir maestria nas ferramentas de médico permite criar itens especiais do tipo Medicina; não há um limite de quantas medicinas podem ser criadas.</p>\n<p style=\"text-align: left;\">Ao se tentar criar uma medicina, realiza-se um teste de Ofício (Médico), cuja dificuldade é:</p>\n<ul>\n<li style=\"text-align: left;\">15 para medicinas de custo 1.</li>\n<li style=\"text-align: left;\">25 para medicinas de custo 2.</li>\n<li style=\"text-align: left;\">25 para medicinas de custo 3.</li>\n<li style=\"text-align: left;\">35 para medicinas de custo 4.</li>\n</ul>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 0,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Kit de Ferramentas",
        "tipoUso": "Médico",
        "defesa": 0,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Escudo Colossal",
    "folderPath": [
      "Proteções",
      "Escudos"
    ],
    "img": "icons/equipment/shield/pavise-wooden-seahorse-blue-white.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Proteções",
        "subcategoria": "Escudos"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um escudo massivo e colossal, cobrindo todo o corpo e com um uso difícil, principalmente pelo seu pesado exagerado. É necessário pelo menos 16 de força para utilizar o escudo colossal.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 4,
      "preco": 3,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Escudo",
        "tipoUso": "",
        "defesa": 4,
        "penalidadeArmadura": -2,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Escudo Leve",
    "folderPath": [
      "Proteções",
      "Escudos"
    ],
    "img": "icons/equipment/shield/buckler-wooden-boss-brown.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Proteções",
        "subcategoria": "Escudos"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um pequeno escudo, leve em peso e capaz de auxiliar na defesa de golpes mais simples.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Escudo",
        "tipoUso": "",
        "defesa": 1,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Escudo Pequeno",
    "folderPath": [
      "Proteções",
      "Escudos"
    ],
    "img": "icons/equipment/shield/targe-wooden-boss-steel.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Proteções",
        "subcategoria": "Escudos"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um escudo pequeno, otimizado para ser preso ao braço, mantendo uma mão livre enquanto dá um impulso na guarda. O escudo leve não ocupa uma das suas mãos, permitindo o manejo de armas de duas mãos enquanto estiver o usando.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Escudo",
        "tipoUso": "",
        "defesa": 1,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Escudo Pesado",
    "folderPath": [
      "Proteções",
      "Escudos"
    ],
    "img": "icons/equipment/shield/heater-embossed-gold.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Proteções",
        "subcategoria": "Escudos"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um escudo maior e pesado, cobrindo uma parte considerável do corpo, em troca de uma certa dificuldade no seu manejo.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 2,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Escudo",
        "tipoUso": "",
        "defesa": 2,
        "penalidadeArmadura": -1,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Revestimento Leve",
    "folderPath": [
      "Proteções",
      "Uniformes"
    ],
    "img": "icons/equipment/chest/breastplate-layered-leather-studded-black.webp",
    "sort": 1000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Proteções",
        "subcategoria": "Uniformes"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um revestimento leve é colocado no uniforme, concedendo-o um leve reforço defensivo.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 1,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Uniforme",
        "tipoUso": "",
        "defesa": 2,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Revestimento Médio",
    "folderPath": [
      "Proteções",
      "Uniformes"
    ],
    "img": "icons/equipment/chest/breastplate-layered-gold.webp",
    "sort": 2000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Proteções",
        "subcategoria": "Uniformes"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O uniforme tem uma quantidade demorada de revestimentos colocados, através de algumas placas e camadas adicionais, o que dá um peso considerável ao uniforme.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Uniforme",
        "tipoUso": "",
        "defesa": 4,
        "penalidadeArmadura": -2,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Revestimento Robusto",
    "folderPath": [
      "Proteções",
      "Uniformes"
    ],
    "img": "icons/equipment/chest/breastplate-metal-scaled-grey.webp",
    "sort": 3000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Proteções",
        "subcategoria": "Uniformes"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">Um revestimento pesado é implementado no uniforme, com placas fortes, camadas densas e a adição de peças que se assemelham a armaduras ou coletes, o que o dá um peso equivalente.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 4,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Uniforme",
        "tipoUso": "",
        "defesa": 6,
        "penalidadeArmadura": -4,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  },
  {
    "name": "Sob Medida",
    "folderPath": [
      "Proteções",
      "Uniformes"
    ],
    "img": "icons/equipment/chest/vest-leather-brown.webp",
    "sort": 4000,
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "equipamentos",
        "fmCatalogVersion": 1,
        "categoria": "Proteções",
        "subcategoria": "Uniformes"
      }
    },
    "type": "equipamento",
    "system": {
      "descricao": "<p style=\"text-align: left;\">O uniforme é feito sob medida, encaixando-se perfeitamente no corpo do feiticeiro, beneficiando-o em acrobacias e destacando a sua agilidade. Enquanto estiver usando um uniforme sob medida, você recebe +2 em testes de Acrobacia, Furtividade e Reflexos.</p>",
      "pv": {
        "atual": null,
        "max": null
      },
      "rd": null,
      "quantidade": 1,
      "espacos": 1,
      "preco": 2,
      "fonte": "Feiticeiros & Maldições",
      "equipado": false,
      "equipamento": {
        "tipo": "Uniforme",
        "tipoUso": "",
        "defesa": 1,
        "penalidadeArmadura": 0,
        "aprimoramentos": {
          "encantos": {
            "slot1": null,
            "slot2": null,
            "slot3": null,
            "slot4": null
          }
        }
      }
    }
  }
];

