import { episodes, feeds } from './episodes'
import { ProofPanel } from './ProofPanel'
import './App.css'

const fmt = new Intl.DateTimeFormat('en', { dateStyle: 'medium' })

function App() {
  return (
    <>
      <nav className="topbar">
        <a href="/" className="logo">
          <picture>
            <source srcSet="/sps-logo-dark.png" media="(prefers-color-scheme: dark)" />
            <img src="/sps-logo.png" alt="Secure Program Synthesis" />
          </picture>
        </a>
        <a href="https://gc.secureprogramsynthesis.org/join/admyi527lr6vosdvz4vyn2bw/">
          Join groupchat
        </a>
      </nav>
      <main>
        <header className="masthead">
          <h1>
            Secure
            <br />
            Program
            <br />
            Synthesis
          </h1>
          <p className="tagline">Shoptalk in extremely reliable vibecoding</p>
        </header>

        <ProofPanel />

        <section aria-labelledby="eps">
          <h2 id="eps">Episodes</h2>
          {episodes.length === 0 ? (
            <p className="empty">First episode soon.</p>
          ) : (
            <ol className="episodes">
              {episodes.map((ep) => (
                <li key={ep.number}>
                  <a href={ep.url}>
                    <span className="ep-n">{ep.number}</span>
                    <span className="ep-title">
                      {ep.title}
                      {ep.guests && <span className="ep-guests">with {ep.guests}</span>}
                    </span>
                    <time dateTime={ep.date}>{fmt.format(new Date(ep.date))}</time>
                  </a>
                </li>
              ))}
            </ol>
          )}
        </section>

        <section aria-labelledby="sub">
          <h2 id="sub">Listen</h2>
          <ul className="feeds">
            {feeds.map((f) => (
              <li key={f.label}>
                <a href={f.href}>{f.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <footer>
          <p className="motto">DECIDABILITY IS FOR COWARDS</p>
          <p className="credit">
            Presented by <a href="https://for-all.dev">Forall R&amp;D</a>
            <br />
            Contact at <a href="mailto:hello@for-all.dev">hello@for-all.dev</a>
          </p>
        </footer>
      </main>
    </>
  )
}

export default App
