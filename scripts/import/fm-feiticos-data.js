export const FM_FEITICOS_CATALOG_VERSION = 1;

export const FM_FEITICOS_FOLDERS = [
  {
    "name": "Dez Sombras",
    "parent": null,
    "color": null,
    "sort": 100000
  },
  {
    "name": "Nível 0",
    "parent": "Dez Sombras",
    "color": null,
    "sort": 100000
  },
  {
    "name": "Nível 1",
    "parent": "Dez Sombras",
    "color": null,
    "sort": 200000
  },
  {
    "name": "Nível 3",
    "parent": "Dez Sombras",
    "color": null,
    "sort": 300000
  },
  {
    "name": "Manipulação de Maldições",
    "parent": null,
    "color": "#270047",
    "sort": 200000
  },
  {
    "name": "Nível 0",
    "parent": "Manipulação de Maldições",
    "color": null,
    "sort": 100000
  },
  {
    "name": "Técnica Máxima",
    "parent": "Manipulação de Maldições",
    "color": null,
    "sort": 200000
  },
  {
    "name": "Boogie Woogie",
    "parent": null,
    "color": "#a30031",
    "sort": 300000
  },
  {
    "name": "Nível 0",
    "parent": "Boogie Woogie",
    "color": null,
    "sort": 100000
  },
  {
    "name": "Nível 1",
    "parent": "Boogie Woogie",
    "color": null,
    "sort": 200000
  },
  {
    "name": "Nível 2",
    "parent": "Boogie Woogie",
    "color": null,
    "sort": 300000
  },
  {
    "name": "Nível 3",
    "parent": "Boogie Woogie",
    "color": null,
    "sort": 400000
  },
  {
    "name": "Nulificação de Técnicas",
    "parent": null,
    "color": "#b39500",
    "sort": 400000
  },
  {
    "name": "Liberação Máxima",
    "parent": "Nulificação de Técnicas",
    "color": null,
    "sort": 100000
  },
  {
    "name": "Nível 0",
    "parent": "Nulificação de Técnicas",
    "color": null,
    "sort": 200000
  },
  {
    "name": "Nível 1",
    "parent": "Nulificação de Técnicas",
    "color": null,
    "sort": 300000
  },
  {
    "name": "Nível 2",
    "parent": "Nulificação de Técnicas",
    "color": null,
    "sort": 400000
  },
  {
    "name": "Nível 3",
    "parent": "Nulificação de Técnicas",
    "color": null,
    "sort": 500000
  },
  {
    "name": "Nível 4",
    "parent": "Nulificação de Técnicas",
    "color": null,
    "sort": 600000
  },
  {
    "name": "Nível 5",
    "parent": "Nulificação de Técnicas",
    "color": null,
    "sort": 700000
  },
  {
    "name": "Formação de Gelo",
    "parent": null,
    "color": "#69acba",
    "sort": 500000
  },
  {
    "name": "Nível 0",
    "parent": "Formação de Gelo",
    "color": null,
    "sort": 100000
  },
  {
    "name": "Nível 1",
    "parent": "Formação de Gelo",
    "color": null,
    "sort": 200000
  },
  {
    "name": "Nível 2",
    "parent": "Formação de Gelo",
    "color": null,
    "sort": 300000
  },
  {
    "name": "Nível 3",
    "parent": "Formação de Gelo",
    "color": null,
    "sort": 400000
  },
  {
    "name": "Nível 4",
    "parent": "Formação de Gelo",
    "color": null,
    "sort": 500000
  }
];

