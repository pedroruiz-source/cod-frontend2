
import { useState } from "react";
import "./App.css";
const produtos = [
  {
    id: 1,
    nome: "BRIDE KIT",
    categoria: "LÁBIOS",
    preco: 59.90,
    imagem:
      "https://www.novaera.com.br/cdn/shop/files/kit-fran-by-franciny-ehlke-bride-com-3un_0a8192cf-6601-4796-b8f6-3e5d4aabe1e8.jpg?v=1790367326&width=832",
  },
  {
    id: 2,
    nome: "PÓ FACIAL SOLTO PLUSH 1",
    categoria: "BASE",
    preco: 39.90,
    imagem:
      "https://franbyfr.com.br/cdn/shop/files/7898969501415_1.jpg?v=1754228569&width=1650",
  },
  {
    id: 3,
    nome: "Balm Hidratante Facial 15g",
    categoria: "FACE",
    preco: 119.90,
    imagem:
      "https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F19355617.webp&w=828&q=75",
  },
  {
    id: 4,
    nome: "Sérum Facial Fisiogel A.I Ação Calmante Pele Sensível com 30ml",
    categoria: "COLEÇÃO ESPECIAL",
    preco: 189.90,
    imagem:
      "https://product-data.raiadrogasil.io/images/17014018.webp",
  },
];

