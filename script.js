const form = document.querySelector("#habits-form")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["02-01", "02-06", "02-03"],
  water: ["02-01", "02-02", "02-03", "02-04", "02-05", "02-06"],
  food: ["02-05"],
  journal: ["02-02", "02-06"],
  takePills: ["02-04"]
}

nlwSetup.setData(data)
nlwSetup.load()