export const FM_FEITICOS = [
  {
    "name": "Estoque das Sombras",
    "folderPath": [
      "Dez Sombras",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/creatures/magical/spirit-fear-energy-pink.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você se prepara para armazenar itens na sua própria sombra. Você pode guardar até 5 espaços de item na sua sombra. Retirar itens da sua sombra é uma ação livre na primeira vez, tornando-se uma ação bônus após isso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Passiva",
        "conjuracao": "Nenhuma",
        "alcance": "",
        "alvo": "",
        "area": "",
        "duracao": "Permanente",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": "5 Espaços Adicionais"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Dez Sombras",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Ocultação Sombria",
    "folderPath": [
      "Dez Sombras",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/creatures/magical/construct-face-stone-pink.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você se oculta em uma sombra. Você escolhe uma sombra dentro de 4,5 metros para se ocultar em, entrando nela. Enquanto dentro de uma sombra, você é indetectável e invisível, mas não pode se mover, sendo levado por ela. Você fica na sombra até que escolha sair ou que ela deixe de ser feita, nesse caso sendo expulso a força dela. Caso escolha sair e realize um ataque contra a criatura cuja sombra você estava em, a criatura está desprevenida contra o ataque.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Bônus",
        "alcance": "4,5 Metros",
        "alvo": "Uma Sombra",
        "area": "",
        "duracao": "Variável",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Dez Sombras",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Passo Sombrio",
    "folderPath": [
      "Dez Sombras",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/creatures/magical/humanoid-silhouette-dashing-blue.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você avança e teleporta para a sombra de uma criatura não hostil dentro de 9 metros. Esse movimento não causa ataques de oportunidade.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Bônus",
        "alcance": "9 Metros",
        "alvo": "Uma Sombra",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Dez Sombras",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Fuga do Coelho",
    "folderPath": [
      "Dez Sombras",
      "Nível 3"
    ],
    "type": "feitico",
    "img": "icons/creatures/magical/spirit-undead-winged-ghost.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você invoca diversos coelhos para o permitir evitar um ataque. Caso seja alvo de um ataque você pode, como uma reação, invocar vários coelhos, negando o ataque feito contra você. Os coelhos não podem ser controlados, por não serem shikigamis, e começam a se espalhar pelo campo de batalha, sumindo no começo do seu próximo turno. Além disso, você pode se mover para um ponto desocupado dentro de 9 metros, sem causar ataques de oportunidade.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 3,
        "custoPE": 8,
        "tipo": "Auxiliar",
        "conjuracao": "Reação",
        "alcance": "Próprio",
        "alvo": "Próprio",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Dez Sombras",
        "subcategoria": "Nível 3"
      }
    }
  },
  {
    "name": "Invocação Emergencial",
    "folderPath": [
      "Manipulação de Maldições",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/creatures/magical/construct-golem-stone-blue.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você rapidamente invoca uma das maldições dentro de seu estoque para o proteger, servindo como resposta a um perigo. Ao ser alvo de um ataque ou afetado por uma habilidade de dano você pode, como uma reação, invocar uma maldição para o proteger. Você paga metade do custo para invocar a maldição, e reduz o dano em um valor igual a 5 multiplicado pelo custo pago para usar a habilidade. Você pode escolher armazenar a maldição novamente, após a invocar, ou mantê-la em campo, pagando o resto do custo de invocação dela.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Auxiliar",
        "conjuracao": "Reação",
        "alcance": "Próprio",
        "alvo": "Próprio",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": "5 + Custo Pago"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Manipulação de Maldições",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Invocação Explosiva",
    "folderPath": [
      "Manipulação de Maldições",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/creatures/magical/spirit-fear-energy-pink.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você puxa as suas invocações de maneira explosiva, fazendo com que tenham uma primeira ação imediata assim que invocadas. Ao usar essa habilidade, você pode invocar uma quantidade de maldições igual a 1 + metade do seu bônus de maestria, além de as comandar a realizar uma ação complexa cada, como parte do uso da habilidade. O custo da habilidade é igual ao custo somado de todas as maldições invocadas.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Completa",
        "alcance": "",
        "alvo": "",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Manipulação de Maldições",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Invocação Rápida",
    "folderPath": [
      "Manipulação de Maldições",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/creatures/magical/spirit-undead-winged-ghost.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Você se foca em trazer ao campo o máximo de maldições possíveis de uma vez, adiantando o seu processo de preparo e domínio do campo de batalha. Ao usar essa habilidade, você pode invocar uma quantidade de maldições igual ao número máximo de invocações que você pode ter em campo, em espaços desocupados dentro de 9 metros de você. O custo da habilidade é igual ao custo somado de todas as maldições invocadas.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Comum",
        "alcance": "",
        "alvo": "",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Manipulação de Maldições",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Uzumaki",
    "folderPath": [
      "Manipulação de Maldições",
      "Técnica Máxima"
    ],
    "type": "feitico",
    "img": "icons/creatures/abilities/wolf-heads-swirl-purple.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você começa a combinar e condensar suas maldições em apenas uma, a qual toma a forma de um espírito amaldiçoado em espiral, levitando atrás de si. Quando desejar, você o libera em um alvo, avançando instantaneamente: o alvo deve realizar um TR de Reflexos, recebendo apenas metade do dano em um sucesso. O dano da habilidade é formado conforme as maldições que você decide colocar nela: cada maldição adiciona 2d12 de dano, aumentando em mais 2d12 para grau acima do quarto (4d12 para 3° grau, 6d12 para 2° grau e assim a seguir). Além disso, caso utilize uma maldição de 1° grau ou superior, que tenha uma técnica, você a extrai, podendo utilizá-la uma vez. Toda maldição utilizada na habilidade é perdida.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 6,
        "custoPE": 25,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "36 Metros",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Nenhuma",
        "dados": "2d12",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Manipulação de Maldições",
        "subcategoria": "Técnica Máxima"
      }
    }
  },
  {
    "name": "Troca de Posição",
    "folderPath": [
      "Boogie Woogie",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/magic/control/energy-stream-link-blue.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Ao bater palmas, você troca a posição de dois alvos dentro do seu alcance imediatamente, incluindo você mesmo. O movimento da troca de posição não causa ataques de oportunidade e, caso você realize um ataque contra uma criatura movida ou após ser movido,</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Bônus",
        "alcance": "9 Metros",
        "alvo": "Uma Criatura ou Objeto",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Boogie Woogie",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Troca Emergencial",
    "folderPath": [
      "Boogie Woogie",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/magic/control/energy-stream-link-large-white.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Ao perceber uma ameaça para um aliado, você tenta o trocar de lugar com um alvo válido para a sua técnica: como uma reação, realize um teste de Reflexos e, caso o resultado do seu teste seja maior do que o resultado do teste de ataque, você bate palmas a tempo e o troca com outro alvo. Caso seja criatura seja colocada no lugar, ela se torna o novo alvo do ataque que foi evitado no aliado.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Auxiliar",
        "conjuracao": "Reação",
        "alcance": "6 Metros",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Boogie Woogie",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Ajuste de Alvo",
    "folderPath": [
      "Boogie Woogie",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/magic/control/debuff-energy-hold-yellow.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você realiza um ajuste surpresa de alvo para um ataque ou habilidade de um aliado, podendo adicionar um fator de choque. Caso você seja alvo de um ataque ou habilidade de técnica de um aliado, você pode utilizar sua reação para se trocar de lugar com um alvo válido dentro de 12 metros, o qual se tornará o novo alvo do ataque ou técnica; caso necessite de rolagem de acerto, o atacante possuirá vantagem e, caso necessite de um teste de resistência, aquele que está resistindo terá desvantagem.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Auxiliar",
        "conjuracao": "Reação",
        "alcance": "12 Metros",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Boogie Woogie",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Combo Surpresa",
    "folderPath": [
      "Boogie Woogie",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/skills/melee/maneuver-greatsword-yellow.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você se prepara para combinar golpes e sua técnica para abrir uma brecha para encaixar uma grande surpresa em forma de combo. Ao utilizar esta habilidade, você realiza um ataque com uma arma de arremesso contra uma criatura dentro do alcance da dela e, quando a arma acerta ou se aproxima, você troca de lugar com ela, tornando-se adjacente ao alvo do ataque. Ao trocar de lugar, você pode também usar sua reação para realizar um ataque corpo-a-corpo contra a criatura, que estará desprevenida caso falhe em um teste de resistência de Astúcia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Comum",
        "alcance": "Variável",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Boogie Woogie",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Troca com Objeto Imbuído",
    "folderPath": [
      "Boogie Woogie",
      "Nível 2"
    ],
    "type": "feitico",
    "img": "icons/skills/ranged/arrow-flying-white-blue.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você agarra um objeto pequeno qualquer, cobrindo-o com energia e o joga próximo a uma criatura dentro de 12 metros, realizando um ataque surpresa ao trocar de lugar com o objeto imbuído. Após trocar de lugar, você realiza uma ação de ataque contra o alvo, realizada com vantagem. O alvo também estará desprevenido e sua margem de crítico é reduzida em 1 durante o ataque. Você pode usar ataque extra com esta habilidade, ainda recebendo os seus benefícios no ataque adicional.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 2,
        "custoPE": 5,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Comum",
        "alcance": "12 Metros",
        "alvo": "Um Objeto",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Boogie Woogie",
        "subcategoria": "Nível 2"
      }
    }
  },
  {
    "name": "Sequência Imprevisível",
    "folderPath": [
      "Boogie Woogie",
      "Nível 3"
    ],
    "type": "feitico",
    "img": "icons/magic/movement/trail-streak-zigzag-yellow.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Ao usar esta habilidade, você deve escolher duas criaturas dentro do alcance: um aliado para o acompanhar e uma criatura para ser alvo da sequência de ataques. O aliado deve gastar a reação dele para acompanhar a sequência. Você e o aliado escolhido avançam até a criatura alvo, trocando de lugar constantemente para atacar de maneira imprevisível. Ao chegar na criatura, você e o aliado realizam dois ataques corpo-a-corpo cada, ambos considerando que a criatura está desprevenida.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 3,
        "custoPE": 8,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Completa",
        "alcance": "12 Metros",
        "alvo": "Duas Criaturas",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Boogie Woogie",
        "subcategoria": "Nível 3"
      }
    }
  },
  {
    "name": "Liberação Máxima: Escada de Jacó",
    "folderPath": [
      "Nulificação de Técnicas",
      "Liberação Máxima"
    ],
    "type": "feitico",
    "img": "icons/magic/light/beam-strike-village-yellow.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você cria um trompete de luz com o máximo de energia, ao mesmo momento que manifesta um ciclo de luz no céu com vários sigilos mágicos radiantes. Ao soar o trompete, o ciclo dispara uma grande quantidade de luz na forma de uma área cilíndrica de 24 metros, extinguindo toda a energia amaldiçoada que ali estiver. Toda estrutura de energia dentro da área é instantaneamente dissipada e destruída; qualquer objeto amaldiçoado dentro da área tem o seu efeito anulado e negado; qualquer condição, efeito ou habilidade causada por energia amaldiçoada é extinguida e uma maldição dentro da área realiza um teste de resistência de Fortitude, recebendo 7d12 de dano radiante, o qual ignora qualquer fonte de resistência ou redução de danos, ou apenas metade em um sucesso. Além disso, uma criatura afetada por esta habilidade perde 3d12 + 5 pontos de energia amaldiçoada.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 5,
        "custoPE": 30,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Completa",
        "alcance": "30 Metros",
        "alvo": "",
        "area": "24 Metros",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "7d12",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Liberação Máxima"
      }
    }
  },
  {
    "name": "Criar Luz",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/magic/light/hand-sparks-glow-yellow.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você realiza uma criação básica de luz. A luz ilumina normalmente, como uma lâmpada forte, além de poder assumir o formato de objetos pequenos, como instrumentos ou orbes de iluminação. Você pode tanto escolher atrelar a criação de luz a um objeto quanto deixa-lo flutuando no ar, acompanhando uma pessoa a sua escolha.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Comum",
        "alcance": "9 Metros",
        "alvo": "",
        "area": "",
        "duracao": "Variável",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Flecha Radiante",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/skills/ranged/arrow-flying-white-blue.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você cria uma flecha composta de luz purificadora e a dispara contra uma maldição. Realize um teste de ataque contra o alvo e, caso acerte, causa 1d10 de dano radiante.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "9 Metros",
        "alvo": "Uma Maldição",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Nenhuma",
        "dados": "1d10",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Graciosidade Angelical",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/creatures/abilities/wings-birdlike-blue.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Seu aspecto angelical e divino o concede uma graciosidade única, amplificando nas características de uma existência tão pura. Você recebe 3 metros de movimento de voo adicionais, além de poder escolher receber vantagem em rolagens de Persuasão ou Performance.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Passiva",
        "conjuracao": "Ação Comum",
        "alcance": "",
        "alvo": "",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": "+3m"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Proteção Divina",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/magic/holy/barrier-shield-winged-cross.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>Você cobre três criaturas a sua escolha com a sua luz, protegendo-as daquilo que é maldito enquanto conseguir se concentrar. Quando uma criatura protegida realizar um teste de resistência para resistir a um efeito provindo de energia amaldiçoada, ela pode adicionar 1d4 ao resultado final. Para cada rodada após a primeira, você deve pagar 1PE para sustentar a habilidade; caso você perca a concentração ela é cancelada antecipadamente.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Comum",
        "alcance": "9 Metros",
        "alvo": "Três Criaturas",
        "area": "",
        "duracao": "Sustentada",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Amarras Sagradas",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/magic/light/orb-container-orange.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você cria amarras de luz, buscando prender uma maldição com elas, agarrando-a no lugar. A maldição alvo deve realizar um teste de resistência de Fortitude, recebendo a condição Agarrado em uma falha. Enquanto estiver agarrada pelas amarras sagradas, a maldição recebe 1d10 de dano radiante no começo de todo turno dela. Para se libertar das amarras, a maldição pode repetir o teste de Fortitude no começo de todo turno dela, libertando-se em um sucesso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "12 Metros",
        "alvo": "Uma Maldição",
        "area": "",
        "duracao": "Variável",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "1d10",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Arma Celeste",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/skills/melee/sword-winged-holy-orange.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você cobre uma arma com luz, reforçando a sua capacidade de dano contra maldições enquanto o revestimento persistir. A arma causa 1d10 de dano radiante adicional sempre que for utilizada para atacar uma maldição. Para cada rodada após a primeira, você deve pagar 1 ponto de energia amaldiçoada para mantê-la ativada.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Bônus",
        "alcance": "3 Metros",
        "alvo": "Uma Arma",
        "area": "",
        "duracao": "Sustentada",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": "+1d10 Radiante"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Armadura Sacra",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/magic/defensive/shield-barrier-deflect-gold.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Você constantemente cobre o seu corpo com uma fina camada de luz, formando uma armadura sacra contra o amaldiçoado. Você recebe 4 de redução de danos contra dano provindo de energia amaldiçoada. Seu máximo de energia amaldiçoada é diminuído em 2.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Passiva",
        "conjuracao": "Ação Comum",
        "alcance": "",
        "alvo": "",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": "4"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Rejeitar o Pecado",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/magic/holy/prayer-hands-glowing-yellow-green.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>Você rejeita a energia amaldiçoada, criando uma resistência constante aos prejuízos dela, devido a sua nulificação. Sempre que você realiza um teste de resistência para resistir a um efeito provindo de energia amaldiçoada, você recebe +2 na rolagem. Nos níveis 10 e 20 esse bônus aumenta em +1. Seu máximo de energia amaldiçoada é diminuído em 2.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Passiva",
        "conjuracao": "Ação Comum",
        "alcance": "",
        "alvo": "",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": "2"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Véu Abençoado",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/magic/holy/chalice-glowing-gold-water.webp",
    "sort": 5000,
    "system": {
      "descricao": "<p>Você forma dois véus de luz, cobrindo criaturas a sua escolha. As duas criaturas recebem 2d6 em pontos de vida temporários.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Curativa",
        "conjuracao": "Ação Comum",
        "alcance": "12 Metros",
        "alvo": "Duas Criaturas",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Nenhuma",
        "dados": "2d6",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Cruz Celeste",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 2"
    ],
    "type": "feitico",
    "img": "icons/magic/lightning/bolt-strike-beam-yellow.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você concentra luz na forma de uma cruz afiada, forçando-a cair como uma lâmina sobre uma maldição. A maldição alvo deve realizar um teste de resistência de Reflexos, recebendo 4d8 de dano radiante, ou apenas metade em um sucesso. Uma maldição que falhe no teste também recebe a condição Amedrontado por 1 rodada, sentindo o peso da luz purificadora.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 2,
        "custoPE": 5,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "18 Metros",
        "alvo": "Uma Maldição",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Nenhuma",
        "dados": "4d8",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 2"
      }
    }
  },
  {
    "name": "Guarda de Querubins",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 2"
    ],
    "type": "feitico",
    "img": "icons/creatures/magical/fae-fairy-winged-glowing-green.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você forma uma guarda de querubins, pequenos anjos com faces esqueléticas, para proteger os seus aliados. 3 querubins são criados, e você pode dividi-los como desejar entre seus aliados dentro de 12 metros. Para cada querubim protegendo uma criatura, ela recebe +2 de CA e 2 de RD. A cada rodada após a primeira, você deve pagar 1 ponto de energia amaldiçoada para sustentar.</p>\n<p> </p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 2,
        "custoPE": 5,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Comum",
        "alcance": "",
        "alvo": "",
        "area": "",
        "duracao": "Sustentada",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": "2 de CA e RD"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 2"
      }
    }
  },
  {
    "name": "Purificar",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 2"
    ],
    "type": "feitico",
    "img": "icons/magic/life/heart-cross-strong-flame-purple-orange.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Você toca uma criatura e utiliza da sua luz para a purificar de uma limitação. Ao tocar uma criatura, você pode remover uma condição que tenha sido causada por uma habilidade de energia amaldiçoada, removendo-a do corpo.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 2,
        "custoPE": 5,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Comum",
        "alcance": "Toque",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 2"
      }
    }
  },
  {
    "name": "Dissipar o Maldito",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 3"
    ],
    "type": "feitico",
    "img": "icons/magic/light/explosion-star-glow-yellow.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você cria uma enorme esfera de luz, liberando-a para se espalhar por uma área esférica de 6 metros, a partir de um ponto a sua escolha dentro de 24 metros. Todas as formações compostas de energia, como barreiras e cortinas dentro da área são dissipadas ou destruídas, assim como qualquer habilidade de energia amaldiçoada concentrada ou sustentada será cancelada. Caso uma expansão de domínio seja afetada por essa habilidade, ela não é destruída, mas fica vulnerável a dano durante uma rodada.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 3,
        "custoPE": 8,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Comum",
        "alcance": "24 Metros",
        "alvo": "",
        "area": "6 Metros",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 3"
      }
    }
  },
  {
    "name": "Explosão Luminosa",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 3"
    ],
    "type": "feitico",
    "img": "icons/magic/light/explosion-star-glow-blue.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você causa uma explosão de luz, a partir de um ponto a sua escolha dentro de 24 metros. A explosão se espalha em uma área esférica de 9 metros. Toda maldição dentro da área afetada deve realizar um teste de resistência de Fortitude, recebendo 2d12 de dano radiante ou apenas metade em um sucesso. Uma maldição que falhar no teste também recebe a condição cego por 1 rodada.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 3,
        "custoPE": 8,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "12 Metros",
        "alvo": "",
        "area": "9 Metros",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Nenhuma",
        "dados": "2d12",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 3"
      }
    }
  },
  {
    "name": "O Som da Salvação",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 3"
    ],
    "type": "feitico",
    "img": "icons/magic/life/heart-hand-gold-green-light.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Você cria um instrumento e produz uma melodia suave e harmônica, alcançando uma área de 6 metros a partir de você. Todos os seus aliados dentro da área recebem 4d10 pontos de vida temporários. Além disso, todos os aliados afetados podem adicionar o seu modificador principal de técnica nas três próximas rolagens que realizarem.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 3,
        "custoPE": 8,
        "tipo": "Curativa",
        "conjuracao": "Ação Comum",
        "alcance": "",
        "alvo": "",
        "area": "6 Metros",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Nenhuma",
        "dados": "4d10",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 3"
      }
    }
  },
  {
    "name": "Melodia da Purificação",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 4"
    ],
    "type": "feitico",
    "img": "icons/magic/light/projectile-smoke-blue-light.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você forma um instrumento de luz para tocar uma melodia que antecede a purificação do mal. Após tocar a melodia, várias cruzes se manifestam na área afetada, cortando e queimando qualquer maldição dentro da área esférica. Toda maldição afetada deve realizar um teste de resistência de Fortitude, recebendo 2d10 de dano radiante ou apenas metade em um sucesso. Caso falhe, a maldição também recebe as condições Fragilizado e Exposto por duas rodadas. No final de todo turno dela, uma maldição pode repetir o teste, livrando-se antecipadamente das condições em um sucesso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 4,
        "custoPE": 12,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "24 Metros",
        "alvo": "",
        "area": "9 Metros",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "2d10",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 4"
      }
    }
  },
  {
    "name": "O Peso Avassalador do Pecado",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 4"
    ],
    "type": "feitico",
    "img": "icons/magic/light/swords-light-glowing-white.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você consome uma maldição completamente com luz, forçando-a a sentir o peso devastador de sua existência. A maldição afetada deve realizar um teste de resistência de Vontade. Caso suceda, a maldição recebe as condições Amedrontado 1 rodada e Desorientado por 2 rodadas. Caso falhe, ela recebe também as condições Fragilizado por 2 rodadas e Paralisado por 1 rodada. No final de todo turno dela, uma maldição pode repetir o teste, livrando-se antecipadamente de condições ativas em um sucesso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 4,
        "custoPE": 12,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "30 Metros",
        "alvo": "Uma Maldição",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Nenhuma",
        "dados": "",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 4"
      }
    }
  },
  {
    "name": "Escada de Jacó",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 5"
    ],
    "type": "feitico",
    "img": "icons/magic/light/projectile-beam-yellow.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você cria um trompete de luz, ao mesmo momento que manifesta um ciclo de luz no céu com vários sigilos mágicos. Ao soar o trompete, o ciclo dispara uma grande quantidade de luz na forma de uma área cilíndrica de 18 metros, extinguindo toda a energia amaldiçoada que ali estiver. Toda estrutura de energia dentro da área é instantaneamente dissipada e destruída; qualquer objeto amaldiçoado dentro da área tem o seu efeito anulado e negado; qualquer condição, efeito ou habilidade causada por energia amaldiçoada é extinguida e uma maldição dentro da área realiza um teste de resistência de Fortitude, recebendo 4d12 de dano radiante, o qual ignora qualquer fonte de resistência ou redução de danos, ou apenas metade em um sucesso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 5,
        "custoPE": 20,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Completa",
        "alcance": "30 Metros",
        "alvo": "",
        "area": "18 Metros",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "4d12",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 5"
      }
    }
  },
  {
    "name": "Jardim do Éden",
    "folderPath": [
      "Nulificação de Técnicas",
      "Nível 5"
    ],
    "type": "feitico",
    "img": "icons/svg/item-bag.svg",
    "sort": 2000,
    "system": {
      "descricao": "",
      "fonte": "Referência visual fornecida",
      "feitico": {
        "nivel": 5,
        "custoPE": 0,
        "tipo": "",
        "conjuracao": "",
        "alcance": "",
        "alvo": "",
        "area": "",
        "duracao": "",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Nulificação de Técnicas",
        "subcategoria": "Nível 5",
        "dadosIncompletos": true
      }
    }
  },
  {
    "name": "Criação de Gelo",
    "folderPath": [
      "Formação de Gelo",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/magic/water/water-hand.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você cria gelo, variando desde formações, objetos e estruturas pequenas até o congelamento de superfícies ou líquidos. A ação utilizada para a criação do gelo varia conforme o que se busca criar, assim como as limitações devem ser definidas pelo mestre.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Auxiliar",
        "conjuracao": "Variável",
        "alcance": "9 Metros",
        "alvo": "",
        "area": "",
        "duracao": "Imediata",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": ""
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Espeto de Gelo",
    "folderPath": [
      "Formação de Gelo",
      "Nível 0"
    ],
    "type": "feitico",
    "img": "icons/magic/water/strike-ice-blade-fang.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você forma um espeto de gelo e o dispara contra uma criatura, perfurando. Realize um teste de ataque de técnica (Feitiçaria ou Pontaria) contra o alvo e, caso acerte, causa 1d10 de dano perfurante.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 0,
        "custoPE": 0,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "9 Metros",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Nenhuma",
        "dados": "1d10",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 0"
      }
    }
  },
  {
    "name": "Brisa Gelada",
    "folderPath": [
      "Formação de Gelo",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/magic/air/wind-weather-snow-gusts.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você cria uma brisa gelada ao redor de uma criatura dentro de 12 metros, a qual deve realizar um teste de resistência de Fortitude, recebendo 3d8 de dano congelante, ou apenas metade em um sucesso. Caso falhe, a criatura também terá desvantagem no próximo teste físico que realizar.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "12 Metros",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "3d8",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Revestimento de Gelo",
    "folderPath": [
      "Formação de Gelo",
      "Nível 1"
    ],
    "type": "feitico",
    "img": "icons/magic/water/ice-crystal-white.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você reveste uma arma ou armadura com gelo, aumentando seu potencial destrutivo ou defensivo. Caso use em uma arma, ela causa 1d10 de dano congelante adicional; caso use em uma armadura, a criatura a utilizando recebe 4 de redução de dano adicional contra dano, exceto queimante e na alma. Para cada rodada após a primeira, você deve pagar 1PE para sustentar.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 1,
        "custoPE": 2,
        "tipo": "Auxiliar",
        "conjuracao": "Ação Bônus",
        "alcance": "Toque",
        "alvo": "Uma Arma ou Armadura",
        "area": "",
        "duracao": "Sustentada",
        "teste": "",
        "resistencia": "",
        "dados": "",
        "bonusDano": "1d10 congelante ou 4 de RD"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 1"
      }
    }
  },
  {
    "name": "Congelamento",
    "folderPath": [
      "Formação de Gelo",
      "Nível 2"
    ],
    "type": "feitico",
    "img": "icons/magic/water/barrier-ice-water-cube.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Diminuindo a temperatura ao máximo, você começa a congelar uma criatura próxima. A criatura alvo deve realizar um teste de resistência de Fortitude, recebendo 4d8 de dano congelante, ou apenas metade em um sucesso. Uma criatura que falhe no teste também recebe a condição Congelamento ou tem o nível dela aumentado em um passo. Esta habilidade pode elevar o Congelamento até o Congelamento Médio.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 2,
        "custoPE": 5,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "6 Metros",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "4d8",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 2"
      }
    }
  },
  {
    "name": "Estaca Explosiva",
    "folderPath": [
      "Formação de Gelo",
      "Nível 2"
    ],
    "type": "feitico",
    "img": "icons/magic/water/projectile-icecicle-glowing.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você forma uma grande estaca de gelo, a qual está pronta para explodir ao atingir um alvo. Realize um teste de ataque de técnica (Feitiçaria ou Pontaria) contra uma criatura e, caso acerte, causa 4d8 de dano perfurante. Após atingir o alvo, a estaca explode, forçando todas as criaturas dentro de 3 metros do alvo a realizarem um teste de resistência de Reflexos, recebendo 4d8 de dano congelante, ou apenas metade em um sucesso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 2,
        "custoPE": 5,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "18 Metros",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Reflexos",
        "dados": "4d8",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 2"
      }
    }
  },
  {
    "name": "Avalanche",
    "folderPath": [
      "Formação de Gelo",
      "Nível 3"
    ],
    "type": "feitico",
    "img": "icons/magic/water/barrier-ice-crystal-wall-faceted-blue.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você cobre sua mão com gelo e toca o chão, gerando vários espinhos grandes que são controlados para desabar sobre os alvos. O gelo vai até um ponto dentro do alcance, afetando uma área esférica de 4,5 metros a partir dele; toda criatura na área deve realizar um teste de resistência de Fortitude, recebendo um nível de congelamento em uma falha. Logo após, realizam um teste de resistência de Reflexos, recebendo 6d12 de dano congelante, ou apenas metade em um sucesso. Esta habilidade pode elevar o Congelamento até o Congelamento Médio.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 3,
        "custoPE": 8,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "24 Metros",
        "alvo": "",
        "area": "4,5 metros",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Reflexos",
        "dados": "6d12",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 3"
      }
    }
  },
  {
    "name": "Calmaria da Geada",
    "folderPath": [
      "Formação de Gelo",
      "Nível 4"
    ],
    "type": "feitico",
    "img": "icons/magic/water/wave-water-teal.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você canaliza uma nuvem de névoa congelante na mão, liberando-a a frente, o que materializa grandes colunas para congelar os inimigos. O gelo afeta uma área cônica de 12 metros, a partir de você, forçando toda criatura nela a realizar um teste de resistência de Fortitude: em uma falha, ela recebe dois níveis de congelamento; em um sucesso, recebe um; em um sucesso crítico, nenhum. Esta habilidade pode elevar o Congelamento até o Congelamento Total.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 4,
        "custoPE": 12,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "",
        "alvo": "",
        "area": "Cone de 9 Metros",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 4"
      }
    }
  },
  {
    "name": "Empalamento Devastador",
    "folderPath": [
      "Formação de Gelo",
      "Nível 4"
    ],
    "type": "feitico",
    "img": "icons/magic/water/strike-weapon-blade-ice-blue.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você manifesta uma estaca grande e afiada, disparando-a para empalar e devastar uma parte do seu alvo. Realize um teste de ataque de técnica (Feitiçaria e Pontaria) contra o alvo e, caso acerte, causa 10d10 de dano perfurante. Além disso, caso acerte, a criatura deve realizar um teste de resistência de Fortitude e, caso falhe, ela recebe uma Ferida Interna, de acordo com a tabela de consequências extremas.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 4,
        "custoPE": 12,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "18 Metros",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "10d10",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 4"
      }
    }
  },
  {
    "name": "Toque Congelante",
    "folderPath": [
      "Formação de Gelo",
      "Nível 4"
    ],
    "type": "feitico",
    "img": "icons/magic/water/orb-ice-glow.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Ao tocar diretamente em uma criatura e concentrando um grande nível de energia, você é capaz de congelar quase diretamente a criatura, visando ser impossível resistir. A criatura alvo deve realizar um teste de resistência de Fortitude: em um sucesso crítico, evita completamente; em um sucesso comum, recebe 2 níveis de congelamento e, em uma falha, recebe 3 níveis de congelamento. Esta habilidade pode elevar o Congelamento até o Congelamento Total.</p>",
      "fonte": "Feiticeiros & Maldições",
      "feitico": {
        "nivel": 4,
        "custoPE": 12,
        "tipo": "Ofensiva",
        "conjuracao": "Ação Comum",
        "alcance": "Toque",
        "alvo": "Uma Criatura",
        "area": "",
        "duracao": "Imediata",
        "teste": "Feitiçaria",
        "resistencia": "Fortitude",
        "dados": "",
        "bonusDano": "0"
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "feiticos",
        "fmCatalogVersion": 1,
        "tecnica": "Formação de Gelo",
        "subcategoria": "Nível 4"
      }
    }
  }
];

