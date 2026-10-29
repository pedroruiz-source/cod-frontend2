
import { useState } from "react";

export default function TrajetoPomar() {
  const frutas = [
    { nome: "Maçã", preco: 1.5 },
    { nome: "Laranja", preco: 2.0 },
    { nome: "Bergamota", preco: 1.0 },
    { nome: "Banana", preco: 1.2 },
    { nome: "Pera", preco: 0.5 },
  ];

  const [quantidades, setQuantidades] = useState(
    frutas.map(() => "")
  );
  const [mostrarRecibo, setMostrarRecibo] = useState(false);

  function atualizarQuantidade(index, valor) {
    setQuantidades((anteriores) =>
      anteriores.map((q, i) => (i === index ? valor : q))
    );
    setMostrarRecibo(false);
  }

  const total = frutas.reduce((soma, fruta, index) => {
    return soma + (Number(quantidades[index]) || 0) * fruta.preco;
  }, 0);

  const moeda = (valor) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  function finalizarCompra(event) {
    event.preventDefault();
    setMostrarRecibo(true);
  }

  return (
    <main style={styles.container}>
      <h1>🍎 Trajeto Pomar</h1>
      <p>Informe as quantidades de frutas que você colheu.</p>

      <form onSubmit={finalizarCompra}>
        {frutas.map((fruta, index) => (
          <div key={fruta.nome} style={styles.linha}>
            <label>
              <strong>{fruta.nome}</strong>
              <span>{moeda(fruta.preco)} / unidade</span>
            </label>

            <input
              type="number"
              min="0"
              step="1"
              required
              value={quantidades[index]}
              onChange={(e) =>
                atualizarQuantidade(index, e.target.value)
              }
              placeholder="Quantidade"
            />
          </div>
        ))}

        <button type="submit" style={styles.botao}>
          Gerar recibo
        </button>
      </form>

      {mostrarRecibo && (
        <section style={styles.recibo}>
          <h2>Recibo de compra</h2>
          <p>Trajeto Pomar v0</p>
          <hr />

          {frutas.map((fruta, index) => {
            const quantidade = Number(quantidades[index]) || 0;
            const subtotal = quantidade * fruta.preco;

            return (
              <div key={fruta.nome} style={styles.itemRecibo}>
                <span>
                  {fruta.nome} ({quantidade} × {moeda(fruta.preco)})
                </span>
                <strong>{moeda(subtotal)}</strong>
              </div>
            );
          })}

          <hr />
          <div style={styles.total}>
            <span>Total a pagar</span>
            <strong>{moeda(total)}</strong>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            style={styles.botaoImprimir}
          >
            Imprimir recibo
          </button>
        </section>
      )}
    </main>
  );
}