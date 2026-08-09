export const FM_SAMPLE_PACKS = {
  "aptidoes-amaldicoadas": [
    {
      "name": "Absorção Amaldiçoada",
      "type": "habilidade",
      "img": "icons/creatures/slimes/slime-movement-swirling-green.webp",
      "system": {
        "descricao": "<p>Você consegue absorver vestígios de energia deixados por aqueles que manejam ela. Ao matar um usuário de energia, você recupera uma quantidade de energia igual ao seu bônus de maestria.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "aptidao",
          "tipo": "Controle e Leitura",
          "nivel": 0,
          "custo": "0",
          "requisitos": "Maestria em Feitiçaria",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Armas Naturais",
      "type": "habilidade",
      "img": "icons/creatures/claws/claw-talons-glowing-orange.webp",
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
      }
    },
    {
      "name": "Estoque Ampliado",
      "type": "habilidade",
      "img": "icons/creatures/slimes/slime-movement-pseudopods-teal.webp",
      "system": {
        "descricao": "<p>Reconhecendo bem a essência da energia, devido a sua conexão com ela, você amplia o seu estoque. Seu máximo de energia amaldiçoada aumenta em um valor igual ao seu bônus de maestria.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "aptidao",
          "tipo": "Controle e Leitura",
          "nivel": 10,
          "custo": "0",
          "requisitos": "Nível 10",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Desenvolvimento Físico",
      "type": "habilidade",
      "img": "icons/creatures/unholy/demon-fire-horned-winged-roar.webp",
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
      }
    },
    {
      "name": "Proteção Constante",
      "type": "habilidade",
      "img": "icons/creatures/invertebrates/spider-web-red.webp",
      "system": {
        "descricao": "<p>Você constantemente fortalece o seu corpo, gerando uma proteção constante a partir da energia que flui. No começo de toda rodada você recebe uma quantidade de pontos de vida temporários igual ao seu modificador de Constituição multiplicado pelo seu bônus de maestria.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "aptidao",
          "tipo": "Controle e Leitura",
          "nivel": 10,
          "custo": "0",
          "requisitos": "Nível 10, Constituição 20",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    }
  ],
  "feiticos": [
    {
      "name": "Brisa Gelada",
      "type": "feitico",
      "img": "icons/magic/air/wind-weather-snow-gusts.webp",
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
      }
    },
    {
      "name": "Congelamento",
      "type": "feitico",
      "img": "icons/magic/water/barrier-ice-water-cube.webp",
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
      }
    },
    {
      "name": "Escudo Definitivo",
      "type": "feitico",
      "img": "icons/skills/melee/shield-block-bash-yellow.webp",
      "system": {
        "descricao": "<p>Você cria vários espinhos em um do seu braço, reforçando-o e o transformando em uma espécie de escudo metálico. Sua classe de armadura aumenta em 2 e, ao ser alvo de um ataque corpo-a-corpo, você pode usar sua reação para colocar o escudo espinhento a sua frente, causando 2d6 de dano perfurante no atacante. Você precisa sustentar esta habilidade, pagando 1 de energia por rodada.</p>",
        "fonte": "Feiticeiros & Maldições",
        "feitico": {
          "nivel": 1,
          "custoPE": 2,
          "tipo": "Auxiliar",
          "conjuracao": "Ação Bônus",
          "alcance": "Próprio",
          "alvo": "Próprio",
          "area": "",
          "duracao": "Sustentada",
          "teste": "",
          "resistencia": "",
          "dados": "",
          "bonusDano": "+2"
        }
      }
    },
    {
      "name": "Acúmulo de Velocidade",
      "type": "feitico",
      "img": "icons/skills/movement/feet-winged-boots-brown.webp",
      "system": {
        "descricao": "<p>Uma vez por rodada, ao se mover, você pode utilizar esta habilidade para começar a acumular velocidade. Ao usar esta habilidade, o seu movimento aumenta em 3 metros. A cada turno após o primeiro, você deve a sustentar pagando 1 ponto de energia e, ao se mover novamente, seu movimento aumenta em +1,5 metros. Seu movimento pode ser aumentado por esta habilidade uma quantidade de vezes igual ao seu modificador de Destreza, retornando ao zero caso a habilidade deixe de ser sustentada.</p>",
        "fonte": "Feiticeiros & Maldições",
        "feitico": {
          "nivel": 1,
          "custoPE": 2,
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
      }
    },
    {
      "name": "Reflexos Apurados",
      "type": "feitico",
      "img": "icons/magic/perception/hand-eye-pink.webp",
      "system": {
        "descricao": "<p>Com uma percepção diferenciada, dividindo tudo em 24 quadros, seus reflexos são apurados. Você recebe um bônus de +2 em Reflexos.</p>",
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
          "bonusDano": "2 em Reflexos"
        }
      }
    }
  ],
  "habilidades-especializacao": [
    {
      "name": "Ajuste",
      "type": "habilidade",
      "img": "icons/skills/melee/swords-parry-block-yellow.webp",
      "system": {
        "descricao": "<p>Às vezes um bom golpe só precisa de um ajuste. Uma vez por rodada, ao realizar um ataque, você pode adicionar seu dado de empolgação na rolagem de acerto e no dano. Você pode escolher adicionar o bônus antes ou depois de saber o resultado da rolagem de acerto.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "especializacao",
          "tipo": "Base",
          "nivel": 1,
          "custo": "",
          "requisitos": "Empolgação",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Comando",
      "type": "habilidade",
      "img": "icons/environment/people/charge.webp",
      "system": {
        "descricao": "<p>Sua empolgação pode acabar contagiando seus aliados. Ao realizar um ataque, você comanda um aliado dentro de 1,5 metros a realizar um ataque corpoa- corpo o acompanhando no mesmo alvo, como uma reação dele. Você ou aliado deve pagar 1 ponto de energia amaldiçoada para realizar o ataque. Caso use essa habilidade, você não pode utilizar ataque extra.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "especializacao",
          "tipo": "Base",
          "nivel": 1,
          "custo": "",
          "requisitos": "Empolgação",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Corpo Treinado",
      "type": "habilidade",
      "img": "icons/magic/control/buff-strength-muscle-damage-orange.webp",
      "system": {
        "descricao": "<p style=\"\">Você treinou o seu corpo para que ele seja sua própria arma, assim como pode incorporar certas armas em sua luta corpo a corpo. Sendo um lutador, você recebe as seguintes capacidades:</p><ul><li><p>Você sabe desferir golpes rápidos com o seu corpo. Quando realizar um ataque desarmado ou com uma arma marcial, você pode realizar um ataque desarmado como uma ação bônus.</p></li><li><p>Você treinou e se dedicou a fazer com que seu corpo fosse uma arma por si só. O dano dos seus ataques desarmados se torna 1d8. Nos níveis 5, 9, 13 e 17 seu dano desarmado aumenta para 1d10, 1d12, 2d8 e 2d12, respectivamente.</p></li><li style=\"text-align: left;\">Versatilidade e adaptabilidade são importantes. Você pode escolher usar tanto força quanto destreza nos seus ataques desarmados e ataques com armas marciais.</li></ul>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "especializacao",
          "tipo": "Base",
          "nivel": 1,
          "custo": "",
          "requisitos": "",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Desarme",
      "type": "habilidade",
      "img": "icons/skills/melee/sword-damaged-broken-orange.webp",
      "system": {
        "descricao": "<p>Uma boa luta não deve ser contida pelo porte de uma arma. Ao acertar uma criatura com um ataque você aproveita para tentar a desarmar. Você adiciona seu dado de empolgação ao dano desse ataque e o alvo deve fazer uma jogada de ataque corpo a corpo contra o resultado do seu ataque. Em uma falha ele larga um item à sua escolha que esteja manejando.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "especializacao",
          "tipo": "Base",
          "nivel": 1,
          "custo": "",
          "requisitos": "Empolgação",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Postura da Lua",
      "type": "habilidade",
      "img": "icons/skills/melee/weapons-crossed-swords-pink.webp",
      "system": {
        "descricao": "<p style=\"\">Uma postura que foca na defesa, sacrificando sua ofensiva. Enquanto na postura da lua, você recebe +3 de Defesa, você pode usar Andar ou Desengajar como ação livre e pode, como uma reação, reduzir um dano que você receber em um valor igual ao seu nível de personagem. Entretanto, todos seus ataques recebem -4 para acertar e não recebem seu bônus de atributo no dano.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "especializacao",
          "tipo": "Nível",
          "nivel": 2,
          "custo": "",
          "requisitos": "Assumir Postura",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    }
  ],
  "talentos": [
    {
      "name": "Coleta de Talismãs",
      "type": "habilidade",
      "img": "icons/magic/symbols/runes-carved-stone-red.webp",
      "system": {
        "descricao": "<p>Em busca de novas maneiras de compensar pela sua falta de técnica, você passa a buscar coletar talismãs com shikigamis imbuídos. Ao obter este talento, você recebe o talismã de um shikigami de 4° grau, o qual você pode criar conforme as regras padrão de invocações. No nível 5, você recebe um shikigami de 3° grau; no nível 10 você recebe um shikigami de 2° grau e, no nível 15, você recebe um shikigami de 1° grau. Caso não seja um Controlador, você segue as regras de controle geral.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "talento",
          "tipo": "Origem",
          "nivel": 0,
          "custo": "",
          "requisitos": "Sem Técnica",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Estudo Amaldiçoado",
      "type": "habilidade",
      "img": "icons/magic/symbols/runes-carved-stone-purple.webp",
      "system": {
        "descricao": "<p>Você estuda sobre a energia amaldiçoada ao máximo, conseguindo descobrir uma nova maneira de a utilizar. Ao obter este talento, você recebe uma aptidão amaldiçoada a sua escolha, desde que atenda aos requisitos. Você pode pegar este talento uma quantidade de vezes igual ao seu bônus de maestria.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "talento",
          "tipo": "Origem",
          "nivel": 0,
          "custo": "",
          "requisitos": "Sem Técnica",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Familiaridade com Técnica",
      "type": "habilidade",
      "img": "icons/magic/symbols/chevron-elipse-circle-blue.webp",
      "system": {
        "descricao": "<p>Com a sua técnica amaldiçoada sendo parte da sua individualidade, você se torna cada vez mais e mais familiar com ela, otimizando-a em custo ou poder. Você pode escolher duas habilidades de técnica para ou reduzir o custo em um valor igual a metade do seu bônus de maestria ou aumentar o seu dano em dois dados.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "talento",
          "tipo": "Origem",
          "nivel": 12,
          "custo": "",
          "requisitos": "Inato, Nível 12",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Físico Aperfeiçoado",
      "type": "habilidade",
      "img": "icons/magic/symbols/rune-sigil-hook-white-red.webp",
      "system": {
        "descricao": "<p>O seu corpo se torna específico e desenvolvido para uma área em peculiar, ligando-se mais firmemente a certos aspectos. Escolha duas perícias quaisquer para receber um bônus de +2 em rolagens com ela.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "talento",
          "tipo": "Origem",
          "nivel": 6,
          "custo": "",
          "requisitos": "Feto Amaldiçoado Híbrido, Nível 6",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    },
    {
      "name": "Noção e Preparação",
      "type": "habilidade",
      "img": "icons/magic/symbols/runes-carved-stone-green.webp",
      "system": {
        "descricao": "<p>Embora você esteja privado do acesso a uma técnica e certas aplicações da energia, você tem noção e preparação suficiente para o proteger diante certos problemas. Você recebe um bônus de +2 para testes de resistências contra efeitos de aptidões amaldiçoadas. Nos níveis 9, 14 e 19 o bônus aumenta em +1.</p>",
        "fonte": "Feiticeiros & Maldições",
        "habilidade": {
          "categoria": "talento",
          "tipo": "Origem",
          "nivel": 4,
          "custo": "",
          "requisitos": "Sem Técnica, Nível 4",
          "execucao": "",
          "atual": 0,
          "max": 0
        }
      }
    }
  ],
  "equipamentos": [
    {
      "name": "Besta Leve",
      "type": "arma",
      "img": "icons/weapons/crossbows/crossbow-simple-purple.webp",
      "system": {
        "descricao": "<p style=\"text-align: left;\">Um arco montado sobre uma coronha e com um gatilho embutido, disparando com maior potência. Uma besta leve precisa recarregar a cada disparo. Ocupa um espaço.</p><p><strong>Propriedades originais:</strong> R|L|D [24/96]</p>",
        "fonte": "Feiticeiros & Maldições",
        "pv": {
          "atual": null,
          "max": null
        },
        "rd": null,
        "quantidade": 1,
        "espacos": 1.0,
        "preco": 1.0,
        "equipado": false,
        "arma": {
          "proficiencia": "simples",
          "proposito": "distancia",
          "empunhadura": "umaMao",
          "consumivel": "municao",
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
            "atributo": "destreza",
            "bonus": 0,
            "treinado": true
          },
          "dano": {
            "formula": "1d8",
            "atributo": "",
            "tipo": "perfuracao"
          },
          "danos": {
            "dano1": {
              "formula": "1d8",
              "atributo": "",
              "tipo": "perfuracao"
            }
          },
          "critico": {
            "margem": 19,
            "multiplicador": 2
          },
          "alcance": "longo",
          "aprimoramentos": {
            "encantos": {
              "slot1": "",
              "slot2": "",
              "slot3": "",
              "slot4": ""
            }
          },
          "municaoAtual": 0
        }
      }
    },
    {
      "name": "Escudo Pequeno",
      "type": "equipamento",
      "img": "icons/equipment/shield/targe-wooden-boss-steel.webp",
      "system": {
        "descricao": "<p style=\"text-align: left;\">Um escudo pequeno, otimizado para ser preso ao braço, mantendo uma mão livre enquanto dá um impulso na guarda. O escudo leve não ocupa uma das suas mãos, permitindo o manejo de armas de duas mãos enquanto estiver o usando.</p>",
        "fonte": "Feiticeiros & Maldições",
        "pv": {
          "atual": null,
          "max": null
        },
        "rd": null,
        "quantidade": 1,
        "espacos": 2.0,
        "preco": 2.0,
        "equipado": false,
        "equipamento": {
          "tipo": "escudo",
          "tipoUso": "empunhado",
          "defesa": 1,
          "penalidadeArmadura": 0,
          "aprimoramentos": {
            "encantos": {
              "slot1": "",
              "slot2": "",
              "slot3": "",
              "slot4": ""
            }
          }
        }
      }
    },
    {
      "name": "Revigorante",
      "type": "consumivel",
      "img": "icons/consumables/potions/potion-flask-corked-yellow.webp",
      "system": {
        "descricao": "<p style=\"text-align: left;\">Um remédio que é capaz de retirar o cansaço excessivo do corpo daquele que o consome. Como uma ação bônus, pode tomar um revigorante, removendo um nível de exaustão e fazendo com que o remédio se desmanche.</p>",
        "fonte": "Feiticeiros & Maldições",
        "pv": {
          "atual": null,
          "max": null
        },
        "rd": null,
        "quantidade": 1,
        "espacos": 0.5,
        "preco": 2.0,
        "consumivel": {
          "tipo": "pocao",
          "ativacao": {
            "consumivel": "1 carga",
            "execucao": "acao",
            "condicao": "",
            "alcance": "nenhum",
            "alvo": "Próprio",
            "area": "",
            "efeito": "Remove um nível de exaustão.",
            "duracao": "instantanea",
            "testeResistencia": ""
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
      "type": "equipamento",
      "img": "icons/equipment/neck/amulet-round-engraved-blue.webp",
      "system": {
        "descricao": "<p style=\"text-align: left;\">Um talismã confeccionado com foco na proteção contra uma fonte específica. Enquanto estiver usando o talismã protetivo, o usuário recebe resistência a um tipo de dano elemental a sua escolha. Só se pode utilizar um talismã por vez.</p>",
        "fonte": "Feiticeiros & Maldições",
        "pv": {
          "atual": null,
          "max": null
        },
        "rd": null,
        "quantidade": 1,
        "espacos": 1.0,
        "preco": 2.0,
        "equipado": false,
        "equipamento": {
          "tipo": "",
          "tipoUso": "carregado",
          "defesa": 0,
          "penalidadeArmadura": 0,
          "aprimoramentos": {
            "encantos": {
              "slot1": "",
              "slot2": "",
              "slot3": "",
              "slot4": ""
            }
          }
        }
      }
    },
    {
      "name": "Kit de Alfaiate",
      "type": "equipamento",
      "img": "icons/commodities/cloth/thread-and-needle.webp",
      "system": {
        "descricao": "<p><strong>Uso:</strong> Permite a criação de acessórios especiais.</p><p style=\"text-align: left;\">O kit de ferramentas de alfaiate é focado na criação de acessórios especiais, feitos sob medida com o uso da habilidade manual e do jujutsu. Entretanto, criar acessórios amaldiçoados é complexo e custoso: <strong>do nível 1 ao 9, você só pode criar 1 acessório por interlúdio; a partir do nível 10 você pode criar 2 acessórios por interlúdio.</strong></p>\n<p style=\"text-align: left;\">Ao se tentar criar um acessório, realiza-se um teste de Ofício (Alfaiate), cuja dificuldade é:<br>• 15 para acessórios de custo 1.<br>• 25 para acessórios de custo 2.<br>• 35 para acessórios de custo 3.<br>• 50 para acessórios de custo 4.</p>",
        "fonte": "Feiticeiros & Maldições",
        "pv": {
          "atual": null,
          "max": null
        },
        "rd": null,
        "quantidade": 1,
        "espacos": 1.0,
        "preco": 1.0,
        "equipado": false,
        "equipamento": {
          "tipo": "",
          "tipoUso": "carregado",
          "defesa": 0,
          "penalidadeArmadura": 0,
          "aprimoramentos": {
            "encantos": {
              "slot1": "",
              "slot2": "",
              "slot3": "",
              "slot4": ""
            }
          }
        }
      }
    }
  ]
};

