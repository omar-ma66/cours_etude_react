export default function Form({
  status = 'success'
}) {
  if (status === 'success') {
    return <h1>C’est exact !</h1>
  }
  return (
    <>
      <h2>Quiz sur les villes</h2>
      <p>
        Dans quelle ville trouve-t-on une pancarte qui transforme l’air en eau potable ?
      </p>
      <form>
        <textarea />
        <br />
        <button>
          Envoyer
        </button>
      </form>
    </>
  )
}
