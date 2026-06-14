export function calcularEstadoIntegridade(system) {
  const integridade = system.recursos?.integridade;

  if (!integridade) return "Estável";

  const atual = Number(integridade.atual) || 0;
  const max = Number(integridade.max) || 1;

  if (atual <= 0) {
    return "Morto";
  }

  const percentual = atual / max;

  if (percentual <= 0.25) return "Crítico";
  if (percentual <= 0.50) return "Instável";
  if (percentual <= 0.75) return "Danificado";

  return "Estável";
}
