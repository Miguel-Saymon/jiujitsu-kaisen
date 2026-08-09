const texto = valor => String(valor ?? "").trim();
const numero = (valor, padrao = 0) => {
  const n = Number(valor);
  return Number.isFinite(n) ? n : padrao;
};

function ler(source, ...caminhos) {
  for (const caminho of caminhos) {
    const valor = foundry.utils.getProperty(source, caminho);
    if (valor !== undefined && valor !== null && valor !== "") return valor;
  }
  return "";
}

function base(nome, type, img) {
  return {
    name: texto(nome) || "Novo Item",
    type,
    img: img || "icons/svg/item-bag.svg",
    system: {}
  };
}

export function converterHabilidadeFM(source = {}, categoria = "outra") {
  const nome = source.name ?? ler(source, "system.name");
  const out = base(nome, "habilidade", source.img);
  const s = source.system ?? source;

  const mapas = {
    talento: {
      tipo: ["feattype"], nivel: ["featlvl"], requisitos: ["featreq"],
      descricao: ["featlongdesc", "habtech_desc"]
    },
    aptidao: {
      tipo: ["abiamaldtype"], nivel: ["abiamaldlvl"], custo: ["abiamaldcost"],
      requisitos: ["abiamaldreq"], descricao: ["habtech_desc"]
    },
    especializacao: {
      tipo: ["spechabtype"], nivel: ["habespeclvl"], requisitos: ["habspecreq"],
      descricao: ["habtech_desc"]
    },
    lendaria: {
      tipo: ["legendtype", "habtype"], nivel: ["legendlvl", "hablvl"],
      requisitos: ["legendreq", "habreq"], descricao: ["legenddesc", "habtech_desc"]
    },
    melhoria: {
      tipo: ["upgradetype", "melhtype"], nivel: ["upgradelvl", "melhlvl"],
      requisitos: ["upgradereq", "melhreq"], descricao: ["upgradedesc", "melhdesc", "habtech_desc"]
    },
    outra: {
      tipo: ["habtype", "type"], nivel: ["hablvl", "level"], custo: ["cost"],
      requisitos: ["habreq", "requirements"], descricao: ["habtech_desc", "description"]
    }
  };

  const m = mapas[categoria] ?? mapas.outra;
  const valor = chaves => chaves.map(k => ler(s, k)).find(v => v !== "") ?? "";

  out.system = {
    descricao: texto(valor(m.descricao)),
    fonte: texto(ler(s, "source", "fonte")),
    habilidade: {
      categoria,
      tipo: texto(valor(m.tipo)),
      nivel: numero(valor(m.nivel)),
      atual: 0,
      max: 0,
      custo: texto(valor(m.custo ?? [])),
      execucao: texto(ler(s, "execution", "execucao")),
      requisitos: texto(valor(m.requisitos))
    }
  };
  return out;
}

export function converterFeiticoFM(source = {}) {
  const s = source.system ?? source;
  const out = base(source.name, "feitico", source.img);
  out.system = {
    descricao: texto(ler(s, "techdesc", "description")),
    fonte: texto(ler(s, "source", "fonte")),
    feitico: {
      nivel: numero(ler(s, "techlvl")),
      custoPE: numero(ler(s, "techcost")),
      tipo: texto(ler(s, "techtype")),
      conjuracao: texto(ler(s, "techconj")),
      alcance: texto(ler(s, "techrng")),
      alvo: texto(ler(s, "techtrg")),
      area: texto(ler(s, "techarea")),
      duracao: texto(ler(s, "techdur")),
      teste: texto(ler(s, "techskill", "techcast")),
      resistencia: texto(ler(s, "techres")),
      dados: texto(ler(s, "techdie")),
      bonusDano: texto(ler(s, "techbondmg", "techbon"))
    }
  };
  return out;
}

export function converterAcaoFM(source = {}, categoria = "acao") {
  const s = source.system ?? source;
  const out = base(source.name, "acao", source.img);
  out.system = {
    descricao: texto(ler(s, "actdesc", "factdesc", "caracdesc", "dotedesc", "description")),
    fonte: texto(ler(s, "source", "fonte")),
    acao: {
      categoria,
      tipo: texto(ler(s, "acttype")) || (categoria === "acao" ? "simples" : categoria),
      uso: texto(ler(s, "actuse")),
      custo: texto(ler(s, "actcost")),
      rodada: texto(ler(s, "actround")),
      execucao: texto(ler(s, "execution", "execucao")),
      alcance: texto(ler(s, "actrange")),
      area: texto(ler(s, "actarea")),
      alvo: texto(ler(s, "actstatus", "acttarget")),
      ataque: texto(ler(s, "acthitflat", "acthitskill", "acthitatri")),
      dano: texto(ler(s, "actdmg", "actdmgflat")),
      tipoDano: texto(ler(s, "actdmgtype")),
      critico: texto(ler(s, "actcritdmg"))
    }
  };
  return out;
}

export function converterEquipamentoFM(source = {}, destino = "equipamento") {
  const s = source.system ?? source;
  const out = base(source.name, destino, source.img);
  const descricao = texto(ler(s, "wpndesc", "armordesc", "habtech_desc", "description"));
  const peso = numero(ler(s, "weight"), null);
  const preco = ler(s, "armacusto", "armorcost", "itemspeccusto", "kitcusto", "cost");

  if (destino === "arma") {
    out.system = {
      descricao, fonte: texto(ler(s, "source", "fonte")), quantidade: 1, espacos: peso, preco,
      arma: {
        proficiencia: texto(ler(s, "wpnclass")),
        proposito: texto(ler(s, "wpnstype", "wpngroup")),
        empunhadura: "",
        ataque: { atributo: texto(ler(s, "hitatri")), bonus: numero(ler(s, "hitbon"), 0), treinado: true },
        dano: { formula: texto(ler(s, "armadmg")), atributo: "", tipo: texto(ler(s, "armadmgtipo")) },
        critico: { margem: numero(ler(s, "critrng"), 20), multiplicador: numero(ler(s, "armacritdmg"), 2) },
        alcance: texto(ler(s, "range", "armarange"))
      }
    };
    return out;
  }

  out.system = {
    descricao, fonte: texto(ler(s, "source", "fonte")), quantidade: 1, espacos: peso, preco,
    equipamento: {
      tipo: texto(ler(s, "armortype", "itemspectype", "jobtype")),
      tipoUso: "",
      defesa: numero(ler(s, "armorbonus"), 0),
      penalidadeArmadura: numero(ler(s, "armorpenalty"), 0)
    }
  };
  return out;
}

export const FMConverter = {
  habilidade: converterHabilidadeFM,
  feitico: converterFeiticoFM,
  acao: converterAcaoFM,
  equipamento: converterEquipamentoFM
};