const formatarPreco = (valor) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);

  function adicionarAoCarrinho(produto) {
    setCarrinho((atual) => [...atual, produto]);
  }

  const total = carrinho.reduce(
    (soma, produto) => soma + produto.preco,
    0
  );

  function finalizarPedido() {
    if (carrinho.length === 0) {
      alert("Adicione algum produto ao carrinho primeiro.");
      return;
    }

    const mensagem = [
      "Olá! Quero fazer um pedido na JP Pink:",
      "",
      ...carrinho.map(
        (produto) =>https
          `• ${produto.nome} - ${formatarPreco(produto.preco)}`
      ),
      "",
      `Total: ${formatarPreco(total)}`,
    ].join("\n");

    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="site">
      <div className="topbar">
        ✨ SUA BELEZA, SUA ESSÊNCIA ✨
      </div>

      <header className="header">
        <a href="#inicio" className="logo">
          JP<span>PINK</span>
          <small>MAQUIAGEM DE LUXO</small>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuAberto}
        >
          ☰
        </button>

        <nav className={menuAberto ? "nav nav-open" : "nav"}>
          <a href="#inicio" onClick={() => setMenuAberto(false)}>
            Início
          </a>
          <a href="#produtos" onClick={() => setMenuAberto(false)}>
            Produtos
          </a>
          <a href="#sobre" onClick={() => setMenuAberto(false)}>
            Sobre nós
          </a>
          <a href="#contato" onClick={() => setMenuAberto(false)}>
            Contato
          </a>
        </nav>

        <button
          className="cart-button"
          onClick={() =>
            document.getElementById("carrinho").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          ♡ Carrinho ({carrinho.length})
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">
              BELEZA EM CADA DETALHE
            </span>

            <h1>
              Seu momento
              <br />
              <em>mais pink.</em>
            </h1>

            <p>
              Descubra uma nova forma de expressar sua beleza
              com produtos selecionados para realçar o que você
              tem de mais especial.
            </p>

            <a href="#produtos" className="primary-button">
              DESCOBRIR PRODUTOS <span>↗</span>
            </a>

            <div className="hero-note">
              <span>✦</span> Um toque de luxo todos os dias
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://i.pinimg.com/736x/72/b3/29/72b329701b1e2f4ab5f72f7b71b71710.jpg"
              alt="Coleção de produtos de beleza"
            />
            <div className="image-caption">
              <span>THE PINK COLLECTION</span>
              <strong>Beleza que encanta.</strong>
            </div>
          </div>

          <div className="hero-decoration">JP</div>
        </section>

        <section className="benefits">
          <div>
            <span>✧</span>
            <p>Beleza selecionada</p>
          </div>
          <div>
            <span>♡</span>
            <p>Feito para você</p>
          </div>
          <div>
            <span>✦</span>
            <p>Detalhes especiais</p>
          </div>
        </section>

        <section className="products-section" id="produtos">
          <div className="section-heading">
            <span className="eyebrow">ESCOLHAS ESPECIAIS</span>
            <h2>Favoritos <em>JP PINK</em></h2>
            <p>
              Seus novos queridinhos para uma beleza
              inesquecível.
            </p>
          </div>

          <div className="product-grid">
            {produtos.map((produto) => (
              <article className="product-card" key={produto.id}>
                <div className="product-image">
                  <img src={produto.imagem} alt={produto.nome} />
                  <span className="product-tag">
                    JP PINK
                  </span>
                </div>

                <div className="product-info">
                  <span className="product-category">
                    {produto.categoria}
                  </span>
                  <h3>{produto.nome}</h3>
                  <p className="product-price">
                    {formatarPreco(produto.preco)}
                  </p>
                  <button
                    className="add-button"
                    onClick={() => adicionarAoCarrinho(produto)}
                  >
                    ADICIONAR À SACOLA +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto" id="sobre">
          <div className="manifesto-image">
            <img
              src="https://i.pinimg.com/736x/1e/87/2d/1e872d41f0f5de2627eeaa675d282f00.jpg"
              alt="Produtos e acessórios de maquiagem"
            />
          </div>

          <div className="manifesto-content">
            <span className="eyebrow">NOSSO UNIVERSO</span>
            <h2>
              Mais que maquiagem,
              <br />
              <em>uma experiência.</em>
            </h2>
            <p>
              A JP PINK nasceu para celebrar a beleza
              em todas as suas formas. Acreditamos que cada
              detalhe pode transformar sua rotina em um
              momento especial de autocuidado.
            </p>
            <a href="#produtos" className="text-link">
              CONHEÇA NOSSA COLEÇÃO ↗
            </a>
          </div>
        </section>

        <section className="cart-section" id="carrinho">
          <div className="section-heading">
            <span className="eyebrow">SUA SELEÇÃO</span>
            <h2>Sua <em>sacola</em></h2>
          </div>

          {carrinho.length === 0 ? (
            <p className="empty-cart">
              Sua sacola está esperando seus favoritos. ♡
            </p>
          ) : (
            <div className="cart-content">
              {carrinho.map((produto, index) => (
                <div
                  className="cart-item"
                  key={`${produto.id}-${index}`}
                >
                  <span>{produto.nome}</span>
                  <strong>{formatarPreco(produto.preco)}</strong>
                  <button
                    aria-label={`Remover ${produto.nome}`}
                    onClick={() =>
                      setCarrinho((atual) =>
                        atual.filter((_, i) => i !== index)
                      )
                    }
                  >
                    ×
                  </button>
                </div>
              ))}

              <div className="cart-total">
                <span>Total</span>
                <strong>{formatarPreco(total)}</strong>
              </div>

              <button
                className="primary-button checkout-button"
                onClick={finalizarPedido}
              >
                FINALIZAR PELO WHATSAPP ↗
              </button>
              <p className="checkout-note">
                O WhatsApp abrirá com seu resumo de pedido.
              </p>
            </div>
          )}
        </section>

        <section className="newsletter" id="contato">
          <span className="eyebrow">UM TOQUE DE PINK NA SUA VIDA</span>
          <h2>Vamos ficar <em>mais próximas?</em></h2>
          <p>
            Acompanhe novidades, lançamentos e inspirações
            de beleza.
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            SIGA NOSSO INSTAGRAM ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="logo footer-logo">
          JP<span>PINK</span>
          <small>MAQUIAGEM DE LUXO</small>
        </a>
        <p>Beleza nos detalhes. Amor em cada escolha.</p>
        <span>© {new Date().getFullYear()} JP PINK.</span>
      </footer>
    </div>
  );
}

export default App;
