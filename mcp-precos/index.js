#!/usr/bin/env node
'use strict';

// ─── Tabela de Preços — Academia FitCode ──────────────────────────────────────
// Fonte de verdade para todas as consultas de preço.
// Edite aqui para atualizar os valores sem alterar o site.

const PRECOS = {
  academia: 'Academia FitCode',
  atualizacao: '2026-06-15',
  moeda: 'BRL',
  observacoes: [
    'Preços sujeitos a alteração sem aviso prévio',
    'Matrícula gratuita nos meses de janeiro e julho',
    'Desconto de 10% para pagamento anual à vista',
    'Estudantes e idosos (60+) têm 15% de desconto mediante apresentação de documento'
  ],
  matricula: {
    valor: 99.90,
    descricao: 'Taxa de matrícula única por modalidade'
  },
  modalidades: [
    {
      nome: 'Musculação',
      emoji: '🏋️',
      descricao: 'Treino com acompanhamento individual de instrutores certificados',
      planos: [
        { tipo: 'Mensal',     valor: 89.90,  economia: null },
        { tipo: 'Trimestral', valor: 249.90, economia: '7%' },
        { tipo: 'Semestral',  valor: 449.90, economia: '16%' },
        { tipo: 'Anual',      valor: 799.90, economia: '26%' }
      ],
      inclui: ['Avaliação física', 'Planilha personalizada', 'Acompanhamento mensal']
    },
    {
      nome: 'Natação',
      emoji: '🏊',
      descricao: 'Exercício completo sem impacto — para todas as idades',
      planos: [
        { tipo: 'Mensal',     valor: 129.90, economia: null },
        { tipo: 'Trimestral', valor: 369.90, economia: '5%' },
        { tipo: 'Semestral',  valor: 699.90, economia: '10%' },
        { tipo: 'Anual',      valor: 1249.90, economia: '20%' }
      ],
      inclui: ['2 aulas semanais', 'Touca e óculos no primeiro mês', 'Avaliação de nível']
    },
    {
      nome: 'Yoga',
      emoji: '🧘',
      descricao: 'Flexibilidade, equilíbrio e mindfulness',
      planos: [
        { tipo: 'Mensal',     valor: 99.90,  economia: null },
        { tipo: 'Trimestral', valor: 279.90, economia: '7%' },
        { tipo: 'Semestral',  valor: 519.90, economia: '13%' },
        { tipo: 'Anual',      valor: 899.90, economia: '25%' }
      ],
      inclui: ['3 aulas semanais', 'Acesso a aulas online gravadas', 'Material didático']
    },
    {
      nome: 'CrossFit',
      emoji: '🔥',
      descricao: 'Alta intensidade em comunidade — resultados acelerados',
      planos: [
        { tipo: 'Mensal',     valor: 149.90, economia: null },
        { tipo: 'Trimestral', valor: 419.90, economia: '7%' },
        { tipo: 'Semestral',  valor: 789.90, economia: '12%' },
        { tipo: 'Anual',      valor: 1399.90, economia: '22%' }
      ],
      inclui: ['Aulas diárias ilimitadas', 'WOD programado', 'Acompanhamento de performance']
    },
    {
      nome: 'Corrida',
      emoji: '🏃',
      descricao: 'Assessoria de corrida com planilhas periodizadas',
      planos: [
        { tipo: 'Mensal',     valor: 79.90,  economia: null },
        { tipo: 'Trimestral', valor: 219.90, economia: '8%' },
        { tipo: 'Semestral',  valor: 409.90, economia: '14%' },
        { tipo: 'Anual',      valor: 719.90, economia: '25%' }
      ],
      inclui: ['Planilha personalizada', 'Grupo de treino semanal', 'App de monitoramento']
    },
    {
      nome: 'Artes Marciais',
      emoji: '🥊',
      descricao: 'Muay thai, jiu-jitsu e boxe com mestres experientes',
      planos: [
        { tipo: 'Mensal',     valor: 109.90, economia: null },
        { tipo: 'Trimestral', valor: 309.90, economia: '6%' },
        { tipo: 'Semestral',  valor: 579.90, economia: '12%' },
        { tipo: 'Anual',      valor: 999.90, economia: '24%' }
      ],
      inclui: ['3 aulas semanais', 'Kimono ou luvas no primeiro mês', 'Graduação incluída']
    }
  ],
  pacotes: [
    {
      nome: 'Pacote Completo — Acesso Total',
      descricao: 'Acesso ilimitado a todas as modalidades',
      valor_mensal: 199.90,
      economia_vs_separado: '45%',
      inclui: ['Todas as 6 modalidades', 'Personal trainer mensal', 'Acesso 24h', 'App exclusivo']
    },
    {
      nome: 'Pacote Duplo',
      descricao: 'Escolha 2 modalidades pelo preço de 1,5',
      valor_mensal: null,
      desconto: '25% na segunda modalidade',
      inclui: ['2 modalidades à escolha', 'Flexibilidade para trocar modalidade a cada 3 meses']
    }
  ]
};

// ─── MCP stdio Transport ───────────────────────────────────────────────────────

let inputBuffer = Buffer.alloc(0);

