export const FM_APTIDOES_CATALOG_VERSION = 1;

export const FM_APTIDOES_FOLDERS = [
  "Aptidões de Anatomia",
  "Aptidões de Aura",
  "Aptidões de Barreira",
  "Aptidões de Controle e Leitura",
  "Aptidões de Domínio",
  "Aptidões de Energia Reversa",
  "Aptidões Especiais"
];

export const FM_APTIDOES = [
  {
    "name": "Absorção Amaldiçoada",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-movement-swirling-green.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você consegue absorver vestígios de energia deixados por aqueles que manejam ela. Ao matar um usuário de energia, você recupera uma quantidade de energia igual ao seu bônus de maestria.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 0,
        "custo": "0",
        "requisitos": "Maestria em Feitiçaria",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Área de Domínio",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-giant-face-eyes.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você se versa em uma das áreas das aptidões amaldiçoadas, tornando-a em seu domínio. Os requisitos de níveis das aptidões amaldiçoadas do tipo selecionado diminuem em 1; ao obter esta aptidão, você pode pegar uma aptidão amaldiçoada deste tipo e o seu Nível de Aptidão naquela área também aumenta em 1.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 10,
        "custo": "0",
        "requisitos": "Nível 10, Especialista em Feitiçaria",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Armas Naturais",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/claws/claw-talons-glowing-orange.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Visando o combate, sua anatomia desenvolveu armas naturais. Sua arma natural tem um formato a sua escolha, e causa 1d6 de dano, de um dos 3 tipos físicos a sua escolha. Você pode utilizar tanto força quanto destreza com a sua arma natural. No nível 5 o dano aumenta para 1d8; no nível 10 aumenta para 1d10; no nível 15 aumenta para 2d6 e, no nível 20, aumenta para 2d8.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Armas Naturais Aprimoradas",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/claws/claw-talons-glowing-purple.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>Seu corpo evolui de maneira a aprimorar as suas armas naturais, colocando-as em um patamar superior. O dano de suas armas naturais se torna 1d10 no nível 5; 2d6 no nível 10; 2d10 no nível 15 e, no nível 20, 3d10. Além disso, você recebe um bônus de +1 em acerto e dano para ataques feitos com elas, o qual aumenta em +1 nos níveis 10, 15 e 20.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 5,
        "custo": "0",
        "requisitos": "Nível 5, Armas Naturais",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Composição Elemental",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-blob-pseudopods-green.webp",
    "sort": 5000,
    "system": {
      "descricao": "<p>Você é composto por um elemento, o qual dita muito sobre sua própria existência. Ao obter esta aptidão, você deve escolher um tipo de dano elemental para ser composto de: você recebe imunidade ao tipo de dano escolhido, além de poder o causar em ataques desarmados ou com arma.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 4,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Crescimento Corporal",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-face-teeth-purple.webp",
    "sort": 6000,
    "system": {
      "descricao": "<p>Seu corpo cresce e se desenvolve de maneira exacerbada. Ao obter esta aptidão, você aumenta uma categoria de tamanho. A partir do 10° nível você pode obter esta aptidão outra vez, até a categoria máxima de Enorme.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 5,
        "custo": "0",
        "requisitos": "Nível 5",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Desenvolvimento Físico",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/unholy/demon-fire-horned-winged-roar.webp",
    "sort": 7000,
    "system": {
      "descricao": "<p>Você alcança um desenvolvimento físico superior, com a própria energia o fortalecendo. Ao obter esta aptidão, um atributo físico (Força, Destreza ou Constituição) a sua escolha aumenta em 2. A cada 4 níveis você pode pegar esta aptidão novamente, mas aumentando o atributo apenas em 1, ao invés de 2.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 4,
        "custo": "0",
        "requisitos": "Nível 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Estoque Ampliado",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-movement-pseudopods-teal.webp",
    "sort": 8000,
    "system": {
      "descricao": "<p>Reconhecendo bem a essência da energia, devido a sua conexão com ela, você amplia o seu estoque. Seu máximo de energia amaldiçoada aumenta em um valor igual ao seu bônus de maestria.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 10,
        "custo": "0",
        "requisitos": "Nível 10",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Extração de Potencial",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-face-skull-green.webp",
    "sort": 9000,
    "system": {
      "descricao": "<p>Você foca em extrair o seu potencial de manipulação e controle da energia amaldiçoada, a qual o compõe. Caso não possua, você recebe maestria em Feitiçaria; caso possua, você se torna especialista em feitiçaria. Além disso, você recebe uma habilidade de técnica adicional, recebendo mais uma no 10° nível.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 5,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Fluxo Imparável",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-movement-splashing-red.webp",
    "sort": 10000,
    "system": {
      "descricao": "<p>A energia flui constantemente por todo o seu corpo, ao ponto da sua regeneração ser quase imparável. No começo do seu turno, você pode se curar com regeneração corporal como uma ação livre. Caso não o faça, você pode se curar como reação ao ter a sua vida reduzida.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 12,
        "custo": "0",
        "requisitos": "Nível 12, Regeneração Corporal",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Olhos Adicionais",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/eyes/slime-stalks-yellow-purple.webp",
    "sort": 11000,
    "system": {
      "descricao": "<p>Estranhamente, mais olhos começam a surgir em seu corpo, apurando o seu sentido da visão. Você recebe um bônus de +2 em Percepção, o qual aumenta em +1 nos níveis 5, 10, 15 e 20; além disso, sua atenção passa a ter como base 12 ao invés de 10.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 0,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Proteção Constante",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/invertebrates/spider-web-red.webp",
    "sort": 12000,
    "system": {
      "descricao": "<p>Você constantemente fortalece o seu corpo, gerando uma proteção constante a partir da energia que flui. No começo de toda rodada você recebe uma quantidade de pontos de vida temporários igual ao seu modificador de Constituição multiplicado pelo seu bônus de maestria.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 10,
        "custo": "0",
        "requisitos": "Nível 10, Constituição 20",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Regeneração Ampliada",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-movement-swirling-green.webp",
    "sort": 13000,
    "system": {
      "descricao": "<p>Sua capacidade regenerativa foi grandemente ampliada, desenvolvendo-se melhor. O seu dado de cura com a Regeneração Corporal aumenta para d8, e você passa a somar o dobro do seu modificador de constituição ou carisma. A quantidade máxima de pontos que podem ser gastos para se curar passa a ser igual ao dobro do seu bônus de maestria.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 10,
        "custo": "0",
        "requisitos": "Nível 10, Regeneração Corporal",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Regeneração Corporal",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-movement-swirling-blue.webp",
    "sort": 14000,
    "system": {
      "descricao": "<p>Utilizando de pura energia, você consegue regenerar o seu corpo a partir dela, curando-se de ferimentos. Você se torna capaz de gastar pontos de energia para se curar. Como uma ação comum, você pode gastar até 4 pontos de energia amaldiçoada para se curar; para cada 2 pontos gastos, você se cura em 1d6 + seu modificador de constituição ou carisma. Nos níveis 5, 10, 15 e 20, a cura aumenta em 1d6. Você não pode curar outras pessoas desta maneira, com a sua energia sendo usada exclusivamente para curá-lo.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Regeneração de Membros",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-movement-dripping-pseudopods-green.webp",
    "sort": 15000,
    "system": {
      "descricao": "<p>Você se torna capaz de regenerar os seus membros com energia, o que é feito com mais facilidade. Você pode, como uma ação comum, gastar 12 pontos de energia amaldiçoada para regenerar um membro perdido ou ferida interna.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 12,
        "custo": "12",
        "requisitos": "Nível 12, Regeneração Ampliada",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Regeneração Máxima",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/slimes/slime-movement-splash-green.webp",
    "sort": 16000,
    "system": {
      "descricao": "<p>Sua capacidade regenerativa é levada ao máximo, demonstrando como você domina a facilidade de se regenerar das maldições. O seu dado de cura com a Regeneração Corporal aumenta para d10. A quantidade máxima de pontos que podem ser gastos para se curar aumenta em 2.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 16,
        "custo": "0",
        "requisitos": "Nível 16, Regeneração Ampliada",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Revestimento",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/magic/defensive/armor-stone-skin.webp",
    "sort": 17000,
    "system": {
      "descricao": "<p>O seu corpo é coberto por um revestimento, efetivo contra danos físicos. Você recebe RD a danos físicos igual ao seu modificador de Constituição.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 4,
        "custo": "0",
        "requisitos": "Nível 4, Constituição 14",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Revestimento Evoluído",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/magic/earth/barrier-stone-brown-green.webp",
    "sort": 18000,
    "system": {
      "descricao": "<p>O revestimento do seu corpo evolui, aumentando suas capacidades defensivas. A RD a danos físicos conferido pela aptidão passam a ser o dobro do seu modificador de constituição.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 10,
        "custo": "0",
        "requisitos": "Nível 10, Constituição 20",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Superioridade Física",
    "folderName": "Aptidões de Anatomia",
    "type": "habilidade",
    "img": "icons/creatures/unholy/demon-horned-winged-laughing.webp",
    "sort": 19000,
    "system": {
      "descricao": "<p>Seu corpo é adaptado para ser naturalmente superior de maneira marcial, formando-se com base nas necessidades de combate. Você recebe um bônus de +2 em rolagens de Atletismo e Acrobacia, o qual aumenta em +1 nos níveis 10, 15 e 20; além disso, uma vez por rodada, você pode pagar 2PE para receber vantagem em uma rolagem de manobra, como agarrar ou empurrar.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Anatomia",
        "nivel": 5,
        "custo": "0",
        "requisitos": "Nível 5, Maestria em Luta",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Anatomia"
      }
    }
  },
  {
    "name": "Absorção Elemental",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/control/energy-stream-link-spiral-teal.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Uma aura pronta para absorver e armazenar elementos, podendo depois liberá-los em seus próprios ataques. Sempre que você receber dano elemental, você pode usar sua reação para absorver parte dele e guardar. Isso não reduz o dano, mas, na próxima vez em que você realizar um ataque você pode adicionar Xd6 de dano do mesmo tipo. X é igual ao seu Nível de Aptidão em Energia. Esta habilidade não é cumulativa.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "Aura Elemental",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Afinidade Ampliada",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/light/explosion-star-glow-yellow.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Sua aura é aprimorada para ter uma maior afinidade com um elemento específico. Ao obter essa habilidade, você escolhe um tipo de dano elemental. Sempre que você infligir dano desse tipo específico, você causa dano adicional igual a 1 + o seu Nível de Aptidão em Energia no total de dano.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Anuladora",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/light/beam-horizon-strike-yellow.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>A aura que o cobre obtém uma propriedade anuladora, capaz de protegê-lo de certos efeitos. Uma quantidade de vezes igual ao seu bônus de maestria, caso você fosse sofrer uma condição, você pode pagar uma quantidade variável de energia para ignorá-la, a depender do nível da condição. Anular uma condição fraca custa 2PE; anular uma média custa 4PE; uma forte custa 6PE e uma extrema custa 10PE. Você recupera esses usos em um descanso longo.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "2",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Chamativa",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/movement/abstract-ribbons-red-orange.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>Você cria uma aura ao seu redor que é chamativa, atraente e mágica, cativando a atenção facilmente. Toda criatura que não for seu aliado, e começar um turno dentro de 4,5 metros de você, precisa realizar um teste de resistência de vontade <em>(atributo principal da técnica)</em>. Em uma falha, ela fica enfeitiçada, podendo repetir o teste no próximo turno dela, deixando de estar enfeitiçada em um sucesso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "Carisma 16",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Controlada",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/unholy/silhouette-robe-evil-power.webp",
    "sort": 5000,
    "system": {
      "descricao": "<p>Você refinou seu controle sobre a aura, impedindo que ela se revele quando é inconveniente, ajudando-o a se ocultar e esconder sua presença. Você recebe um bônus de +3 em rolagens de Furtividade. Sempre que realizar uma rolagem de Furtividade, você pode gastar 1 ponto de energia amaldiçoada para receber vantagem, controlando ainda mais a sua aura.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 0,
        "custo": "1",
        "requisitos": "Destreza 16 e Maestria em Furtividade",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura de Contenção",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/control/debuff-chains-orb-movement-blue.webp",
    "sort": 6000,
    "system": {
      "descricao": "<p>Com foco em conter, tem-se uma aura mais pesada e densa. Sempre que for agarrar um alvo, você adiciona +3 na rolagem de Atletismo, assim como na rolagem para evitar que uma criatura escape. Uma criatura agarrada possui -3 em rolagens de Atletismo ou Acrobacia para tentar escapar. Duas vezes por cena, você pode também gastar 1 ponto de energia amaldiçoada para receber vantagem para agarrar ou impor desvantagem na criatura que tentar escapar.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "1",
        "requisitos": "Força ou Constituição 15",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura do Bastião",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/defensive/shield-barrier-glowing-blue.webp",
    "sort": 7000,
    "system": {
      "descricao": "<p>Sua aura é protetiva e auxilia seus aliados a não serem acertados. Todo aliado dentro de 3 metros de você recebe um bônus na Classe de Armadura igual a 1 + seu Nível de Aptidão em Energia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura do Comandante",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/holy/angel-winged-humanoid-blue.webp",
    "sort": 8000,
    "system": {
      "descricao": "<p>Refletindo uma personalidade ou presença forte, estar coberto pela sua aura parece ser uma grande motivação para aliados. Você pode, como uma ação bônus, expandir sua aura para cobrir todo aliado dentro de 4,5 metros, os quais podem recebem 1 + seu Nível de Aptidão em Energia em rolagens de dano e testes de perícia dentro do combate. Para cada turno que você manter a aura ativa, você paga 2 ponto de energia amaldiçoada.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 0,
        "custo": "1",
        "requisitos": "Carisma 16 e Nível 8",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Drenadora",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/control/energy-stream-link-large-orange.webp",
    "sort": 9000,
    "system": {
      "descricao": "<p>Uma aura vampiresca e capaz de drenar a partir da vida que é arrancada dos seus alvos. Sempre que matar um inimigo, você se cura em um valor igual a Xd8 + seu modificador de Constituição, onde X é igual ao seu Nível de Aptidão em Energia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "Nível 6, Nível de Aptidão em Energia 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Elemental",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/lightning/projectile-tendrils-teal.webp",
    "sort": 10000,
    "system": {
      "descricao": "<p>Você converte as propriedades da sua aura, imbuindo-a com um elemento, para assim ser capaz de alterar o tipo de dano causado pelos seus ataques com armas. Ao obter essa habilidade, você pode escolher um dos tipos de danos elementais para ser o novo tipo de dano dos seus ataques com armas. São eles: <em>ácido, chocante, congelante, de força, necrótico, psíquico, queimante, radiante e venenoso.</em> Dentro de combate, como uma ação livre, você pode desabilitar a aura elemental, retornando os seus ataques ao tipo de dano padrão.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Elemental Aprimorada",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/lightning/projectile-orb-blue.webp",
    "sort": 11000,
    "system": {
      "descricao": "<p>Ao já ter uma aura elemental, você se foca em melhorar tal propriedade, aumentando o dano causado e tornando-se resistente a ele. Ao obter essa habilidade, todo ataque feito com corpo-a-corpo ou com arma causa 1d6 de dano adicional do tipo escolhido previamente. Além disso, você se torna resistente ao tipo de dano escolhido. Com Nível de Aptidão em Energia 2, o dano adicional se torna 1d8; com nível de aptidão 3, se torna 1d10 e, com nível de aptidão 5, se torna 1d12.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "Aura Elemental",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Embaçada",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/defensive/illusion-evasion-echo-purple.webp",
    "sort": 12000,
    "system": {
      "descricao": "<p>Você desenvolve uma maneira de deixar a sua aura embaçada e borrada, criando uma chance de um ataque inimigo simplesmente errar. Como uma ação bônus, você pode pagar 2 pontos de energia amaldiçoada para ativar a aura embaçada, a qual dura uma cena. Enquanto a aura estiver ativa, todo ataque corpo-a-corpo ou a distância tem 10% de chance de falhar (1 em 1d10).</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "2",
        "requisitos": "Destreza 16",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Excessiva",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/defensive/barrier-shield-dome-pink.webp",
    "sort": 13000,
    "system": {
      "descricao": "<p>O fluxo de energia da sua aura se torna excessivo, liberando quantidades tão exageradas que consegue resistir a danos além dos físicos. No começo de toda rodada você pode escolher pagar 2 pontos de energia amaldiçoada. Caso o faça, sua redução de dano da Aura Reforçada passa a contar para todos os tipos de dano, exceto na alma.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "2",
        "requisitos": "Aura Reforçada, Constituição 16 e Nível 8",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Impenetrável",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/lightning/barrier-shield-crackling-orb-pink.webp",
    "sort": 14000,
    "system": {
      "descricao": "<p>Melhorando ainda mais o fluxo, você se torna capaz de transformar a sua aura em uma fortaleza impenetrável contra simples golpes físicos. Ao obter essa habilidade, você pode, como uma ação bônus, transformar a sua aura em impenetrável por 1 rodada, gastando 3 pontos de energia amaldiçoada. Enquanto sua aura estiver impenetrável, você recebe resistência a dano cortante, perfurante e de impacto.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 10,
        "custo": "2",
        "requisitos": "Aura Reforçada, Nível 10 e Nível de Aptidão em Energia 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Inofensiva",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/holy/yin-yang-balance-symbol.webp",
    "sort": 15000,
    "system": {
      "descricao": "<p>Sua aura amaldiçoada é moldada para aparentar ser muito menor e intensa do que realmente é, criando um aspecto inofensivo. Em um combate, a primeira criatura a te atacar deve fazer um teste de resistência de vontade (carisma). Se falhar, ela perde o ataque e não pode mais te atacar pelo resto da rodada. Esta habilidade só funciona uma vez por combate.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 0,
        "custo": "0",
        "requisitos": "Carisma 16",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Lacerante",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/unholy/strike-body-life-soul-green.webp",
    "sort": 16000,
    "system": {
      "descricao": "<p>Sua aura é afiada, causando danos apenas com o contato. Você pode ativar sua aura lacerante por 1 rodada, como ação livre. Enquanto ativa, uma criatura que iniciar seu turno dentro de 3 metros de você deve realizar um teste de resistência de Fortitude (atributo principal da técnica). Em uma falha, ela recebe Xd6 + seu modificador do atributo principal de dano de força, onde X é o seu Nível de Aptidão em Energia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Macabra",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/unholy/silhouette-evil-horned-giant.webp",
    "sort": 17000,
    "system": {
      "descricao": "<p>Maldita e vil, sua aura é macabra e perturba aqueles que estejam sendo afetados por ela. Toda criatura agressiva que começar um turno dentro de 1,5 metros de você precisa realizar um teste de resistência de vontade (atributo principal da técnica). Em uma falha, ela fica amedrontada, podendo repetir o teste no próximo turno dela, deixando de estar amedrontada em um sucesso. Como uma ação livre, você pode pagar 1 ponto de energia amaldiçoada para expandir esse alcance para 4,5 metros por 1 rodada.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "1",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Maciça",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/light/explosion-star-large-orange.webp",
    "sort": 18000,
    "system": {
      "descricao": "<p>Sua aura é tão densa que parece começar a tomar uma forma maciça, dificultando os inimigos a conseguirem realmente acertá-lo. Sua Classe de Armadura aumenta em um valor igual a 1 + seu Nível de Aptidão em Energia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "Constituição 16",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Movediça",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/movement/pinwheel-turning-blue.webp",
    "sort": 19000,
    "system": {
      "descricao": "<p>Você molda a sua aura para ser efetiva contra projéteis, deixando-os mais lentos em seu percurso, em um efeito movediço. Você recebe RD contra ataques a distância igual ao dobro do seu Nível de Aptidão em Energia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Redirecionada",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/unholy/projectile-smoke-trail-pink.webp",
    "sort": 20000,
    "system": {
      "descricao": "<p>Você descobre como imbuir parte da sua aura em um projétil ou arma de arremesso, conseguindo-o redirecionar caso erre. Você pode gastar 1 ponto de energia amaldiçoada para imbuir um projétil ou arma de arremesso antes de realizar um ataque: caso erre o ataque com um projétil ou arma imbuída, você pode realizar a rolagem de ataque outra vez, tendo como alvo uma criatura dentro de 4,5 metros do primeiro alvo, conforme o projétil ou arma é redirecionada. Além disso, a segunda rolagem de ataque recebe um bônus no acerto igual a 1 + seu Nível de Aptidão em Energia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "1",
        "requisitos": "Destreza 16",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Aura Reforçada",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/lightning/barrier-shield-orb-pink.webp",
    "sort": 21000,
    "system": {
      "descricao": "<p>Reforçando o fluxo da sua aura, você se torna capaz de pausar e anular uma parcela do dano que recebe fisicamente, tornando mais difícil de realmente atingir seu corpo. Você recebe redução contra dano físico - <em>cortes, perfurações e impactos</em> - igual ao dobro do seu Nível de Aptidão em Energia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Casulo de Energia",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/lightning/orb-ball-purple.webp",
    "sort": 22000,
    "system": {
      "descricao": "<p>Evoluindo ao limite o fluxo da aura, você consegue a deixar tão densa e maciça que se torna um casulo protetivo. Ao obter essa habilidade você pode, como uma ação comum, formar um casulo de energia por 1 rodada, gastando 6 pontos de energia amaldiçoada. Enquanto o casulo estiver ativo, você recebe imunidade a dano cortante, perfurante e de impacto.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 12,
        "custo": "4",
        "requisitos": "Aura Impenetrável, Nível 12 e Nível de Aptidão em Energia 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Concentrar Aura",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/light/orb-shadow-blue.webp",
    "sort": 23000,
    "system": {
      "descricao": "<p>Você consegue concentrar a sua aura em um único ponto, que é a sua arma, sacrificando as propriedades dela em troca de um segundo impacto. Como uma ação livre, você pode escolher por desabilitar uma certa quantidade de aptidões de aura por 1 rodada. Para cada aptidão desabilitada, após acertar um ataque com a arma, o alvo recebe 1d8 de dano de força. Você pode desabilitar até uma quantidade de aptidões igual a 1 + seu Nível de Aptidão em Energia.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Enganação Projetada",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/movement/trail-streak-zigzag-teal.webp",
    "sort": 24000,
    "system": {
      "descricao": "<p>Usando de agilidade e rapidez, você consegue projetar a sua aura antes de um ataque, criando uma ilusão de quando ele acontecerá. Quando atacar uma criatura, ela deve realizar um teste de resistência de astúcia (atributo principal da técnica), e caso falhe, você terá vantagem nesse ataque. Para cada ataque após o primeiro, no mesmo turno, você deve pagar 1 ponto de energia amaldiçoada para projetar a ilusão.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "1",
        "requisitos": "Destreza 18 e Nível 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Golpe com Aura",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/fire/flame-burning-fist-strike.webp",
    "sort": 25000,
    "system": {
      "descricao": "<p>Ao invés de simplesmente deixar a sua aura fluir com um aspecto específico, você coloca esse aspecto no seu próximo golpe, dificultando a resistência. Você pode gastar 1 ponto de energia para imbuir um golpe com uma aptidão de aura que force um teste de resistência: a criatura realiza o teste de resistência caso o ataque acerte, e a CD é aumentada em 4.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "1",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Transferência de Aura",
    "folderName": "Aptidões de Aura",
    "type": "habilidade",
    "img": "icons/magic/light/hand-sparks-glow-yellow.webp",
    "sort": 26000,
    "system": {
      "descricao": "<p>Utilizando da sua energia, você se torna capaz de transferir a sua aura para outra pessoa. Como uma ação bônus, você pode pagar 2 pontos de energia amaldiçoada e escolher uma criatura dentro de 9 metros para transferir uma aura. Você escolhe qual aura deseja transferir, e a pessoa recebe os efeitos dela durante uma rodada. Você pode manter a aura transferida por mais rodadas, pagando 1 ponto de energia para cada rodada após a primeira.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Aura",
        "nivel": 1,
        "custo": "2",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Aura"
      }
    }
  },
  {
    "name": "Barreira Imediata",
    "folderName": "Aptidões de Barreira",
    "type": "habilidade",
    "img": "icons/magic/water/barrier-ice-shield.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Levando ao limite suas técnicas de barreira, torna-se algo natural e imediato para você. <em>Erguer ou manipular barreiras se torna uma reação.</em> Você também pode erguer ou manipular barreiras como reação a um ataque, colocando-as entre você e o atacante, fazendo com que seja necessário quebrá-la, entretanto, isso reduz a resistência delas, as quais terão apenas metade da vida que teriam normalmente, e é muito custoso, podendo ser usada dessa maneira apenas uma quantidade de vezes igual ao seu bônus de maestria por descanso longo.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Barreira",
        "nivel": 10,
        "custo": "1",
        "requisitos": "Barreira Rápida, Nível 10 e Nível de Aptidão em Barreira 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Barreira"
      }
    }
  },
  {
    "name": "Barreira Rápida",
    "folderName": "Aptidões de Barreira",
    "type": "habilidade",
    "img": "icons/magic/water/strike-ice-blades.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Com treino e repetição, você se torna capaz de erguer barreiras de maneira ainda mais ágil. <em>Erguer ou manipular barreiras se torna uma ação bônus.</em></p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Barreira",
        "nivel": 6,
        "custo": "1",
        "requisitos": "Técnicas de Barreira, Nível 6 e Nível de Aptidão em Barreira 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Barreira"
      }
    }
  },
  {
    "name": "Cortina",
    "folderName": "Aptidões de Barreira",
    "type": "habilidade",
    "img": "icons/magic/water/wave-water-explosion.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>A cortina é uma técnica de barreira comum, sendo um grande campo de força negro que isola uma área específica, impossibilitando pessoas de fora de ver seu interior. Seu funcionamento básico é de ocultamento, mas podem ser postas condições que expandem sua utilidade. Ao criar uma cortina, <em>você gasta 1 ponto de energia para cada 4,5 metros que a área dela irá cobrir, e não há um custo para mantê-la</em>. Você também pode colocar condições em uma cortina, ao cria-la, de acordo com as regras sobre cortinas.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Barreira",
        "nivel": 1,
        "custo": "1",
        "requisitos": "Técnicas de Barreira",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Barreira"
      }
    }
  },
  {
    "name": "Paredes Resistentes",
    "folderName": "Aptidões de Barreira",
    "type": "habilidade",
    "img": "icons/magic/water/barrier-ice-wall-snow.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>As paredes que você confecciona se tornam mais resistentes. A vida base de cada parede passa a ser 20. Você também pode, ao criar uma barreira, gastar uma quantidade de pontos de energia amaldiçoada adicionais igual ou menor a seu modificador de maestria, aumentando a vida de cada parede em 5 para cada ponto gasto.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Barreira",
        "nivel": 4,
        "custo": "1",
        "requisitos": "Nível 4, Técnicas de Barreira e Nível de Aptidão em Barreira 1",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Barreira"
      }
    }
  },
  {
    "name": "Técnicas de Barreira",
    "folderName": "Aptidões de Barreira",
    "type": "habilidade",
    "img": "icons/magic/water/barrier-ice-crystal-wall-faceted-light.webp",
    "sort": 5000,
    "system": {
      "descricao": "<p>Você se torna capaz de erguer e manipular barreiras, as quais podem ser usadas para defender o usuário ou prender oponentes. <em>Você pode criar, em uma única ação, até 6 paredes ao seu redor, com cada parede custando 1 ponto de energia amaldiçoada.</em> Cada parede erguida tem 1,5 metros de tamanho, e vida igual a 10 + 5 multiplicado pelo seu nível de aptidão em Barreiras. Podem servir tanto como obstáculo como uma maneira de prender seus inimigos. Criar uma barreira é uma ação comum, assim como você pode as manipular e mover usando outra ação comum.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Barreira",
        "nivel": 1,
        "custo": "1",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Barreira"
      }
    }
  },
  {
    "name": "Canalização Avançada",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/skills/melee/weapons-crossed-swords-teal.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você aperfeiçoa a prática de canalizar energia em golpes, conseguindo a realizar mais rapidamente e com mais poder. Canalizar energia em uma arma também pode ser feito como uma reação ao realizar um ataque, e o bônus passa de 1d8 para 1d10. A habilidade continua funcionando apenas por um ataque e não é consumida em um erro.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "8",
        "requisitos": "Canalizar em Golpe, Força ou Destreza 18, Nível 8 e Nível de Aptidão em Controle e Leitura 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Canalização Máxima",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/skills/melee/weapons-crossed-swords-yellow.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Você alcança o ápice da técnica de canalizar energia nos seus golpes, levando-a para um nível superior. O bônus por ponto gasto aumenta de 1d10 para 1d12. A habilidade passa a funcionar em dois ataques ao invés de um.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 16,
        "custo": "1",
        "requisitos": "Canalização Avançada, Força ou Destreza 20, Nível 16 e Nível de Aptidão em Controle e Leitura 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Canalizar em Golpe",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/skills/melee/weapons-crossed-swords-black-gray.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Você se torna capaz de concentrar sua energia amaldiçoada em suas armas e golpes, assim potencializando ainda mais a capacidade destrutiva em troca de um gasto de energia. Como uma ação bônus, você pode gastar uma quantidade de pontos de energia amaldiçoada igual a seu nível de aptidão em Controle e Leitura para adicionar dano: <em>para cada ponto gasto, seu próximo ataque causa 1d8 de dano adicional</em>. Essa habilidade funciona apenas por um ataque. Errar um ataque não consome esse uso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "1",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Cobertura Avançada",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/earth/construct-stone.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>Você desenvolve a sua capacidade de revestir e cobrir seu corpo com energia amaldiçoada, resistindo a golpes. Ao usar sua reação para cobrir-se, cada ponto gasto passa a reduzir o dano em 2d4+3.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "10",
        "requisitos": "Cobrir-se, Nível 10 e Nível de Aptidão em Controle e Leitura 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Cobrir-se",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/defensive/armor-stone-skin.webp",
    "sort": 5000,
    "system": {
      "descricao": "<p>Você se torna capaz de concentrar sua energia amaldiçoada em seu corpo, assim amenizando os impactos em troca de um consumo imediato de energia. Como uma reação, ao receber dano, você pode gastar uma quantidade de pontos de energia amaldiçoada igual a 2 + o dobro do seu nível de aptidão em Controle e Leitura para reduzir o dano: <em>para cada ponto gasto, você diminui o dano recebido em 2d2+2.</em></p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "2",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Estímulo Muscular",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/control/buff-strength-muscle-damage.webp",
    "sort": 6000,
    "system": {
      "descricao": "<p>Você domina o seu controle de maneira eficiente, conseguindo utilizar da sua energia para estimular o seu corpo a agir de maneira melhorada, potencializando seus músculos. Ao se mover você pode usar sua reação para gastar 1 ponto de energia amaldiçoada para se mover uma distância adicional igual a metade do seu movimento. Você também pode gastar 1 ponto de energia ao pular, para duplicar sua altura de pulo.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "1",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Estímulo Muscular Avançado",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/control/buff-strength-muscle-damage-orange.webp",
    "sort": 7000,
    "system": {
      "descricao": "<p>Seu controle para imbuir os músculos com energia torna-se ainda mais apurado. Ao realizar um teste de Atletismo ou Acrobacia você pode pagar 2 pontos de energia amaldiçoada para, como uma reação, rolar novamente o teste, ficando com o melhor resultado.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 4,
        "custo": "2",
        "requisitos": "Estímulo Muscular, Força ou Destreza 18, Nível 4 e Nível de Aptidão em Controle e Leitura 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Expandir Aura",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/fire/orb-lightning-sun.webp",
    "sort": 8000,
    "system": {
      "descricao": "<p>Você se torna capaz de controlar bem a sua energia, incluindo a que compõe sua aura, podendo assim a expandir com uma descarga de energia. No seu turno, como uma ação livre, você pode gastar 2 pontos de energia amaldiçoada para expandir a sua aura, dobrando o seu alcance por uma rodada. Para cada rodada após a primeira, você deve pagar mais 1 ponto de energia para a manter expandida.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 6,
        "custo": "2",
        "requisitos": "Nível 6",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Identificação de Itens",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/skills/trades/academics-investigation-study-blue.webp",
    "sort": 9000,
    "system": {
      "descricao": "<p>Sua leitura de energia fica apurada o suficiente para conseguir identificar e desvendar itens amaldiçoados, descobrindo suas propriedades. Ao ver um item amaldiçoado de qualquer tipo, você pode realizar uma rolagem de Feitiçaria para tentar o compreender e, caso suceda, você consegue descobrir o nome do item e as suas propriedades. A CD do teste depende do grau do item, sendo igual a 15 + 3 para cada grau. Dentro de combate, realizar esse teste é uma ação bônus.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Leitura de Aura",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/perception/orb-crystal-ball-scrying.webp",
    "sort": 10000,
    "system": {
      "descricao": "<p>Compreendendo bem a energia e as propriedades que ela pode assumir em auras, você consegue ler auras e identificar os seus efeitos. Ao ver uma criatura que possua uma aura amaldiçoada, você pode realizar uma rolagem de Feitiçaria para tentar a ler e descobrir suas propriedades, cuja CD é igual a 15 + 3 para cada grau da criatura. Caso suceda no teste, você descobre quais as propriedades da aura da criatura.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Leitura Rápida de Energia",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/light/orbs-smoke-pink.webp",
    "sort": 11000,
    "system": {
      "descricao": "<p>Treinando e se adaptando a ler rapidamente auras, você adquire uma maior capacidade de prever a próxima ação dos usuários de energia amaldiçoada, o que te favorece não só ofensivamente, mas defensivamente também. Você não pode receber desvantagem ou prejuízos para acertar inimigos por causa de aura, e inimigos não recebem bônus de Classe de Armadura por aura contra você. Sua classe de armadura aumenta em um valor igual ao seu nível de aptidão em Controle e Leitura.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Projeção Avançada",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/fire/beam-jet-stream-trails-orange.webp",
    "sort": 12000,
    "system": {
      "descricao": "<p>Dominando a prática de concentrar e disparar projéteis a partir da sua energia, você eleva sua projeção. O dano causado por ponto gasto aumenta para 2d6, além de passar a somar o dobro do seu modificador ao total. Caso use como um ataque, você recebe +3 para acertar ou, caso force um teste de resistência, a dificuldade aumenta em 2.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 8,
        "custo": "1",
        "requisitos": "Projetar Energia, Destreza ou Inteligência 18, Nível 8 e Nível de Aptidão em Controle e Leitura 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Projeção Dividida",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/fire/explosion-embers-orange.webp",
    "sort": 13000,
    "system": {
      "descricao": "<p>Você descobre uma nova maneira de disparar sua energia projeta, dividindo-a em dois projéteis no meio do caminho. Ao realizar um disparo de energia contra um alvo, você pode pagar até metade da energia gasta no disparo para o duplicar como parte da mesma ação. A duplicata do projétil deve ter como alvo uma criatura dentro de 4,5 metros do alvo original e causa dano igual à quantidade de energia gasta nele, seguindo o cálculo padrão.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 12,
        "custo": "1",
        "requisitos": "Projeção Avançada, Nível 12 e Nível de Aptidão em Controle e Leitura 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Projeção Máxima",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/fire/projectile-wave-arrow.webp",
    "sort": 14000,
    "system": {
      "descricao": "<p>Você leva a prática de disparar energia projetada até o ápice dela, criando projéteis devastadores. O dano por ponto aumenta de 2d6 para 3d8. O bônus para acertar se torna +6 e o aumento na dificuldade do teste de resistência 4.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 16,
        "custo": "1",
        "requisitos": "Projeção Avançada, Destreza ou Inteligência 20, Nível 16 e Nível de Aptidão em Controle e Leitura 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Projetar Energia",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/fire/beam-jet-stream-embers.webp",
    "sort": 15000,
    "system": {
      "descricao": "<p>Ao invés de canalizar energia em um objeto, você a concentra e libera como um projétil explosivo. Você pode gastar uma quantidade de pontos de energia amaldiçoada igual 1 + seu nível de aptidão em Controle e Leitura e o transformar em um projétil, o qual você dispara como uma ação comum. Para cada ponto gasto, o projétil causará 1d10 de dano de força, somando o modificador do seu maior atributo no total. O alcance do projétil é igual a 9 metros + 1,5 metros x bônus de maestria. Você pode escolher tanto fazer uma rolagem de ataque, utilizando a perícia de Feitiçaria, ou forçar o alvo a realizar um teste de resistência de reflexos <em>(maior atributo)</em>.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "1",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Punho Divergente",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/earth/strike-fist-stone-gray.webp",
    "sort": 16000,
    "system": {
      "descricao": "<p>Uma técnica peculiar de controle do fluxo da energia. O impacto de seus golpes diverge e se divide em dois momentos: ao acertar o golpe, e após um curto período de tempo. Ao acertar um ataque desarmado, você pode escolher causar apenas metade do dano, e guardar a outra metade para ser causada no turno seguinte. Caso escolha que o resto do dano seja causado no turno seguinte, a criatura que recebeu o ataque deve realizar um teste de resistência de Fortitude (maior atributo físico) e, caso falhe, o dano será causado como se o inimigo tivesse vulnerabilidade. Além disso, conforme maior a potência do primeiro golpe, mais difícil é se preparar para resistir ao segundo impacto: para cada 5 pontos de dano na primeira metade do dano, a CD aumenta em 1.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Rastreio Avançado",
    "folderName": "Aptidões de Controle e Leitura",
    "type": "habilidade",
    "img": "icons/magic/light/orbs-hand-gray.webp",
    "sort": 17000,
    "system": {
      "descricao": "<p>Você se especializa em entender e rastrear qualquer vestígio de energia amaldiçoada. Em uma cena onde tenha sido usada energia amaldiçoada, você é capaz de o discernir de imediato se já conhecer a pessoa de quem ele originou. Caso não, você pode rolar Investigação ou Percepção com objetivo de entender. Em caso de sucesso, você consegue perceber as características daquela energia e seguir o rastro perfeitamente.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Controle e Leitura",
        "nivel": 1,
        "custo": "0",
        "requisitos": "",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Controle e Leitura"
      }
    }
  },
  {
    "name": "Acerto Garantido",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/unholy/projectiles-binary-pink.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Você alcança o ápice das técnicas de domínio, conseguindo usar o acerto garantido, que define uma expansão de domínio letal. Ao obter esta aptidão, você pode adicionar o efeito Acerto Garantido em sua expansão de domínio, o qual não conta para o máximo, imbuindo sua técnica nas barreiras criadas. O funcionamento do Acerto Garantido deve ser elaborado de acordo com o guia de criação de domínios. Adicionar acerto garantido em uma expansão completa aumenta o seu custo em 5 pontos de energia amaldiçoada.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 14,
        "custo": "25",
        "requisitos": "Nível 14, Maestria em Feitiçaria, Expansão de Domínio Completa e Nível de Aptidão em Domínio 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Amplificação de Domínio",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/unholy/orb-hands-pink.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Uma técnica que amplifica a aura de energia amaldiçoada para obter certas características de domínio. Nessa aplicação, deixa-se a aura amplificada vazia, com chance de neutralizar habilidades de técnica. Você pode, como uma ação bônus, pagar 4 pontos de energia amaldiçoada para amplificar o seu domínio, recebendo assim 50% de chance de ignorar ataques feitos de energia e habilidades de técnica dos inimigos (1 ou 2 em 1d4). Enquanto estiver com o domínio amplificado, você não pode usar habilidades de técnica. Para cada rodada após a primeira, você deve pagar mais 4 pontos de energia para manter a amplificação.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 8,
        "custo": "4",
        "requisitos": "Nível 8 e Nível de Aptidão em Domínio 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Anular Técnica",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/unholy/hand-grasping-green.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Você aprimora o seu domínio simples para ser efetivo não só contra expansões de domínio, mas contra técnicas amaldiçoadas no geral, conseguindo anulá-las se usado rapidamente. Quando você for alvo ou submetido a uma habilidade de técnica, você pode usar sua reação para tentar anulá-la; você só pode tentar anular uma habilidade de técnica que seja de um nível que você tem acesso a. Você gasta uma quantidade de energia amaldiçoada igual à que foi usada para conjurar a habilidade, e realiza um teste Feitiçaria contra a Feitiçaria de quem usou a habilidade de técnica. Caso a habilidade que você deseja anular seja em área, nenhuma das criaturas submetidas sofrem o efeito, desde que você a anule. Por ser algo cansativo e complexo, você pode usar essa habilidade uma quantidade de vezes igual ao seu modificador de maestria, por descanso longo.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 8,
        "custo": "0",
        "requisitos": "Domínio Simples, Nível 8 e Nível de Aptidão em Domínio 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Dominância Absoluta",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/skills/melee/maneuver-sword-katana-yellow.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>Seu domínio simples é levado ao limite, no quesito ofensivo, dando-lhe dominância absoluta em batalha. Como uma ação bônus, você pode convocar seu domínio simples, com um espaço de 9m por 9m, custando 6 de energia amaldiçoada por rodada para ser mantido. Além disso, sempre que uma criatura realizar um ataque dentro do seu espaço, em um alvo aliado ou em você, você pode realizar um ataque de oportunidade como ação livre.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 12,
        "custo": "6",
        "requisitos": "Espaço em Batalha, Nível 12 e Nível de Aptidão em Domínio 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Domínio Simples",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/control/silhouette-hold-change-green.webp",
    "sort": 5000,
    "system": {
      "descricao": "<p>O domínio simples é uma das principais técnicas anti-domínio, criando uma barreira protetiva. Como uma ação bônus, você paga 4PE para erguer um domínio simples: uma barreira com área esférica de 1,5m é formada ao seu redor, acompanhando-o caso se mova; enquanto estiver com o domínio simples ativo, o usuário não sofre os efeitos de uma expansão de domínio, nem o acerto garantido. Para cada rodada após a primeira, é necessário pagar 3PE para sustentar o domínio simples. Você também pode erguer um domínio simples como reação a uma expansão de domínio, mas o seu custo é aumentado em 3PE.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 4,
        "custo": "4",
        "requisitos": "Nível 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Emoção da Pétala Decadente",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/nature/leaf-glow-orange-purple.webp",
    "sort": 6000,
    "system": {
      "descricao": "<p>Uma arte secreta transmitida entre as tr&ecirc;s grandes fam&iacute;lias jujutsu como uma contramedida para expans&otilde;es de dom&iacute;nio. Ao inv&eacute;s de levantar um dom&iacute;nio, o usu&aacute;rio se cobre com energia e contra-ataca quando um ataque de acerto garantido fosse o acertar. Como uma rea&ccedil;&atilde;o a uma expans&atilde;o de dom&iacute;nio ser ativada ou como uma a&ccedil;&atilde;o b&ocirc;nus, voc&ecirc; pode usar emo&ccedil;&atilde;o da p&eacute;tala decadente, cobrindo-se de energia. Enquanto estiver com a aptid&atilde;o ativa, sempre que voc&ecirc; fosse receber um ataque provindo do acerto garantido de uma expans&atilde;o de dom&iacute;nio, voc&ecirc; pode gastar uma quantidade de pontos de energia igual ao dobro do n&iacute;vel da habilidade (em um inimigo, pode-se considerar que suas a&ccedil;&otilde;es s&atilde;o de um n&iacute;vel igual ao seu grau) para anular o ataque contra voc&ecirc;. Utilizando de um fluxo e libera&ccedil;&atilde;o constante de energia, ela requer foco: a aptid&atilde;o dura at&eacute; voc&ecirc; perder a sua concentra&ccedil;&atilde;o ou a sua energia amaldi&ccedil;oada acabar.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 1,
        "custo": "0",
        "requisitos": "Nível 6, Cobrir-se e Nível de Aptidão em Controle e Leitura 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Espaço em Batalha",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/skills/melee/maneuver-greatsword-yellow.webp",
    "sort": 7000,
    "system": {
      "descricao": "<p>Seu domínio simples assume um novo propósito, podendo o convocar como uma maneira de expandir seu espaço em batalha. Ao usar seu domínio simples dessa maneira, ele custa 4 para ser mantido, por rodada em batalha, e o convocar é uma ação bônus. Seu espaço passa de 1,5m por 1,5m para 6m por 6m, sendo esse tamanho considerado para ataques de oportunidade, os quais você também pode realizar caso uma criatura entre em seu espaço.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 8,
        "custo": "4",
        "requisitos": "Domínio Simples, Nível 8 e Nível de Aptidão em Domínio 1",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Expansão de Domínio Completa",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/unholy/orb-glowing-yellow-purple.webp",
    "sort": 8000,
    "system": {
      "descricao": "<p>Aperfeiçoando na técnica da expansão, alcança-se um patamar superior, conseguindo fechar uma barreira e prender seus alvos dentro dela. Como uma ação comum, você pode pagar 20PE para expandir seu domínio completo, o qual cria uma área esférica de 9 metros. Enquanto estiver com a expansão ativa, certos efeitos são aplicados, os quais devem ser montados de acordo com o Guia de Criação de Expansões de Domínio. Uma expansão de domínio completa dura, por padrão, uma quantidade de rodadas igual a 3 + seu nível de aptidão em domínio.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 10,
        "custo": "20",
        "requisitos": "Nível 10, Técnicas de Barreira, Expansão de Domínio Incompleta e Nível de Aptidão em Domínio 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Expansão de Domínio Incompleta",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/unholy/orb-beam-pink.webp",
    "sort": 9000,
    "system": {
      "descricao": "<p>Iniciando-se na parte mais complexa do Jujutsu, você passa a ser capaz de expandir o seu domínio interno, embora ainda de maneira incompleta. Como uma ação comum, você pode pagar 15PE para expandir seu domínio incompleto, o qual se espalha por uma área igual a 4,5 metros multiplicado pelo seu bônus de maestria, adaptando-se também ao ambiente ao seu redor. Enquanto estiver com a expansão ativa, certos efeitos são aplicados, os quais devem ser montados de acordo com o Guia de Criação de Expansões de Domínio. Uma expansão de domínio incompleta dura, por padrão, uma quantidade de rodadas igual a 1 + seu nível de aptidão em domínio.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 8,
        "custo": "15",
        "requisitos": "Nível 8, Aptidão em Domínio 2",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Expansão de Domínio sem Barreiras",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/unholy/hands-praying-fire-green.webp",
    "sort": 10000,
    "system": {
      "descricao": "<p>Assim como conter água sem um recipiente ou desenhar no céu sem uma tela, existe uma forma de expandir um domínio que exige um controle sobre a energia amaldiçoada extremo, sendo possível apenas para os mais talentosos e habilidosos. A expansão sem barreiras possui os mesmos efeitos e custo de uma expansão completa com acerto garantido, mas não levanta barreiras, tendo um alcance superior para o acerto garantido em troca, o qual pode até mesmo superar as barreiras de outras expansões de domínio, atacando-os por fora.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 18,
        "custo": "25",
        "requisitos": "Nível 18, Especialização em Feitiçaria, Acerto Garantido e Nível de Aptidão em Domínio 5",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Modificação Completa",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/unholy/hands-circle-light-green.webp",
    "sort": 11000,
    "system": {
      "descricao": "<p style=\"text-align: left;\">Seu controle sobre os dom&iacute;nios &eacute; t&atilde;o refinado que, mesmo no imediato momento de expandir seu dom&iacute;nio, voc&ecirc; consegue o modificar. Ao utilizar uma expans&atilde;o de dom&iacute;nio, voc&ecirc; pode aplicar as seguintes modifica&ccedil;&otilde;es:</p>\n<ul>\n<li style=\"text-align: left;\"><strong>Invers&atilde;o de Resist&ecirc;ncia.</strong> Voc&ecirc; inverte a resist&ecirc;ncia interna e externa dasua expans&atilde;o de dom&iacute;nio, conseguindo lidar melhor com ataques quevenham de fora. Ao utilizar essa modifica&ccedil;&atilde;o, troque os pontos de vidado lado interno pelos do lado externo.</li>\n<li style=\"text-align: left;\"><strong>Mudan&ccedil;a de Tamanho.</strong> Voc&ecirc; muda e controla o tamanho da expans&atilde;o.Voc&ecirc; pode expandir ou encolher o espa&ccedil;o da expans&atilde;o: para cada 1,5mque encolher a expans&atilde;o, ela recebe 20 pontos de vida adicionais em suaresist&ecirc;ncia interna e externa; para cada 1,5m que expandir, a resist&ecirc;nciainterna e externa diminui em 20 pontos de vida. Uma expans&atilde;o n&atilde;o podeser encolhida para menos de 3 metros e nem expandida para mais que otriplo do tamanho comum. Ambas as mudan&ccedil;as de tamanho s&atilde;oconsideradas na &aacute;rea da expans&atilde;o, a qual por padr&atilde;o &eacute; de 9 metros.</li>\n</ul>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 0,
        "custo": "0",
        "requisitos": "Treinamento em Domínios Completo",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Técnica Esotérica: Cesta Oca de Vime",
    "folderName": "Aptidões de Domínio",
    "type": "habilidade",
    "img": "icons/magic/unholy/orb-contained-pink.webp",
    "sort": 12000,
    "system": {
      "descricao": "<p>Uma antiga t&eacute;cnica utilizada contra dom&iacute;nios, antes mesmo do dom&iacute;nio simples ser criado. Como rea&ccedil;&atilde;o a uma expans&atilde;o de dom&iacute;nio ser utilizada, voc&ecirc; pode pagar 6 pontos de energia amaldi&ccedil;oada para usar a cesta oca de vime, realizando um sinal de m&atilde;o que cria um escudo com forma semelhante a uma cesta ao redor do usu&aacute;rio. Enquanto estiver com a cesta oca de vime ativa, voc&ecirc; n&atilde;o &eacute; afetado pelo efeito de acerto garantido de uma expans&atilde;o, mas n&atilde;o evita outros efeitos do dom&iacute;nio e n&atilde;o funciona contra dom&iacute;nios incompletos. Para cada rodada que a cesta oca de vime for mantida, voc&ecirc; deve pagar mais 2PE para sustentar; a cesta oca de vime pode ser destru&iacute;da, seguindo as mesmas regras do dom&iacute;nio simples.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Domínio",
        "nivel": 4,
        "custo": "6",
        "requisitos": "Nível 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Domínio"
      }
    }
  },
  {
    "name": "Canalizar Energia Reversa",
    "folderName": "Aptidões de Energia Reversa",
    "type": "habilidade",
    "img": "icons/magic/lightning/fist-unarmed-strike-blue.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>A energia reversa é nociva a maldições, então você se torna capaz de canalizá-la e usá-la de maneira agressiva. Como uma ação bônus, você pode gastar uma quantidade de pontos de energia reversa igual ao seu bônus de maestria para adicionar dano de energia reversa a um ataque: <em>para cada ponto gasto, você causa 2d6 de dano de energia reversa adicional.</em> Essa habilidade funciona apenas por um ataque, o qual deve ser contra uma maldição. Errar um ataque não consome esse uso.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Energia Reversa",
        "nivel": 8,
        "custo": "2",
        "requisitos": "Canalizar em Golpe, Energia Reversa",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Energia Reversa"
      }
    }
  },
  {
    "name": "Cura Amplificada",
    "folderName": "Aptidões de Energia Reversa",
    "type": "habilidade",
    "img": "icons/magic/life/cross-explosion-burst-green.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Sua capacidade de cura é amplificada quando utilizando energia reversa. O dado da cura se torna d8 e você passa a somar o dobro do seu modificador de carisma ou sabedoria. A quantidade máxima de pontos que podem ser gastos passa a ser igual a 1 + seu nível de aptidão.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Energia Reversa",
        "nivel": 12,
        "custo": "2",
        "requisitos": "Energia Reversa, Nível 12 e Nível de Aptidão em Energia Reversa 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Energia Reversa"
      }
    }
  },
  {
    "name": "Cura em Grupo",
    "folderName": "Aptidões de Energia Reversa",
    "type": "habilidade",
    "img": "icons/magic/life/heart-area-circle-red-green.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>Ao invés de curar apenas uma criatura, você se torna capaz de projetar a energia reversa entre diferentes componentes de um grupo. Ao invés de decidir um alvo, você pode optar por realizar a rolagem de cura e dividir o total do resultado entre todas as criaturas dentro de um alcance igual a 6 + seu modificador de Carisma ou Sabedoria em metros. A quantidade máxima de pontos que podem ser gastos aumenta em 2.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Energia Reversa",
        "nivel": 11,
        "custo": "2",
        "requisitos": "Liberação de Energia Reversa",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Energia Reversa"
      }
    }
  },
  {
    "name": "Energia Reversa",
    "folderName": "Aptidões de Energia Reversa",
    "type": "habilidade",
    "img": "icons/magic/life/cross-flared-green.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>Você se torna capaz de produzir energia reversa, multiplicando a energia amaldiçoada com ela mesma, transformando o negativo em positivo. Sua principal capacidade é a de se curar. Você libera acesso às aptidões desta categoria, as quais usam pontos de energia reversa, com um ponto de energia reversa sendo equivalente a dois pontos de energia amaldiçoada. Você também já consegue usar a capacidade básica dela, que é curar: para cada ponto de energia reversa gasto, você se cura em 2d6 + seu modificador de carisma ou sabedoria. Nos níveis 10, 15 e 20, a cura aumenta em 1d6. Você pode gastar um máximo de pontos de energia reversa por vez igual a 1 + metade do seu nível de aptidão. Curar-se dentro de combate é uma ação comum e você não pode usar essa habilidade para curar outras criaturas.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Energia Reversa",
        "nivel": 8,
        "custo": "2",
        "requisitos": "Nível 8, Maestria em Feitiçaria e Nível de Aptidão em Controle e Leitura 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Energia Reversa"
      }
    }
  },
  {
    "name": "Fluxo Constante",
    "folderName": "Aptidões de Energia Reversa",
    "type": "habilidade",
    "img": "icons/magic/life/heart-cross-strong-green.webp",
    "sort": 5000,
    "system": {
      "descricao": "<p style=\"\">Tendo uma maior dominância sobre a energia reversa, você estabelece um fluxo contínuo dela no seu corpo, preservando-o e restaurando-o assim que sua integridade é reduzida. Assim sendo, você pode manter uma cura contínua: <em>no começo do seu turno, você pode se curar com energia reversa seguindo as mesmas regras da cura básica, porém como uma ação livre. Caso não o faça, você pode se curar como reação ao ter sua vida reduzida.</em></p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Energia Reversa",
        "nivel": 12,
        "custo": "2",
        "requisitos": "Energia Reversa, Nível 12 e Nível de Aptidão em Energia Reversa 3",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Energia Reversa"
      }
    }
  },
  {
    "name": "Liberação de Energia Reversa",
    "folderName": "Aptidões de Energia Reversa",
    "type": "habilidade",
    "img": "icons/magic/life/cross-area-circle-green-white.webp",
    "sort": 6000,
    "system": {
      "descricao": "<p>Além de ser capaz de se curar com a energia reversa, você aprende como a liberar para curar outras pessoas, o que é mais complexo e difícil. Você se torna capaz de curar outras criaturas utilizando a habilidade Energia Reversa, desde que estejam dentro de 9 metros de você. Caso seja um suporte, você também pode usar a cura da habilidade Suporte em Combate a distância, seguindo o mesmo limite.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Energia Reversa",
        "nivel": 10,
        "custo": "2",
        "requisitos": "Nível 10 e Energia Reversa",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Energia Reversa"
      }
    }
  },
  {
    "name": "Regeneração Aprimorada",
    "folderName": "Aptidões de Energia Reversa",
    "type": "habilidade",
    "img": "icons/magic/life/heart-shadow-red.webp",
    "sort": 7000,
    "system": {
      "descricao": "<p>Aumentando seu domínio sobre a energia reversa, você se torna mais capaz de se regenerar com ela. Você pode, como uma ação comum, regenerar membros perdidos ou curar feridas internas, gastando 8 pontos de energia reversa por membro.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Energia Reversa",
        "nivel": 15,
        "custo": "20",
        "requisitos": "Nível 15, Cura Amplificada e Nível de Aptidão em Energia Reversa 4",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões de Energia Reversa"
      }
    }
  },
  {
    "name": "Abençoado pela Faíscas Negras",
    "folderName": "Aptidões Especiais",
    "type": "habilidade",
    "img": "icons/magic/lightning/fist-unarmed-strike-blue-green.webp",
    "sort": 1000,
    "system": {
      "descricao": "<p>Embora o raio negro seja algo incontrolável, você se foca tanto nisso que parece começar a conseguir cativar as faíscas negras, as quais te abençoam. Você passa a usar o kokusen, por padrão, em um 19 e em um 20 no dado. Ao atingir um Raio Negro, caso uma criatura falhe no TR de Fortitude, ela passa a perder uma ação e a sua reação. Além disso, após acertar um kokusen, você recebe um bônus de +3 em rolagens de ataque pelo resto da cena.]</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Especial",
        "nivel": 15,
        "custo": "0",
        "requisitos": "Nível 15, Kokusen e Força ou Destreza 20",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões Especiais"
      }
    }
  },
  {
    "name": "Quebra de Limite",
    "folderName": "Aptidões Especiais",
    "type": "habilidade",
    "img": "icons/magic/control/silhouette-hold-beam-blue.webp",
    "sort": 2000,
    "system": {
      "descricao": "<p>Voc&ecirc; ultrapassa os limites no controle de energia, aumentando a sua libera&ccedil;&atilde;o imediata. Ao obter esta aptid&atilde;o, o seu m&aacute;ximo de energia gasto por turno aumenta em um valor igual ao seu b&ocirc;nus de maestria.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Especial",
        "nivel": 1,
        "custo": "0",
        "requisitos": "Nível 6",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões Especiais"
      }
    }
  },
  {
    "name": "Raio Negro",
    "folderName": "Aptidões Especiais",
    "type": "habilidade",
    "img": "icons/magic/lightning/fist-unarmed-strike-blue.webp",
    "sort": 3000,
    "system": {
      "descricao": "<p>O raio negro - ou kokusen - é um fenômeno no jujutsu, onde o golpe de um feiticeiro é altamente amplificado devido a uma distorção no espaço que ocorre quando a energia amaldiçoada é aplicada 0.000001 segundos antes dele acertar. Quando um feiticeiro o acerta, sua energia brilha em negro e o poder destrutivo é maior. Usar o kokusen também aumenta a compreensão da energia amaldiçoada permanentemente. Todos os efeitos da habilidade são:</p><ul><li><p><em><strong>Compreensão Avançada.</strong></em> Após usar o kokusen pela primeira vez, a sua compreensão sobre a energia amaldiçoada se expande. Seu máximo de energia amaldiçoada aumenta em um valor igual ao seu nível de personagem e o seu Nível de Aptidão em Energia aumenta em 1. Ao subir de nível, o aumento de energia é atualizado.</p></li><li><p><em><strong>Impacto Destrutivo.</strong></em> Além de permitir compreender melhor a energia amaldiçoada, aqueles que conseguem usar o kokusen se tornam melhores lutadores. Seus ataques críticos passam a causar 1 dado de dano adicional.</p></li><li><p><em><strong>Raio Negro.</strong></em> Usar o kokusen não é algo consciente, ocorrendo apenas em certos momentos. Quando tirar 20 em uma rolagem de ataque corpo-a-corpo, o seu golpe é coberto por raios negros, utilizando o kokusen. Um golpe com kokusen causa o dano máximo de um acerto crítico, ignora qualquer tipo de resistência ou redução de danos e uma criatura atingida por um kokusen deve realizar um TR de Fortitude, caso falhe no teste ela perde uma ação no próximo turno dela.</p></li><li><p><em><strong>Estado de Consciência Absoluta.</strong></em> Após usar os raios negros, um feiticeiro adentra em um estado de foco, onde torna-se mais fácil acertar golpes, extraindo 120% de seu potencial. Durante 1 rodada, após conseguir um kokusen, o valor necessário para o kokusen reduzirá em um. Caso acerte outro kokusen, a duração será renovada e o valor necessário reduzirá novamente. Ele pode ser reduzido uma quantidade de vezes igual a metade do seu modificador de maestria.</p></li></ul>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Especial",
        "nivel": 10,
        "custo": "0",
        "requisitos": "Nível 10, Nível de Aptidão em Controle e Leitura 3 e Força ou Destreza 18",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões Especiais"
      }
    }
  },
  {
    "name": "Reversão de Técnica",
    "folderName": "Aptidões Especiais",
    "type": "habilidade",
    "img": "icons/magic/unholy/projectiles-binary-pink.webp",
    "sort": 4000,
    "system": {
      "descricao": "<p>Em um processo complexo, você passa a ser capaz de utilizar energia reversa para abastecer a sua técnica, possibilitando assim um efeito contrário ao essencial. Isso afeta levemente o custo das habilidades de técnica:</p><ul><li><p>Habilidades de Nível 0 custam 1 ponto de energia amaldiçoada.</p></li><li><p>Habilidades de Nível 1 custam 1 ponto de energia reversa (2 de amaldiçoada).</p></li><li><p>Habilidades de Nível 2 custam 3 pontos de energia reversa (6 de amaldiçoada).</p></li><li><p>Habilidades de Nível 3 custam 5 pontos de energia reversa (10 de amaldiçoada).</p></li><li><p>Habilidades de Nível 4 custam 7 pontos de energia reversa (14 de amaldiçoada).</p></li><li><p>Habilidades de Nível 5 custam 10 pontos de energia reversa (20 de amaldiçoada).</p></li></ul><p>O efeito da técnica deve ser montado, levando em conta que o intuito é causar um efeito oposto ao padrão. Reversões de técnica não ocupam espaços de habilidades de técnica, sendo apenas uma alternativa de uma que já possua. Uma técnica de fogo, por exemplo, pode acabar por criar gelo; uma técnica de antigravidade pode aumentar a gravidade e por aí vai. Os limites devem ser debatidos entre o jogador e o narrador.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Especial",
        "nivel": 12,
        "custo": "1",
        "requisitos": "Nível 12 e Energia Reversa",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões Especiais"
      }
    }
  },
  {
    "name": "Técnica Máxima",
    "folderName": "Aptidões Especiais",
    "type": "habilidade",
    "img": "icons/magic/unholy/hands-cloud-light-pink.webp",
    "sort": 5000,
    "system": {
      "descricao": "<p style=\"\">Dentre os feiticeiros de jujutsu, existe a possibilidade de levar o potencial da sua técnica ao máximo, criando uma habilidade definitiva a partir dela. É uma arte suprema, com grande complexidade e necessidade de conhecimento sobre a própria técnica. Ao obter esta habilidade, você se torna capaz de criar uma Técnica Máxima. Para criar uma Técnica Máxima, você deve possuir acesso a habilidades de técnica nível 5, escolhendo assim uma habilidade de nível 5 para se tornar a sua Técnica Máxima. Uma Técnica Máxima é criada de maneira diferente, e a sua explicação pode ser encontrada no <em>Capítulo 8: Guia de Criação Avançado da Enciclopédia Amaldiçoada</em>.</p>",
      "fonte": "Feiticeiros & Maldições",
      "habilidade": {
        "categoria": "aptidao",
        "tipo": "Especial",
        "nivel": 17,
        "custo": "0",
        "requisitos": "Capacidade de Conjurar Habilidades de Técnica Nível 5, Maestria em Feitiçaria",
        "execucao": "",
        "atual": 0,
        "max": 0
      }
    },
    "flags": {
      "jiujitsu-kaisen": {
        "fmCatalog": "aptidoes-amaldicoadas",
        "fmCatalogVersion": 1,
        "subcategoria": "Aptidões Especiais"
      }
    }
  }
];

