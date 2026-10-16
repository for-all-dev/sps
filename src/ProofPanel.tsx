import { useEffect, useState } from 'react'

const tactics = ['vibes']

const goals = [
  'P Q : State → Prop\nimpl : Program\n⊢ ⦃P⦄ impl ⦃Q⦄',
  null,
]

export function ProofPanel() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [step, setStep] = useState(reduced ? tactics.length : 0)

  useEffect(() => {
    if (step >= tactics.length) return
    const id = setTimeout(() => setStep((s) => s + 1), 1400)
    return () => clearTimeout(id)
  }, [step])

  const goal = goals[step]

  return (
    <figure className="proof" aria-label="A Hoare triple, P impl Q, proved by vibes">
      <pre className="proof-src">
        <span className="kw">theorem</span> ship_it : ⦃P⦄ impl ⦃Q⦄ := <span className="kw">by</span>
        {tactics.map((t, i) => (
          <span key={t} className={i < step ? 'tac on' : 'tac'}>
            {'\n  '}
            {t}
          </span>
        ))}
      </pre>
      <div className="proof-goal" aria-live="polite">
        {goal ? (
          <pre>{goal}</pre>
        ) : (
          <p className="qed">No goals</p>
        )}
      </div>
    </figure>
  )
}
