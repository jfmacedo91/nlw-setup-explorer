const form = document.querySelector("#habits-form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-BR").slice(0, -5)
  if(nlwSetup.dayExists(today)) {
    alert("Dia já cadastrado! ⛔")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}