process.stdin.resume();
process.stdin.on('data', (chunk) => {
  inputBuffer = Buffer.concat([inputBuffer, Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)]);
  processMessages();
});

process.stdin.on('end', () => {
  process.exit(0);
});

function processMessages() {
  while (true) {
    const headerEnd = inputBuffer.indexOf('\r\n\r\n');
    if (headerEnd === -1) break;

    const headers = inputBuffer.slice(0, headerEnd).toString();
    const match = headers.match(/Content-Length:\s*(\d+)/i);
    if (!match) { inputBuffer = inputBuffer.slice(headerEnd + 4); continue; }

    const contentLength = parseInt(match[1], 10);
    const bodyStart = headerEnd + 4;

    if (inputBuffer.length < bodyStart + contentLength) break;

    const body = inputBuffer.slice(bodyStart, bodyStart + contentLength).toString();
    inputBuffer = inputBuffer.slice(bodyStart + contentLength);

    try {
      handleMessage(JSON.parse(body));
    } catch (e) {
      // ignore malformed messages
    }
  }
}

function send(msg) {
  const json = JSON.stringify(msg);
  const header = `Content-Length: ${Buffer.byteLength(json, 'utf8')}\r\n\r\n`;
  process.stdout.write(Buffer.from(header, 'utf8'));
  process.stdout.write(Buffer.from(json, 'utf8'));
}

function handleMessage(msg) {
  const { id, method, params } = msg;

  if (method === 'initialize') {
    const requestedVersion = params?.protocolVersion ?? '2024-11-05';
    const supported = ['2024-11-05', '2025-03-26'];
    const version = supported.includes(requestedVersion) ? requestedVersion : '2024-11-05';
    return send({
      jsonrpc: '2.0', id,
      result: {
        protocolVersion: version,
        capabilities: { tools: {} },
        serverInfo: { name: 'mcp-precos-fitcode', version: '1.0.0' }
      }
    });
  }

  if (method === 'notifications/initialized') return; // notification, no response

  if (method === 'tools/list') {
    return send({
      jsonrpc: '2.0', id,
      result: {
        tools: [
          {
            name: 'consultar_precos',
            description:
              'Consulta a tabela de preços oficial da Academia FitCode. ' +
              'Use SEMPRE este tool quando o usuário perguntar sobre valores, ' +
              'mensalidades, planos, preços ou investimento de qualquer modalidade. ' +
              'Nunca busque preços na internet — os dados oficiais estão aqui.',
            inputSchema: {
              type: 'object',
              properties: {
                modalidade: {
                  type: 'string',
                  description:
                    'Nome da modalidade a consultar (ex: "natação", "yoga", "crossfit"). ' +
                    'Omita para retornar todas as modalidades e pacotes.'
                },
                tipo_plano: {
                  type: 'string',
                  enum: ['Mensal', 'Trimestral', 'Semestral', 'Anual'],
                  description: 'Filtrar por tipo de plano (opcional).'
                }
              }
            }
          },
          {
            name: 'consultar_pacotes',
            description:
              'Retorna os pacotes combinados da Academia FitCode (Acesso Total e Pacote Duplo). ' +
              'Use quando o usuário perguntar sobre combinar modalidades ou pacotes especiais.',
            inputSchema: {
              type: 'object',
              properties: {}
            }
          }
        ]
      }
    });
  }

  if (method === 'tools/call') {
    const toolName = params?.name;
    const args = params?.arguments || {};

    if (toolName === 'consultar_precos') {
      let resultado;

      if (args.modalidade) {
        const busca = args.modalidade.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const encontrada = PRECOS.modalidades.filter(m => {
          const nome = m.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          return nome.includes(busca);
        });
        resultado = encontrada;
      } else {
        resultado = PRECOS.modalidades;
      }

      if (args.tipo_plano) {
        resultado = resultado.map(m => ({
          ...m,
          planos: m.planos.filter(p => p.tipo === args.tipo_plano)
        }));
      }

      const resposta = {
        academia: PRECOS.academia,
        moeda: PRECOS.moeda,
        atualizacao: PRECOS.atualizacao,
        matricula: PRECOS.matricula,
        modalidades: resultado,
        observacoes: PRECOS.observacoes
      };

      return send({
        jsonrpc: '2.0', id,
        result: {
          content: [{ type: 'text', text: JSON.stringify(resposta, null, 2) }]
        }
      });
    }

    if (toolName === 'consultar_pacotes') {
      const resposta = {
        academia: PRECOS.academia,
        moeda: PRECOS.moeda,
        atualizacao: PRECOS.atualizacao,
        pacotes: PRECOS.pacotes,
        observacoes: PRECOS.observacoes
      };

      return send({
        jsonrpc: '2.0', id,
        result: {
          content: [{ type: 'text', text: JSON.stringify(resposta, null, 2) }]
        }
      });
    }

    return send({
      jsonrpc: '2.0', id,
      error: { code: -32601, message: `Tool not found: ${toolName}` }
    });
  }

  // Unknown method with id — return error
  if (id !== undefined) {
    send({ jsonrpc: '2.0', id, error: { code: -32601, message: 'Method not found' } });
  }
}
